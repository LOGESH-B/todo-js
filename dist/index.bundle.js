/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100svh;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#container {\r\n  flex: 1;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  grid-template-rows: auto 1fr;\r\n  min-height: 100%;\r\n}\r\n\r\nheader,\r\nfooter,\r\n#sidebar {\r\n  background-color: lightgray;\r\n}\r\n\r\nheader {\r\n  grid-column: 1/3;\r\n  height: 3rem;\r\n}\r\n\r\n#sidebar {\r\n  grid-row: 2/3;\r\n}\r\n\r\nmain {\r\n  grid-column: 2/3;\r\n  grid-row: 2/3;\r\n}\r\n\r\nfooter {\r\n  height: 2rem;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n}\r\n\r\nth,\r\ntd {\r\n  padding: 10px;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\nth {\r\n  background-color: #4caf50;\r\n  color: white;\r\n}\r\n\r\ntr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\ntr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n#checkboxes ul {\r\n  margin: 0;\r\n  list-style: none;\r\n  float: left;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _lsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lsManager */ \"./src/lsManager.js\");\n// import { add, format } from \"date-fns\";\r\n\r\n\r\n\r\n\r\n\r\n// const result = format(new Date(), 'yyyyddMMHHmm')\r\n\r\n(0,_lsManager__WEBPACK_IMPORTED_MODULE_3__.getAreas)();\r\n\r\n(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();\r\n\r\n(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderSidebar)();\r\n\r\n(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderMain)();\r\n\r\n(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderFooter)();\r\n\r\n(0,_logic__WEBPACK_IMPORTED_MODULE_2__.eventListeners)();\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eventListeners: () => (/* binding */ eventListeners),\n/* harmony export */   filterAreaList: () => (/* binding */ filterAreaList)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _lsManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lsManager */ \"./src/lsManager.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\r\n\r\n\r\n\r\nconst eventListeners = () => {\r\n  const areaInput = document.getElementById(\"filter-area\");\r\n  areaInput.addEventListener(\"input\", handleAreaInput);\r\n\r\n  const addAreaButton = document.getElementById(\"add-area\");\r\n  addAreaButton.addEventListener(\"click\", handleAddArea);\r\n\r\n  const projectInput = document.getElementById(\"filter-project\");\r\n  projectInput.addEventListener(\"input\", handleProjectInput);\r\n\r\n  const sidebarElement = document.getElementById(\"sidebar\");\r\n  // console.log(sidebarElement);\r\n  const checkboxElement = sidebarElement.querySelectorAll(\r\n    'input[type=\"checkbox\"]'\r\n  );\r\n  // console.log(checkboxElement);\r\n  checkboxElement.forEach((element) => {\r\n    element.addEventListener(\"change\", handleAreaChecked);\r\n  });\r\n};\r\n\r\nfunction handleAreaInput() {\r\n  const checkboxes = document.getElementById(\"checkboxes\");\r\n  const ul = checkboxes.querySelector(\"ul\");\r\n  const areaInput = document.getElementById(\"filter-area\");\r\n  ul.innerHTML = \"\";\r\n  filterAreaList();\r\n}\r\n\r\nfunction handleProjectInput(event) {\r\n  console.log(\"todo: handleProjectInput\");\r\n  console.log(event);\r\n}\r\n\r\nfunction handleAddArea() {\r\n  //TODO #7 add contents of the input to area list\r\n  console.log(\"todo - add contents of input to area list\");\r\n  const areaInput = document.getElementById(\"filter-area\").value;\r\n  console.log(areaInput);\r\n  (0,_lsManager__WEBPACK_IMPORTED_MODULE_1__.addArea)(areaInput);\r\n  filterAreaList();\r\n}\r\n\r\nfunction handleAreaChecked(event) {\r\n  if (event.target.checked) {\r\n    // send message to lsManager that an area has been checked and it should change the status of pinned to true\r\n    // use pubsub for this\r\n    // event.target.id;\r\n    // console.log(typeof output);\r\n    _pubsub__WEBPACK_IMPORTED_MODULE_2__.events.emit(\"CheckboxChanged\", { id: event.target.id, checked: true });\r\n  } else {\r\n    _pubsub__WEBPACK_IMPORTED_MODULE_2__.events.emit(\"CheckboxChanged\", { id: event.target.id, checked: false });\r\n  }\r\n  // console.log(event.target.id);\r\n}\r\n\r\nfunction filterAreaList() {\r\n  //TODO #6 make the filter strictly search for all alpha characters before the \"/\" e.g. searching for f/ will not also return area with fg/ e.g. fg1/\r\n  //TODO #8 resolve the issue where using the filter removes the checkbox status. the same logic may be in initial page render and below\r\n  const checkboxes = document.getElementById(\"checkboxes\");\r\n  const ul = checkboxes.querySelector(\"ul\");\r\n  const areaInput = document.getElementById(\"filter-area\");\r\n  let searchTerm = areaInput.value;\r\n  const areas = (0,_lsManager__WEBPACK_IMPORTED_MODULE_1__.getAreas)();\r\n\r\n  // Remove the \"No matches found\" message if it exists from previous searches\r\n  const noMatchMessage = document.getElementById(\"no-match-message\");\r\n  if (noMatchMessage) {\r\n    noMatchMessage.remove();\r\n  }\r\n\r\n  // Split the search term into prefix and slug.\r\n  let [searchPrefix, searchSlug] = searchTerm.split(\"/\");\r\n\r\n  // If searchPrefix is just a letter (without any digit), it's considered as a wildcard search\r\n  let isWildcardSearch = !/\\d/.test(searchPrefix); // True if there's no digit in searchPrefix\r\n\r\n  let filteredAreas = areas.filter((area) => {\r\n    let areaId = area.areaId.toLowerCase();\r\n    let description = area.description.toLowerCase().split(\" \").join(\"-\");\r\n\r\n    // If it's a wildcard search, check if areaId starts with searchPrefix and description includes searchSlug\r\n    // Else, check if areaId and description exactly match searchPrefix and searchSlug respectively.\r\n    if (isWildcardSearch) {\r\n      return (\r\n        areaId.startsWith(searchPrefix) && description.includes(searchSlug)\r\n      );\r\n    } else {\r\n      return areaId === searchPrefix && description === searchSlug;\r\n    }\r\n  });\r\n\r\n  // If no matches were found, show a message\r\n  if (filteredAreas.length === 0) {\r\n    const messageElement = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", checkboxes);\r\n    messageElement.id = \"no-match-message\";\r\n    messageElement.innerHTML = \"No matches found\"; // Assign an id for future removal\r\n    return; // End the function here as there's nothing else to do\r\n  }\r\n\r\n  // Populate the filtered areas\r\n  filteredAreas.forEach((area) => {\r\n    const li = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"li\", ul);\r\n    const areaDescription = `${area.areaId}-${area.description\r\n      .split(\" \")\r\n      .join(\"-\")}`;\r\n    let lowerCaseAreaDescription = areaDescription.toLowerCase();\r\n    const inputElement = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"input\", li, lowerCaseAreaDescription);\r\n    inputElement.type = \"checkbox\";\r\n    inputElement.checked = area.pinned;\r\n    const label = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"label\", li);\r\n    label.textContent = `${area.areaId.toLowerCase()}/${area.slug}`;\r\n    label.htmlFor = lowerCaseAreaDescription;\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/logic.js?");

/***/ }),

/***/ "./src/lsManager.js":
/*!**************************!*\
  !*** ./src/lsManager.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addArea: () => (/* binding */ addArea),\n/* harmony export */   getAreas: () => (/* binding */ getAreas),\n/* harmony export */   getProjects: () => (/* binding */ getProjects)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\r\n\r\nconst LOCAL_STORAGE_AREAS_KEY = \"areas.lists\";\r\nconst LOCAL_STORAGE_PROJECTS_KEY = \"projects.lists\";\r\nlet areas;\r\n\r\n// areaFactory\r\nfunction areaFactory(areaId, description) {\r\n  let allAreas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY));\r\n\r\n  let slug = `${description.split(\" \").join(\"-\")}`.toLowerCase();\r\n\r\n  // set default value of uniqueSlug\r\n  let uniqueSlug = `${areaId}-${description\r\n    .split(\" \")\r\n    .join(\"-\")}`.toLowerCase();\r\n\r\n  // check if the new uniqueSlug already exists in allAreas\r\n  allAreas=allAreas==null?[]:allAreas\r\n  let existing = allAreas.find((area) => area.uniqueSlug === uniqueSlug);\r\n\r\n  // if uniqueSlugalready exists, add a postfix to make it unique\r\n  if (existing) {\r\n    let postfix = 1;\r\n    while (\r\n      allAreas.find((area) => area.uniqueSlug === uniqueSlug + \"-\" + postfix)\r\n    ) {\r\n      postfix++;\r\n    }\r\n    uniqueSlug += \"-\" + postfix;\r\n  }\r\n\r\n  return {\r\n    areaId,\r\n    description,\r\n    pinned: false,\r\n    slug,\r\n    uniqueSlug,\r\n  };\r\n}\r\n\r\nconst getAreas = () => {\r\n  return (areas =\r\n    JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY)) || []);\r\n};\r\n\r\nfunction addArea(description) {\r\n  console.log(`description = ${description}`);\r\n  let retrievedAreas = JSON.parse(\r\n    localStorage.getItem(LOCAL_STORAGE_AREAS_KEY)\r\n  );\r\n\r\n  let splitDescription = description.split(\"/\");\r\n  let areaCodePrefix = splitDescription[0];\r\n  let slug = splitDescription[1];\r\n  \r\n  retrievedAreas=retrievedAreas==null?[]:retrievedAreas\r\n  const areaCodesWithSamePrefix = retrievedAreas\r\n    .map(({ areaId }) => {\r\n      const [retrievedAreaCodePrefix, retrievedAreaCodeSequentialNumber] =\r\n        areaId.split(/(\\d+)/).filter(Boolean);\r\n      return {\r\n        retrievedAreaCodePrefix,\r\n        retrievedAreaCodeSequentialNumber: +retrievedAreaCodeSequentialNumber,\r\n      };\r\n    })\r\n    .filter(\r\n      ({ retrievedAreaCodePrefix }) =>\r\n        areaCodePrefix === retrievedAreaCodePrefix\r\n    );\r\nconsole.log(areaCodesWithSamePrefix)\r\n  let maxSequentialNumber = Math.max(\r\n    ...areaCodesWithSamePrefix.map(\r\n      ({ retrievedAreaCodeSequentialNumber }) =>\r\n        retrievedAreaCodeSequentialNumber\r\n    ),\r\n    0\r\n  );\r\n\r\n  let newAreaCodeSequentialNumber = maxSequentialNumber + 1;\r\n  let newAreaCode = `${areaCodePrefix}${newAreaCodeSequentialNumber}`;\r\n  let newArea = areaFactory(newAreaCode, slug);\r\n\r\n  const updatedAreas = [...retrievedAreas, newArea];\r\n\r\n  localStorage.setItem(LOCAL_STORAGE_AREAS_KEY, JSON.stringify(updatedAreas));\r\n  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY)));\r\n}\r\n\r\nconst getProjects = () => {\r\n  const projects = [\r\n    {\r\n      projectId: \"H6-001\",\r\n      description: \"this is the first project\",\r\n      created: \"202307120925\",\r\n    },\r\n    {\r\n      projectId: \"H6-002\",\r\n      description: \"this is the second project\",\r\n      created: \"202307120926\",\r\n    },\r\n    {\r\n      projectId: \"P2-001\",\r\n      description: \"this is another random project\",\r\n      created: \"202307120927\",\r\n    },\r\n    {\r\n      projectId: \"H9-001\",\r\n      description: \"this is the third project\",\r\n      created: \"202307120928\",\r\n    },\r\n    {\r\n      projectId: \"P5-001\",\r\n      description: \"this is a new project\",\r\n      created: \"202307120929\",\r\n    },\r\n    {\r\n      projectId: \"H8-001\",\r\n      description: \"this is a test project\",\r\n      created: \"202307120930\",\r\n    },\r\n    {\r\n      projectId: \"P3-001\",\r\n      description: \"this is a sample project\",\r\n      created: \"202307120931\",\r\n    },\r\n    {\r\n      projectId: \"H7-001\",\r\n      description: \"this is an experimental project\",\r\n      created: \"202307120932\",\r\n    },\r\n    {\r\n      projectId: \"P4-001\",\r\n      description: \"this is a demo project\",\r\n      created: \"202307120933\",\r\n    },\r\n    {\r\n      projectId: \"H10-001\",\r\n      description: \"this is a new addition project\",\r\n      created: \"202307120934\",\r\n    },\r\n    {\r\n      projectId: \"P6-001\",\r\n      description: \"this is a development project\",\r\n      created: \"202307120935\",\r\n    },\r\n  ];\r\n\r\n  projects.sort((a, b) => (a.projectId > b.projectId ? 1 : -1));\r\n\r\n  return projects;\r\n};\r\n\r\nconst handleCheckboxChange = (event) => {\r\n  console.log(`checkbox has changed status: ${event}`);\r\n  let allAreas = getAreas();\r\n  allAreas=allAreas==null?[]:allAreas\r\n  const modifiedAreas = allAreas.map((area) =>\r\n    area.uniqueSlug === event.id ? { ...area, pinned: event.checked } : area\r\n  );\r\n\r\n  let isMatched = modifiedAreas.some((area) => area.uniqueSlug === event.id);\r\n  if (isMatched) {\r\n    console.log(\"found a match!\");\r\n  } else {\r\n    console.log(`error no match`);\r\n  }\r\n\r\n  console.log(modifiedAreas);\r\n  localStorage.setItem(LOCAL_STORAGE_AREAS_KEY, JSON.stringify(modifiedAreas));\r\n};\r\n\r\n_pubsub__WEBPACK_IMPORTED_MODULE_0__.events.on(\"CheckboxChanged\", handleCheckboxChange);\r\n\r\n// Local storage clean up function. Use this after modifying the areaFactory function\r\n// WARNING - only uncomment last line if allAreas returns desired results\r\n\r\n(function () {\r\n  let allAreas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY));\r\n  allAreas=allAreas==null?[]:allAreas\r\n  allAreas = allAreas.map((element) => {\r\n    return areaFactory(element.areaId, element.description);\r\n  });\r\n  console.log(allAreas);\r\n  // localStorage.setItem(LOCAL_STORAGE_AREAS_KEY, JSON.stringify(allAreas));\r\n})();\r\n\n\n//# sourceURL=webpack://todo/./src/lsManager.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   events: () => (/* binding */ events)\n/* harmony export */ });\n// events - a super-basic Javascript (publish subscribe) pattern\r\n\r\nlet events = {\r\n  events: {},\r\n  on: function (eventName, fn) {\r\n    this.events[eventName] = this.events[eventName] || [];\r\n    this.events[eventName].push(fn);\r\n  },\r\n  off: function (eventName, fn) {\r\n    if (this.events[eventName]) {\r\n      for (var i = 0; i < this.events[eventName].length; i++) {\r\n        if (this.events[eventName][i] === fn) {\r\n          this.events[eventName].splice(i, 1);\r\n          break;\r\n        }\r\n      }\r\n    }\r\n  },\r\n  emit: function (eventName, data) {\r\n    if (this.events[eventName]) {\r\n      this.events[eventName].forEach(function (fn) {\r\n        fn(data);\r\n      });\r\n    }\r\n  },\r\n};\r\n\r\n// an alternate pub sub function\r\n\r\n// export function subscribe(eventClass, handler) {\r\n//   let sugar = function (event) {\r\n//     handler(...event.detail);\r\n//   };\r\n//   document.addEventListener(eventClass.name, sugar, { passive: true });\r\n//   return {\r\n//     unsubscribe: function unsubscribe() {\r\n//       document.removeEventListener(eventClass.name, sugar);\r\n//     },\r\n//   };\r\n// }\r\n\r\n// export function publish(event) {\r\n//   let nativeEvent = new CustomEvent(event.constructor.name, {\r\n//     detail: event.args,\r\n//   });\r\n//   document.dispatchEvent(nativeEvent);\r\n// }\r\n\n\n//# sourceURL=webpack://todo/./src/pubsub.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   renderFooter: () => (/* binding */ renderFooter),\n/* harmony export */   renderHeader: () => (/* binding */ renderHeader),\n/* harmony export */   renderMain: () => (/* binding */ renderMain),\n/* harmony export */   renderSidebar: () => (/* binding */ renderSidebar)\n/* harmony export */ });\n/* harmony import */ var _lsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lsManager */ \"./src/lsManager.js\");\n\r\n\r\nconst createElement = (type, parent, id) => {\r\n  const newElement = document.createElement(type);\r\n  if (id) newElement.id = id;\r\n  parent.appendChild(newElement);\r\n  return newElement;\r\n};\r\n\r\nconst bodyElement = document.querySelector(\"body\");\r\nconst containerElement = createElement(\"div\", bodyElement, \"container\");\r\n\r\nconst renderHeader = () => {\r\n  const headerElement = createElement(\"header\", containerElement);\r\n  const projectView = createElement(\"button\", headerElement);\r\n  projectView.type = \"button\";\r\n  projectView.innerHTML = \"Projects\";\r\n  const taskView = createElement(\"button\", headerElement);\r\n  taskView.type = \"button\";\r\n  taskView.innerHTML = \"Project Actions\";\r\n  const noteView = createElement(\"button\", headerElement);\r\n  noteView.type = \"button\";\r\n  noteView.innerHTML = \"Project Notes\";\r\n};\r\n\r\nconst renderSidebar = () => {\r\n  const sidebarElement = createElement(\"div\", containerElement, \"sidebar\");\r\n\r\n  //TODO #10 add the lines below to a separte function\r\n  const input = createElement(\"input\", sidebarElement, \"filter-area\");\r\n  input.placeholder = \"type '/' to search all projects\";\r\n  input.pattern = \"^[A-Za-z]+/[A-Za-z\\\\s]+$\";\r\n  const addArea = createElement(\"button\", sidebarElement, \"add-area\");\r\n  addArea.type = \"button\";\r\n  addArea.innerHTML = \"Add Area\";\r\n\r\n  const div = createElement(\"div\", sidebarElement, \"checkboxes\");\r\n  const ul = createElement(\"ul\", div);\r\n  let areas = (0,_lsManager__WEBPACK_IMPORTED_MODULE_0__.getAreas)();\r\n  //   .sort((a, b) => a.areaId - b.areaId);\r\n  areas.forEach((area) => {\r\n    const li = createElement(\"li\", ul);\r\n    const areaDescription = `${area.areaId}-${area.description\r\n      .split(\" \")\r\n      .join(\"-\")}`;\r\n    //TODO #2 set the checkbox checked status based on the pinned status\r\n    const input = createElement(\"input\", li, areaDescription.toLowerCase());\r\n    input.type = \"checkbox\";\r\n    input.checked = area.pinned;\r\n    const label = createElement(\"label\", li);\r\n    label.textContent = `${area.areaId.toLowerCase()}/${area.slug.toLowerCase()}`;\r\n    label.htmlFor = areaDescription.toLowerCase();\r\n  });\r\n};\r\n\r\nconst renderMain = () => {\r\n  const mainElement = createElement(\"main\", containerElement);\r\n  const input = createElement(\"input\", mainElement, \"filter-project\");\r\n  input.placeholder = \"Filter Project\";\r\n  const addProject = createElement(\"button\", mainElement);\r\n  addProject.type = \"button\";\r\n  addProject.innerHTML = \"Add Project\";\r\n  const table = createElement(\"table\", mainElement);\r\n  const thead = createElement(\"thead\", table);\r\n  const tr = createElement(\"tr\", thead);\r\n  const tableHeadings = [\"Project ID\", \"Description\", \"Created\"];\r\n  tableHeadings.forEach((item) => {\r\n    const td = createElement(\"td\", tr);\r\n    td.innerHTML = item;\r\n  });\r\n  const tbody = createElement(\"tbody\", table);\r\n\r\n  let projects = (0,_lsManager__WEBPACK_IMPORTED_MODULE_0__.getProjects)();\r\n\r\n  projects.forEach((project) => {\r\n    const tr = createElement(\"tr\", tbody);\r\n    const projectId = createElement(\"td\", tr);\r\n    projectId.innerHTML = project.projectId;\r\n    const description = createElement(\"td\", tr);\r\n    // description.innerHTML = project.description;\r\n    description.innerHTML = `${project.projectId.toLowerCase()}/${project.description.toLowerCase()}`;\r\n    const created = createElement(\"td\", tr);\r\n    created.innerHTML = project.created;\r\n    tr.appendChild(projectId);\r\n    tr.appendChild(description);\r\n    tr.appendChild(created);\r\n  });\r\n};\r\n\r\nconst renderFooter = () => {\r\n  const footerElement = createElement(\"footer\", bodyElement);\r\n  footerElement.innerHTML = \"Chris 2023\";\r\n};\r\n\n\n//# sourceURL=webpack://todo/./src/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;