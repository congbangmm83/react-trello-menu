"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _smoothDnd = _interopRequireWildcard(require("smooth-dnd"));

var _Draggable = _interopRequireDefault(require("./Draggable"));

_smoothDnd.default.dropHandler = _smoothDnd.dropHandlers.reactDropHandler().handler;

_smoothDnd.default.wrapChild = p => p; // dont wrap children they will already be wrapped


class Container extends _react.Component {
  constructor(props) {
    super(props);
    this.getContainerOptions = this.getContainerOptions.bind(this);
    this.setRef = this.setRef.bind(this);
    this.prevContainer = null;
  }

  componentDidMount() {
    this.containerDiv = this.containerDiv || _reactDom.default.findDOMNode(this);
    this.prevContainer = this.containerDiv;
    this.container = (0, _smoothDnd.default)(this.containerDiv, this.getContainerOptions(this.props));
  }

  componentWillUnmount() {
    this.container.dispose();
    this.container = null;
  }

  componentDidUpdate() {
    this.containerDiv = this.containerDiv || _reactDom.default.findDOMNode(this);

    if (this.containerDiv) {
      if (this.prevContainer && this.prevContainer !== this.containerDiv) {
        this.container.dispose();
        this.container = (0, _smoothDnd.default)(this.containerDiv, this.getContainerOptions(this.props));
        this.prevContainer = this.containerDiv;
      }
    }

    let x = document.getElementsByTagName("article");
    if (x.length < 1) return;

    for (var i = 0; i < x.length; i++) {
      x[i].parentElement.style.overflow = "visible";
    }
  }

  render() {
    if (this.props.render) {
      return this.props.render(this.setRef);
    } else {
      return _react.default.createElement("div", {
        style: this.props.style,
        ref: this.setRef
      }, this.props.children);
    }
  }

  setRef(element) {
    this.containerDiv = element;
  }

  getContainerOptions(props) {
    return Object.assign({}, props);
  }

}

Container.propTypes = {
  behaviour: _propTypes.default.oneOf(["move", "copy", "drag-zone"]),
  groupName: _propTypes.default.string,
  orientation: _propTypes.default.oneOf(["horizontal", "vertical"]),
  style: _propTypes.default.object,
  dragHandleSelector: _propTypes.default.string,
  nonDragAreaSelector: _propTypes.default.string,
  dragBeginDelay: _propTypes.default.number,
  animationDuration: _propTypes.default.number,
  autoScrollEnabled: _propTypes.default.string,
  lockAxis: _propTypes.default.string,
  dragClass: _propTypes.default.string,
  dropClass: _propTypes.default.string,
  onDragStart: _propTypes.default.func,
  onDragEnd: _propTypes.default.func,
  onDrop: _propTypes.default.func,
  getChildPayload: _propTypes.default.func,
  shouldAnimateDrop: _propTypes.default.func,
  shouldAcceptDrop: _propTypes.default.func,
  onDragEnter: _propTypes.default.func,
  onDragLeave: _propTypes.default.func,
  render: _propTypes.default.func
};
Container.defaultProps = {
  behaviour: 'move',
  orientation: 'vertical'
};
var _default = Container;
exports.default = _default;