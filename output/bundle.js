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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var button = document.querySelectorAll('.info');\nvar container = document.getElementById('container');\nbutton.forEach(function (link) {\n  link.addEventListener('click', function (e) {\n    e.preventDefault();\n    var firstDiv = document.createElement('div');\n    container.appendChild(firstDiv);\n    firstDiv.setAttribute('id', 'main');\n    firstDiv.classList.add('main');\n    var main = document.getElementById('main');\n    var secondDiv = document.createElement('div');\n    main.appendChild(secondDiv);\n    secondDiv.setAttribute('id', 'modal');\n    secondDiv.classList.add('modal');\n    var thirdDiv = document.createElement('div');\n    modal.appendChild(thirdDiv);\n    thirdDiv.setAttribute('id', 'header');\n    var header = document.getElementById('header');\n    var arrow = document.createElement('span');\n    arrow.classList.add('icon-arrow-left2');\n    header.appendChild(arrow);\n    var card = e.path[3];\n    var imgElement = card.firstElementChild;\n    var imgValue = imgElement.getAttribute('src');\n    var img = document.createElement('img');\n    img.setAttribute('src', imgValue);\n    modal.appendChild(img);\n    var titleElement = imgElement.nextElementSibling;\n    var titleValue = titleElement.firstElementChild;\n    titleValue = titleValue.textContent;\n    var title = document.createElement('span');\n    title.setAttribute('id', 'test');\n    title.classList.add('modal-title');\n    title.textContent = titleValue;\n    modal.appendChild(title);\n    var description = document.createElement('p');\n    description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nesciunt voluptatem aliquid eveniet praesentium natus, reiciendis cum tempore, dolore qui pariatur, aspernatur vero impedit non. Dolor quaerat eveniet fugiat sed.';\n    modal.appendChild(description);\n    var arrowIcon = header.firstElementChild;\n    arrowIcon.addEventListener('click', function () {\n      main.remove();\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });