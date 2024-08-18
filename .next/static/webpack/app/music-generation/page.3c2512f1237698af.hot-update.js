"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/music-generation/page",{

/***/ "(app-pages-browser)/./components/WavesurferPlayer.js":
/*!****************************************!*\
  !*** ./components/WavesurferPlayer.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WaveSurferPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wavesurfer.js */ \"(app-pages-browser)/./node_modules/wavesurfer.js/dist/wavesurfer.esm.js\");\n/* harmony import */ var _barrel_optimize_names_BsFillPlayFill_BsFillStopFill_BsSkipBackward_BsSkipForward_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=BsFillPlayFill,BsFillStopFill,BsSkipBackward,BsSkipForward!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction WaveSurferPlayer() {\n    _s();\n    const waveformRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    let wavesurfer;\n    const [playPause, setPlayPause] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n            container: waveformRef.current,\n            waveColor: \"#34374B\",\n            progressColor: \"#F90\",\n            url: \"https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3\",\n            dragToSeek: true,\n            width: \"35vw\",\n            hideScrollbar: true,\n            normalize: true,\n            barGap: 1,\n            height: 60,\n            barHeight: 20,\n            barRadius: 20,\n            barWidth: 5\n        });\n        wavesurfer.on(\"finish\", ()=>{\n            console.log(\"song finished\");\n        });\n        wavesurfer.on(\"ready\", ()=>{\n            console.log(\"Waveform is ready\");\n        });\n        return ()=>{\n            wavesurfer.destroy();\n        };\n    }, []);\n    const handleStop = ()=>{\n        if (wavesurfer) {\n            wavesurfer.stop();\n        }\n    };\n    const handlePause = ()=>{\n        if (wavesurfer) {\n            wavesurfer.playPause();\n        }\n    };\n    const handleSkipForward = ()=>{\n        if (wavesurfer) {\n            wavesurfer.skip(2);\n        }\n    };\n    const handleSkipBack = ()=>{\n        if (wavesurfer) {\n            wavesurfer.skip(-2);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sub-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Oceans\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-10 w-100\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: waveformRef,\n                        className: \"wavesurfer-container\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wavesurfer-controls\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSkipBack,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsFillPlayFill_BsFillStopFill_BsSkipBackward_BsSkipForward_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsSkipBackward, {}, void 0, false, {\n                                fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handlePause,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsFillPlayFill_BsFillStopFill_BsSkipBackward_BsSkipForward_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillPlayFill, {}, void 0, false, {\n                                fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleStop,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsFillPlayFill_BsFillStopFill_BsSkipBackward_BsSkipForward_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillStopFill, {}, void 0, false, {\n                                fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSkipForward,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsFillPlayFill_BsFillStopFill_BsSkipBackward_BsSkipForward_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsSkipForward, {}, void 0, false, {\n                                fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(WaveSurferPlayer, \"BSU9i/TutIFftcOB9vWNhRC2Ovo=\");\n_c = WaveSurferPlayer;\nvar _c;\n$RefreshReg$(_c, \"WaveSurferPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2F2ZXN1cmZlclBsYXllci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ3FCO0FBQ2I7QUFNZjtBQUVULFNBQVNTOztJQUN0QixNQUFNQyxjQUFjUiw2Q0FBTUEsQ0FBQztJQUMzQixJQUFJUztJQUNKLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUE7SUFFMUNGLGdEQUFTQSxDQUFDO1FBQ1JVLGFBQWFQLHFEQUFVQSxDQUFDVSxNQUFNLENBQUM7WUFDN0JDLFdBQVdMLFlBQVlNLE9BQU87WUFDOUJDLFdBQVc7WUFDWEMsZUFBZTtZQUNmQyxLQUFLO1lBQ0xDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxlQUFlO1lBQ2ZDLFdBQVc7WUFDWEMsUUFBUTtZQUNSQyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEMsV0FBVztZQUNYQyxVQUFVO1FBQ1o7UUFFQWpCLFdBQVdrQixFQUFFLENBQUMsVUFBVTtZQUN0QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7UUFFQXBCLFdBQVdrQixFQUFFLENBQUMsU0FBUztZQUNyQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7UUFDQSxPQUFPO1lBQ0xwQixXQUFXcUIsT0FBTztRQUNwQjtJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1DLGFBQWE7UUFDakIsSUFBSXRCLFlBQVk7WUFDZEEsV0FBV3VCLElBQUk7UUFDakI7SUFDRjtJQUNBLE1BQU1DLGNBQWM7UUFDbEIsSUFBSXhCLFlBQVk7WUFDZEEsV0FBV0MsU0FBUztRQUN0QjtJQUNGO0lBRUEsTUFBTXdCLG9CQUFvQjtRQUN4QixJQUFJekIsWUFBWTtZQUNkQSxXQUFXMEIsSUFBSSxDQUFDO1FBQ2xCO0lBQ0Y7SUFDQSxNQUFNQyxpQkFBaUI7UUFDckIsSUFBSTNCLFlBQVk7WUFDZEEsV0FBVzBCLElBQUksQ0FBQyxDQUFDO1FBQ25CO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBT2IsOERBQUNDOzhCQUFFOzs7Ozs7OEJBRUgsOERBQUNGO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUcsS0FBS2hDO3dCQUFhOEIsV0FBVTs7Ozs7Ozs7Ozs7OEJBR25DLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFPQyxTQUFTTjtzQ0FDZiw0RUFBQzlCLDRJQUFjQTs7Ozs7Ozs7OztzQ0FFakIsOERBQUNtQzs0QkFBT0MsU0FBU1Q7c0NBQ2YsNEVBQUM3Qiw0SUFBY0E7Ozs7Ozs7Ozs7c0NBRWpCLDhEQUFDcUM7NEJBQU9DLFNBQVNYO3NDQUNmLDRFQUFDNUIsNElBQWNBOzs7Ozs7Ozs7O3NDQUVqQiw4REFBQ3NDOzRCQUFPQyxTQUFTUjtzQ0FDZiw0RUFBQzdCLDJJQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFCO0dBdkZ3QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlc3VyZmVyUGxheWVyLmpzP2I4MTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdhdmVTdXJmZXIgZnJvbSBcIndhdmVzdXJmZXIuanNcIjtcclxuaW1wb3J0IHtcclxuICBCc0ZpbGxTdG9wRmlsbCxcclxuICBCc0ZpbGxQbGF5RmlsbCxcclxuICBCc1NraXBGb3J3YXJkLFxyXG4gIEJzU2tpcEJhY2t3YXJkLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2F2ZVN1cmZlclBsYXllcigpIHtcclxuICBjb25zdCB3YXZlZm9ybVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgd2F2ZXN1cmZlcjtcclxuICBjb25zdCBbcGxheVBhdXNlLCBzZXRQbGF5UGF1c2VdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdhdmVzdXJmZXIgPSBXYXZlU3VyZmVyLmNyZWF0ZSh7XHJcbiAgICAgIGNvbnRhaW5lcjogd2F2ZWZvcm1SZWYuY3VycmVudCxcclxuICAgICAgd2F2ZUNvbG9yOiBcIiMzNDM3NEJcIixcclxuICAgICAgcHJvZ3Jlc3NDb2xvcjogXCIjRjkwXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9hdWRpby8yMDIyLzA4LzIzL2F1ZGlvX2QxNjczN2RjMjgubXAzXCIsXHJcbiAgICAgIGRyYWdUb1NlZWs6IHRydWUsXHJcbiAgICAgIHdpZHRoOiBcIjM1dndcIixcclxuICAgICAgaGlkZVNjcm9sbGJhcjogdHJ1ZSxcclxuICAgICAgbm9ybWFsaXplOiB0cnVlLFxyXG4gICAgICBiYXJHYXA6IDEsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgIGJhckhlaWdodDogMjAsXHJcbiAgICAgIGJhclJhZGl1czogMjAsXHJcbiAgICAgIGJhcldpZHRoOiA1LFxyXG4gICAgfSk7XHJcblxyXG4gICAgd2F2ZXN1cmZlci5vbihcImZpbmlzaFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29uZyBmaW5pc2hlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdhdmVzdXJmZXIub24oXCJyZWFkeVwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiV2F2ZWZvcm0gaXMgcmVhZHlcIik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdhdmVzdXJmZXIuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcclxuICAgIGlmICh3YXZlc3VyZmVyKSB7XHJcbiAgICAgIHdhdmVzdXJmZXIuc3RvcCgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUGF1c2UgPSAoKSA9PiB7XHJcbiAgICBpZiAod2F2ZXN1cmZlcikge1xyXG4gICAgICB3YXZlc3VyZmVyLnBsYXlQYXVzZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNraXBGb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgaWYgKHdhdmVzdXJmZXIpIHtcclxuICAgICAgd2F2ZXN1cmZlci5za2lwKDIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU2tpcEJhY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAod2F2ZXN1cmZlcikge1xyXG4gICAgICB3YXZlc3VyZmVyLnNraXAoLTIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1jb250YWluZXJcIj5cclxuICAgICAgICB7LyogPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIxLzExLzA0LzA1LzMzL2RvbWUtNjc2NzQyMl85NjBfNzIwLmpwZ1wiXHJcbiAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgIGhlaWdodD17MTAwMH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImF1ZGlvLWltYWdlXCJcclxuICAgICAgICAvPiAqL31cclxuICAgICAgICA8cD5PY2VhbnM8L3A+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIHctMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IHJlZj17d2F2ZWZvcm1SZWZ9IGNsYXNzTmFtZT1cIndhdmVzdXJmZXItY29udGFpbmVyXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlc3VyZmVyLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNraXBCYWNrfT5cclxuICAgICAgICAgICAgPEJzU2tpcEJhY2t3YXJkIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUGF1c2V9PlxyXG4gICAgICAgICAgICA8QnNGaWxsUGxheUZpbGwgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdG9wfT5cclxuICAgICAgICAgICAgPEJzRmlsbFN0b3BGaWxsIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2tpcEZvcndhcmR9PlxyXG4gICAgICAgICAgICA8QnNTa2lwRm9yd2FyZCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIldhdmVTdXJmZXIiLCJCc0ZpbGxTdG9wRmlsbCIsIkJzRmlsbFBsYXlGaWxsIiwiQnNTa2lwRm9yd2FyZCIsIkJzU2tpcEJhY2t3YXJkIiwiV2F2ZVN1cmZlclBsYXllciIsIndhdmVmb3JtUmVmIiwid2F2ZXN1cmZlciIsInBsYXlQYXVzZSIsInNldFBsYXlQYXVzZSIsImNyZWF0ZSIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJ3YXZlQ29sb3IiLCJwcm9ncmVzc0NvbG9yIiwidXJsIiwiZHJhZ1RvU2VlayIsIndpZHRoIiwiaGlkZVNjcm9sbGJhciIsIm5vcm1hbGl6ZSIsImJhckdhcCIsImhlaWdodCIsImJhckhlaWdodCIsImJhclJhZGl1cyIsImJhcldpZHRoIiwib24iLCJjb25zb2xlIiwibG9nIiwiZGVzdHJveSIsImhhbmRsZVN0b3AiLCJzdG9wIiwiaGFuZGxlUGF1c2UiLCJoYW5kbGVTa2lwRm9yd2FyZCIsInNraXAiLCJoYW5kbGVTa2lwQmFjayIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WavesurferPlayer.js\n"));

/***/ })

});