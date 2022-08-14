"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShopSectionWrapper = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styles = require("styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: grid;\n  /* ", "; */\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 25vw);\n  align-items: start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ShopSectionWrapper = _styled["default"].div(_templateObject(), (0, _styles.getCurrentGridTemplateColumsStyle)());

exports.ShopSectionWrapper = ShopSectionWrapper;