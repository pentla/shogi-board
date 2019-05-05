/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/assets/css/style.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader!./src/assets/css/style.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"/* main */\\nbody {\\n    font-family: Arial, sans-serif;\\n    width: 1000px;\\n    margin: 100px auto;\\n    text-align: center;\\n}\\np {\\n    font-size: 14px;\\n}\\n\\n/* utility */\\n.hidden {\\n    display: none;\\n}\\n\\n/* adjusting position */\\n.container {\\n    position: relative;\\n    width: 810px;\\n    height: 540px;\\n    background: url(\" + escape(__webpack_require__(/*! ../img/sg_ban.jpg */ \"./src/assets/img/sg_ban.jpg\")) + \");\\n}\\n\\n\\n/* ban */\\n#ban-position {\\n    position: absolute;\\n    top: 86px;\\n    left: 243.5px;\\n    width: 324px;\\n    height: 351px;\\n}\\n\\n\\n/* komadai */\\n.komadai {\\n    position: absolute;\\n    width: 120px;\\n    height: 120px;\\n    box-shadow: 0 4px 10px rgba(0,0,0,0.8);\\n}\\n#komadai-sente {\\n    top: 334px;\\n    right: 104px;\\n}\\n#komadai-gote {\\n    top: 70px;\\n    left: 107px;\\n}\\n\\n\\n/*textbox*/\\n.textbox {\\n    position: absolute;\\n    bottom: 0;\\n    width: 120px;\\n    height: 125px;\\n}\\n.textbox#textbox-top {\\n    bottom: 55px;\\n    left: 53px;\\n}\\n.textbox#textbox-bottom {\\n    top: 60px;\\n    right: 54px;\\n}\\n.textbox .half_transparent {\\n    opacity: .3;\\n}\\n\\n/* koma */\\n.koma {\\n    width: 36px;\\n    height: 39px;\\n    box-sizing: border-box;\\n    position: absolute;\\n    border: 0;\\n}\\n.koma:hover {\\n    background: #fbd92d;\\n}\\n.koma img {\\n    filter: drop-shadow(1px 1px rgba(0,0,0,0.6));\\n}\\n.koma.gote {\\n    -webkit-transform: rotate(-200deg);\\n}\\n\\n\\n/* modal */\\n#modal {\\n    width: 300px;\\n    margin: 0 auto;\\n    padding: 20px;\\n    background: #fff;\\n    border-radius: 4px;\\n    position: absolute;\\n    top: 40px;\\n    right: 0;\\n    left: 0;\\n    transition:.4s;\\n    z-index: 3;\\n}\\n#modal-option {\\n    padding: 20px;\\n    border: 1px solid #ccc;\\n}\\n\\n\\n/* color */\\n.orange {\\n    background: orange;\\n    opacity: .5;\\n}\\n.red {\\n    background: red;\\n}\\n.red:hover {\\n    background: red;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/assets/css/style.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./style.css */ \"./node_modules/css-loader/index.js!./src/assets/css/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/assets/css/style.css?");

/***/ }),

/***/ "./src/assets/img/fu.png":
/*!*******************************!*\
  !*** ./src/assets/img/fu.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/fu.png?33873a778397326737c00064466afba0\";\n\n//# sourceURL=webpack:///./src/assets/img/fu.png?");

/***/ }),

/***/ "./src/assets/img/gin.png":
/*!********************************!*\
  !*** ./src/assets/img/gin.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/gin.png?ed26e0e3cf3fc0414b23df281515215f\";\n\n//# sourceURL=webpack:///./src/assets/img/gin.png?");

/***/ }),

/***/ "./src/assets/img/hi.png":
/*!*******************************!*\
  !*** ./src/assets/img/hi.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/hi.png?8fff27132add5deca88b1ccf436965f6\";\n\n//# sourceURL=webpack:///./src/assets/img/hi.png?");

/***/ }),

/***/ "./src/assets/img/kaku.png":
/*!*********************************!*\
  !*** ./src/assets/img/kaku.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/kaku.png?5a175261a6432fa8763e19e15de5e089\";\n\n//# sourceURL=webpack:///./src/assets/img/kaku.png?");

/***/ }),

/***/ "./src/assets/img/kei.png":
/*!********************************!*\
  !*** ./src/assets/img/kei.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/kei.png?1c0a9ff492c61e88c216d5bb592f6ffa\";\n\n//# sourceURL=webpack:///./src/assets/img/kei.png?");

/***/ }),

/***/ "./src/assets/img/kin.png":
/*!********************************!*\
  !*** ./src/assets/img/kin.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/kin.png?f0dbb149e99cde9a030b8d78944274ae\";\n\n//# sourceURL=webpack:///./src/assets/img/kin.png?");

/***/ }),

/***/ "./src/assets/img/kyo.png":
/*!********************************!*\
  !*** ./src/assets/img/kyo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/kyo.png?d4617e7a99ce8beabbc96ff46790a251\";\n\n//# sourceURL=webpack:///./src/assets/img/kyo.png?");

/***/ }),

/***/ "./src/assets/img/ngin.png":
/*!*********************************!*\
  !*** ./src/assets/img/ngin.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/ngin.png?23f75887b99cbd25efc2c70846dd9791\";\n\n//# sourceURL=webpack:///./src/assets/img/ngin.png?");

/***/ }),

/***/ "./src/assets/img/nkei.png":
/*!*********************************!*\
  !*** ./src/assets/img/nkei.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/nkei.png?6f40b19b5fa1a2c09eda0f72a842ebf8\";\n\n//# sourceURL=webpack:///./src/assets/img/nkei.png?");

/***/ }),

/***/ "./src/assets/img/nkyo.png":
/*!*********************************!*\
  !*** ./src/assets/img/nkyo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/nkyo.png?05c8875788648147f8d90f0055e5b095\";\n\n//# sourceURL=webpack:///./src/assets/img/nkyo.png?");

/***/ }),

/***/ "./src/assets/img/ou.png":
/*!*******************************!*\
  !*** ./src/assets/img/ou.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/ou.png?7631f44accbed3d6e07fb721f3eb9d36\";\n\n//# sourceURL=webpack:///./src/assets/img/ou.png?");

/***/ }),

/***/ "./src/assets/img/ryu.png":
/*!********************************!*\
  !*** ./src/assets/img/ryu.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/ryu.png?cd598bb963d3a5d16dcb13d113ba3b17\";\n\n//# sourceURL=webpack:///./src/assets/img/ryu.png?");

/***/ }),

/***/ "./src/assets/img/sg_ban.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/sg_ban.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/sg_ban.jpg?73b5fdcb3dd9110636afd3bf13a091ea\";\n\n//# sourceURL=webpack:///./src/assets/img/sg_ban.jpg?");

/***/ }),

/***/ "./src/assets/img/to.png":
/*!*******************************!*\
  !*** ./src/assets/img/to.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/to.png?d7ad219a73c2685ab86c4f4d90b9a811\";\n\n//# sourceURL=webpack:///./src/assets/img/to.png?");

/***/ }),

/***/ "./src/assets/img/uma.png":
/*!********************************!*\
  !*** ./src/assets/img/uma.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/uma.png?7f3ca06159d1a6e92f1a45e990c44923\";\n\n//# sourceURL=webpack:///./src/assets/img/uma.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _image = __webpack_require__(/*! ./main/image */ \"./src/main/image.js\");\n\nvar _image2 = _interopRequireDefault(_image);\n\n__webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n\nvar _board = __webpack_require__(/*! ./main/board */ \"./src/main/board.js\");\n\nvar _board2 = _interopRequireDefault(_board);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Game = new _board2.default();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main/board.js":
/*!***************************!*\
  !*** ./src/main/board.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = Board;\n\nvar _rule = __webpack_require__(/*! ./rule */ \"./src/main/rule.js\");\n\nvar _rule2 = _interopRequireDefault(_rule);\n\nvar _image = __webpack_require__(/*! ./image */ \"./src/main/image.js\");\n\nvar _image2 = _interopRequireDefault(_image);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/main/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Board() {\n    this.init();\n};\n\n//  エラー: 駒を取った際\n//  -> accessibleが削除されていないのが原因\n\n//  todo: マジックナンバを減らす\nBoard.prototype.init = function () {\n\n    //  共通要素\n    this.m = {\n\n        //  preloadjs\n        loader: null,\n\n        //  駒のサイズ\n        PIECE_WIDTH: 36,\n        PIECE_HEIGHT: 39\n    };\n\n    //  dom要素\n    this.dom = {\n        board: document.getElementById('ban'),\n        piecestand_sente: document.getElementById(\"komadai-sente\"),\n        piecestand_gote: document.getElementById(\"komadai-gote\"),\n        txt_sente: document.getElementById(\"text-sente\"),\n        txt_gote: document.getElementById(\"text-gote\")\n    };\n\n    //  盤の情報\n    this.stat = {\n\n        //  盤の情報\n        position: [], //  盤のどの位置にどの駒があるか、の情報\n        picked: null, //  選択した駒の記録用\n        turn_list: ['sente', 'gote'], //  使う？ todo: 消すかどうか決める\n        turn: 'sente', //  手番\n        phase_select: false, //  駒が選択されたかどうか\n        phase_captured: false, //  持ち駒が選択されたかどうか\n\n        //  駒台\n        piecestand_sente: [], //  先手の持ち駒\n        piecestand_gote: [], //  後手の持ち駒\n\n        //  駒\n        pieces: []\n    };\n\n    //  駒の配置の初期化\n    this.stat.position = this.initPosition(true);\n\n    //  最初の手番は先手なので、後手のテキストを不透明にする\n    if (this.stat.turn === 'sente') {\n        this.dom.txt_gote.classList.add('half_transparent');\n    } else {\n        this.dom.txt_sente.classList.add('half_transparent');\n    }\n\n    //  駒の画像\n    this.m.pieces = [{ \"id\": \"1\", src: _image2.default.Fu }, { \"id\": \"2\", src: _image2.default.To }, { \"id\": \"3\", src: _image2.default.Kyo }, { \"id\": \"4\", src: _image2.default.nKyo }, { \"id\": \"5\", src: _image2.default.Kei }, { \"id\": \"6\", src: _image2.default.nKei }, { \"id\": \"7\", src: _image2.default.Gin }, { \"id\": \"8\", src: _image2.default.nGin }, { \"id\": \"9\", src: _image2.default.Kin }, { \"id\": \"10\", src: _image2.default.Hisya }, { \"id\": \"11\", src: _image2.default.Ryu }, { \"id\": \"12\", src: _image2.default.Kaku }, { \"id\": \"13\", src: _image2.default.Uma }, { \"id\": \"14\", src: _image2.default.Gyoku }];\n\n    this.render();\n};\n\n//  配列で盤の情報を管理\nBoard.prototype.initPosition = function (line_up_) {\n\n    var array = [];\n    //  すべての盤の場所の初期化\n    for (var x = 0; x < 9; x++) {\n        array[x] = [];\n        for (var y = 0; y < 9; y++) {\n            array[x][y] = {\n                type: 0, //  どの駒が置かれているか(0は空)\n                owner: '', //  持ち主は'sente', 'gote'のどちらか(手前側が)\n                style: '', //  駒に色など装飾をつけるか\n                accesible: false //  その場所に移動することができるか\n            };\n        }\n    }\n\n    //  初期配置\n    //  todo: array[x][y].ownerを反映させる\n    if (line_up_) {\n        //  歩\n        for (var i = 0; i < 9; i++) {\n            array[i][2].type = 16;\n            array[i][6].type = 1;\n        }\n        //  1段目、9段目\n        for (var _i = 0, j = 3, k = 18; _i < 4; _i++) {\n            array[_i][8].type = j;\n            array[8 - _i][8].type = j;\n            j += 2;\n\n            array[_i][0].type = k;\n            array[8 - _i][0].type = k;\n            k += 2;\n        }\n        //  飛車・角・玉\n        array[1][1].type = 25;\n        array[7][1].type = 27;\n        array[4][0].type = 29;\n\n        array[7][7].type = 10;\n        array[1][7].type = 12;\n        array[4][8].type = 14;\n    }\n    return array;\n};\n\n//  描画全般\n//  todo: render.jsを作る\nBoard.prototype.render = function () {\n    var _this = this;\n\n    //  dom_boardの中身を空にする\n    while (this.dom.board.firstChild) {\n        this.dom.board.removeChild(this.dom.board.firstChild);\n    }\n\n    //  将棋盤の描画\n    var tmp_board = new DocumentFragment();\n\n    var _loop = function _loop(y) {\n        var _loop4 = function _loop4(x) {\n\n            var piece = void 0; //  駒のオブジェクト(画像)\n            var piece_owner = void 0; //  駒の持ち主\n            var piece_type = void 0; //  駒の種類(1から15まで)\n\n            //  スタイルが付与されているかどうか\n            var style = _this.stat.position[x][y].style ? true : false;\n\n            //  駒の中身がない場合空のdivオブジェクトを作る\n            if (!_this.stat.position[x][y].type) piece = document.createElement('div');\n\n            //  駒が存在しないとき\n            if (!_this.stat.position[x][y].type) {\n                piece_owner = 'empty';\n            }\n            //  駒が先手のとき\n            else if (_this.stat.position[x][y].type < 15) {\n                    piece_owner = 'sente';\n                    piece_type = String(_this.stat.position[x][y].type);\n                }\n                //  駒が後手のとき\n                else if (_this.stat.position[x][y].type > 15) {\n                        piece_owner = 'gote';\n                        piece_type = String(_this.stat.position[x][y].type - 15);\n                    }\n\n            //  駒の画像ノードを作成する\n            var pieceImage = _this.m.pieces.find(function (piece) {\n                return piece.id === piece_type;\n            });\n            if (pieceImage) {\n                piece = document.createElement('img');\n                piece.src = pieceImage.src;\n            }\n            piece.style.top = _this.m.PIECE_HEIGHT * y + 'px';\n            piece.style.left = _this.m.PIECE_WIDTH * x + 'px';\n            piece.classList.add('koma', piece_owner);\n            if (style) {\n                piece.classList.add(_this.stat.position[x][y].style);\n                _this.stat.position[x][y].style = '';\n            }\n\n            //  クリック時のイベントを設定\n            piece.addEventListener('click', function (event) {\n                var piece_info = {\n                    x: x,\n                    y: y,\n                    type: _this.stat.position[x][y].type,\n                    owner: piece_owner\n                };\n                _this.run(event, piece_info);\n            });\n\n            //  挿入\n            tmp_board.appendChild(piece);\n        };\n\n        for (var x = 0; x < 9; x++) {\n            _loop4(x);\n        }\n    };\n\n    for (var y = 0; y < 9; y++) {\n        _loop(y);\n    }\n    //  全て終わった後に一括で仮domからdomに反映させる\n    this.dom.board.appendChild(tmp_board);\n\n    //  駒台の描画\n\n    //  先手の駒台\n    while (this.dom.piecestand_sente.firstChild) {\n        this.dom.piecestand_sente.removeChild(this.dom.piecestand_sente.firstChild);\n    }\n\n    if (this.stat.piecestand_sente.length) {\n        var tmp_piecestand_sente = new DocumentFragment();\n\n        var _loop2 = function _loop2(index) {\n\n            //  駒の画像ノードを作成\n            var piece_type = String(_this.stat.piecestand_sente[index].type);\n            var piece = document.createElement('img');\n            piece.src = _this.m.pieces.find(function (piece) {\n                return piece.id === piece_type;\n            }).src;\n\n            piece.classList.add('koma', 'sente');\n            if (_this.stat.piecestand_sente[index].style) piece.classList.add(_this.stat.piecestand_sente[index].style);\n\n            //  駒台の乗せる際の位置調整(駒台にちゃんと乗っかるように)\n            var left = 0,\n                top = 0;\n            if (index < 3) {\n                left = _this.m.PIECE_WIDTH * index;\n            } else if (index < 6) {\n                left = _this.m.PIECE_WIDTH * (index - 3);\n                top = _this.m.PIECE_HEIGHT * 1;\n            } else {\n                left = _this.m.PIECE_WIDTH * (index - 6);\n                top = _this.m.PIECE_HEIGHT * 2;\n            }\n            piece.style.left = left + 'px';\n            piece.style.top = top + 'px';\n\n            //  クリック時のイベントを作成\n            piece.addEventListener('click', function () {\n                var piece_info = {\n                    type: _this.stat.piecestand_sente[index].type,\n                    owner: 'sente',\n                    index: index\n                };\n                _this.pickFromPieceStand(event, piece_info);\n            });\n            //  仮domに駒を追加\n            tmp_piecestand_sente.appendChild(piece);\n        };\n\n        for (var index in this.stat.piecestand_sente) {\n            _loop2(index);\n        }\n        //  全て終わった後に一括で仮domからdomに反映させる\n        this.dom.piecestand_sente.appendChild(tmp_piecestand_sente);\n    }\n\n    //  後手の駒台\n    while (this.dom.piecestand_gote.firstChild) {\n        this.dom.piecestand_gote.removeChild(this.dom.piecestand_gote.firstChild);\n    }\n\n    if (this.stat.piecestand_gote.length) {\n        var tmp_piecestand_gote = new DocumentFragment();\n\n        var _loop3 = function _loop3(index) {\n            //  後手なので全ての駒が15されているのを補正\n            //  todo: +15されているのは変なので構成を変える\n\n            var piece_type = String(_this.stat.piecestand_gote[index].type - 15);\n            //  駒の画像のノードを作成\n            var piece = document.createElement('img');\n            piece.src = _this.m.pieces.find(function (piece) {\n                return piece.id === piece_type;\n            }).src;\n            piece.classList.add('koma', 'gote');\n            if (_this.stat.piecestand_gote[index].style) piece.classList.add(_this.stat.piecestand_gote[index].style);\n\n            //  駒台の乗せる際の位置調整(駒台にちゃんと乗っかるように)\n            var left = 0,\n                top = 0;\n            if (index < 3) {\n                left = _this.m.PIECE_WIDTH * index;\n            } else if (index < 6) {\n                left = _this.m.PIECE_WIDTH * (index - 3);\n                top = _this.m.PIECE_HEIGHT;\n            } else {\n                left = _this.m.PIECE_WIDTH * (index - 6);\n                top = _this.m.PIECE_HEIGHT * 2;\n            }\n            piece.style.left = left + 'px';\n            piece.style.top = top + 'px';\n\n            //  クリック時のイベントを作成\n            piece.addEventListener('click', function () {\n                var piece_info = {\n                    type: _this.stat.piecestand_gote[index].type,\n                    owner: 'gote',\n                    index: index\n                };\n                _this.pickFromPieceStand(event, piece_info);\n            });\n            //  仮domに駒を追加\n            tmp_piecestand_gote.appendChild(piece);\n        };\n\n        for (var index in this.stat.piecestand_gote) {\n            _loop3(index);\n        }\n        //  全て終わった後に一括で仮domからdomに反映させる\n        this.dom.piecestand_gote.appendChild(tmp_piecestand_gote);\n    }\n};\n\n//  盤上のマスのタッチイベント\n//  todo: switchで分岐させて別のjsファイルに飛ばしたい\n//  todo: piece_obj -> piece\nBoard.prototype.run = function (e_, piece_) {\n    var _this2 = this;\n\n    // argument\n    // let piece_obj = {\n    //     x: x,\n    //     y: y,\n    //     type: this.stat.position[x][y],\n    //     owner: piece_owner\n    // };\n\n    //  移動先\n    var destination = this.stat.position[piece_.x][piece_.y];\n\n    //  駒が選択されていない状態なら\n    if (!this.stat.phase_select) {\n\n        //  自分の駒のみ選択可\n        if (piece_.owner !== this.stat.turn) return;\n\n        //  駒の状態を記録\n        this.stat.picked = piece_;\n\n        //  選択された駒のスタイルを変更\n        destination.style = 'red';\n\n        //  進むことのできる場所のスタイルを変更する(rule.js)\n        var accesible = (0, _rule2.default)(this.stat.position, piece_);\n        accesible.forEach(function (value_) {\n            _this2.stat.position[value_[0]][value_[1]].style = 'orange';\n            _this2.stat.position[value_[0]][value_[1]].accesible = true;\n        });\n    }\n    //  駒が選択された状態\n    else {\n\n            //  持ち駒を利用しない場合は進める場所のみ進める\n            if (!this.stat.phase_captured) {\n\n                //  移動可能な場所のみ選択可\n                if (!destination.accesible) {\n                    this.stat.phase_select = false;\n                    this.render();\n                    return;\n                }\n\n                //  進んだ先に駒がある場合は駒台へ\n                if (destination.type) this.bringPieceStand(piece_);\n\n                //  駒がもともといた場所を初期化\n                var departure = this.stat.position[this.stat.picked.x][this.stat.picked.y];\n                departure.type = 0;\n                departure.style = \"\";\n                departure.accesible = false;\n            }\n\n            //  持ち駒を利用しているなら\n            if (this.stat.phase_captured) {\n\n                //  置くところに駒があるなら拒否\n                if (destination.type) return;\n\n                //  持ち駒から駒を削除する\n                var piece_stand = this.stat.turn === 'sente' ? this.stat.piecestand_sente : this.stat.piecestand_gote;\n                for (var index in piece_stand) {\n                    if (piece_stand[index].type === this.stat.picked.type) {\n                        piece_stand.splice(index, 1);\n                        break;\n                    }\n                }\n                this.stat.phase_captured = false;\n            }\n\n            //  駒を移動\n            destination.type = this.stat.picked.type;\n\n            //  すべての場所のaccesibleを無効にする\n            this.stat.position = this.stat.position.map(function (row) {\n                return row.map(function (piece) {\n                    if (piece) piece.accesible = false;\n                    return piece;\n                });\n            });\n\n            //  先手・後手の入れ替え\n            this.dom.txt_gote.classList.toggle('half_transparent');\n            this.dom.txt_sente.classList.toggle('half_transparent');\n            this.stat.turn = this.stat.turn === 'sente' ? 'gote' : 'sente';\n        }\n\n    //  盤の状態の更新\n    this.render();\n\n    this.stat.phase_select = !this.stat.phase_select;\n};\n\n//  取った駒を駒台に乗せる\nBoard.prototype.bringPieceStand = function (piece_) {\n\n    //  argument\n    // let piece_ = {\n    //     x: x,\n    //     y: y,\n    //     type: [x][y],\n    //     owner: piece_owner\n    // };\n\n    //  成り駒であれば戻す\n    var promotion_list = _constants2.default.promotionedList;\n    for (var a in promotion_list) {\n        if (piece_.type === promotion_list[a]) {\n            piece_type--;\n            break;\n        }\n    }\n\n    //  駒台に追加、整理\n    if (piece_.owner === 'sente') {\n        this.stat.piecestand_gote.push({\n            type: piece_.type + 15,\n            style: ''\n        });\n        this.stat.piecestand_gote.sort(function (x, y) {\n            return x - y;\n        });\n    } else {\n        this.stat.piecestand_sente.push({\n            type: piece_.type - 15,\n            style: ''\n        });\n        this.stat.piecestand_sente.sort(function (x, y) {\n            return x - y;\n        });\n    }\n};\n\n//  持ち駒を盤に打つ時\n//  todo: 駒台の駒をクリックしたあとのキャンセルが難しい\nBoard.prototype.pickFromPieceStand = function (e_, piece_) {\n\n    /*\n    let piece_args = {\n        type: this.stat.piecestand_sente[index],\n        owner: 'sente',\n        index: index\n    };\n    */\n\n    //  すでに選択状態なら選択不可\n    if (this.stat.phase_select) return;\n\n    //  todo: すでに持ち駒を選択しているなら選択解除\n    // if (this.stat.phase_captured) {\n    //     this.stat.phase_captured = false;\n    //     return;\n    // }\n\n    //  自分の持ち駒のみ選択可\n    if (piece_.owner !== this.stat.turn) return;\n\n    //  持ち駒の種類を記録\n    this.stat.picked = piece_;\n\n    //  piecestandをオブジェクト形式で\n    var piecestand = piece_.owner === 'sente' ? this.stat.piecestand_sente : this.stat.piecestand_gote;\n    piecestand[piecestand.length - 1] = {\n        type: piece_.type,\n        style: 'red'\n    };\n\n    //  選択状態へ移行\n    this.stat.phase_select = true;\n    //  持ち駒の選択状態に移行\n    this.stat.phase_captured = true;\n\n    this.render();\n};\n\n//# sourceURL=webpack:///./src/main/board.js?");

/***/ }),

/***/ "./src/main/constants.js":
/*!*******************************!*\
  !*** ./src/main/constants.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  promotionList: [1, 3, 5, 7, 10, 12, 16, 18, 20, 22, 25, 27],\n  promotionedList: [2, 4, 6, 8, 11, 13, 17, 19, 21, 23, 26, 28]\n};\n\n//# sourceURL=webpack:///./src/main/constants.js?");

/***/ }),

/***/ "./src/main/image.js":
/*!***************************!*\
  !*** ./src/main/image.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _fu = __webpack_require__(/*! ../assets/img/fu.png */ \"./src/assets/img/fu.png\");\n\nvar _fu2 = _interopRequireDefault(_fu);\n\nvar _to = __webpack_require__(/*! ../assets/img/to.png */ \"./src/assets/img/to.png\");\n\nvar _to2 = _interopRequireDefault(_to);\n\nvar _kei = __webpack_require__(/*! ../assets/img/kei.png */ \"./src/assets/img/kei.png\");\n\nvar _kei2 = _interopRequireDefault(_kei);\n\nvar _nkei = __webpack_require__(/*! ../assets/img/nkei.png */ \"./src/assets/img/nkei.png\");\n\nvar _nkei2 = _interopRequireDefault(_nkei);\n\nvar _kyo = __webpack_require__(/*! ../assets/img/kyo.png */ \"./src/assets/img/kyo.png\");\n\nvar _kyo2 = _interopRequireDefault(_kyo);\n\nvar _nkyo = __webpack_require__(/*! ../assets/img/nkyo.png */ \"./src/assets/img/nkyo.png\");\n\nvar _nkyo2 = _interopRequireDefault(_nkyo);\n\nvar _gin = __webpack_require__(/*! ../assets/img/gin.png */ \"./src/assets/img/gin.png\");\n\nvar _gin2 = _interopRequireDefault(_gin);\n\nvar _ngin = __webpack_require__(/*! ../assets/img/ngin.png */ \"./src/assets/img/ngin.png\");\n\nvar _ngin2 = _interopRequireDefault(_ngin);\n\nvar _kin = __webpack_require__(/*! ../assets/img/kin.png */ \"./src/assets/img/kin.png\");\n\nvar _kin2 = _interopRequireDefault(_kin);\n\nvar _hi = __webpack_require__(/*! ../assets/img/hi.png */ \"./src/assets/img/hi.png\");\n\nvar _hi2 = _interopRequireDefault(_hi);\n\nvar _ryu = __webpack_require__(/*! ../assets/img/ryu.png */ \"./src/assets/img/ryu.png\");\n\nvar _ryu2 = _interopRequireDefault(_ryu);\n\nvar _kaku = __webpack_require__(/*! ../assets/img/kaku.png */ \"./src/assets/img/kaku.png\");\n\nvar _kaku2 = _interopRequireDefault(_kaku);\n\nvar _uma = __webpack_require__(/*! ../assets/img/uma.png */ \"./src/assets/img/uma.png\");\n\nvar _uma2 = _interopRequireDefault(_uma);\n\nvar _ou = __webpack_require__(/*! ../assets/img/ou.png */ \"./src/assets/img/ou.png\");\n\nvar _ou2 = _interopRequireDefault(_ou);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  Fu: _fu2.default, To: _to2.default, Kei: _kei2.default, nKei: _nkei2.default, Kyo: _kyo2.default, nKyo: _nkyo2.default, Gin: _gin2.default, nGin: _ngin2.default, Kin: _kin2.default, Hisya: _hi2.default, Ryu: _ryu2.default, Kaku: _kaku2.default, Uma: _uma2.default, Gyoku: _ou2.default\n};\n\n//# sourceURL=webpack:///./src/main/image.js?");

/***/ }),

/***/ "./src/main/rule.js":
/*!**************************!*\
  !*** ./src/main/rule.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (pos_, piece_obj_) {\n\n    /*\n    argument\n    let piece_obj = {\n        x: x,\n        y: y,\n        type: pos_[x][y],\n        owner: koma_owner\n    };\n    */\n\n    /*\n     return\n     let result = [\n        [2,3],\n        [3,4]\n    ];\n     */\n\n    // 歩なら一つ前の場所\n    var result = [];\n\n    //  簡略化\n    var x = piece_obj_.x;\n    var y = piece_obj_.y;\n\n    //  駒の種類を取得\n    var sente = piece_obj_.owner === 'sente';\n    var type = sente ? piece_obj_.type : piece_obj_.type - 15;\n\n    //  向き\n    var stright = sente ? [x, y - 1] : [x, y + 1];\n    var back = sente ? [x, y + 1] : [x, y - 1];\n    var right = sente ? [x + 1, y] : [x - 1, y];\n    var left = sente ? [x - 1, y] : [x + 1, y];\n    var upper_right = sente ? [x + 1, y - 1] : [x - 1, y + 1];\n    var upper_left = sente ? [x - 1, y - 1] : [x + 1, y + 1];\n    var down_right = sente ? [x + 1, y + 1] : [x - 1, y - 1];\n    var down_left = sente ? [x - 1, y + 1] : [x + 1, y + 1];\n    //  桂馬\n    var kei_right = sente ? [x + 1, y - 2] : [x - 1, y + 2];\n    var kei_left = sente ? [x - 1, y - 2] : [x + 1, y + 2];\n\n    //  前と縦\n    var forward = [];\n    var vertical = [];\n    for (var i = y - 1; i >= 0; i--) {\n        if (sente) forward.push([x, i]);\n        vertical.push([x, i]);\n        if (pos_[x][i].type !== 0) break;\n    }\n    for (var _i = y + 1; _i < 9; _i++) {\n        if (!sente) forward.push([x, _i]);\n        vertical.push([x, _i]);\n        if (pos_[x][_i].type !== 0) break;\n    }\n\n    //  横\n    var horizonal = [];\n    for (var _i2 = x + 1; _i2 < 9; _i2++) {\n        horizonal.push([_i2, y]);\n        if (pos_[_i2][y].type !== 0) break;\n    }\n    for (var _i3 = x - 1; _i3 >= 0; _i3--) {\n        horizonal.push([_i3, y]);\n        if (pos_[_i3][y].type !== 0) break;\n    }\n\n    //  斜め\n    var slant = [];\n    // 右下\n    for (var _i4 = x, a = 1; _i4 < 8; _i4++) {\n        slant.push([x + a, y + a]);\n        if (pos_[x + a][y + a] === undefined || pos_[x + a][y + a].type !== 0) break;\n        a++;\n    }\n    // 左上\n    for (var _i5 = x, _a = 1; _i5 > 0; _i5--) {\n        if (x - _a < 0) break;\n        slant.push([x - _a, y - _a]);\n        if (pos_[x - _a][y - _a] === undefined || pos_[x - _a][y - _a].type !== 0) {\n            break;\n        }\n        _a++;\n    }\n    // 右上\n    for (var _i6 = x, _a2 = 1; _i6 < 8; _i6++) {\n        slant.push([x + _a2, y - _a2]);\n        if (pos_[x + _a2][y - _a2] === undefined || pos_[x + _a2][y - _a2].type !== 0) break;\n        _a2++;\n    }\n    // 右下\n    for (var _i7 = x, _a3 = 1; _i7 > 0; _i7--) {\n        if (x - _a3 < 0) break;\n        slant.push([x - _a3, y + _a3]);\n        if (pos_[x - _a3][y + _a3] === undefined || pos_[x - _a3][y + _a3].type !== 0) break;\n        _a3++;\n    }\n\n    /*\n    {\"id\": \"1\", src: \"fu.png\"},\n    {\"id\": \"2\", src: \"to.png\"},\n    {\"id\": \"3\", src: \"kyo.png\"},\n    {\"id\": \"4\", src: \"nkyo.png\"},\n    {\"id\": \"5\", src: \"kei.png\"},\n    {\"id\": \"6\", src: \"nkei.png\"},\n    {\"id\": \"7\", src: \"gin.png\"},\n    {\"id\": \"8\", src: \"ngin.png\"},\n    {\"id\": \"9\", src: \"kin.png\"},\n    {\"id\": \"10\", src: \"hi.png\"},\n    {\"id\": \"11\", src: \"ryu.png\"},\n    {\"id\": \"12\", src: \"kaku.png\"},\n    {\"id\": \"13\", src: \"uma.png\"},\n    {\"id\": \"14\", src: \"ou.png\"}\n    */\n\n    //  todo: 角・馬追加\n    switch (type) {\n        //  歩\n        case 1:\n            result.push(stright);\n            break;\n        //  金、金と同じ動きの成り駒\n        case 2:\n        case 4:\n        case 6:\n        case 8:\n        case 9:\n            result.push(stright);\n            result.push(right);\n            result.push(left);\n            result.push(upper_right);\n            result.push(upper_left);\n            result.push(back);\n            break;\n        //  香車\n        case 3:\n            forward.forEach(function (value_) {\n                result.push(value_);\n            });\n            break;\n        //  桂馬\n        case 5:\n            result.push(kei_right);\n            result.push(kei_left);\n            break;\n        //  銀\n        case 7:\n            result.push(stright);\n            result.push(upper_right);\n            result.push(upper_left);\n            result.push(down_right);\n            result.push(down_left);\n            break;\n        //  飛車\n        case 10:\n            vertical.forEach(function (value_) {\n                result.push(value_);\n            });\n            horizonal.forEach(function (value_) {\n                result.push(value_);\n            });\n            break;\n        //  龍\n        case 11:\n            vertical.forEach(function (value_) {\n                result.push(value_);\n            });\n            horizonal.forEach(function (value_) {\n                result.push(value_);\n            });\n            result.push(upper_right);\n            result.push(upper_left);\n            result.push(down_right);\n            result.push(down_left);\n            break;\n        //  角\n        case 12:\n            slant.forEach(function (value_) {\n                result.push(value_);\n            });\n            break;\n        //  馬\n        case 13:\n            slant.forEach(function (value_) {\n                result.push(value_);\n            });\n            result.push(stright);\n            result.push(right);\n            result.push(left);\n            result.push(back);\n            break;\n        //  玉\n        case 14:\n            result.push(stright);\n            result.push(right);\n            result.push(left);\n            result.push(upper_right);\n            result.push(upper_left);\n            result.push(down_right);\n            result.push(down_left);\n            result.push(back);\n            break;\n    }\n\n    //  盤上でない場所、味方の駒がいる場所は除外\n    result = result.filter(function (elm_) {\n        var is_undefined = pos_[elm_[0]][elm_[1]] === undefined;\n        if (is_undefined) return false;\n\n        var empty = pos_[elm_[0]][elm_[1]].type === 0;\n        var enemy = sente ? 14 < pos_[elm_[0]][elm_[1]].type : pos_[elm_[0]][elm_[1]].type <= 14;\n        if (!(empty || enemy)) return false;\n\n        return true;\n    });\n\n    return result;\n};\n\n;\n\n//  todo: 完成させる\n\n//  指定された駒の情報、全体の駒の位置をもとに進める場所を配列として返す。\nexports.forPieceStand = function (pos_, picked_obj_) {\n\n    /*\n    argument\n    let piece_obj = {\n        type: pos_[x][y],\n        owner: koma_owner\n    };\n    */\n\n    console.log(\"this is rule for piecestand\");\n};\n\n//# sourceURL=webpack:///./src/main/rule.js?");

/***/ })

/******/ });