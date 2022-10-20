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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\React\\Tenzies Game\\node_modules\\react\\index.js'");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = App;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Die = __webpack_require__(6);

var _Die2 = _interopRequireDefault(_Die);

var _nanoid = __webpack_require__(8);

var _reactConfetti = __webpack_require__(10);

var _reactConfetti2 = _interopRequireDefault(_reactConfetti);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
    var _React$useState = _react2.default.useState(allNewDice()),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        dice = _React$useState2[0],
        setDice = _React$useState2[1];

    var _React$useState3 = _react2.default.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        tenzies = _React$useState4[0],
        setTenzies = _React$useState4[1];

    _react2.default.useEffect(function () {
        var allHeld = dice.every(function (die) {
            return die.isHeld;
        });
        var firstValue = dice[0].value;
        var allSameValue = dice.every(function (die) {
            return die.value === firstValue;
        });
        if (allHeld && allSameValue) {
            setTenzies(true);
        }
    }, [dice]);

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: (0, _nanoid.nanoid)()
        };
    }

    function allNewDice() {
        var newDice = [];
        for (var i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    }

    /**
     * Challenge: Allow the user to play a new game when the
     * button is clicked and they've already won
     */

    function rollDice() {
        if (!tenzies) {
            setDice(function (oldDice) {
                return oldDice.map(function (die) {
                    return die.isHeld ? die : generateNewDie();
                });
            });
        } else {
            setTenzies(false);
            setDice(allNewDice());
        }
    }

    function _holdDice(id) {
        setDice(function (oldDice) {
            return oldDice.map(function (die) {
                return die.id === id ? { id: die.id, value: die.value, isHeld: !die.isHeld } : die;
            });
        });
    }

    var diceElements = dice.map(function (die) {
        return _react2.default.createElement(_Die2.default, {
            key: die.id,
            value: die.value,
            isHeld: die.isHeld,
            holdDice: function holdDice() {
                return _holdDice(die.id);
            }
        });
    });

    return _react2.default.createElement(
        "main",
        null,
        tenzies && _react2.default.createElement(_reactConfetti2.default, null),
        _react2.default.createElement(
            "h1",
            { className: "title" },
            "Tenzies"
        ),
        _react2.default.createElement(
            "p",
            { className: "instructions" },
            "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."
        ),
        _react2.default.createElement(
            "div",
            { className: "dice-container" },
            diceElements
        ),
        _react2.default.createElement(
            "button",
            {
                className: "roll-dice",
                onClick: rollDice
            },
            tenzies ? "New Game" : "Roll"
        )
    );
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\React\\Tenzies Game\\node_modules\\react-dom\\index.js'");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Die;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Die(props) {
    var styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    };
    return _react2.default.createElement(
        "div",
        {
            className: "die-face",
            style: styles,
            onClick: props.holdDice
        },
        _react2.default.createElement(
            "h2",
            { className: "die-num" },
            props.value
        )
    );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById("root"));

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\React\\Tenzies Game\\node_modules\\nanoid\\index.browser.js'");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\React\\Tenzies Game\\node_modules\\react-confetti\\dist\\react-confetti.min.js'");

/***/ })
/******/ ]);