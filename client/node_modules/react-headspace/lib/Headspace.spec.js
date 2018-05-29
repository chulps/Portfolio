import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Headspace from './Headspace';

// timer is needed to mock asynchronous nature of window.requestAnimationFrame
jest.useFakeTimers()

// Mock window events
const map = {};
window.addEventListener = jest.fn((type, cb) => {
  map[type] = cb;
});
window.removeEventListener = jest.fn(type => {
  map[type] = undefined;
});
window.requestAnimationFrame = jest.fn(cb => {
  window.setTimeout(cb, 0);
});
window.innerHeight = 200; // size of viewport

// window.document.body.offsetHeight is read-only
Object.defineProperty(window.document.body, 'offsetHeight', {
  value: 1000,
});

const defaultProps = {
  scrollTolerance: 10,
  showAtBottom: true,
  children: (<h1>Child</h1>),
};

describe('Event listeners', () => {
  it('should add scroll event listener on mount', () => {
    mount(
      <Headspace {...defaultProps} />
    );

    expect(window.addEventListener.mock.calls).toMatchSnapshot();
  });

  it('should remove scroll event listener on unmount', () => {
    const wrapper = mount(
      <Headspace {...defaultProps} />
    );
    wrapper.unmount();

    expect(window.removeEventListener).toHaveBeenCalledTimes(1);
    expect(window.removeEventListener.mock.calls).toMatchSnapshot();
  });
});

it('should render children correctly', () => {
  const wrapper = shallow(
    <Headspace {...defaultProps}>
      <h1>I am the header!</h1>
    </Headspace>
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});

describe('When scrolling', () => {
  it('should reset header when scrolling to the top of the page', () => {
    const wrapper = mount(
      <Headspace {...defaultProps} />
    );
    window.pageYOffset = 0;
    map.scroll();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  describe('When at end of page', () => {
    it('should fix header if showing at bottom', () => {
      const wrapper = mount(
        <Headspace
          {...defaultProps}
          showAtBottom
        />
      );
      /*
       * 800 (scroll position) + 200 (size of viewport)
       * >== 1000 (size of HTML content)
       */
      window.pageYOffset = 800;
      map.scroll();
      jest.runOnlyPendingTimers();

      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should not fix header if not showing at bottom', () => {
      const wrapper = mount(
        <Headspace
          {...defaultProps}
          showAtBottom={false}
        />
      );
      /*
       * 800 (scroll position) + 200 (size of viewport)
       * >== 1000 (size of HTML content)
       */
      window.pageYOffset = 800;
      map.scroll();
      jest.runOnlyPendingTimers();

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  it('should not do anything if scrolling less than tolerance', () => {
    const scrollTolerance = 42;
    const wrapper = mount(
      <Headspace
        {...defaultProps}
        scrollTolerance={scrollTolerance}
      />
    );

    window.pageYOffset = scrollTolerance - 2;
    map.scroll();
    jest.runOnlyPendingTimers();

    window.pageYOffset = window.pageYOffset + (scrollTolerance - 2);
    map.scroll();
    jest.runOnlyPendingTimers();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  describe('When scrolling greater than tolerance level', () => {
    it('should hide header if scrolling down', () => {
      const scrollTolerance = 42;
      const wrapper = mount(
        <Headspace
          {...defaultProps}
          scrollTolerance={scrollTolerance}
        />
      );

      window.pageYOffset = scrollTolerance + 2;
      map.scroll();
      jest.runOnlyPendingTimers();

      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should fix header if scrolling up', () => {
      const scrollTolerance = 42;
      const wrapper = mount(
        <Headspace
          {...defaultProps}
          scrollTolerance={scrollTolerance}
        />
      );
      window.pageYOffset = scrollTolerance + 100;
      map.scroll();
      jest.runOnlyPendingTimers();

      // scroll back up
      window.pageYOffset = window.pageYOffset - (scrollTolerance + 2);
      map.scroll();
      jest.runOnlyPendingTimers();

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});
