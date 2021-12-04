/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// import Example from \"./scripts/example\";\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  __webpack_require__(/*! ./scripts/scripts.js */ \"./src/scripts/scripts.js\"); // const body = document.querySelector(\"body\")\n  // const example = new Example(body)\n  // example.handleClick\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFHQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoREMsRUFBQUEsbUJBQU8sQ0FBQyxzREFBRCxDQUFQLENBRGdELENBRWhEO0FBQ0E7QUFDQTs7QUFDSCxDQUxEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSmF2YVNjcmlwdF9Qcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgcmVxdWlyZSgnLi9zY3JpcHRzL3NjcmlwdHMuanMnKVxyXG4gICAgLy8gY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbiAgICAvLyBjb25zdCBleGFtcGxlID0gbmV3IEV4YW1wbGUoYm9keSlcclxuICAgIC8vIGV4YW1wbGUuaGFuZGxlQ2xpY2tcclxufSkiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/scripts.js":
/*!********************************!*\
  !*** ./src/scripts/scripts.js ***!
  \********************************/
/***/ (function() {

eval("var app = document.getElementById('root');\nwindow.app = app;\nvar request = new XMLHttpRequest();\nrequest.open('GET', \"https://api.cryptowat.ch/markets/kraken/btceur/price\", true);\n\nrequest.onload = function () {\n  var data = JSON.parse(this.response);\n  console.log(data);\n};\n\nrequest.send(); // }\n// request.send()\n// function getData() {\n//     const response = await fetch('https://ghibliapi.herokuapp.com/films')\n//     const data = await response.json()\n//   }\n//   +//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0X1Byb2plY3QvLi9zcmMvc2NyaXB0cy9zY3JpcHRzLmpzPzI0NTciXSwibmFtZXMiOlsiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbmxvYWQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic2VuZCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWjtBQUVBQyxNQUFNLENBQUNILEdBQVAsR0FBYUEsR0FBYjtBQUlBLElBQUlJLE9BQU8sR0FBRyxJQUFJQyxjQUFKLEVBQWQ7QUFFQUQsT0FBTyxDQUFDRSxJQUFSLENBQWEsS0FBYixFQUFvQixzREFBcEIsRUFBNEUsSUFBNUU7O0FBRUFGLE9BQU8sQ0FBQ0csTUFBUixHQUFpQixZQUFXO0FBQ3hCLE1BQUlDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0MsUUFBaEIsQ0FBWDtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBWjtBQUNILENBSEQ7O0FBS0FKLE9BQU8sQ0FBQ1UsSUFBUixHLENBS0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcblxyXG53aW5kb3cuYXBwID0gYXBwO1xyXG5cclxuXHJcblxyXG52YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcblxyXG5yZXF1ZXN0Lm9wZW4oJ0dFVCcsIFwiaHR0cHM6Ly9hcGkuY3J5cHRvd2F0LmNoL21hcmtldHMva3Jha2VuL2J0Y2V1ci9wcmljZVwiLCB0cnVlKVxyXG5cclxucmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbn1cclxuXHJcbnJlcXVlc3Quc2VuZCgpO1xyXG5cclxuXHJcblxyXG5cclxuLy8gfVxyXG5cclxuLy8gcmVxdWVzdC5zZW5kKClcclxuXHJcbi8vIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2doaWJsaWFwaS5oZXJva3VhcHAuY29tL2ZpbG1zJylcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuLy8gICB9XHJcblxyXG4vLyAgICsiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvc2NyaXB0cy5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/scripts.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0X1Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;