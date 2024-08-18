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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WaveSurferPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wavesurfer.js */ \"(app-pages-browser)/./node_modules/wavesurfer.js/dist/wavesurfer.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction WaveSurferPlayer(param) {\n    let { song } = param;\n    _s();\n    //   console.log(\"song\", song);\n    const waveformRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    let wavesurfer;\n    const [playPause, setPlayPause] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n            container: waveformRef.current,\n            waveColor: [\n                // an array of colors, to be applied as gradient color stops to the waveform.\n                \"#6c757d\",\n                \"#60efff\",\n                // \"red\",\n                // \"green\",\n                // \"purple\",\n                // \"yellow\",\n                \"rgba(0,255,255,.5)\"\n            ],\n            progressColor: \"#F90\",\n            //   url: \"https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3\",\n            url: song.src,\n            dragToSeek: true,\n            width: \"35vw\",\n            hideScrollbar: true,\n            normalize: true,\n            barGap: 1,\n            height: 60,\n            barHeight: 20,\n            barRadius: 20,\n            barWidth: 5\n        });\n        wavesurfer.on(\"finish\", ()=>{\n            console.log(\"song finished\");\n        });\n        wavesurfer.on(\"ready\", ()=>{\n            console.log(\"Waveform is ready\");\n        });\n        return ()=>{\n            wavesurfer.destroy();\n        };\n    }, []);\n    const handleStop = ()=>{\n        if (wavesurfer) {\n            wavesurfer.stop();\n        }\n    };\n    const handlePause = ()=>{\n        if (wavesurfer) {\n            wavesurfer.playPause();\n        }\n    };\n    const handleSkipForward = ()=>{\n        if (wavesurfer) {\n            wavesurfer.skip(2);\n        }\n    };\n    const handleSkipBack = ()=>{\n        if (wavesurfer) {\n            wavesurfer.skip(-2);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sub-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Oceans\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex border align-items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: waveformRef,\n                            className: \"wavesurfer-container w-100\",\n                            style: {\n                                backgroundColor: \"#fff\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"wavesurfer-controls\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"audio-player-btn-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"play-button play-button-nyt\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: handlePause,\n                                        class: \"play-arrow\",\n                                        children: \"Play\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(WaveSurferPlayer, \"BSU9i/TutIFftcOB9vWNhRC2Ovo=\");\n_c = WaveSurferPlayer;\nvar _c;\n$RefreshReg$(_c, \"WaveSurferPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2F2ZXN1cmZlclBsYXllci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0I7QUFDcUI7QUFDYjtBQU1mO0FBRVQsU0FBU1MsaUJBQWlCLEtBQVE7UUFBUixFQUFFQyxJQUFJLEVBQUUsR0FBUjs7SUFDdkMsK0JBQStCO0lBRS9CLE1BQU1DLGNBQWNULDZDQUFNQSxDQUFDO0lBQzNCLElBQUlVO0lBQ0osTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQTtJQUUxQ0YsZ0RBQVNBLENBQUM7UUFDUlcsYUFBYVIscURBQVVBLENBQUNXLE1BQU0sQ0FBQztZQUM3QkMsV0FBV0wsWUFBWU0sT0FBTztZQUM5QkMsV0FBVztnQkFDVCw2RUFBNkU7Z0JBQzdFO2dCQUNBO2dCQUNBLFNBQVM7Z0JBQ1QsV0FBVztnQkFDWCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1o7YUFDRDtZQUNEQyxlQUFlO1lBQ2YsMEVBQTBFO1lBQzFFQyxLQUFLVixLQUFLVyxHQUFHO1lBQ2JDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxlQUFlO1lBQ2ZDLFdBQVc7WUFDWEMsUUFBUTtZQUNSQyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEMsV0FBVztZQUNYQyxVQUFVO1FBQ1o7UUFFQWxCLFdBQVdtQixFQUFFLENBQUMsVUFBVTtZQUN0QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7UUFFQXJCLFdBQVdtQixFQUFFLENBQUMsU0FBUztZQUNyQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7UUFDQSxPQUFPO1lBQ0xyQixXQUFXc0IsT0FBTztRQUNwQjtJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1DLGFBQWE7UUFDakIsSUFBSXZCLFlBQVk7WUFDZEEsV0FBV3dCLElBQUk7UUFDakI7SUFDRjtJQUNBLE1BQU1DLGNBQWM7UUFDbEIsSUFBSXpCLFlBQVk7WUFDZEEsV0FBV0MsU0FBUztRQUN0QjtJQUNGO0lBRUEsTUFBTXlCLG9CQUFvQjtRQUN4QixJQUFJMUIsWUFBWTtZQUNkQSxXQUFXMkIsSUFBSSxDQUFDO1FBQ2xCO0lBQ0Y7SUFDQSxNQUFNQyxpQkFBaUI7UUFDckIsSUFBSTVCLFlBQVk7WUFDZEEsV0FBVzJCLElBQUksQ0FBQyxDQUFDO1FBQ25CO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBT2IsOERBQUNDOzhCQUFFOzs7Ozs7OEJBRUgsOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQ0NHLEtBQUtqQzs0QkFDTCtCLFdBQVU7NEJBQ1ZHLE9BQU87Z0NBQUVDLGlCQUFpQjs0QkFBTzs7Ozs7O3NDQUVuQyw4REFBQ0w7NEJBQUlDLFdBQVU7c0NBT2IsNEVBQUNEO2dDQUFJTSxPQUFNOzBDQUNULDRFQUFDTjtvQ0FBSU0sT0FBTTs4Q0FDVCw0RUFBQ0M7d0NBQUtDLFNBQVNaO3dDQUFhVSxPQUFNO2tEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCL0Q7R0E3R3dCdEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlc3VyZmVyUGxheWVyLmpzP2I4MTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdhdmVTdXJmZXIgZnJvbSBcIndhdmVzdXJmZXIuanNcIjtcclxuaW1wb3J0IHtcclxuICBCc0ZpbGxTdG9wRmlsbCxcclxuICBCc0ZpbGxQbGF5RmlsbCxcclxuICBCc1NraXBGb3J3YXJkLFxyXG4gIEJzU2tpcEJhY2t3YXJkLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2F2ZVN1cmZlclBsYXllcih7IHNvbmcgfSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJzb25nXCIsIHNvbmcpO1xyXG5cclxuICBjb25zdCB3YXZlZm9ybVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgd2F2ZXN1cmZlcjtcclxuICBjb25zdCBbcGxheVBhdXNlLCBzZXRQbGF5UGF1c2VdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdhdmVzdXJmZXIgPSBXYXZlU3VyZmVyLmNyZWF0ZSh7XHJcbiAgICAgIGNvbnRhaW5lcjogd2F2ZWZvcm1SZWYuY3VycmVudCxcclxuICAgICAgd2F2ZUNvbG9yOiBbXHJcbiAgICAgICAgLy8gYW4gYXJyYXkgb2YgY29sb3JzLCB0byBiZSBhcHBsaWVkIGFzIGdyYWRpZW50IGNvbG9yIHN0b3BzIHRvIHRoZSB3YXZlZm9ybS5cclxuICAgICAgICBcIiM2Yzc1N2RcIixcclxuICAgICAgICBcIiM2MGVmZmZcIixcclxuICAgICAgICAvLyBcInJlZFwiLFxyXG4gICAgICAgIC8vIFwiZ3JlZW5cIixcclxuICAgICAgICAvLyBcInB1cnBsZVwiLFxyXG4gICAgICAgIC8vIFwieWVsbG93XCIsXHJcbiAgICAgICAgXCJyZ2JhKDAsMjU1LDI1NSwuNSlcIixcclxuICAgICAgXSxcclxuICAgICAgcHJvZ3Jlc3NDb2xvcjogXCIjRjkwXCIsXHJcbiAgICAgIC8vICAgdXJsOiBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL2F1ZGlvLzIwMjIvMDgvMjMvYXVkaW9fZDE2NzM3ZGMyOC5tcDNcIixcclxuICAgICAgdXJsOiBzb25nLnNyYyxcclxuICAgICAgZHJhZ1RvU2VlazogdHJ1ZSxcclxuICAgICAgd2lkdGg6IFwiMzV2d1wiLFxyXG4gICAgICBoaWRlU2Nyb2xsYmFyOiB0cnVlLFxyXG4gICAgICBub3JtYWxpemU6IHRydWUsXHJcbiAgICAgIGJhckdhcDogMSxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgYmFySGVpZ2h0OiAyMCxcclxuICAgICAgYmFyUmFkaXVzOiAyMCxcclxuICAgICAgYmFyV2lkdGg6IDUsXHJcbiAgICB9KTtcclxuXHJcbiAgICB3YXZlc3VyZmVyLm9uKFwiZmluaXNoXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJzb25nIGZpbmlzaGVkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2F2ZXN1cmZlci5vbihcInJlYWR5XCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJXYXZlZm9ybSBpcyByZWFkeVwiKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2F2ZXN1cmZlci5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xyXG4gICAgaWYgKHdhdmVzdXJmZXIpIHtcclxuICAgICAgd2F2ZXN1cmZlci5zdG9wKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVQYXVzZSA9ICgpID0+IHtcclxuICAgIGlmICh3YXZlc3VyZmVyKSB7XHJcbiAgICAgIHdhdmVzdXJmZXIucGxheVBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2tpcEZvcndhcmQgPSAoKSA9PiB7XHJcbiAgICBpZiAod2F2ZXN1cmZlcikge1xyXG4gICAgICB3YXZlc3VyZmVyLnNraXAoMik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTa2lwQmFjayA9ICgpID0+IHtcclxuICAgIGlmICh3YXZlc3VyZmVyKSB7XHJcbiAgICAgIHdhdmVzdXJmZXIuc2tpcCgtMik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsvKiA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMjEvMTEvMDQvMDUvMzMvZG9tZS02NzY3NDIyXzk2MF83MjAuanBnXCJcclxuICAgICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxMDAwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXVkaW8taW1hZ2VcIlxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICAgIDxwPk9jZWFuczwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYm9yZGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e3dhdmVmb3JtUmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3YXZlc3VyZmVyLWNvbnRhaW5lciB3LTEwMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdmVzdXJmZXItY29udHJvbHNcIj5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17aGFuZGxlU2tpcEJhY2t9PlxyXG4gICAgICAgICAgICA8QnNTa2lwQmFja3dhcmQgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17aGFuZGxlUGF1c2V9PlxyXG4gICAgICAgICAgICAgIDxCc0ZpbGxQbGF5RmlsbCAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdWRpby1wbGF5ZXItYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5LWJ1dHRvbiBwbGF5LWJ1dHRvbi1ueXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZVBhdXNlfSBjbGFzcz1cInBsYXktYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgUGxheVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0+XHJcbiAgICAgICAgICAgIDxCc0ZpbGxTdG9wRmlsbCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNraXBGb3J3YXJkfT5cclxuICAgICAgICAgICAgPEJzU2tpcEZvcndhcmQgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJXYXZlU3VyZmVyIiwiQnNGaWxsU3RvcEZpbGwiLCJCc0ZpbGxQbGF5RmlsbCIsIkJzU2tpcEZvcndhcmQiLCJCc1NraXBCYWNrd2FyZCIsIldhdmVTdXJmZXJQbGF5ZXIiLCJzb25nIiwid2F2ZWZvcm1SZWYiLCJ3YXZlc3VyZmVyIiwicGxheVBhdXNlIiwic2V0UGxheVBhdXNlIiwiY3JlYXRlIiwiY29udGFpbmVyIiwiY3VycmVudCIsIndhdmVDb2xvciIsInByb2dyZXNzQ29sb3IiLCJ1cmwiLCJzcmMiLCJkcmFnVG9TZWVrIiwid2lkdGgiLCJoaWRlU2Nyb2xsYmFyIiwibm9ybWFsaXplIiwiYmFyR2FwIiwiaGVpZ2h0IiwiYmFySGVpZ2h0IiwiYmFyUmFkaXVzIiwiYmFyV2lkdGgiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJkZXN0cm95IiwiaGFuZGxlU3RvcCIsInN0b3AiLCJoYW5kbGVQYXVzZSIsImhhbmRsZVNraXBGb3J3YXJkIiwic2tpcCIsImhhbmRsZVNraXBCYWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInJlZiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3MiLCJzcGFuIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WavesurferPlayer.js\n"));

/***/ })

});