/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Roboto-Regular.ttf */ "./Roboto-Regular.ttf"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0;\n  background-color: rgb(214, 209, 209);\n}\n\n@font-face {\n  font-family: "Roboto";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n#container {\n  background-color: white;\n  height: 4em;\n  border-bottom-left-radius: 1em;\n  border-bottom-right-radius: 1em;\n}\n.day {\n  font-family: Roboto;\n  color: rgb(85, 83, 83);\n}\n\n.dates {\n  font-size: 1em;\n  margin-top: 0.5em;\n  padding: 2px;\n}\n\n.days,\n.dates {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.Date {\n  background-color: white;\n  display: flex;\n  justify-content: start;\n}\n\n.theDate {\n  font-size: 1.5em;\n  font-weight: bold;\n  font-family: Roboto;\n  padding-left: 0.6em;\n}\n\n.addingButton {\n  display: flex;\n  justify-content: end;\n}\n\n.plusSign {\n  position: absolute;\n  bottom: 0;\n  margin: 0.4em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(to right, #6b2cf5, #d450e6);\n  color: white;\n  height: 1.1em;\n  width: 1.1em;\n  font-size: 2em;\n  border-radius: 50%;\n  border: none;\n}\n\n.box {\n  border-radius: 1em;\n  margin: 0.6em;\n  background-color: white;\n  min-height: 10em;\n  min-width: 21em;\n}\n\n.culoer {\n  height: 100vh;\n  width: 100vw;\n  background-color: green;\n}\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do_list/./src/style.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do_list/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/["\'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, "\\\\n"), "\\"");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do_list/./node_modules/css-loader/dist/runtime/getUrl.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addLeadingZeros)\n/* harmony export */ });\nfunction addLeadingZeros(number, targetLength) {\n  var sign = number < 0 ? '-' : '';\n  var output = Math.abs(number).toString();\n  while (output.length < targetLength) {\n    output = '0' + output;\n  }\n  return sign + output;\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/defaultLocale/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ \"./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js\");\n/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ \"./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js\");\n/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ \"./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js\");\n/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ \"./node_modules/date-fns/esm/_lib/getUTCWeek/index.js\");\n/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ \"./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js\");\n/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ \"./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js\");\n/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ \"./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js\");\n\n\n\n\n\n\n\nvar dayPeriodEnum = {\n  am: 'am',\n  pm: 'pm',\n  midnight: 'midnight',\n  noon: 'noon',\n  morning: 'morning',\n  afternoon: 'afternoon',\n  evening: 'evening',\n  night: 'night'\n};\n/*\n * |     | Unit                           |     | Unit                           |\n * |-----|--------------------------------|-----|--------------------------------|\n * |  a  | AM, PM                         |  A* | Milliseconds in day            |\n * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |\n * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |\n * |  d  | Day of month                   |  D  | Day of year                    |\n * |  e  | Local day of week              |  E  | Day of week                    |\n * |  f  |                                |  F* | Day of week in month           |\n * |  g* | Modified Julian day            |  G  | Era                            |\n * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |\n * |  i! | ISO day of week                |  I! | ISO week of year               |\n * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |\n * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |\n * |  l* | (deprecated)                   |  L  | Stand-alone month              |\n * |  m  | Minute                         |  M  | Month                          |\n * |  n  |                                |  N  |                                |\n * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |\n * |  p! | Long localized time            |  P! | Long localized date            |\n * |  q  | Stand-alone quarter            |  Q  | Quarter                        |\n * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |\n * |  s  | Second                         |  S  | Fraction of second             |\n * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |\n * |  u  | Extended year                  |  U* | Cyclic year                    |\n * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |\n * |  w  | Local week of year             |  W* | Week of month                  |\n * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |\n * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |\n * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |\n *\n * Letters marked by * are not implemented but reserved by Unicode standard.\n *\n * Letters marked by ! are non-standard, but implemented by date-fns:\n * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)\n * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,\n *   i.e. 7 for Sunday, 1 for Monday, etc.\n * - `I` is ISO week of year, as opposed to `w` which is local week of year.\n * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.\n *   `R` is supposed to be used in conjunction with `I` and `i`\n *   for universal ISO week-numbering date, whereas\n *   `Y` is supposed to be used in conjunction with `w` and `e`\n *   for week-numbering date specific to the locale.\n * - `P` is long localized date format\n * - `p` is long localized time format\n */\n\nvar formatters = {\n  // Era\n  G: function G(date, token, localize) {\n    var era = date.getUTCFullYear() > 0 ? 1 : 0;\n    switch (token) {\n      // AD, BC\n      case 'G':\n      case 'GG':\n      case 'GGG':\n        return localize.era(era, {\n          width: 'abbreviated'\n        });\n      // A, B\n      case 'GGGGG':\n        return localize.era(era, {\n          width: 'narrow'\n        });\n      // Anno Domini, Before Christ\n      case 'GGGG':\n      default:\n        return localize.era(era, {\n          width: 'wide'\n        });\n    }\n  },\n  // Year\n  y: function y(date, token, localize) {\n    // Ordinal number\n    if (token === 'yo') {\n      var signedYear = date.getUTCFullYear();\n      // Returns 1 for 1 BC (which is year 0 in JavaScript)\n      var year = signedYear > 0 ? signedYear : 1 - signedYear;\n      return localize.ordinalNumber(year, {\n        unit: 'year'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y(date, token);\n  },\n  // Local week-numbering year\n  Y: function Y(date, token, localize, options) {\n    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(date, options);\n    // Returns 1 for 1 BC (which is year 0 in JavaScript)\n    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;\n\n    // Two digit year\n    if (token === 'YY') {\n      var twoDigitYear = weekYear % 100;\n      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(twoDigitYear, 2);\n    }\n\n    // Ordinal number\n    if (token === 'Yo') {\n      return localize.ordinalNumber(weekYear, {\n        unit: 'year'\n      });\n    }\n\n    // Padding\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(weekYear, token.length);\n  },\n  // ISO week-numbering year\n  R: function R(date, token) {\n    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(date);\n\n    // Padding\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(isoWeekYear, token.length);\n  },\n  // Extended year. This is a single number designating the year of this calendar system.\n  // The main difference between `y` and `u` localizers are B.C. years:\n  // | Year | `y` | `u` |\n  // |------|-----|-----|\n  // | AC 1 |   1 |   1 |\n  // | BC 1 |   1 |   0 |\n  // | BC 2 |   2 |  -1 |\n  // Also `yy` always returns the last two digits of a year,\n  // while `uu` pads single digit years to 2 characters and returns other years unchanged.\n  u: function u(date, token) {\n    var year = date.getUTCFullYear();\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(year, token.length);\n  },\n  // Quarter\n  Q: function Q(date, token, localize) {\n    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);\n    switch (token) {\n      // 1, 2, 3, 4\n      case 'Q':\n        return String(quarter);\n      // 01, 02, 03, 04\n      case 'QQ':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(quarter, 2);\n      // 1st, 2nd, 3rd, 4th\n      case 'Qo':\n        return localize.ordinalNumber(quarter, {\n          unit: 'quarter'\n        });\n      // Q1, Q2, Q3, Q4\n      case 'QQQ':\n        return localize.quarter(quarter, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      // 1, 2, 3, 4 (narrow quarter; could be not numerical)\n      case 'QQQQQ':\n        return localize.quarter(quarter, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      // 1st quarter, 2nd quarter, ...\n      case 'QQQQ':\n      default:\n        return localize.quarter(quarter, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // Stand-alone quarter\n  q: function q(date, token, localize) {\n    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);\n    switch (token) {\n      // 1, 2, 3, 4\n      case 'q':\n        return String(quarter);\n      // 01, 02, 03, 04\n      case 'qq':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(quarter, 2);\n      // 1st, 2nd, 3rd, 4th\n      case 'qo':\n        return localize.ordinalNumber(quarter, {\n          unit: 'quarter'\n        });\n      // Q1, Q2, Q3, Q4\n      case 'qqq':\n        return localize.quarter(quarter, {\n          width: 'abbreviated',\n          context: 'standalone'\n        });\n      // 1, 2, 3, 4 (narrow quarter; could be not numerical)\n      case 'qqqqq':\n        return localize.quarter(quarter, {\n          width: 'narrow',\n          context: 'standalone'\n        });\n      // 1st quarter, 2nd quarter, ...\n      case 'qqqq':\n      default:\n        return localize.quarter(quarter, {\n          width: 'wide',\n          context: 'standalone'\n        });\n    }\n  },\n  // Month\n  M: function M(date, token, localize) {\n    var month = date.getUTCMonth();\n    switch (token) {\n      case 'M':\n      case 'MM':\n        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].M(date, token);\n      // 1st, 2nd, ..., 12th\n      case 'Mo':\n        return localize.ordinalNumber(month + 1, {\n          unit: 'month'\n        });\n      // Jan, Feb, ..., Dec\n      case 'MMM':\n        return localize.month(month, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      // J, F, ..., D\n      case 'MMMMM':\n        return localize.month(month, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      // January, February, ..., December\n      case 'MMMM':\n      default:\n        return localize.month(month, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // Stand-alone month\n  L: function L(date, token, localize) {\n    var month = date.getUTCMonth();\n    switch (token) {\n      // 1, 2, ..., 12\n      case 'L':\n        return String(month + 1);\n      // 01, 02, ..., 12\n      case 'LL':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(month + 1, 2);\n      // 1st, 2nd, ..., 12th\n      case 'Lo':\n        return localize.ordinalNumber(month + 1, {\n          unit: 'month'\n        });\n      // Jan, Feb, ..., Dec\n      case 'LLL':\n        return localize.month(month, {\n          width: 'abbreviated',\n          context: 'standalone'\n        });\n      // J, F, ..., D\n      case 'LLLLL':\n        return localize.month(month, {\n          width: 'narrow',\n          context: 'standalone'\n        });\n      // January, February, ..., December\n      case 'LLLL':\n      default:\n        return localize.month(month, {\n          width: 'wide',\n          context: 'standalone'\n        });\n    }\n  },\n  // Local week of year\n  w: function w(date, token, localize, options) {\n    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(date, options);\n    if (token === 'wo') {\n      return localize.ordinalNumber(week, {\n        unit: 'week'\n      });\n    }\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(week, token.length);\n  },\n  // ISO week of year\n  I: function I(date, token, localize) {\n    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(date);\n    if (token === 'Io') {\n      return localize.ordinalNumber(isoWeek, {\n        unit: 'week'\n      });\n    }\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(isoWeek, token.length);\n  },\n  // Day of the month\n  d: function d(date, token, localize) {\n    if (token === 'do') {\n      return localize.ordinalNumber(date.getUTCDate(), {\n        unit: 'date'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].d(date, token);\n  },\n  // Day of year\n  D: function D(date, token, localize) {\n    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(date);\n    if (token === 'Do') {\n      return localize.ordinalNumber(dayOfYear, {\n        unit: 'dayOfYear'\n      });\n    }\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dayOfYear, token.length);\n  },\n  // Day of week\n  E: function E(date, token, localize) {\n    var dayOfWeek = date.getUTCDay();\n    switch (token) {\n      // Tue\n      case 'E':\n      case 'EE':\n      case 'EEE':\n        return localize.day(dayOfWeek, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      // T\n      case 'EEEEE':\n        return localize.day(dayOfWeek, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      // Tu\n      case 'EEEEEE':\n        return localize.day(dayOfWeek, {\n          width: 'short',\n          context: 'formatting'\n        });\n      // Tuesday\n      case 'EEEE':\n      default:\n        return localize.day(dayOfWeek, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // Local day of week\n  e: function e(date, token, localize, options) {\n    var dayOfWeek = date.getUTCDay();\n    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;\n    switch (token) {\n      // Numerical value (Nth day of week with current locale or weekStartsOn)\n      case 'e':\n        return String(localDayOfWeek);\n      // Padded numerical value\n      case 'ee':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(localDayOfWeek, 2);\n      // 1st, 2nd, ..., 7th\n      case 'eo':\n        return localize.ordinalNumber(localDayOfWeek, {\n          unit: 'day'\n        });\n      case 'eee':\n        return localize.day(dayOfWeek, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      // T\n      case 'eeeee':\n        return localize.day(dayOfWeek, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      // Tu\n      case 'eeeeee':\n        return localize.day(dayOfWeek, {\n          width: 'short',\n          context: 'formatting'\n        });\n      // Tuesday\n      case 'eeee':\n      default:\n        return localize.day(dayOfWeek, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // Stand-alone local day of week\n  c: function c(date, token, localize, options) {\n    var dayOfWeek = date.getUTCDay();\n    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;\n    switch (token) {\n      // Numerical value (same as in `e`)\n      case 'c':\n        return String(localDayOfWeek);\n      // Padded numerical value\n      case 'cc':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(localDayOfWeek, token.length);\n      // 1st, 2nd, ..., 7th\n      case 'co':\n        return localize.ordinalNumber(localDayOfWeek, {\n          unit: 'day'\n        });\n      case 'ccc':\n        return localize.day(dayOfWeek, {\n          width: 'abbreviated',\n          context: 'standalone'\n        });\n      // T\n      case 'ccccc':\n        return localize.day(dayOfWeek, {\n          width: 'narrow',\n          context: 'standalone'\n        });\n      // Tu\n      case 'cccccc':\n        return localize.day(dayOfWeek, {\n          width: 'short',\n          context: 'standalone'\n        });\n      // Tuesday\n      case 'cccc':\n      default:\n        return localize.day(dayOfWeek, {\n          width: 'wide',\n          context: 'standalone'\n        });\n    }\n  },\n  // ISO day of week\n  i: function i(date, token, localize) {\n    var dayOfWeek = date.getUTCDay();\n    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;\n    switch (token) {\n      // 2\n      case 'i':\n        return String(isoDayOfWeek);\n      // 02\n      case 'ii':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(isoDayOfWeek, token.length);\n      // 2nd\n      case 'io':\n        return localize.ordinalNumber(isoDayOfWeek, {\n          unit: 'day'\n        });\n      // Tue\n      case 'iii':\n        return localize.day(dayOfWeek, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      // T\n      case 'iiiii':\n        return localize.day(dayOfWeek, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      // Tu\n      case 'iiiiii':\n        return localize.day(dayOfWeek, {\n          width: 'short',\n          context: 'formatting'\n        });\n      // Tuesday\n      case 'iiii':\n      default:\n        return localize.day(dayOfWeek, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // AM or PM\n  a: function a(date, token, localize) {\n    var hours = date.getUTCHours();\n    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';\n    switch (token) {\n      case 'a':\n      case 'aa':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      case 'aaa':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'abbreviated',\n          context: 'formatting'\n        }).toLowerCase();\n      case 'aaaaa':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      case 'aaaa':\n      default:\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // AM, PM, midnight, noon\n  b: function b(date, token, localize) {\n    var hours = date.getUTCHours();\n    var dayPeriodEnumValue;\n    if (hours === 12) {\n      dayPeriodEnumValue = dayPeriodEnum.noon;\n    } else if (hours === 0) {\n      dayPeriodEnumValue = dayPeriodEnum.midnight;\n    } else {\n      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';\n    }\n    switch (token) {\n      case 'b':\n      case 'bb':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      case 'bbb':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'abbreviated',\n          context: 'formatting'\n        }).toLowerCase();\n      case 'bbbbb':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      case 'bbbb':\n      default:\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // in the morning, in the afternoon, in the evening, at night\n  B: function B(date, token, localize) {\n    var hours = date.getUTCHours();\n    var dayPeriodEnumValue;\n    if (hours >= 17) {\n      dayPeriodEnumValue = dayPeriodEnum.evening;\n    } else if (hours >= 12) {\n      dayPeriodEnumValue = dayPeriodEnum.afternoon;\n    } else if (hours >= 4) {\n      dayPeriodEnumValue = dayPeriodEnum.morning;\n    } else {\n      dayPeriodEnumValue = dayPeriodEnum.night;\n    }\n    switch (token) {\n      case 'B':\n      case 'BB':\n      case 'BBB':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      case 'BBBBB':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      case 'BBBB':\n      default:\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // Hour [1-12]\n  h: function h(date, token, localize) {\n    if (token === 'ho') {\n      var hours = date.getUTCHours() % 12;\n      if (hours === 0) hours = 12;\n      return localize.ordinalNumber(hours, {\n        unit: 'hour'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h(date, token);\n  },\n  // Hour [0-23]\n  H: function H(date, token, localize) {\n    if (token === 'Ho') {\n      return localize.ordinalNumber(date.getUTCHours(), {\n        unit: 'hour'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].H(date, token);\n  },\n  // Hour [0-11]\n  K: function K(date, token, localize) {\n    var hours = date.getUTCHours() % 12;\n    if (token === 'Ko') {\n      return localize.ordinalNumber(hours, {\n        unit: 'hour'\n      });\n    }\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(hours, token.length);\n  },\n  // Hour [1-24]\n  k: function k(date, token, localize) {\n    var hours = date.getUTCHours();\n    if (hours === 0) hours = 24;\n    if (token === 'ko') {\n      return localize.ordinalNumber(hours, {\n        unit: 'hour'\n      });\n    }\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(hours, token.length);\n  },\n  // Minute\n  m: function m(date, token, localize) {\n    if (token === 'mo') {\n      return localize.ordinalNumber(date.getUTCMinutes(), {\n        unit: 'minute'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].m(date, token);\n  },\n  // Second\n  s: function s(date, token, localize) {\n    if (token === 'so') {\n      return localize.ordinalNumber(date.getUTCSeconds(), {\n        unit: 'second'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].s(date, token);\n  },\n  // Fraction of second\n  S: function S(date, token) {\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].S(date, token);\n  },\n  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)\n  X: function X(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timezoneOffset = originalDate.getTimezoneOffset();\n    if (timezoneOffset === 0) {\n      return 'Z';\n    }\n    switch (token) {\n      // Hours and optional minutes\n      case 'X':\n        return formatTimezoneWithOptionalMinutes(timezoneOffset);\n\n      // Hours, minutes and optional seconds without `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `XX`\n      case 'XXXX':\n      case 'XX':\n        // Hours and minutes without `:` delimiter\n        return formatTimezone(timezoneOffset);\n\n      // Hours, minutes and optional seconds with `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `XXX`\n      case 'XXXXX':\n      case 'XXX': // Hours and minutes with `:` delimiter\n      default:\n        return formatTimezone(timezoneOffset, ':');\n    }\n  },\n  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)\n  x: function x(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timezoneOffset = originalDate.getTimezoneOffset();\n    switch (token) {\n      // Hours and optional minutes\n      case 'x':\n        return formatTimezoneWithOptionalMinutes(timezoneOffset);\n\n      // Hours, minutes and optional seconds without `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `xx`\n      case 'xxxx':\n      case 'xx':\n        // Hours and minutes without `:` delimiter\n        return formatTimezone(timezoneOffset);\n\n      // Hours, minutes and optional seconds with `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `xxx`\n      case 'xxxxx':\n      case 'xxx': // Hours and minutes with `:` delimiter\n      default:\n        return formatTimezone(timezoneOffset, ':');\n    }\n  },\n  // Timezone (GMT)\n  O: function O(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timezoneOffset = originalDate.getTimezoneOffset();\n    switch (token) {\n      // Short\n      case 'O':\n      case 'OO':\n      case 'OOO':\n        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');\n      // Long\n      case 'OOOO':\n      default:\n        return 'GMT' + formatTimezone(timezoneOffset, ':');\n    }\n  },\n  // Timezone (specific non-location)\n  z: function z(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timezoneOffset = originalDate.getTimezoneOffset();\n    switch (token) {\n      // Short\n      case 'z':\n      case 'zz':\n      case 'zzz':\n        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');\n      // Long\n      case 'zzzz':\n      default:\n        return 'GMT' + formatTimezone(timezoneOffset, ':');\n    }\n  },\n  // Seconds timestamp\n  t: function t(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timestamp = Math.floor(originalDate.getTime() / 1000);\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(timestamp, token.length);\n  },\n  // Milliseconds timestamp\n  T: function T(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timestamp = originalDate.getTime();\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(timestamp, token.length);\n  }\n};\nfunction formatTimezoneShort(offset, dirtyDelimiter) {\n  var sign = offset > 0 ? '-' : '+';\n  var absOffset = Math.abs(offset);\n  var hours = Math.floor(absOffset / 60);\n  var minutes = absOffset % 60;\n  if (minutes === 0) {\n    return sign + String(hours);\n  }\n  var delimiter = dirtyDelimiter || '';\n  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(minutes, 2);\n}\nfunction formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {\n  if (offset % 60 === 0) {\n    var sign = offset > 0 ? '-' : '+';\n    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Math.abs(offset) / 60, 2);\n  }\n  return formatTimezone(offset, dirtyDelimiter);\n}\nfunction formatTimezone(offset, dirtyDelimiter) {\n  var delimiter = dirtyDelimiter || '';\n  var sign = offset > 0 ? '-' : '+';\n  var absOffset = Math.abs(offset);\n  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Math.floor(absOffset / 60), 2);\n  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(absOffset % 60, 2);\n  return sign + hours + delimiter + minutes;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/format/formatters/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
      /*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ \"./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js\");\n\n/*\n * |     | Unit                           |     | Unit                           |\n * |-----|--------------------------------|-----|--------------------------------|\n * |  a  | AM, PM                         |  A* |                                |\n * |  d  | Day of month                   |  D  |                                |\n * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |\n * |  m  | Minute                         |  M  | Month                          |\n * |  s  | Second                         |  S  | Fraction of second             |\n * |  y  | Year (abs)                     |  Y  |                                |\n *\n * Letters marked by * are not implemented but reserved by Unicode standard.\n */\nvar formatters = {\n  // Year\n  y: function y(date, token) {\n    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens\n    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |\n    // |----------|-------|----|-------|-------|-------|\n    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |\n    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |\n    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |\n    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |\n    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |\n\n    var signedYear = date.getUTCFullYear();\n    // Returns 1 for 1 BC (which is year 0 in JavaScript)\n    var year = signedYear > 0 ? signedYear : 1 - signedYear;\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(token === 'yy' ? year % 100 : year, token.length);\n  },\n  // Month\n  M: function M(date, token) {\n    var month = date.getUTCMonth();\n    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(month + 1, 2);\n  },\n  // Day of the month\n  d: function d(date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCDate(), token.length);\n  },\n  // AM or PM\n  a: function a(date, token) {\n    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';\n    switch (token) {\n      case 'a':\n      case 'aa':\n        return dayPeriodEnumValue.toUpperCase();\n      case 'aaa':\n        return dayPeriodEnumValue;\n      case 'aaaaa':\n        return dayPeriodEnumValue[0];\n      case 'aaaa':\n      default:\n        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';\n    }\n  },\n  // Hour [1-12]\n  h: function h(date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCHours() % 12 || 12, token.length);\n  },\n  // Hour [0-23]\n  H: function H(date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCHours(), token.length);\n  },\n  // Minute\n  m: function m(date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCMinutes(), token.length);\n  },\n  // Second\n  s: function s(date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCSeconds(), token.length);\n  },\n  // Fraction of second\n  S: function S(date, token) {\n    var numberOfDigits = token.length;\n    var milliseconds = date.getUTCMilliseconds();\n    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fractionalSeconds, token.length);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar dateLongFormatter = function dateLongFormatter(pattern, formatLong) {\n  switch (pattern) {\n    case 'P':\n      return formatLong.date({\n        width: 'short'\n      });\n    case 'PP':\n      return formatLong.date({\n        width: 'medium'\n      });\n    case 'PPP':\n      return formatLong.date({\n        width: 'long'\n      });\n    case 'PPPP':\n    default:\n      return formatLong.date({\n        width: 'full'\n      });\n  }\n};\nvar timeLongFormatter = function timeLongFormatter(pattern, formatLong) {\n  switch (pattern) {\n    case 'p':\n      return formatLong.time({\n        width: 'short'\n      });\n    case 'pp':\n      return formatLong.time({\n        width: 'medium'\n      });\n    case 'ppp':\n      return formatLong.time({\n        width: 'long'\n      });\n    case 'pppp':\n    default:\n      return formatLong.time({\n        width: 'full'\n      });\n  }\n};\nvar dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {\n  var matchResult = pattern.match(/(P+)(p+)?/) || [];\n  var datePattern = matchResult[1];\n  var timePattern = matchResult[2];\n  if (!timePattern) {\n    return dateLongFormatter(pattern, formatLong);\n  }\n  var dateTimeFormat;\n  switch (datePattern) {\n    case 'P':\n      dateTimeFormat = formatLong.dateTime({\n        width: 'short'\n      });\n      break;\n    case 'PP':\n      dateTimeFormat = formatLong.dateTime({\n        width: 'medium'\n      });\n      break;\n    case 'PPP':\n      dateTimeFormat = formatLong.dateTime({\n        width: 'long'\n      });\n      break;\n    case 'PPPP':\n    default:\n      dateTimeFormat = formatLong.dateTime({\n        width: 'full'\n      });\n      break;\n  }\n  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));\n};\nvar longFormatters = {\n  p: timeLongFormatter,\n  P: dateTimeLongFormatter\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/format/longFormatters/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));\n  utcDate.setUTCFullYear(date.getFullYear());\n  return date.getTime() - utcDate.getTime();\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\nvar MILLISECONDS_IN_DAY = 86400000;\nfunction getUTCDayOfYear(dirtyDate) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var timestamp = date.getTime();\n  date.setUTCMonth(0, 1);\n  date.setUTCHours(0, 0, 0, 0);\n  var startOfYearTimestamp = date.getTime();\n  var difference = timestamp - startOfYearTimestamp;\n  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");\n/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\n\nvar MILLISECONDS_IN_WEEK = 604800000;\nfunction getUTCISOWeek(dirtyDate) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();\n\n  // Round the number of days to the nearest integer\n  // because the number of milliseconds in a week is not constant\n  // (e.g. it\'s different in the week of the daylight saving time clock shift)\n  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");\n\n\n\nfunction getUTCISOWeekYear(dirtyDate) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var year = date.getUTCFullYear();\n  var fourthOfJanuaryOfNextYear = new Date(0);\n  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);\n  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);\n  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);\n  var fourthOfJanuaryOfThisYear = new Date(0);\n  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);\n  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);\n  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);\n  if (date.getTime() >= startOfNextYear.getTime()) {\n    return year + 1;\n  } else if (date.getTime() >= startOfThisYear.getTime()) {\n    return year;\n  } else {\n    return year - 1;\n  }\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getUTCWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");\n/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\n\nvar MILLISECONDS_IN_WEEK = 604800000;\nfunction getUTCWeek(dirtyDate, options) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();\n\n  // Round the number of days to the nearest integer\n  // because the number of milliseconds in a week is not constant\n  // (e.g. it\'s different in the week of the daylight saving time clock shift)\n  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/getUTCWeek/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");\n/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");\n\n\n\n\n\nfunction getUTCWeekYear(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var year = date.getUTCFullYear();\n  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();\n  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);\n\n  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN\n  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {\n    throw new RangeError(\'firstWeekContainsDate must be between 1 and 7 inclusively\');\n  }\n  var firstWeekOfNextYear = new Date(0);\n  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);\n  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);\n  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);\n  var firstWeekOfThisYear = new Date(0);\n  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);\n  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);\n  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);\n  if (date.getTime() >= startOfNextYear.getTime()) {\n    return year + 1;\n  } else if (date.getTime() >= startOfThisYear.getTime()) {\n    return year;\n  } else {\n    return year - 1;\n  }\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),\n/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),\n/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)\n/* harmony export */ });\nvar protectedDayOfYearTokens = [\'D\', \'DD\'];\nvar protectedWeekYearTokens = [\'YY\', \'YYYY\'];\nfunction isProtectedDayOfYearToken(token) {\n  return protectedDayOfYearTokens.indexOf(token) !== -1;\n}\nfunction isProtectedWeekYearToken(token) {\n  return protectedWeekYearTokens.indexOf(token) !== -1;\n}\nfunction throwProtectedError(token, format, input) {\n  if (token === \'YYYY\') {\n    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));\n  } else if (token === \'YY\') {\n    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));\n  } else if (token === \'D\') {\n    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));\n  } else if (token === \'DD\') {\n    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));\n  }\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/protectedTokens/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
      /*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\nfunction startOfUTCISOWeek(dirtyDate) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var weekStartsOn = 1;\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var day = date.getUTCDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setUTCDate(date.getUTCDate() - diff);\n  date.setUTCHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)\n/* harmony export */ });\n/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");\n/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\nfunction startOfUTCISOWeekYear(dirtyDate) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var fourthOfJanuary = new Date(0);\n  fourthOfJanuary.setUTCFullYear(year, 0, 4);\n  fourthOfJanuary.setUTCHours(0, 0, 0, 0);\n  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);\n  return date;\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");\n\n\n\n\nfunction startOfUTCWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);\n\n  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError(\'weekStartsOn must be between 0 and 6 inclusively\');\n  }\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);\n  var day = date.getUTCDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setUTCDate(date.getUTCDate() - diff);\n  date.setUTCHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)\n/* harmony export */ });\n/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");\n/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");\n\n\n\n\n\nfunction startOfUTCWeekYear(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);\n  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);\n  var firstWeek = new Date(0);\n  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);\n  firstWeek.setUTCHours(0, 0, 0, 0);\n  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);\n  return date;\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n  var number = Number(dirtyNumber);\n  if (isNaN(number)) {\n    return number;\n  }\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/_lib/toInteger/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/addDays/index.js":
      /*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ addDays)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} - the new date with the days added\n * @throws {TypeError} - 2 arguments required\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\nfunction addDays(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);\n  if (isNaN(amount)) {\n    return new Date(NaN);\n  }\n  if (!amount) {\n    // If 0 days, no-op to avoid changing times in the hour before end of DST\n    return date;\n  }\n  date.setDate(date.getDate() + amount);\n  return date;\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/addDays/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ addMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\n/**\n * @name addMilliseconds\n * @category Millisecond Helpers\n * @summary Add the specified number of milliseconds to the given date.\n *\n * @description\n * Add the specified number of milliseconds to the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the milliseconds added\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Add 750 milliseconds to 10 July 2014 12:45:30.000:\n * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)\n * //=> Thu Jul 10 2014 12:45:30.750\n */\nfunction addMilliseconds(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);\n  return new Date(timestamp + amount);\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/addMilliseconds/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/format/index.js":
      /*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ format)\n/* harmony export */ });\n/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ \"./node_modules/date-fns/esm/isValid/index.js\");\n/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ \"./node_modules/date-fns/esm/subMilliseconds/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ \"./node_modules/date-fns/esm/_lib/format/formatters/index.js\");\n/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ \"./node_modules/date-fns/esm/_lib/format/longFormatters/index.js\");\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ \"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js\");\n/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ \"./node_modules/date-fns/esm/_lib/protectedTokens/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ \"./node_modules/date-fns/esm/_lib/defaultLocale/index.js\");\n\n\n\n\n\n\n\n\n\n\n // This RegExp consists of three parts separated by `|`:\n// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token\n//   (one of the certain letters followed by `o`)\n// - (\\w)\\1* matches any sequences of the same letter\n// - '' matches two quote characters in a row\n// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),\n//   except a single quote symbol, which ends the sequence.\n//   Two quote characters do not end the sequence.\n//   If there is no matching single quote\n//   then the sequence will continue until the end of the string.\n// - . matches any single character unmatched by previous parts of the RegExps\nvar formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\\w)\\1*|''|'(''|[^'])+('|$)|./g;\n\n// This RegExp catches symbols escaped by quotes, and also\n// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`\nvar longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;\nvar escapedStringRegExp = /^'([^]*?)'?$/;\nvar doubleQuoteRegExp = /''/g;\nvar unescapedLatinCharacterRegExp = /[a-zA-Z]/;\n\n/**\n * @name format\n * @category Common Helpers\n * @summary Format the date.\n *\n * @description\n * Return the formatted date string in the given format. The result may vary by locale.\n *\n * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.\n * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n *\n * The characters wrapped between two single quotes characters (') are escaped.\n * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.\n * (see the last example)\n *\n * Format of the string is based on Unicode Technical Standard #35:\n * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table\n * with a few additions (see note 7 below the table).\n *\n * Accepted patterns:\n * | Unit                            | Pattern | Result examples                   | Notes |\n * |---------------------------------|---------|-----------------------------------|-------|\n * | Era                             | G..GGG  | AD, BC                            |       |\n * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |\n * |                                 | GGGGG   | A, B                              |       |\n * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |\n * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |\n * |                                 | yy      | 44, 01, 00, 17                    | 5     |\n * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |\n * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |\n * |                                 | yyyyy   | ...                               | 3,5   |\n * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |\n * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |\n * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |\n * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |\n * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |\n * |                                 | YYYYY   | ...                               | 3,5   |\n * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |\n * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |\n * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |\n * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |\n * |                                 | RRRRR   | ...                               | 3,5,7 |\n * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |\n * |                                 | uu      | -43, 01, 1900, 2017               | 5     |\n * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |\n * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |\n * |                                 | uuuuu   | ...                               | 3,5   |\n * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |\n * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |\n * |                                 | QQ      | 01, 02, 03, 04                    |       |\n * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |\n * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |\n * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |\n * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |\n * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |\n * |                                 | qq      | 01, 02, 03, 04                    |       |\n * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |\n * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |\n * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |\n * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |\n * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |\n * |                                 | MM      | 01, 02, ..., 12                   |       |\n * |                                 | MMM     | Jan, Feb, ..., Dec                |       |\n * |                                 | MMMM    | January, February, ..., December  | 2     |\n * |                                 | MMMMM   | J, F, ..., D                      |       |\n * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |\n * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |\n * |                                 | LL      | 01, 02, ..., 12                   |       |\n * |                                 | LLL     | Jan, Feb, ..., Dec                |       |\n * |                                 | LLLL    | January, February, ..., December  | 2     |\n * |                                 | LLLLL   | J, F, ..., D                      |       |\n * | Local week of year              | w       | 1, 2, ..., 53                     |       |\n * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |\n * |                                 | ww      | 01, 02, ..., 53                   |       |\n * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |\n * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |\n * |                                 | II      | 01, 02, ..., 53                   | 7     |\n * | Day of month                    | d       | 1, 2, ..., 31                     |       |\n * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |\n * |                                 | dd      | 01, 02, ..., 31                   |       |\n * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |\n * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |\n * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |\n * |                                 | DDD     | 001, 002, ..., 365, 366           |       |\n * |                                 | DDDD    | ...                               | 3     |\n * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |\n * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |\n * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |\n * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |\n * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |\n * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |\n * |                                 | ii      | 01, 02, ..., 07                   | 7     |\n * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |\n * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |\n * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |\n * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |\n * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |\n * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |\n * |                                 | ee      | 02, 03, ..., 01                   |       |\n * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |\n * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |\n * |                                 | eeeee   | M, T, W, T, F, S, S               |       |\n * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |\n * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |\n * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |\n * |                                 | cc      | 02, 03, ..., 01                   |       |\n * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |\n * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |\n * |                                 | ccccc   | M, T, W, T, F, S, S               |       |\n * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |\n * | AM, PM                          | a..aa   | AM, PM                            |       |\n * |                                 | aaa     | am, pm                            |       |\n * |                                 | aaaa    | a.m., p.m.                        | 2     |\n * |                                 | aaaaa   | a, p                              |       |\n * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |\n * |                                 | bbb     | am, pm, noon, midnight            |       |\n * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |\n * |                                 | bbbbb   | a, p, n, mi                       |       |\n * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |\n * |                                 | BBBB    | at night, in the morning, ...     | 2     |\n * |                                 | BBBBB   | at night, in the morning, ...     |       |\n * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |\n * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |\n * |                                 | hh      | 01, 02, ..., 11, 12               |       |\n * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |\n * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |\n * |                                 | HH      | 00, 01, 02, ..., 23               |       |\n * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |\n * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |\n * |                                 | KK      | 01, 02, ..., 11, 00               |       |\n * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |\n * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |\n * |                                 | kk      | 24, 01, 02, ..., 23               |       |\n * | Minute                          | m       | 0, 1, ..., 59                     |       |\n * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |\n * |                                 | mm      | 00, 01, ..., 59                   |       |\n * | Second                          | s       | 0, 1, ..., 59                     |       |\n * |                                 | so      | 0th, 1st, ..., 59th               | 7     |\n * |                                 | ss      | 00, 01, ..., 59                   |       |\n * | Fraction of second              | S       | 0, 1, ..., 9                      |       |\n * |                                 | SS      | 00, 01, ..., 99                   |       |\n * |                                 | SSS     | 000, 001, ..., 999                |       |\n * |                                 | SSSS    | ...                               | 3     |\n * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |\n * |                                 | XX      | -0800, +0530, Z                   |       |\n * |                                 | XXX     | -08:00, +05:30, Z                 |       |\n * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |\n * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |\n * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |\n * |                                 | xx      | -0800, +0530, +0000               |       |\n * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |\n * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |\n * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |\n * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |\n * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |\n * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |\n * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |\n * | Seconds timestamp               | t       | 512969520                         | 7     |\n * |                                 | tt      | ...                               | 3,7   |\n * | Milliseconds timestamp          | T       | 512969520900                      | 7     |\n * |                                 | TT      | ...                               | 3,7   |\n * | Long localized date             | P       | 04/29/1453                        | 7     |\n * |                                 | PP      | Apr 29, 1453                      | 7     |\n * |                                 | PPP     | April 29th, 1453                  | 7     |\n * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |\n * | Long localized time             | p       | 12:00 AM                          | 7     |\n * |                                 | pp      | 12:00:00 AM                       | 7     |\n * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |\n * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |\n * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |\n * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |\n * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |\n * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |\n * Notes:\n * 1. \"Formatting\" units (e.g. formatting quarter) in the default en-US locale\n *    are the same as \"stand-alone\" units, but are different in some languages.\n *    \"Formatting\" units are declined according to the rules of the language\n *    in the context of a date. \"Stand-alone\" units are always nominative singular:\n *\n *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`\n *\n *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`\n *\n * 2. Any sequence of the identical letters is a pattern, unless it is escaped by\n *    the single quote characters (see below).\n *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)\n *    the output will be the same as default pattern for this unit, usually\n *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units\n *    are marked with \"2\" in the last column of the table.\n *\n *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`\n *\n * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).\n *    The output will be padded with zeros to match the length of the pattern.\n *\n *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`\n *\n * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.\n *    These tokens represent the shortest form of the quarter.\n *\n * 5. The main difference between `y` and `u` patterns are B.C. years:\n *\n *    | Year | `y` | `u` |\n *    |------|-----|-----|\n *    | AC 1 |   1 |   1 |\n *    | BC 1 |   1 |   0 |\n *    | BC 2 |   2 |  -1 |\n *\n *    Also `yy` always returns the last two digits of a year,\n *    while `uu` pads single digit years to 2 characters and returns other years unchanged:\n *\n *    | Year | `yy` | `uu` |\n *    |------|------|------|\n *    | 1    |   01 |   01 |\n *    | 14   |   14 |   14 |\n *    | 376  |   76 |  376 |\n *    | 1453 |   53 | 1453 |\n *\n *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),\n *    except local week-numbering years are dependent on `options.weekStartsOn`\n *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}\n *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).\n *\n * 6. Specific non-location timezones are currently unavailable in `date-fns`,\n *    so right now these tokens fall back to GMT timezones.\n *\n * 7. These patterns are not in the Unicode Technical Standard #35:\n *    - `i`: ISO day of week\n *    - `I`: ISO week of year\n *    - `R`: ISO week-numbering year\n *    - `t`: seconds timestamp\n *    - `T`: milliseconds timestamp\n *    - `o`: ordinal number modifier\n *    - `P`: long localized date\n *    - `p`: long localized time\n *\n * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.\n *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n *\n * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.\n *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n *\n * @param {Date|Number} date - the original date\n * @param {String} format - the string of tokens\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is\n * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;\n *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;\n *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @returns {String} the formatted date string\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `date` must not be Invalid Date\n * @throws {RangeError} `options.locale` must contain `localize` property\n * @throws {RangeError} `options.locale` must contain `formatLong` property\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7\n * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws {RangeError} format string contains an unescaped latin alphabet character\n *\n * @example\n * // Represent 11 February 2014 in middle-endian format:\n * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')\n * //=> '02/11/2014'\n *\n * @example\n * // Represent 2 July 2014 in Esperanto:\n * import { eoLocale } from 'date-fns/locale/eo'\n * const result = format(new Date(2014, 6, 2), \"do 'de' MMMM yyyy\", {\n *   locale: eoLocale\n * })\n * //=> '2-a de julio 2014'\n *\n * @example\n * // Escape string by single quote characters:\n * const result = format(new Date(2014, 6, 2, 15), \"h 'o''clock'\")\n * //=> \"3 o'clock\"\n */\n\nfunction format(dirtyDate, dirtyFormatStr, options) {\n  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var formatStr = String(dirtyFormatStr);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);\n\n  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN\n  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {\n    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');\n  }\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);\n\n  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n  if (!locale.localize) {\n    throw new RangeError('locale must contain localize property');\n  }\n  if (!locale.formatLong) {\n    throw new RangeError('locale must contain formatLong property');\n  }\n  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dirtyDate);\n  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(originalDate)) {\n    throw new RangeError('Invalid time value');\n  }\n\n  // Convert the date in system timezone to the same date in UTC+00:00 timezone.\n  // This ensures that when UTC functions will be implemented, locales will be compatible with them.\n  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376\n  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(originalDate);\n  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(originalDate, timezoneOffset);\n  var formatterOptions = {\n    firstWeekContainsDate: firstWeekContainsDate,\n    weekStartsOn: weekStartsOn,\n    locale: locale,\n    _originalDate: originalDate\n  };\n  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {\n    var firstCharacter = substring[0];\n    if (firstCharacter === 'p' || firstCharacter === 'P') {\n      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"][firstCharacter];\n      return longFormatter(substring, locale.formatLong);\n    }\n    return substring;\n  }).join('').match(formattingTokensRegExp).map(function (substring) {\n    // Replace two single quote characters with one single quote character\n    if (substring === \"''\") {\n      return \"'\";\n    }\n    var firstCharacter = substring[0];\n    if (firstCharacter === \"'\") {\n      return cleanEscapedString(substring);\n    }\n    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"][firstCharacter];\n    if (formatter) {\n      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {\n        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));\n      }\n      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {\n        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));\n      }\n      return formatter(utcDate, substring, locale.localize, formatterOptions);\n    }\n    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {\n      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');\n    }\n    return substring;\n  }).join('');\n  return result;\n}\nfunction cleanEscapedString(input) {\n  var matched = input.match(escapedStringRegExp);\n  if (!matched) {\n    return input;\n  }\n  return matched[1].replace(doubleQuoteRegExp, \"'\");\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/format/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/isDate/index.js":
      /*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ isDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n/**\n * @name isDate\n * @category Common Helpers\n * @summary Is the given value a date?\n *\n * @description\n * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.\n *\n * @param {*} value - the value to check\n * @returns {boolean} true if the given value is a date\n * @throws {TypeError} 1 arguments required\n *\n * @example\n * // For a valid date:\n * const result = isDate(new Date())\n * //=> true\n *\n * @example\n * // For an invalid date:\n * const result = isDate(new Date(NaN))\n * //=> true\n *\n * @example\n * // For some value:\n * const result = isDate(\'2014-02-31\')\n * //=> false\n *\n * @example\n * // For an object:\n * const result = isDate({})\n * //=> false\n */\nfunction isDate(value) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);\n  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === \'object\' && Object.prototype.toString.call(value) === \'[object Date]\';\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/isDate/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/isValid/index.js":
      /*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ isValid)\n/* harmony export */ });\n/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\n/**\n * @name isValid\n * @category Common Helpers\n * @summary Is the given date valid?\n *\n * @description\n * Returns false if argument is Invalid Date and true otherwise.\n * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}\n * Invalid Date is a Date, whose time value is NaN.\n *\n * Time value of Date: http://es5.github.io/#x15.9.1.1\n *\n * @param {*} date - the date to check\n * @returns {Boolean} the date is valid\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // For the valid date:\n * const result = isValid(new Date(2014, 1, 31))\n * //=> true\n *\n * @example\n * // For the value, convertable into a date:\n * const result = isValid(1393804800000)\n * //=> true\n *\n * @example\n * // For the invalid date:\n * const result = isValid(new Date(\'\'))\n * //=> false\n */\nfunction isValid(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== \'number\') {\n    return false;\n  }\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);\n  return !isNaN(Number(date));\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/isValid/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)\n/* harmony export */ });\nfunction buildFormatLongFn(args) {\n  return function () {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    // TODO: Remove String()\n    var width = options.width ? String(options.width) : args.defaultWidth;\n    var format = args.formats[width] || args.formats[args.defaultWidth];\n    return format;\n  };\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
      /*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildLocalizeFn)\n/* harmony export */ });\nfunction buildLocalizeFn(args) {\n  return function (dirtyIndex, options) {\n    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';\n    var valuesArray;\n    if (context === 'formatting' && args.formattingValues) {\n      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;\n      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;\n      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];\n    } else {\n      var _defaultWidth = args.defaultWidth;\n      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;\n      valuesArray = args.values[_width] || args.values[_defaultWidth];\n    }\n    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;\n    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!\n    return valuesArray[index];\n  };\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ buildMatchFn)\n/* harmony export */ });\nfunction buildMatchFn(args) {\n  return function (string) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var width = options.width;\n    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];\n    var matchResult = string.match(matchPattern);\n    if (!matchResult) {\n      return null;\n    }\n    var matchedString = matchResult[0];\n    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];\n    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {\n      return pattern.test(matchedString);\n    }) : findKey(parsePatterns, function (pattern) {\n      return pattern.test(matchedString);\n    });\n    var value;\n    value = args.valueCallback ? args.valueCallback(key) : key;\n    value = options.valueCallback ? options.valueCallback(value) : value;\n    var rest = string.slice(matchedString.length);\n    return {\n      value: value,\n      rest: rest\n    };\n  };\n}\nfunction findKey(object, predicate) {\n  for (var key in object) {\n    if (object.hasOwnProperty(key) && predicate(object[key])) {\n      return key;\n    }\n  }\n  return undefined;\n}\nfunction findIndex(array, predicate) {\n  for (var key = 0; key < array.length; key++) {\n    if (predicate(array[key])) {\n      return key;\n    }\n  }\n  return undefined;\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)\n/* harmony export */ });\nfunction buildMatchPatternFn(args) {\n  return function (string) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var matchResult = string.match(args.matchPattern);\n    if (!matchResult) return null;\n    var matchedString = matchResult[0];\n    var parseResult = string.match(args.parsePattern);\n    if (!parseResult) return null;\n    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];\n    value = options.valueCallback ? options.valueCallback(value) : value;\n    var rest = string.slice(matchedString.length);\n    return {\n      value: value,\n      rest: rest\n    };\n  };\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formatDistanceLocale = {\n  lessThanXSeconds: {\n    one: 'less than a second',\n    other: 'less than {{count}} seconds'\n  },\n  xSeconds: {\n    one: '1 second',\n    other: '{{count}} seconds'\n  },\n  halfAMinute: 'half a minute',\n  lessThanXMinutes: {\n    one: 'less than a minute',\n    other: 'less than {{count}} minutes'\n  },\n  xMinutes: {\n    one: '1 minute',\n    other: '{{count}} minutes'\n  },\n  aboutXHours: {\n    one: 'about 1 hour',\n    other: 'about {{count}} hours'\n  },\n  xHours: {\n    one: '1 hour',\n    other: '{{count}} hours'\n  },\n  xDays: {\n    one: '1 day',\n    other: '{{count}} days'\n  },\n  aboutXWeeks: {\n    one: 'about 1 week',\n    other: 'about {{count}} weeks'\n  },\n  xWeeks: {\n    one: '1 week',\n    other: '{{count}} weeks'\n  },\n  aboutXMonths: {\n    one: 'about 1 month',\n    other: 'about {{count}} months'\n  },\n  xMonths: {\n    one: '1 month',\n    other: '{{count}} months'\n  },\n  aboutXYears: {\n    one: 'about 1 year',\n    other: 'about {{count}} years'\n  },\n  xYears: {\n    one: '1 year',\n    other: '{{count}} years'\n  },\n  overXYears: {\n    one: 'over 1 year',\n    other: 'over {{count}} years'\n  },\n  almostXYears: {\n    one: 'almost 1 year',\n    other: 'almost {{count}} years'\n  }\n};\nvar formatDistance = function formatDistance(token, count, options) {\n  var result;\n  var tokenValue = formatDistanceLocale[token];\n  if (typeof tokenValue === 'string') {\n    result = tokenValue;\n  } else if (count === 1) {\n    result = tokenValue.one;\n  } else {\n    result = tokenValue.other.replace('{{count}}', count.toString());\n  }\n  if (options !== null && options !== void 0 && options.addSuffix) {\n    if (options.comparison && options.comparison > 0) {\n      return 'in ' + result;\n    } else {\n      return result + ' ago';\n    }\n  }\n  return result;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js\");\n\nvar dateFormats = {\n  full: 'EEEE, MMMM do, y',\n  long: 'MMMM do, y',\n  medium: 'MMM d, y',\n  short: 'MM/dd/yyyy'\n};\nvar timeFormats = {\n  full: 'h:mm:ss a zzzz',\n  long: 'h:mm:ss a z',\n  medium: 'h:mm:ss a',\n  short: 'h:mm a'\n};\nvar dateTimeFormats = {\n  full: \"{{date}} 'at' {{time}}\",\n  long: \"{{date}} 'at' {{time}}\",\n  medium: '{{date}}, {{time}}',\n  short: '{{date}}, {{time}}'\n};\nvar formatLong = {\n  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateFormats,\n    defaultWidth: 'full'\n  }),\n  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: timeFormats,\n    defaultWidth: 'full'\n  }),\n  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateTimeFormats,\n    defaultWidth: 'full'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formatRelativeLocale = {\n  lastWeek: \"'last' eeee 'at' p\",\n  yesterday: \"'yesterday at' p\",\n  today: \"'today at' p\",\n  tomorrow: \"'tomorrow at' p\",\n  nextWeek: \"eeee 'at' p\",\n  other: 'P'\n};\nvar formatRelative = function formatRelative(token, _date, _baseDate, _options) {\n  return formatRelativeLocale[token];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js\");\n\nvar eraValues = {\n  narrow: ['B', 'A'],\n  abbreviated: ['BC', 'AD'],\n  wide: ['Before Christ', 'Anno Domini']\n};\nvar quarterValues = {\n  narrow: ['1', '2', '3', '4'],\n  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],\n  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']\n};\n\n// Note: in English, the names of days of the week and months are capitalized.\n// If you are making a new locale based on this one, check if the same is true for the language you're working on.\n// Generally, formatted dates should look like they are in the middle of a sentence,\n// e.g. in Spanish language the weekdays and months should be in the lowercase.\nvar monthValues = {\n  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],\n  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\n  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\n};\nvar dayValues = {\n  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],\n  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],\n  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\n};\nvar dayPeriodValues = {\n  narrow: {\n    am: 'a',\n    pm: 'p',\n    midnight: 'mi',\n    noon: 'n',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  },\n  abbreviated: {\n    am: 'AM',\n    pm: 'PM',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  },\n  wide: {\n    am: 'a.m.',\n    pm: 'p.m.',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  }\n};\nvar formattingDayPeriodValues = {\n  narrow: {\n    am: 'a',\n    pm: 'p',\n    midnight: 'mi',\n    noon: 'n',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  },\n  abbreviated: {\n    am: 'AM',\n    pm: 'PM',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  },\n  wide: {\n    am: 'a.m.',\n    pm: 'p.m.',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  }\n};\nvar ordinalNumber = function ordinalNumber(dirtyNumber, _options) {\n  var number = Number(dirtyNumber);\n\n  // If ordinal numbers depend on context, for example,\n  // if they are different for different grammatical genders,\n  // use `options.unit`.\n  //\n  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',\n  // 'day', 'hour', 'minute', 'second'.\n\n  var rem100 = number % 100;\n  if (rem100 > 20 || rem100 < 10) {\n    switch (rem100 % 10) {\n      case 1:\n        return number + 'st';\n      case 2:\n        return number + 'nd';\n      case 3:\n        return number + 'rd';\n    }\n  }\n  return number + 'th';\n};\nvar localize = {\n  ordinalNumber: ordinalNumber,\n  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: eraValues,\n    defaultWidth: 'wide'\n  }),\n  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: quarterValues,\n    defaultWidth: 'wide',\n    argumentCallback: function argumentCallback(quarter) {\n      return quarter - 1;\n    }\n  }),\n  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: monthValues,\n    defaultWidth: 'wide'\n  }),\n  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayValues,\n    defaultWidth: 'wide'\n  }),\n  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayPeriodValues,\n    defaultWidth: 'wide',\n    formattingValues: formattingDayPeriodValues,\n    defaultFormattingWidth: 'wide'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js\");\n/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js\");\n\n\nvar matchOrdinalNumberPattern = /^(\\d+)(th|st|nd|rd)?/i;\nvar parseOrdinalNumberPattern = /\\d+/i;\nvar matchEraPatterns = {\n  narrow: /^(b|a)/i,\n  abbreviated: /^(b\\.?\\s?c\\.?|b\\.?\\s?c\\.?\\s?e\\.?|a\\.?\\s?d\\.?|c\\.?\\s?e\\.?)/i,\n  wide: /^(before christ|before common era|anno domini|common era)/i\n};\nvar parseEraPatterns = {\n  any: [/^b/i, /^(a|c)/i]\n};\nvar matchQuarterPatterns = {\n  narrow: /^[1234]/i,\n  abbreviated: /^q[1234]/i,\n  wide: /^[1234](th|st|nd|rd)? quarter/i\n};\nvar parseQuarterPatterns = {\n  any: [/1/i, /2/i, /3/i, /4/i]\n};\nvar matchMonthPatterns = {\n  narrow: /^[jfmasond]/i,\n  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,\n  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i\n};\nvar parseMonthPatterns = {\n  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],\n  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]\n};\nvar matchDayPatterns = {\n  narrow: /^[smtwf]/i,\n  short: /^(su|mo|tu|we|th|fr|sa)/i,\n  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,\n  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i\n};\nvar parseDayPatterns = {\n  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],\n  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]\n};\nvar matchDayPeriodPatterns = {\n  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,\n  any: /^([ap]\\.?\\s?m\\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i\n};\nvar parseDayPeriodPatterns = {\n  any: {\n    am: /^a/i,\n    pm: /^p/i,\n    midnight: /^mi/i,\n    noon: /^no/i,\n    morning: /morning/i,\n    afternoon: /afternoon/i,\n    evening: /evening/i,\n    night: /night/i\n  }\n};\nvar match = {\n  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    matchPattern: matchOrdinalNumberPattern,\n    parsePattern: parseOrdinalNumberPattern,\n    valueCallback: function valueCallback(value) {\n      return parseInt(value, 10);\n    }\n  }),\n  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchEraPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseEraPatterns,\n    defaultParseWidth: 'any'\n  }),\n  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchQuarterPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseQuarterPatterns,\n    defaultParseWidth: 'any',\n    valueCallback: function valueCallback(index) {\n      return index + 1;\n    }\n  }),\n  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchMonthPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseMonthPatterns,\n    defaultParseWidth: 'any'\n  }),\n  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseDayPatterns,\n    defaultParseWidth: 'any'\n  }),\n  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPeriodPatterns,\n    defaultMatchWidth: 'any',\n    parsePatterns: parseDayPeriodPatterns,\n    defaultParseWidth: 'any'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
      /*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");\n/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");\n/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");\n/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");\n/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");\n\n\n\n\n\n/**\n * @type {Locale}\n * @category Locales\n * @summary English locale (United States).\n * @language English\n * @iso-639-2 eng\n * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}\n * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}\n */\nvar locale = {\n  code: \'en-US\',\n  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],\n  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],\n  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],\n  options: {\n    weekStartsOn: 0 /* Sunday */,\n    firstWeekContainsDate: 1\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/locale/en-US/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ subMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n\n\n\n/**\n * @name subMilliseconds\n * @category Millisecond Helpers\n * @summary Subtract the specified number of milliseconds from the given date.\n *\n * @description\n * Subtract the specified number of milliseconds from the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the milliseconds subtracted\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:\n * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)\n * //=> Thu Jul 10 2014 12:45:29.250\n */\nfunction subMilliseconds(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);\n  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/subMilliseconds/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/toDate/index.js":
      /*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/date-fns/esm/toDate/index.js?"
        );

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do_list/./src/style.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/headerDates.js":
      /*!****************************!*\
  !*** ./src/headerDates.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerDates: () => (/* binding */ headerDates)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");\n\n\nconst headerDates = () => {\n  const listDate = document.querySelector(".days");\n  const CurrentDate = document.querySelector(".theDate");\n  let currentDate = new Date();\n  CurrentDate.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(currentDate, "MMMM do, yyyy");\n  let dateNumber = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(currentDate, "dd");\n\n  for (let i = 0; i < 7; i++) {\n    let newDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(currentDate, i);\n    let dateElement = document.createElement("div");\n    dateElement.classList.add("day");\n    dateElement.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(newDate, "eee");\n    listDate.appendChild(dateElement);\n\n    let dateNumberElement = document.createElement("div");\n    dateNumberElement.classList.add("dates");\n    dateNumberElement.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(newDate, "dd");\n    dateElement.appendChild(dateNumberElement);\n\n    if (dateNumber == dateNumberElement.textContent) {\n      dateNumberElement.style.color = "white";\n      dateNumberElement.style.background =\n        "linear-gradient(to right, #6b2cf5, #d450e6)";\n      dateNumberElement.style.borderRadius = "50%";\n    }\n\n    listDate.appendChild(dateElement);\n  }\n};\n\n\n//# sourceURL=webpack://to-do_list/./src/headerDates.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");\n/* harmony import */ var _headerDates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerDates.js */ "./src/headerDates.js");\n\n\n\n(0,_headerDates_js__WEBPACK_IMPORTED_MODULE_1__.headerDates)();\n\n\n//# sourceURL=webpack://to-do_list/./src/index.js?'
        );

        /***/
      },

    /***/ "./Roboto-Regular.ttf":
      /*!****************************!*\
  !*** ./Roboto-Regular.ttf ***!
  \****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";\n\n//# sourceURL=webpack://to-do_list/./Roboto-Regular.ttf?'
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
      /*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  "@babel/helpers - typeof";\n\n  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://to-do_list/./node_modules/@babel/runtime/helpers/esm/typeof.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /***
 /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
