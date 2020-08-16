"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    padding: 0.7rem 1.5rem;\n    text-decoration: none;\n    color: #fff;\n    background: #26a69a;\n    border: 0;\n    border-radius: 4px;\n    cursor: pointer;\n    outline: none;\n    transition: background-color 0.4s;\n    &:hover,\n    &:focus {\n        background: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Btn = _styledComponents.default.a(_templateObject(), (0, _polished.darken)(0.2, '#26a69a'));

var Button = function Button(_ref) {
  var children = _ref.children,
      click = _ref.click;
  return /*#__PURE__*/_react.default.createElement(Btn, {
    onClick: click
  }, children);
};

var _default = Button;
exports.default = _default;

//# sourceMappingURL=index.js.map