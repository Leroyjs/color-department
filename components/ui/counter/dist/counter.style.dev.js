"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.InputWrapper = exports.Error = exports.InputStyled = exports.IconPlus = exports.Underline = exports.UnderlineInner = void 0;

var _styles = require("styles");

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  color: ", ";\n  text-transform: uppercase;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  font-family: ", ";\n\n  ", "\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  ", ";\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  color: ", ";\n  text-transform: uppercase;\n  position: absolute;\n  top: calc(100% + 4px);\n  font-family: ", ";\n\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  color: ", ";\n  padding-left: 75%;\n  text-transform: uppercase;\n  font-family: ", ";\n  padding-top: 5px;\n  padding-bottom: 5px;\n\n  &:hover {\n    & + ", " ", " {\n      transform: scaleX(1);\n    }\n  }\n\n  ", "\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 26px;\n  height: 26px;\n  transition: stroke 0.3s;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  transform: scaleX(", ");\n  transform-origin: left;\n  background-color: ", ";\n  transition: transform 0.5s;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var errorConditionColor = function errorConditionColor(_ref) {
  var isError = _ref.isError;
  return isError ? "color:".concat(_styles.colors.red, ";") : "";
};

var errorConditionBackgroundColor = function errorConditionBackgroundColor(_ref2) {
  var isError = _ref2.isError;
  return isError ? "background-color: ".concat(_styles.colors.red, "; transform: scaleX(1);") : "";
};

var UnderlineInner = _styled["default"].div(_templateObject(), function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive ? 1 : 0;
}, _styles.colors.white, errorConditionBackgroundColor);

exports.UnderlineInner = UnderlineInner;

var Underline = _styled["default"].div(_templateObject2(), (0, _styles.hexToRGBA)(_styles.colors.white, 0.2));

exports.Underline = Underline;

var IconPlus = _styled["default"].svg(_templateObject3(), function (_ref4) {
  var isOpen = _ref4.isOpen,
      isActive = _ref4.isActive,
      isError = _ref4.isError;

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

exports.IconPlus = IconPlus;

var InputStyled = _styled["default"].input(_templateObject4(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.primary;
}, _styles.fontFamilies.mainFont, Underline, UnderlineInner, errorConditionColor, (0, _styles.getCurrentFontSizeStyle)("h3"));

exports.InputStyled = InputStyled;

var Error = _styled["default"].div(_templateObject5(), _styles.colors.red, _styles.fontFamilies.subFont, (0, _styles.getCurrentFontSizeStyle)("caption"));

exports.Error = Error;

var InputWrapper = _styled["default"].div(_templateObject6(), _styles.applyMargins, _styles.applyPaddings);

exports.InputWrapper = InputWrapper;

var Title = _styled["default"].div(_templateObject7(), _styles.colors.white, _styles.fontFamilies.mainFont, errorConditionColor, (0, _styles.getCurrentFontSizeStyle)("h3"));

exports.Title = Title;