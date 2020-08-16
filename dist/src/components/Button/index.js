"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    padding: 0.7rem 1.5rem;\n    text-decoration: none;\n    color: ", ";\n    background: ", ";\n    border: 0;\n    border-radius: 4px;\n    cursor: pointer;\n    outline: none;\n    transition: background-color 0.4s;\n    &:hover,\n    &:focus {\n        background: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Button component
 * @param props.textCol - Color of text in the button (optional)
 * @param props.bgCol - Color of the background in the button (optional)
 */
var Button = _styledComponents.default.a(_templateObject(), function (props) {
  return props.textCol ? props.textCol : '#f8f8f8';
}, function (props) {
  return props.bgCol ? props.bgCol : '#777';
}, function (props) {
  return props.bgCol ? (0, _polished.darken)(0.1, props.bgCol) : (0, _polished.darken)(0.1, '#777');
});

var _default = Button;
exports.default = _default;

//# sourceMappingURL=index.js.map