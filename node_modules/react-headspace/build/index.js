'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Headspace = function (_Component) {
  _inherits(Headspace, _Component);

  function Headspace() {
    _classCallCheck(this, Headspace);

    var _this = _possibleConstructorReturn(this, (Headspace.__proto__ || Object.getPrototypeOf(Headspace)).call(this));

    _this.previousScrollPosition = 0;
    _this.currentScrollPosition = 0;

    // the height of our header container
    _this.startOffset = 0;

    _this.isTicking = false;

    _this.state = {
      isHidden: false,
      isFixed: false
    };

    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.requestTick = _this.requestTick.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.isScrolledGreaterThanTolerance = _this.isScrolledGreaterThanTolerance.bind(_this);
    _this.isAtEndOfPage = _this.isAtEndOfPage.bind(_this);
    _this.resetHeader = _this.resetHeader.bind(_this);
    _this.hideHeader = _this.hideHeader.bind(_this);
    _this.fixHeader = _this.fixHeader.bind(_this);
    return _this;
  }

  _createClass(Headspace, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);

      this.startOffset = this.container.offsetHeight;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      this.currentScrollPosition = window.pageYOffset;

      this.requestTick();
    }
  }, {
    key: 'requestTick',
    value: function requestTick() {
      // https://www.html5rocks.com/en/tutorials/speed/animations/
      // Use requestAnimationFrame to throttle scroll events
      if (!this.isTicking) {
        requestAnimationFrame(this.update);
      }
      this.isTicking = true;
    }
  }, {
    key: 'update',
    value: function update() {
      this.isTicking = false;

      if (this.currentScrollPosition <= 0) {
        this.resetHeader();
      } else if (this.props.showAtBottom && this.isAtEndOfPage()) {
        this.fixHeader();
      } else if (this.isScrolledGreaterThanTolerance()) {
        var isScrollingDown = this.currentScrollPosition > this.previousScrollPosition;

        if (isScrollingDown) {
          this.hideHeader();
        } else {
          this.fixHeader();
        }
      }

      this.previousScrollPosition = this.currentScrollPosition;
    }
  }, {
    key: 'isScrolledGreaterThanTolerance',
    value: function isScrolledGreaterThanTolerance() {
      return this.currentScrollPosition > this.startOffset && Math.abs(this.currentScrollPosition - this.previousScrollPosition) >= this.props.scrollTolerance;
    }
  }, {
    key: 'isAtEndOfPage',
    value: function isAtEndOfPage() {
      return window.innerHeight + this.currentScrollPosition >= document.body.offsetHeight;
    }
  }, {
    key: 'resetHeader',
    value: function resetHeader() {
      this.setState({
        isHidden: false,
        isFixed: false
      });
    }
  }, {
    key: 'hideHeader',
    value: function hideHeader() {
      this.setState({ isHidden: true });
    }
  }, {
    key: 'fixHeader',
    value: function fixHeader() {
      this.setState({
        isFixed: true,
        isHidden: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var containerStyle = {
        position: this.state.isFixed ? 'fixed' : 'absolute',
        transform: this.state.isHidden ? 'translate3d(0, -' + this.startOffset + 'px, 0)' : 'translate3d(0, 0, 0)',
        top: 0,
        left: 0,
        right: 0,
        transition: 'transform 0.3s'
      };
      var placeholderStyle = {
        height: this.startOffset + 'px'
      };

      return _react2.default.createElement(
        'div',
        { style: placeholderStyle },
        _react2.default.createElement(
          'div',
          {
            ref: function ref(container) {
              _this2.container = container;
            },
            style: containerStyle
          },
          this.props.children
        )
      );
    }
  }]);

  return Headspace;
}(_react.Component);

Headspace.defaultProps = {
  scrollTolerance: 5,
  showAtBottom: true
};

Headspace.propTypes = {
  children: _propTypes2.default.node.isRequired,
  scrollTolerance: _propTypes2.default.number.isRequired,
  showAtBottom: _propTypes2.default.bool.isRequired
};

exports.default = Headspace;
