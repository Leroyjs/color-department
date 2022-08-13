"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconMinus = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styles = require("styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 26px;\n  height: 26px;\n  transition: stroke 0.3s;\n  stroke: #ffffff;\n  position: absolute;\n  top: 10px;\n  cursor:pointer;\n  right: calc(50% - 26px);\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconMinus = _styled["default"].svg(_templateObject(), function (_ref) {
  var isOpen = _ref.isOpen,
      isActive = _ref.isActive,
      isError = _ref.isError;

  if (isOpen) {
    return {
      stroke: _styles.colors.white
    };
  } else if (isActive) {
    return {
      stroke: _styles.colors.yellow
    };
  } else if (isError) {
    return {
      stroke: _styles.colors.red
    };
  } else {
    return {
      stroke: _styles.colors.white
    };
  }
});

exports.IconMinus = IconMinus;