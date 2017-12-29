(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mocha-run-jest-tests"] = factory();
	else
		root["mocha-run-jest-tests"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJestStatements = getJestStatements;
function getJestStatements(mocha) {
  return {
    test: function test(name, cb) {
      return mocha.it(name, cb);
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImdldEplc3RTdGF0ZW1lbnRzIiwibW9jaGEiLCJ0ZXN0IiwibmFtZSIsImNiIiwiaXQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQWdCQSxpQixHQUFBQSxpQjtBQUFULFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFpQztBQUN0QyxTQUFPO0FBQ0xDLFVBQU0sY0FBQ0MsSUFBRCxFQUFPQyxFQUFQO0FBQUEsYUFBY0gsTUFBTUksRUFBTixDQUFTRixJQUFULEVBQWVDLEVBQWYsQ0FBZDtBQUFBO0FBREQsR0FBUDtBQUdEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL21vc2hjaGFuc2tpeS9XZWJzdG9ybVByb2plY3RzL21vY2hhLXJ1bi1qZXN0LXRlc3RzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldEplc3RTdGF0ZW1lbnRzKG1vY2hhKXtcclxuICByZXR1cm4ge1xyXG4gICAgdGVzdDogKG5hbWUsIGNiKSA9PiBtb2NoYS5pdChuYW1lLCBjYilcclxuICB9XHJcbn0iXX0=

/***/ })
/******/ ]);
});