/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by shuyi.wu on 2015/4/3.
	 */
	"use strict";

	var _utilVendorPrefix = __webpack_require__(1);

	var vendorPrefixCss = _utilVendorPrefix.vendorPrefixCss;
	var vendorPrefixJs = _utilVendorPrefix.vendorPrefixJs;

	var imgEl = document.getElementById("test-img");
	var filtersEl = document.getElementById("filters");
	var options = {
	    blur: 0,
	    brightness: 0,
	    contrast: 0,
	    grayscale: 0,
	    "hue-rotate": 0,
	    invert: 0,
	    opacity: 0,
	    saturate: 0,
	    sepia: 0,
	    dropShadow: {
	        X: 0,
	        Y: 0,
	        radius: 0,
	        R: 0,
	        G: 0,
	        B: 0,
	        A: 0.01
	    }
	};
	var dropShadow = options.dropShadow;

	var optionsChange = function optionsChange() {
	    var opt = options;
	    var optDS = opt.dropShadow;
	    var style = "";
	    if (opt.blur) {
	        style += "blur(" + opt.blur + "px) ";
	    }
	    if (opt.brightness) {
	        style += "brightness(" + opt.brightness + "%) ";
	    }
	    if (opt.contrast) {
	        style += "contrast(" + opt.contrast + "%) ";
	    }
	    if (opt.grayscale) {
	        style += "grayscale(" + opt.grayscale + "%) ";
	    }
	    if (opt["hue-rotate"]) {
	        style += "hue-rotate(" + opt["hue-rotate"] + "deg) ";
	    }
	    if (opt.invert) {
	        style += "invert(" + opt.invert + "%) ";
	    }
	    if (opt.opacity) {
	        style += "opacity(" + opt.opacity + "%) ";
	    }
	    if (opt.saturate) {
	        style += "saturate(" + opt.saturate + "%) ";
	    }
	    if (opt.sepia) {
	        style += "sepia(" + opt.sepia + "%)";
	    }
	    if (optDS.X || optDS.Y || optDS.radius || optDS.R || optDS.G || optDS.B || optDS.A) {
	        style += "drop-shadow( " + optDS.X + "px " + optDS.Y + "px " + optDS.radius + "px " + "rgba(" + optDS.R + "," + optDS.G + "," + optDS.B + ", " + optDS.A + "))";
	    }
	    imgEl.style[vendorPrefixJs + "Filter"] = style;
	    filtersEl.textContent = vendorPrefixCss + "filter: " + style;
	};

	var gui = new dat.GUI();

	gui.add(options, "blur", 0, 100).step(1).onChange(optionsChange);
	gui.add(options, "brightness", 0, 100).step(1).onChange(optionsChange);
	gui.add(options, "contrast", 0, 100).step(1).onChange(optionsChange);
	gui.add(options, "grayscale", 0, 100).step(1).onChange(optionsChange);
	gui.add(options, "hue-rotate", 0, 100).step(1).onChange(optionsChange);
	gui.add(options, "invert", 0, 100).step(1).onChange(optionsChange);
	gui.add(options, "opacity", 0, 100).step(1).onChange(optionsChange);
	gui.add(options, "saturate", 0, 100).step(1).onChange(optionsChange);
	gui.add(options, "sepia", 0, 100).step(1).onChange(optionsChange);

	var f2 = gui.addFolder("drop-shadow");
	f2.add(dropShadow, "X", -50, 50).step(1).onChange(optionsChange);
	f2.add(dropShadow, "Y", -50, 50).step(1).onChange(optionsChange);
	f2.add(dropShadow, "radius", 0, 100).step(1).onChange(optionsChange);
	f2.add(dropShadow, "R", 0, 100).step(1).onChange(optionsChange);
	f2.add(dropShadow, "G", 0, 100).step(1).onChange(optionsChange);
	f2.add(dropShadow, "B", 0, 100).step(1).onChange(optionsChange);
	f2.add(dropShadow, "A", 0, 1).step(0.01).setValue(0).onChange(optionsChange);
	f2.open();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by shuyi.wu on 2015/4/1.
	 */
	/**
	 * use: get browser prefix
	 */

	var engine = _interopRequire(__webpack_require__(2));

	var allPrefixJs, allPrefixCss, allPrefixJsStyle, vendorPrefixJs, vendorPrefixCss, vendorPrefixJsStyle;

	allPrefixJs = {
	    trident: "ms",
	    gecko: "moz",
	    webkit: "webkit",
	    presto: "o"
	};

	allPrefixCss = {
	    trident: "-ms-",
	    gecko: "-moz-",
	    webkit: "-webkit-",
	    presto: "-o-"
	};

	allPrefixJsStyle = {
	    trident: "ms",
	    gecko: "Moz",
	    webkit: "Webkit",
	    presto: "O"
	};

	vendorPrefixJs = allPrefixJs[engine];
	vendorPrefixCss = allPrefixCss[engine];
	vendorPrefixJsStyle = allPrefixJsStyle[engine];

	exports.vendorPrefixJs = vendorPrefixJs;
	exports.vendorPrefixCss = vendorPrefixCss;
	exports.vendorPrefixJsStyle = vendorPrefixJsStyle;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by shuyi.wu on 2015/4/1.
	 */
	/**
	 * use: get browser engine name
	 */

	"use strict";

	var win = window,
	    doc = document,
	    docStyle = doc.documentElement.style,
	    engine = undefined;
	if (win.opera && Object.prototype.toString.call(win.opera) === "[object Opera]") {
	    engine = "presto";
	} else if ("MozAppearance" in docStyle) {
	    engine = "gecko";
	} else if ("WebkitAppearance" in docStyle) {
	    engine = "webkit";
	} else if (typeof navigator.cpuClass === "string") {
	    engine = "trident";
	}

	module.exports = engine;

/***/ }
/******/ ]);