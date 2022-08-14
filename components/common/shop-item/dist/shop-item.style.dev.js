"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductImage = exports.TextContainer = exports.ShopItemWrapper = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _components = require("components");

var _styles = require("styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 59%;\n  height: 59%;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-between;\n  color: ", ";\n  grid-auto-rows: 100px, auto  ;\n  cursor: pointer;\n  transition: 0.3s;\n  width:100%;\n  height:100%;\n  ", ";\n  ", "\n  /* padding: 32px 40px; */\n  ", "\n  ", "\n  span {\n    span {\n      color: ", ";\n    }\n  }\n  &:hover {\n    ", ";\n    transition:0.3s;\n    button {\n      ", ";\n      transition:0.3s;\n      &:hover {\n        transition:0.3s;\n        ", ";\n        border: 2px solid ", ";\n\n      }\n      div {\n        ", ";\n      }\n      h3 {\n        color: ", ";\n      }\n    }\n    span {\n      span {\n        color: ", ";\n      }\n    }\n    h3 {\n      span {\n        color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ShopItemWrapper = _styled["default"].div(_templateObject(), _styles.colors.red, function (_ref) {
  var theme = _ref.theme;
  return (0, _styles.getCurrentBackgroundColorStyles)("black", theme);
}, _styles.applyColor, (0, _styles.getCurrentPaddingStyle)("horizontal", "md1"), (0, _styles.getCurrentPaddingStyle)("vertical", "md"), function (_ref2) {
  var theme = _ref2.theme;
  return (0, _styles.getCurrentColor)("white", theme);
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _styles.getCurrentBackgroundColorStyles)("primary", theme);
}, function (_ref4) {
  var theme = _ref4.theme;
  return (0, _styles.getCurrentBackgroundColorStyles)("white", theme);
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _styles.getCurrentBackgroundColorStyles)("white", theme);
}, function (_ref6) {
  var theme = _ref6.theme;
  return (0, _styles.getCurrentColor)("white", theme);
}, function (_ref7) {
  var theme = _ref7.theme;
  return (0, _styles.getCurrentBackgroundColorStyles)("yellow", theme);
}, function (_ref8) {
  var theme = _ref8.theme;
  return (0, _styles.getCurrentColor)("white", theme);
}, function (_ref9) {
  var theme = _ref9.theme;
  return (0, _styles.getCurrentColor)("black", theme);
}, function (_ref10) {
  var theme = _ref10.theme;
  return (0, _styles.getCurrentColor)("white", theme);
}); // export const ProductName = styled.h3`
//   ${getCurrentColorStyles("white")};
//   ${getCurrentPaddingStyle("Top", "32px")};
//   text-transform: uppercase;
// `;
// export const ProductPrice = styled(H3)`
//   color: ${colors.primary};
//   align-items: flex-end;
// `;


exports.ShopItemWrapper = ShopItemWrapper;

var TextContainer = _styled["default"].div(_templateObject2());

exports.TextContainer = TextContainer;

var ProductImage = _styled["default"].div(_templateObject3(), (0, _styles.getCurrentBackgroundColorStyles)("white"));

exports.ProductImage = ProductImage;