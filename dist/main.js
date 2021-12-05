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

eval("// import Example from \"./scripts/example\";\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  __webpack_require__(/*! ./scripts/scripts.js */ \"./src/scripts/scripts.js\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFHQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoREMsRUFBQUEsbUJBQU8sQ0FBQyxzREFBRCxDQUFQO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovL0phdmFTY3JpcHRfUHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIHJlcXVpcmUoJy4vc2NyaXB0cy9zY3JpcHRzLmpzJylcclxufSkiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/scripts.js":
/*!********************************!*\
  !*** ./src/scripts/scripts.js ***!
  \********************************/
/***/ (function() {

eval("var app = document.getElementById('root');\nwindow.app = app;\nconsole.log(\"Working\");\nvar url = \"http://rest.coinapi.io\";\nvar path1 = \"/v1/exchangerate/BTC/USD\";\nvar path2 = \"/v1/ohlcv/BTC/history?period_id=1MIN&time_start=2016-01-01T00:00:00&time_end=2016-02-01T00:00:00\";\nvar path3 = \"/v1/exchangerate/history/periods\";\nvar path4 = \"/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1MIN\";\nvar path5 = \"/v1/exchangerate/BTC/USD/history\";\nvar path6 = \"/v1/exchangerate/BTC/ETH/history?period_id=1MIN?time_start=2016-01-01T00:00:00&time_end=2016-02-01T00:00:00\"; // const apiKey = \"?apikey=9BE11048-8939-47D8-8CEC-22E693B66137\"\n\nvar request = new XMLHttpRequest();\nrequest.open('GET', url + path6, true); // request.open('GET', \"https://rest.coinapi.io/v1/ohlcv/BTC/history?period_id=1MIN&time_start=2016-01-01T00:00:00&time_end=2016-02-01T00:00:00&limit=100\", true)\n\nrequest.setRequestHeader('Accept', 'application/json');\nrequest.setRequestHeader('X-CoinAPI-Key', '9BE11048-8939-47D8-8CEC-22E693B66137'); // request.setRequestHeader('Accept-Encoding', 'deflate, gzip')\n// if (request.status >= 200 && request.status < 400) {\n\nconsole.log(request.status);\n\nrequest.onload = function () {\n  var data = JSON.parse(this.response);\n  console.log(data);\n}; // }\n\n\nrequest.send(); //---------------------------------------------------------------------------------\n// function getData() {\n//     const response = await fetch('https://ghibliapi.herokuapp.com/films')\n//     const data = await response.json()\n//   \n//---------------------------------------------------------------------------------\n// const https = require('../../node_modules/https/package');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0X1Byb2plY3QvLi9zcmMvc2NyaXB0cy9zY3JpcHRzLmpzPzI0NTciXSwibmFtZXMiOlsiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJwYXRoMSIsInBhdGgyIiwicGF0aDMiLCJwYXRoNCIsInBhdGg1IiwicGF0aDYiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInN0YXR1cyIsIm9ubG9hZCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZSIsInNlbmQiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQVo7QUFFQUMsTUFBTSxDQUFDSCxHQUFQLEdBQWFBLEdBQWI7QUFFQUksT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUlBLElBQU1DLEdBQUcsR0FBRyx3QkFBWjtBQUVBLElBQUlDLEtBQUssR0FBRywwQkFBWjtBQUNBLElBQUlDLEtBQUssR0FBRyxrR0FBWjtBQUNBLElBQUlDLEtBQUssR0FBRyxrQ0FBWjtBQUNBLElBQUlDLEtBQUssR0FBRyx1REFBWjtBQUNBLElBQUlDLEtBQUssR0FBRyxrQ0FBWjtBQUNBLElBQUlDLEtBQUssR0FBRyw2R0FBWixDLENBRUE7O0FBRUEsSUFBSUMsT0FBTyxHQUFHLElBQUlDLGNBQUosRUFBZDtBQUdBRCxPQUFPLENBQUNFLElBQVIsQ0FBYSxLQUFiLEVBQW9CVCxHQUFHLEdBQUNNLEtBQXhCLEVBQStCLElBQS9CLEUsQ0FDQTs7QUFDQUMsT0FBTyxDQUFDRyxnQkFBUixDQUF5QixRQUF6QixFQUFtQyxrQkFBbkM7QUFDQUgsT0FBTyxDQUFDRyxnQkFBUixDQUF5QixlQUF6QixFQUEwQyxzQ0FBMUMsRSxDQUVBO0FBQ0E7O0FBQ0laLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxPQUFPLENBQUNJLE1BQXBCOztBQUNBSixPQUFPLENBQUNLLE1BQVIsR0FBaUIsWUFBVztBQUN4QixNQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtDLFFBQWhCLENBQVg7QUFDQWxCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYyxJQUFaO0FBQ0gsQ0FIRCxDLENBSUo7OztBQUNJTixPQUFPLENBQUNVLElBQVIsRyxDQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG5cclxud2luZG93LmFwcCA9IGFwcDtcclxuXHJcbmNvbnNvbGUubG9nKFwiV29ya2luZ1wiKTtcclxuXHJcblxyXG5cclxuY29uc3QgdXJsID0gXCJodHRwOi8vcmVzdC5jb2luYXBpLmlvXCJcclxuXHJcbmxldCBwYXRoMSA9IFwiL3YxL2V4Y2hhbmdlcmF0ZS9CVEMvVVNEXCJcclxubGV0IHBhdGgyID0gXCIvdjEvb2hsY3YvQlRDL2hpc3Rvcnk/cGVyaW9kX2lkPTFNSU4mdGltZV9zdGFydD0yMDE2LTAxLTAxVDAwOjAwOjAwJnRpbWVfZW5kPTIwMTYtMDItMDFUMDA6MDA6MDBcIlxyXG5sZXQgcGF0aDMgPSBcIi92MS9leGNoYW5nZXJhdGUvaGlzdG9yeS9wZXJpb2RzXCJcclxubGV0IHBhdGg0ID0gXCIvdjEvb2hsY3YvQklUU1RBTVBfU1BPVF9CVENfVVNEL2xhdGVzdD9wZXJpb2RfaWQ9MU1JTlwiIFxyXG5sZXQgcGF0aDUgPSBcIi92MS9leGNoYW5nZXJhdGUvQlRDL1VTRC9oaXN0b3J5XCJcclxubGV0IHBhdGg2ID0gXCIvdjEvZXhjaGFuZ2VyYXRlL0JUQy9FVEgvaGlzdG9yeT9wZXJpb2RfaWQ9MU1JTj90aW1lX3N0YXJ0PTIwMTYtMDEtMDFUMDA6MDA6MDAmdGltZV9lbmQ9MjAxNi0wMi0wMVQwMDowMDowMFwiXHJcblxyXG4vLyBjb25zdCBhcGlLZXkgPSBcIj9hcGlrZXk9OUJFMTEwNDgtODkzOS00N0Q4LThDRUMtMjJFNjkzQjY2MTM3XCJcclxuXHJcbnZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgXHJcblxyXG5cclxucmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwrcGF0aDYsIHRydWUpXHJcbi8vIHJlcXVlc3Qub3BlbignR0VUJywgXCJodHRwczovL3Jlc3QuY29pbmFwaS5pby92MS9vaGxjdi9CVEMvaGlzdG9yeT9wZXJpb2RfaWQ9MU1JTiZ0aW1lX3N0YXJ0PTIwMTYtMDEtMDFUMDA6MDA6MDAmdGltZV9lbmQ9MjAxNi0wMi0wMVQwMDowMDowMCZsaW1pdD0xMDBcIiwgdHJ1ZSlcclxucmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbnJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignWC1Db2luQVBJLUtleScsICc5QkUxMTA0OC04OTM5LTQ3RDgtOENFQy0yMkU2OTNCNjYxMzcnKVxyXG5cclxuLy8gcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQtRW5jb2RpbmcnLCAnZGVmbGF0ZSwgZ3ppcCcpXHJcbi8vIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3Quc3RhdHVzKVxyXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuLy8gfVxyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9naGlibGlhcGkuaGVyb2t1YXBwLmNvbS9maWxtcycpXHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbi8vICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGNvbnN0IGh0dHBzID0gcmVxdWlyZSgnLi4vLi4vbm9kZV9tb2R1bGVzL2h0dHBzL3BhY2thZ2UnKTtcclxuXHJcbiJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zY3JpcHRzLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/scripts.js\n");

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