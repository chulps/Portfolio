[![Travis](https://img.shields.io/travis/newyork-anthonyng/react-headspace.svg)](https://travis-ci.org/newyork-anthonyng/react-headspace)
[![Codecov](https://img.shields.io/codecov/c/github/newyork-anthonyng/react-headspace.svg)](https://codecov.io/gh/newyork-anthonyng/react-headspace)

# react-headspace
An implementation of [headspace](https://github.com/gdub22/headspace), using React.

It is a `next generation web header` that displays when needed, as seen on websites such as [Medium](medium.com).

# Demo
See demo from the [headspace](https://github.com/gdub22/headspace) repository.

# Getting started
Install `react-headspace` into your project.
```shell
npm install --save react-headspace
```

To use, import it into your component and wrap it around your Header.
```jsx
import Headspace from 'react-headspace';

const MyAwesomeHeader = () => (
  <Headspace>
    <h1>I am in the header!</h1>
  </Headspace>
);
```

# API
| Property | Description | Default |
| --- | --- | --- |
| scrollTolerance | `number`: How many pixels we have to scroll before we show/hide the header | 5 |
| showAtBottom | `boolean`: Should we show the header when we are on the bottom of the webpage | true |
| children | `node`: Your header content that will be wrapped | none |
