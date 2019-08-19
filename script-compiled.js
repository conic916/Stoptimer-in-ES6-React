"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function pad0(value) {
  var result = value.toString();

  if (result.length < 2) {
    result = "0" + result;
  }

  return result;
}

var StopWatchComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StopWatchComponent, _React$Component);

  function StopWatchComponent() {
    var _this;

    _classCallCheck(this, StopWatchComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StopWatchComponent).call(this));
    _this.state = {
      running: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
    _this.format = _this.format.bind(_assertThisInitialized(_this));
    _this.start = _this.start.bind(_assertThisInitialized(_this));
    _this.step = _this.step.bind(_assertThisInitialized(_this));
    _this.calculate = _this.calculate.bind(_assertThisInitialized(_this));
    _this.stop = _this.stop.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StopWatchComponent, [{
    key: "format",
    value: function format(times) {
      return "".concat(pad0(times.minutes), ":").concat(pad0(times.seconds), ":").concat(pad0(Math.floor(times.miliseconds)));
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      if (!this.state.running) {
        this.state.running = true;
        this.watch = setInterval(function () {
          _this2.step();
        }, 10);
      }
    }
  }, {
    key: "step",
    value: function step() {
      if (!this.state.running) return;
      this.calculate();
    }
  }, {
    key: "calculate",
    value: function calculate() {
      var miliseconds = this.state.miliseconds + 1,
          seconds = this.state.seconds,
          minutes = this.state.minutes;

      if (miliseconds >= 100) {
        seconds += 1;
        miliseconds = 0;
      }

      if (seconds == 60) {
        minutes += 1;
        seconds = 0;
        miliseconds = 0;
      }

      this.setState({
        minutes: minutes,
        seconds: seconds,
        miliseconds: miliseconds
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.setState({
        running: false
      });
      clearInterval(this.watch);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.start
      }, "Start"), React.createElement("button", {
        onClick: this.stop
      }, "Stop"), React.createElement("p", null, this.format({
        minutes: this.state.minutes,
        seconds: this.state.seconds,
        miliseconds: this.state.miliseconds
      })));
    }
  }]);

  return StopWatchComponent;
}(React.Component);

ReactDOM.render(React.createElement(StopWatchComponent, null), document.getElementById("stopWatchComp"));
