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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WaveSurferPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wavesurfer.js */ \"(app-pages-browser)/./node_modules/wavesurfer.js/dist/wavesurfer.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction WaveSurferPlayer() {\n    _s();\n    const waveformRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    let wavesurfer;\n    const [playPause, setPlayPause] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n            container: waveformRef.current,\n            waveColor: \"#34374B\",\n            progressColor: \"#F90\",\n            url: \"https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3\",\n            dragToSeek: true,\n            width: \"35vw\",\n            hideScrollbar: true,\n            normalize: true,\n            barGap: 1,\n            height: 60,\n            barHeight: 20,\n            barRadius: 20,\n            barWidth: 5\n        });\n        wavesurfer.on(\"finish\", ()=>{\n            console.log(\"song finished\");\n        });\n        wavesurfer.on(\"ready\", ()=>{\n            console.log(\"Waveform is ready\");\n        });\n        return ()=>{\n            wavesurfer.destroy();\n        };\n    }, []);\n    const handleStop = ()=>{\n        if (wavesurfer) {\n            wavesurfer.stop();\n        }\n    };\n    const handlePause = ()=>{\n        if (wavesurfer) {\n            wavesurfer.playPause();\n        }\n    };\n    const handleSkipForward = ()=>{\n        if (wavesurfer) {\n            wavesurfer.skip(2);\n        }\n    };\n    const handleSkipBack = ()=>{\n        if (wavesurfer) {\n            wavesurfer.skip(-2);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sub-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Oceans\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex border align-items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: waveformRef,\n                            className: \"wavesurfer-container w-100 border\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"wavesurfer-controls border\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    href: \"#\",\n                                    class: \"play-button play-button-nyt\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        class: \"play-arrow\",\n                                        children: \"Play\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(WaveSurferPlayer, \"BSU9i/TutIFftcOB9vWNhRC2Ovo=\");\n_c = WaveSurferPlayer;\nvar _c;\n$RefreshReg$(_c, \"WaveSurferPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2F2ZXN1cmZlclBsYXllci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0I7QUFDcUI7QUFDYjtBQU1mO0FBRVQsU0FBU1M7O0lBQ3RCLE1BQU1DLGNBQWNSLDZDQUFNQSxDQUFDO0lBQzNCLElBQUlTO0lBQ0osTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQTtJQUUxQ0YsZ0RBQVNBLENBQUM7UUFDUlUsYUFBYVAscURBQVVBLENBQUNVLE1BQU0sQ0FBQztZQUM3QkMsV0FBV0wsWUFBWU0sT0FBTztZQUM5QkMsV0FBVztZQUNYQyxlQUFlO1lBQ2ZDLEtBQUs7WUFDTEMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLGVBQWU7WUFDZkMsV0FBVztZQUNYQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsV0FBVztZQUNYQyxXQUFXO1lBQ1hDLFVBQVU7UUFDWjtRQUVBakIsV0FBV2tCLEVBQUUsQ0FBQyxVQUFVO1lBQ3RCQyxRQUFRQyxHQUFHLENBQUM7UUFDZDtRQUVBcEIsV0FBV2tCLEVBQUUsQ0FBQyxTQUFTO1lBQ3JCQyxRQUFRQyxHQUFHLENBQUM7UUFDZDtRQUNBLE9BQU87WUFDTHBCLFdBQVdxQixPQUFPO1FBQ3BCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsYUFBYTtRQUNqQixJQUFJdEIsWUFBWTtZQUNkQSxXQUFXdUIsSUFBSTtRQUNqQjtJQUNGO0lBQ0EsTUFBTUMsY0FBYztRQUNsQixJQUFJeEIsWUFBWTtZQUNkQSxXQUFXQyxTQUFTO1FBQ3RCO0lBQ0Y7SUFFQSxNQUFNd0Isb0JBQW9CO1FBQ3hCLElBQUl6QixZQUFZO1lBQ2RBLFdBQVcwQixJQUFJLENBQUM7UUFDbEI7SUFDRjtJQUNBLE1BQU1DLGlCQUFpQjtRQUNyQixJQUFJM0IsWUFBWTtZQUNkQSxXQUFXMEIsSUFBSSxDQUFDLENBQUM7UUFDbkI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFPYiw4REFBQ0M7OEJBQUU7Ozs7Ozs4QkFFSCw4REFBQ0Y7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFDQ0csS0FBS2hDOzRCQUNMOEIsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FPYiw0RUFBQ0Q7Z0NBQUlJLE9BQU07MENBQ1QsNEVBQUNKO29DQUFJSyxNQUFLO29DQUFJRCxPQUFNOzhDQUNsQiw0RUFBQ0U7d0NBQUVGLE9BQU07a0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3RDO0dBOUZ3QmxDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2F2ZXN1cmZlclBsYXllci5qcz9iODEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXYXZlU3VyZmVyIGZyb20gXCJ3YXZlc3VyZmVyLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgQnNGaWxsU3RvcEZpbGwsXHJcbiAgQnNGaWxsUGxheUZpbGwsXHJcbiAgQnNTa2lwRm9yd2FyZCxcclxuICBCc1NraXBCYWNrd2FyZCxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhdmVTdXJmZXJQbGF5ZXIoKSB7XHJcbiAgY29uc3Qgd2F2ZWZvcm1SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IHdhdmVzdXJmZXI7XHJcbiAgY29uc3QgW3BsYXlQYXVzZSwgc2V0UGxheVBhdXNlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3YXZlc3VyZmVyID0gV2F2ZVN1cmZlci5jcmVhdGUoe1xyXG4gICAgICBjb250YWluZXI6IHdhdmVmb3JtUmVmLmN1cnJlbnQsXHJcbiAgICAgIHdhdmVDb2xvcjogXCIjMzQzNzRCXCIsXHJcbiAgICAgIHByb2dyZXNzQ29sb3I6IFwiI0Y5MFwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vYXVkaW8vMjAyMi8wOC8yMy9hdWRpb19kMTY3MzdkYzI4Lm1wM1wiLFxyXG4gICAgICBkcmFnVG9TZWVrOiB0cnVlLFxyXG4gICAgICB3aWR0aDogXCIzNXZ3XCIsXHJcbiAgICAgIGhpZGVTY3JvbGxiYXI6IHRydWUsXHJcbiAgICAgIG5vcm1hbGl6ZTogdHJ1ZSxcclxuICAgICAgYmFyR2FwOiAxLFxyXG4gICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICBiYXJIZWlnaHQ6IDIwLFxyXG4gICAgICBiYXJSYWRpdXM6IDIwLFxyXG4gICAgICBiYXJXaWR0aDogNSxcclxuICAgIH0pO1xyXG5cclxuICAgIHdhdmVzdXJmZXIub24oXCJmaW5pc2hcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNvbmcgZmluaXNoZWRcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3YXZlc3VyZmVyLm9uKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIldhdmVmb3JtIGlzIHJlYWR5XCIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3YXZlc3VyZmVyLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XHJcbiAgICBpZiAod2F2ZXN1cmZlcikge1xyXG4gICAgICB3YXZlc3VyZmVyLnN0b3AoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVBhdXNlID0gKCkgPT4ge1xyXG4gICAgaWYgKHdhdmVzdXJmZXIpIHtcclxuICAgICAgd2F2ZXN1cmZlci5wbGF5UGF1c2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTa2lwRm9yd2FyZCA9ICgpID0+IHtcclxuICAgIGlmICh3YXZlc3VyZmVyKSB7XHJcbiAgICAgIHdhdmVzdXJmZXIuc2tpcCgyKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVNraXBCYWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHdhdmVzdXJmZXIpIHtcclxuICAgICAgd2F2ZXN1cmZlci5za2lwKC0yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMS8xMS8wNC8wNS8zMy9kb21lLTY3Njc0MjJfOTYwXzcyMC5qcGdcIlxyXG4gICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezEwMDB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhdWRpby1pbWFnZVwiXHJcbiAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPHA+T2NlYW5zPC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBib3JkZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17d2F2ZWZvcm1SZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndhdmVzdXJmZXItY29udGFpbmVyIHctMTAwIGJvcmRlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlc3VyZmVyLWNvbnRyb2xzIGJvcmRlclwiPlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTa2lwQmFja30+XHJcbiAgICAgICAgICAgIDxCc1NraXBCYWNrd2FyZCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQYXVzZX0+XHJcbiAgICAgICAgICAgICAgPEJzRmlsbFBsYXlGaWxsIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgaHJlZj1cIiNcIiBjbGFzcz1cInBsYXktYnV0dG9uIHBsYXktYnV0dG9uLW55dFwiPlxyXG4gICAgICAgICAgICAgICAgPGIgY2xhc3M9XCJwbGF5LWFycm93XCI+UGxheTwvYj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9PlxyXG4gICAgICAgICAgICA8QnNGaWxsU3RvcEZpbGwgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTa2lwRm9yd2FyZH0+XHJcbiAgICAgICAgICAgIDxCc1NraXBGb3J3YXJkIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiV2F2ZVN1cmZlciIsIkJzRmlsbFN0b3BGaWxsIiwiQnNGaWxsUGxheUZpbGwiLCJCc1NraXBGb3J3YXJkIiwiQnNTa2lwQmFja3dhcmQiLCJXYXZlU3VyZmVyUGxheWVyIiwid2F2ZWZvcm1SZWYiLCJ3YXZlc3VyZmVyIiwicGxheVBhdXNlIiwic2V0UGxheVBhdXNlIiwiY3JlYXRlIiwiY29udGFpbmVyIiwiY3VycmVudCIsIndhdmVDb2xvciIsInByb2dyZXNzQ29sb3IiLCJ1cmwiLCJkcmFnVG9TZWVrIiwid2lkdGgiLCJoaWRlU2Nyb2xsYmFyIiwibm9ybWFsaXplIiwiYmFyR2FwIiwiaGVpZ2h0IiwiYmFySGVpZ2h0IiwiYmFyUmFkaXVzIiwiYmFyV2lkdGgiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJkZXN0cm95IiwiaGFuZGxlU3RvcCIsInN0b3AiLCJoYW5kbGVQYXVzZSIsImhhbmRsZVNraXBGb3J3YXJkIiwic2tpcCIsImhhbmRsZVNraXBCYWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInJlZiIsImNsYXNzIiwiaHJlZiIsImIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WavesurferPlayer.js\n"));

/***/ })

});