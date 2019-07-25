/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"lwc~main","node_vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/lib/framework/main.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var my_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my/app */ "./src/modules/my/app/app.js");



customElements.define('my-app', Object(lwc__WEBPACK_IMPORTED_MODULE_0__["buildCustomElementConstructor"])(my_app__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./src/modules/my/app/app.css":
/*!************************************!*\
  !*** ./src/modules/my/app/app.css ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylesheet(hostSelector, shadowSelector, nativeShadow) {
  return ".center" + shadowSelector + " {text-align: center;}\n.link" + shadowSelector + " {border: none;padding: 10px;border-radius: 5px;text-decoration: none;background-color: #ff6000;color: white;margin-left: 33%;margin-right: 33%;display: inline-block;margin-top: 1em;}\n.info" + shadowSelector + " {color: black;background-color: #e4f2f8;margin: auto;padding: 15px 10px;text-align: left;width: 300px;border-radius: 5px;}\n.code" + shadowSelector + " {font-family: monospace;font-size: large;}\n.container" + shadowSelector + " {margin-top: 30px;}\nimg" + shadowSelector + " {max-width: 150px;}\n.greeting" + shadowSelector + " {height: 75px;}\n";
}
/* harmony default export */ __webpack_exports__["default"] = ([stylesheet]);

/***/ }),

/***/ "./src/modules/my/app/app.html":
/*!*************************************!*\
  !*** ./src/modules/my/app/app.html ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ "./src/modules/my/app/app.css");
/* harmony import */ var my_greeting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my/greeting */ "./src/modules/my/greeting/greeting.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/lib/framework/main.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_2__);





function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    c: api_custom_element,
    h: api_element,
    t: api_text
  } = $api;
  return [api_element("div", {
    classMap: {
      "center": true,
      "greeting": true
    },
    key: 2
  }, [api_custom_element("my-greeting", my_greeting__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: {
      "speed": "medium"
    },
    key: 3
  }, [])]), api_element("div", {
    classMap: {
      "center": true
    },
    key: 4
  }, [api_element("img", {
    attrs: {
      "src": "./resources/lwc.png"
    },
    key: 5
  }, [])]), api_element("div", {
    classMap: {
      "center": true
    },
    key: 6
  }, [api_element("div", {
    classMap: {
      "container": true
    },
    key: 7
  }, [api_element("p", {
    classMap: {
      "info": true
    },
    key: 8
  }, [api_text("Edit "), api_element("strong", {
    classMap: {
      "code": true
    },
    key: 9
  }, [api_text("src/modules/my/app/app.html")]), api_element("br", {
    key: 10
  }, []), api_text("and save for live reload.")])]), api_element("div", {
    key: 11
  }, [api_element("a", {
    classMap: {
      "link": true
    },
    attrs: {
      "href": "https://lwc.dev",
      "target": "_blank"
    },
    key: 12
  }, [api_text("Learn LWC")])])])];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_2__["registerTemplate"])(tmpl));
tmpl.stylesheets = [];

if (_app_css__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _app_css__WEBPACK_IMPORTED_MODULE_0__["default"])
}
tmpl.stylesheetTokens = {
  hostAttribute: "my-app-_app-host",
  shadowAttribute: "my-app-_app"
};


/***/ }),

/***/ "./src/modules/my/app/app.js":
/*!***********************************!*\
  !*** ./src/modules/my/app/app.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.html */ "./src/modules/my/app/app.html");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/lib/framework/main.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_1__);




class App extends lwc__WEBPACK_IMPORTED_MODULE_1__["LightningElement"] {}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_1__["registerComponent"])(App, {
  tmpl: _app_html__WEBPACK_IMPORTED_MODULE_0__["default"]
}));

/***/ }),

/***/ "./src/modules/my/button/button.html":
/*!*******************************************!*\
  !*** ./src/modules/my/button/button.html ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css */ "./node_modules/lwc-services/lib/utils/webpack/mocks/empty-style.js");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/lib/framework/main.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_1__);




function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    t: api_text,
    b: api_bind,
    h: api_element
  } = $api;
  const {
    _m0
  } = $ctx;
  return [api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-button_success": true
    },
    key: 2,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.getData))
    }
  }, [api_text("Get Data")])];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_1__["registerTemplate"])(tmpl));
tmpl.stylesheets = [];

if (_button_css__WEBPACK_IMPORTED_MODULE_0___default.a) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _button_css__WEBPACK_IMPORTED_MODULE_0___default.a)
}
tmpl.stylesheetTokens = {
  hostAttribute: "my-button-_button-host",
  shadowAttribute: "my-button-_button"
};


/***/ }),

/***/ "./src/modules/my/button/button.js":
/*!*****************************************!*\
  !*** ./src/modules/my/button/button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/lib/framework/main.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.html */ "./src/modules/my/button/button.html");
/* harmony import */ var utils_sldsElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/sldsElement */ "./src/modules/utils/sldsElement/sldsElement.js");





class Button extends utils_sldsElement__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(...args) {
    super(...args);
    this.message = void 0;
  }

  getData() {
    // eslint-disable-next-line no-alert
    //alert(this.message);
    fetch(`http://localhost:5000/upper?msg=${this.message}`).then(response => {
      return response.text();
    }).then(text => {
      // eslint-disable-next-line no-alert
      alert(text);
    }).catch(error => {
      // eslint-disable-next-line no-alert
      alert(`Failed: ${error}`);
    });
  }

}

Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerDecorators"])(Button, {
  publicProps: {
    message: {
      config: 0
    }
  }
})

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerComponent"])(Button, {
  tmpl: _button_html__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/modules/my/greeting/greeting.css":
/*!**********************************************!*\
  !*** ./src/modules/my/greeting/greeting.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylesheet(hostSelector, shadowSelector, nativeShadow) {
  return ".greet" + shadowSelector + " {font-size: xx-large;}\n.fade-fast" + shadowSelector + " {opacity: 0;animation: fade-in 1s;}\n.fade-slow" + shadowSelector + " {opacity: 0;animation: fade-in 5s;}\n.fade-medium" + shadowSelector + " {opacity: 0;animation: fade-in 2s;}\n@keyframes fade-in {0% {opacity: 0;}\n35% {opacity: 1;}\n65% {opacity: 1;}\n100% {opacity: 0;}\n}.hide" + shadowSelector + " {opacity: 0;}\n";
}
/* harmony default export */ __webpack_exports__["default"] = ([stylesheet]);

/***/ }),

/***/ "./src/modules/my/greeting/greeting.html":
/*!***********************************************!*\
  !*** ./src/modules/my/greeting/greeting.html ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _greeting_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting.css */ "./src/modules/my/greeting/greeting.css");
/* harmony import */ var my_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my/button */ "./src/modules/my/button/button.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/lib/framework/main.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_2__);





function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    c: api_custom_element,
    d: api_dynamic,
    h: api_element,
    b: api_bind
  } = $api;
  const {
    _m0
  } = $ctx;
  return [api_custom_element("my-button", my_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: {
      "message": $cmp.greeting
    },
    key: 2
  }, []), api_element("div", {
    className: $cmp.animationClass,
    key: 3,
    on: {
      "animationend": _m0 || ($ctx._m0 = api_bind($cmp.handleAnimationEnd))
    }
  }, [api_element("span", {
    classMap: {
      "greet": true
    },
    key: 4
  }, [api_dynamic($cmp.greeting)])])];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_2__["registerTemplate"])(tmpl));
tmpl.stylesheets = [];

if (_greeting_css__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _greeting_css__WEBPACK_IMPORTED_MODULE_0__["default"])
}
tmpl.stylesheetTokens = {
  hostAttribute: "my-greeting-_greeting-host",
  shadowAttribute: "my-greeting-_greeting"
};


/***/ }),

/***/ "./src/modules/my/greeting/greeting.js":
/*!*********************************************!*\
  !*** ./src/modules/my/greeting/greeting.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/lib/framework/main.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _greeting_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greeting.html */ "./src/modules/my/greeting/greeting.html");




const greetings = ['Hello', 'Bonjour', '你好', 'Hola', 'Привет', 'こんにちは', 'Guten Tag', 'ጤና ይስጥልኝ', 'Ciao', 'नमस्ते', '안녕하세요'];
const SPEED_CLASS_MAP = {
  slow: 'fade-slow',
  fast: 'fade-fast',
  medium: 'fade-medium'
};
const DEFAULT_SPEED = 'medium';

class Greeting extends lwc__WEBPACK_IMPORTED_MODULE_0__["LightningElement"] {
  constructor(...args) {
    super(...args);
    this.animationSpeed = DEFAULT_SPEED;
    this.index = 0;
    this.isAnimating = true;
  }

  set speed(value) {
    if (SPEED_CLASS_MAP.hasOwnProperty(value)) {
      this.animationSpeed = value;
    } else {
      this.animationSpeed = DEFAULT_SPEED;
    }

    this.isAnimating = true;
  } // Return the internal speed property


  get speed() {
    return this.animationSpeed;
  } // Get the current greeting


  get greeting() {
    return greetings[this.index];
  } // Map slow, medium, fast to CSS Animations


  get animationClass() {
    if (this.isAnimating) {
      return SPEED_CLASS_MAP[this.speed];
    }

    return 'hide';
  } //Handle the animation ending, update to next hello


  handleAnimationEnd() {
    this.isAnimating = false;
    this.index = (this.index + 1) % greetings.length;
    setTimeout(() => this.updateGreeting(), 500);
  } // Update to the next greeting and start animating


  updateGreeting() {
    this.isAnimating = true;
  }

}

Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerDecorators"])(Greeting, {
  publicProps: {
    speed: {
      config: 3
    }
  },
  track: {
    animationSpeed: 1,
    index: 1,
    isAnimating: 1
  }
})

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_0__["registerComponent"])(Greeting, {
  tmpl: _greeting_html__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/modules/utils/sldsElement/sldsElement.html":
/*!********************************************************!*\
  !*** ./src/modules/utils/sldsElement/sldsElement.html ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sldsElement_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sldsElement.css */ "./node_modules/lwc-services/lib/utils/webpack/mocks/empty-style.js");
/* harmony import */ var _sldsElement_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sldsElement_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/lib/framework/main.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_1__);




function tmpl($api, $cmp, $slotset, $ctx) {
  const {} = $api;
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_1__["registerTemplate"])(tmpl));
tmpl.stylesheets = [];

if (_sldsElement_css__WEBPACK_IMPORTED_MODULE_0___default.a) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _sldsElement_css__WEBPACK_IMPORTED_MODULE_0___default.a)
}
tmpl.stylesheetTokens = {
  hostAttribute: "utils-sldsElement-_sldsElement-host",
  shadowAttribute: "utils-sldsElement-_sldsElement"
};


/***/ }),

/***/ "./src/modules/utils/sldsElement/sldsElement.js":
/*!******************************************************!*\
  !*** ./src/modules/utils/sldsElement/sldsElement.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sldsElement_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sldsElement.html */ "./src/modules/utils/sldsElement/sldsElement.html");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine/lib/framework/main.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lwc__WEBPACK_IMPORTED_MODULE_1__);




class SldsElement extends lwc__WEBPACK_IMPORTED_MODULE_1__["LightningElement"] {
  constructor() {
    super();
    let _sldsPath = '../SLDS/styles';
    _sldsPath += '/salesforce-lightning-design-system.css';
    const styles = document.createElement('link');
    styles.href = _sldsPath;
    styles.rel = 'stylesheet';
    this.template.appendChild(styles);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(lwc__WEBPACK_IMPORTED_MODULE_1__["registerComponent"])(SldsElement, {
  tmpl: _sldsElement_html__WEBPACK_IMPORTED_MODULE_0__["default"]
}));

/***/ }),

/***/ 0:
/*!*******************************************************************************************!*\
  !*** multi ./node_modules/error-overlay-webpack-plugin/lib/entry-basic.js ./src/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ats/Documents/lwc-open/app-one/node_modules/error-overlay-webpack-plugin/lib/entry-basic.js */"./node_modules/error-overlay-webpack-plugin/lib/entry-basic.js");
module.exports = __webpack_require__(/*! /Users/ats/Documents/lwc-open/app-one/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map