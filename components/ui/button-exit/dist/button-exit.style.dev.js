"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonWrapper = exports.Exit = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styles = require("styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  border-radius: 50%;\n  background-color: #ffffff;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Exit = _styled["default"].div(_templateObject());

exports.Exit = Exit;

var ButtonWrapper = _styled["default"].button(_templateObject2(), (0, _styles.getCurrentMarginStyle)('', "lg"));

exports.ButtonWrapper = ButtonWrapper;