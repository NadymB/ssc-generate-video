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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WaveSurferPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wavesurfer.js */ \"(app-pages-browser)/./node_modules/wavesurfer.js/dist/wavesurfer.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction WaveSurferPlayer(param) {\n    let { song } = param;\n    _s();\n    //   console.log(\"song\", song);\n    const waveformRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    let wavesurfer;\n    const [playPause, setPlayPause] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [currentTime, setCurrentTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0:00\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0:00\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n            container: waveformRef.current,\n            waveColor: [\n                // an array of colors, to be applied as gradient color stops to the waveform.\n                \"#ced4da\"\n            ],\n            progressColor: \"#343a40\",\n            //   url: \"https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3\",\n            url: song.src,\n            dragToSeek: true,\n            width: \"35vw\",\n            hideScrollbar: true,\n            normalize: true,\n            barGap: 1,\n            height: 60,\n            barHeight: 20,\n            barRadius: 20,\n            barWidth: 5\n        });\n        // new\n        wavesurfer.on(\"audioprocess\", ()=>{\n            setCurrentTime(formatTime(wavesurfer.getCurrentTime()));\n        });\n        wavesurfer.on(\"ready\", ()=>{\n            setDuration(formatTime(wavesurfer.getDuration()));\n        });\n        // new\n        wavesurfer.on(\"finish\", ()=>{\n            console.log(\"song finished\");\n        });\n        wavesurfer.on(\"ready\", ()=>{\n            console.log(\"Waveform is ready\");\n        });\n        return ()=>{\n            wavesurfer.destroy();\n        };\n    }, []);\n    const handleStop = ()=>{\n        if (wavesurfer) {\n            wavesurfer.stop();\n        }\n    };\n    const handlePause = ()=>{\n        if (wavesurfer) {\n            wavesurfer.playPause();\n        }\n    };\n    const handleSkipForward = ()=>{\n        if (wavesurfer) {\n            wavesurfer.skip(2);\n        }\n    };\n    const handleSkipBack = ()=>{\n        if (wavesurfer) {\n            wavesurfer.skip(-2);\n        }\n    };\n    //   new\n    //   useEffect(() => {\n    //     wavesurfer = WaveSurfer.create({\n    //       container: \"#waveform\",\n    //       waveColor: \"#ddd\",\n    //       progressColor: \"#007bff\",\n    //     });\n    //     wavesurfer.on(\"audioprocess\", () => {\n    //       setCurrentTime(formatTime(wavesurfer.getCurrentTime()));\n    //     });\n    //     wavesurfer.on(\"ready\", () => {\n    //       setDuration(formatTime(wavesurfer.getDuration()));\n    //     });\n    //     return () => wavesurfer.destroy(); // Cleanup on component unmount\n    //   }, []);\n    const formatTime = (time)=>{\n        return [\n            Math.floor(time % 3600 / 60),\n            (\"00\" + Math.floor(time % 60)).slice(-2)\n        ].join(\":\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sub-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Oceans\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex border align-items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: waveformRef,\n                            className: \"wavesurfer-container w-100\",\n                            style: {\n                                backgroundColor: \"#fff\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"wavesurfer-controls\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"audio-player-btn-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"play-button play-button-nyt\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: handlePause,\n                                        class: \"play-arrow\",\n                                        children: \"Play\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                    lineNumber: 143,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                lineNumber: 142,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"waveform__counter border\",\n                            children: currentTime\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 157,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"waveform__duration\",\n                            children: duration\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 158,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n            lineNumber: 120,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n        lineNumber: 119,\n        columnNumber: 5\n    }, this);\n}\n_s(WaveSurferPlayer, \"x6m4nTVeAW1fxhoCRF4vLIwve1k=\");\n_c = WaveSurferPlayer;\nvar _c;\n$RefreshReg$(_c, \"WaveSurferPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2F2ZXN1cmZlclBsYXllci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0I7QUFDcUI7QUFDYjtBQU1mO0FBRVQsU0FBU1MsaUJBQWlCLEtBQVE7UUFBUixFQUFFQyxJQUFJLEVBQUUsR0FBUjs7SUFDdkMsK0JBQStCO0lBRS9CLE1BQU1DLGNBQWNULDZDQUFNQSxDQUFDO0lBQzNCLElBQUlVO0lBQ0osTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQTtJQUUxQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYyxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXpDRixnREFBU0EsQ0FBQztRQUNSVyxhQUFhUixxREFBVUEsQ0FBQ2UsTUFBTSxDQUFDO1lBQzdCQyxXQUFXVCxZQUFZVSxPQUFPO1lBQzlCQyxXQUFXO2dCQUNULDZFQUE2RTtnQkFDN0U7YUFPRDtZQUNEQyxlQUFlO1lBQ2YsMEVBQTBFO1lBQzFFQyxLQUFLZCxLQUFLZSxHQUFHO1lBQ2JDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxlQUFlO1lBQ2ZDLFdBQVc7WUFDWEMsUUFBUTtZQUNSQyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEMsV0FBVztZQUNYQyxVQUFVO1FBQ1o7UUFFQSxNQUFNO1FBQ050QixXQUFXdUIsRUFBRSxDQUFDLGdCQUFnQjtZQUM1Qm5CLGVBQWVvQixXQUFXeEIsV0FBV3lCLGNBQWM7UUFDckQ7UUFFQXpCLFdBQVd1QixFQUFFLENBQUMsU0FBUztZQUNyQmpCLFlBQVlrQixXQUFXeEIsV0FBVzBCLFdBQVc7UUFDL0M7UUFDQSxNQUFNO1FBRU4xQixXQUFXdUIsRUFBRSxDQUFDLFVBQVU7WUFDdEJJLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBRUE1QixXQUFXdUIsRUFBRSxDQUFDLFNBQVM7WUFDckJJLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBQ0EsT0FBTztZQUNMNUIsV0FBVzZCLE9BQU87UUFDcEI7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNQyxhQUFhO1FBQ2pCLElBQUk5QixZQUFZO1lBQ2RBLFdBQVcrQixJQUFJO1FBQ2pCO0lBQ0Y7SUFDQSxNQUFNQyxjQUFjO1FBQ2xCLElBQUloQyxZQUFZO1lBQ2RBLFdBQVdDLFNBQVM7UUFDdEI7SUFDRjtJQUVBLE1BQU1nQyxvQkFBb0I7UUFDeEIsSUFBSWpDLFlBQVk7WUFDZEEsV0FBV2tDLElBQUksQ0FBQztRQUNsQjtJQUNGO0lBQ0EsTUFBTUMsaUJBQWlCO1FBQ3JCLElBQUluQyxZQUFZO1lBQ2RBLFdBQVdrQyxJQUFJLENBQUMsQ0FBQztRQUNuQjtJQUNGO0lBRUEsUUFBUTtJQUNSLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsVUFBVTtJQUVWLDRDQUE0QztJQUM1QyxpRUFBaUU7SUFDakUsVUFBVTtJQUVWLHFDQUFxQztJQUNyQywyREFBMkQ7SUFDM0QsVUFBVTtJQUVWLHlFQUF5RTtJQUN6RSxZQUFZO0lBRVosTUFBTVYsYUFBYSxDQUFDWTtRQUNsQixPQUFPO1lBQ0xDLEtBQUtDLEtBQUssQ0FBQyxPQUFRLE9BQVE7WUFDMUIsUUFBT0QsS0FBS0MsS0FBSyxDQUFDRixPQUFPLEdBQUUsRUFBR0csS0FBSyxDQUFDLENBQUM7U0FDdkMsQ0FBQ0MsSUFBSSxDQUFDO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBT2IsOERBQUNDOzhCQUFFOzs7Ozs7OEJBRUgsOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQ0NHLEtBQUs3Qzs0QkFDTDJDLFdBQVU7NEJBQ1ZHLE9BQU87Z0NBQUVDLGlCQUFpQjs0QkFBTzs7Ozs7O3NDQUVuQyw4REFBQ0w7NEJBQUlDLFdBQVU7c0NBT2IsNEVBQUNEO2dDQUFJTSxPQUFNOzBDQUNULDRFQUFDTjtvQ0FBSU0sT0FBTTs4Q0FDVCw0RUFBQ0M7d0NBQUtDLFNBQVNqQjt3Q0FBYWUsT0FBTTtrREFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQWFyRCw4REFBQ047NEJBQUlDLFdBQVU7c0NBQTRCdkM7Ozs7OztzQ0FDM0MsOERBQUNzQzs0QkFBSUMsV0FBVTtzQ0FBc0JyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0M7R0F2SndCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dhdmVzdXJmZXJQbGF5ZXIuanM/YjgxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2F2ZVN1cmZlciBmcm9tIFwid2F2ZXN1cmZlci5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJzRmlsbFN0b3BGaWxsLFxyXG4gIEJzRmlsbFBsYXlGaWxsLFxyXG4gIEJzU2tpcEZvcndhcmQsXHJcbiAgQnNTa2lwQmFja3dhcmQsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXZlU3VyZmVyUGxheWVyKHsgc29uZyB9KSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcInNvbmdcIiwgc29uZyk7XHJcblxyXG4gIGNvbnN0IHdhdmVmb3JtUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCB3YXZlc3VyZmVyO1xyXG4gIGNvbnN0IFtwbGF5UGF1c2UsIHNldFBsYXlQYXVzZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlKFwiMDowMFwiKTtcclxuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKFwiMDowMFwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdhdmVzdXJmZXIgPSBXYXZlU3VyZmVyLmNyZWF0ZSh7XHJcbiAgICAgIGNvbnRhaW5lcjogd2F2ZWZvcm1SZWYuY3VycmVudCxcclxuICAgICAgd2F2ZUNvbG9yOiBbXHJcbiAgICAgICAgLy8gYW4gYXJyYXkgb2YgY29sb3JzLCB0byBiZSBhcHBsaWVkIGFzIGdyYWRpZW50IGNvbG9yIHN0b3BzIHRvIHRoZSB3YXZlZm9ybS5cclxuICAgICAgICBcIiNjZWQ0ZGFcIixcclxuICAgICAgICAvLyBcIiM2MGVmZmZcIixcclxuICAgICAgICAvLyAvLyBcInJlZFwiLFxyXG4gICAgICAgIC8vIC8vIFwiZ3JlZW5cIixcclxuICAgICAgICAvLyAvLyBcInB1cnBsZVwiLFxyXG4gICAgICAgIC8vIC8vIFwieWVsbG93XCIsXHJcbiAgICAgICAgLy8gXCJyZ2JhKDAsMjU1LDI1NSwuNSlcIixcclxuICAgICAgXSxcclxuICAgICAgcHJvZ3Jlc3NDb2xvcjogXCIjMzQzYTQwXCIsXHJcbiAgICAgIC8vICAgdXJsOiBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL2F1ZGlvLzIwMjIvMDgvMjMvYXVkaW9fZDE2NzM3ZGMyOC5tcDNcIixcclxuICAgICAgdXJsOiBzb25nLnNyYyxcclxuICAgICAgZHJhZ1RvU2VlazogdHJ1ZSxcclxuICAgICAgd2lkdGg6IFwiMzV2d1wiLFxyXG4gICAgICBoaWRlU2Nyb2xsYmFyOiB0cnVlLFxyXG4gICAgICBub3JtYWxpemU6IHRydWUsXHJcbiAgICAgIGJhckdhcDogMSxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgYmFySGVpZ2h0OiAyMCxcclxuICAgICAgYmFyUmFkaXVzOiAyMCxcclxuICAgICAgYmFyV2lkdGg6IDUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuZXdcclxuICAgIHdhdmVzdXJmZXIub24oXCJhdWRpb3Byb2Nlc3NcIiwgKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50VGltZShmb3JtYXRUaW1lKHdhdmVzdXJmZXIuZ2V0Q3VycmVudFRpbWUoKSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2F2ZXN1cmZlci5vbihcInJlYWR5XCIsICgpID0+IHtcclxuICAgICAgc2V0RHVyYXRpb24oZm9ybWF0VGltZSh3YXZlc3VyZmVyLmdldER1cmF0aW9uKCkpKTtcclxuICAgIH0pO1xyXG4gICAgLy8gbmV3XHJcblxyXG4gICAgd2F2ZXN1cmZlci5vbihcImZpbmlzaFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29uZyBmaW5pc2hlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdhdmVzdXJmZXIub24oXCJyZWFkeVwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiV2F2ZWZvcm0gaXMgcmVhZHlcIik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdhdmVzdXJmZXIuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcclxuICAgIGlmICh3YXZlc3VyZmVyKSB7XHJcbiAgICAgIHdhdmVzdXJmZXIuc3RvcCgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUGF1c2UgPSAoKSA9PiB7XHJcbiAgICBpZiAod2F2ZXN1cmZlcikge1xyXG4gICAgICB3YXZlc3VyZmVyLnBsYXlQYXVzZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNraXBGb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgaWYgKHdhdmVzdXJmZXIpIHtcclxuICAgICAgd2F2ZXN1cmZlci5za2lwKDIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU2tpcEJhY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAod2F2ZXN1cmZlcikge1xyXG4gICAgICB3YXZlc3VyZmVyLnNraXAoLTIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vICAgbmV3XHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICB3YXZlc3VyZmVyID0gV2F2ZVN1cmZlci5jcmVhdGUoe1xyXG4gIC8vICAgICAgIGNvbnRhaW5lcjogXCIjd2F2ZWZvcm1cIixcclxuICAvLyAgICAgICB3YXZlQ29sb3I6IFwiI2RkZFwiLFxyXG4gIC8vICAgICAgIHByb2dyZXNzQ29sb3I6IFwiIzAwN2JmZlwiLFxyXG4gIC8vICAgICB9KTtcclxuXHJcbiAgLy8gICAgIHdhdmVzdXJmZXIub24oXCJhdWRpb3Byb2Nlc3NcIiwgKCkgPT4ge1xyXG4gIC8vICAgICAgIHNldEN1cnJlbnRUaW1lKGZvcm1hdFRpbWUod2F2ZXN1cmZlci5nZXRDdXJyZW50VGltZSgpKSk7XHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyAgICAgd2F2ZXN1cmZlci5vbihcInJlYWR5XCIsICgpID0+IHtcclxuICAvLyAgICAgICBzZXREdXJhdGlvbihmb3JtYXRUaW1lKHdhdmVzdXJmZXIuZ2V0RHVyYXRpb24oKSkpO1xyXG4gIC8vICAgICB9KTtcclxuXHJcbiAgLy8gICAgIHJldHVybiAoKSA9PiB3YXZlc3VyZmVyLmRlc3Ryb3koKTsgLy8gQ2xlYW51cCBvbiBjb21wb25lbnQgdW5tb3VudFxyXG4gIC8vICAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmb3JtYXRUaW1lID0gKHRpbWUpID0+IHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIE1hdGguZmxvb3IoKHRpbWUgJSAzNjAwKSAvIDYwKSwgLy8gbWludXRlc1xyXG4gICAgICAoXCIwMFwiICsgTWF0aC5mbG9vcih0aW1lICUgNjApKS5zbGljZSgtMiksIC8vIHNlY29uZHNcclxuICAgIF0uam9pbihcIjpcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsvKiA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMjEvMTEvMDQvMDUvMzMvZG9tZS02NzY3NDIyXzk2MF83MjAuanBnXCJcclxuICAgICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxMDAwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXVkaW8taW1hZ2VcIlxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICAgIDxwPk9jZWFuczwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYm9yZGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e3dhdmVmb3JtUmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3YXZlc3VyZmVyLWNvbnRhaW5lciB3LTEwMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdmVzdXJmZXItY29udHJvbHNcIj5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17aGFuZGxlU2tpcEJhY2t9PlxyXG4gICAgICAgICAgICA8QnNTa2lwQmFja3dhcmQgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17aGFuZGxlUGF1c2V9PlxyXG4gICAgICAgICAgICAgIDxCc0ZpbGxQbGF5RmlsbCAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdWRpby1wbGF5ZXItYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5LWJ1dHRvbiBwbGF5LWJ1dHRvbi1ueXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZVBhdXNlfSBjbGFzcz1cInBsYXktYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgUGxheVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0+XHJcbiAgICAgICAgICAgIDxCc0ZpbGxTdG9wRmlsbCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNraXBGb3J3YXJkfT5cclxuICAgICAgICAgICAgPEJzU2tpcEZvcndhcmQgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2F2ZWZvcm1fX2NvdW50ZXIgYm9yZGVyXCI+e2N1cnJlbnRUaW1lfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlZm9ybV9fZHVyYXRpb25cIj57ZHVyYXRpb259PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIldhdmVTdXJmZXIiLCJCc0ZpbGxTdG9wRmlsbCIsIkJzRmlsbFBsYXlGaWxsIiwiQnNTa2lwRm9yd2FyZCIsIkJzU2tpcEJhY2t3YXJkIiwiV2F2ZVN1cmZlclBsYXllciIsInNvbmciLCJ3YXZlZm9ybVJlZiIsIndhdmVzdXJmZXIiLCJwbGF5UGF1c2UiLCJzZXRQbGF5UGF1c2UiLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImNyZWF0ZSIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJ3YXZlQ29sb3IiLCJwcm9ncmVzc0NvbG9yIiwidXJsIiwic3JjIiwiZHJhZ1RvU2VlayIsIndpZHRoIiwiaGlkZVNjcm9sbGJhciIsIm5vcm1hbGl6ZSIsImJhckdhcCIsImhlaWdodCIsImJhckhlaWdodCIsImJhclJhZGl1cyIsImJhcldpZHRoIiwib24iLCJmb3JtYXRUaW1lIiwiZ2V0Q3VycmVudFRpbWUiLCJnZXREdXJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkZXN0cm95IiwiaGFuZGxlU3RvcCIsInN0b3AiLCJoYW5kbGVQYXVzZSIsImhhbmRsZVNraXBGb3J3YXJkIiwic2tpcCIsImhhbmRsZVNraXBCYWNrIiwidGltZSIsIk1hdGgiLCJmbG9vciIsInNsaWNlIiwiam9pbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJyZWYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzIiwic3BhbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WavesurferPlayer.js\n"));

/***/ })

});