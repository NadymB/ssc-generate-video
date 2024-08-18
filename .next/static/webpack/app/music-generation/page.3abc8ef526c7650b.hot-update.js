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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WaveSurferPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wavesurfer.js */ \"(app-pages-browser)/./node_modules/wavesurfer.js/dist/wavesurfer.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction WaveSurferPlayer(param) {\n    let { song } = param;\n    _s();\n    //   console.log(\"song\", song);\n    const waveformRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    let wavesurfer;\n    const [playPause, setPlayPause] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n            container: waveformRef.current,\n            waveColor: [\n                // an array of colors, to be applied as gradient color stops to the waveform.\n                \"#ced4da\"\n            ],\n            progressColor: \"#343a40\",\n            //   url: \"https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3\",\n            url: song.src,\n            dragToSeek: true,\n            width: \"35vw\",\n            hideScrollbar: true,\n            normalize: true,\n            barGap: 1,\n            height: 60,\n            barHeight: 20,\n            barRadius: 20,\n            barWidth: 5\n        });\n        wavesurfer.on(\"finish\", ()=>{\n            console.log(\"song finished\");\n        });\n        wavesurfer.on(\"ready\", ()=>{\n            console.log(\"Waveform is ready\");\n        });\n        return ()=>{\n            wavesurfer.destroy();\n        };\n    }, []);\n    const handleStop = ()=>{\n        if (wavesurfer) {\n            wavesurfer.stop();\n        }\n    };\n    const handlePause = ()=>{\n        if (wavesurfer) {\n            wavesurfer.playPause();\n        }\n    };\n    const handleSkipForward = ()=>{\n        if (wavesurfer) {\n            wavesurfer.skip(2);\n        }\n    };\n    const handleSkipBack = ()=>{\n        if (wavesurfer) {\n            wavesurfer.skip(-2);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sub-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Oceans\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex border align-items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: waveformRef,\n                            className: \"wavesurfer-container w-100\",\n                            style: {\n                                backgroundColor: \"#fff\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"wavesurfer-controls\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"audio-player-btn-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"play-button play-button-nyt\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: handlePause,\n                                        class: \"play-arrow\",\n                                        children: \"Play\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\workplace\\\\ssc\\\\music.generator.fe\\\\components\\\\WavesurferPlayer.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(WaveSurferPlayer, \"BSU9i/TutIFftcOB9vWNhRC2Ovo=\");\n_c = WaveSurferPlayer;\nvar _c;\n$RefreshReg$(_c, \"WaveSurferPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2F2ZXN1cmZlclBsYXllci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0I7QUFDcUI7QUFDYjtBQU1mO0FBRVQsU0FBU1MsaUJBQWlCLEtBQVE7UUFBUixFQUFFQyxJQUFJLEVBQUUsR0FBUjs7SUFDdkMsK0JBQStCO0lBRS9CLE1BQU1DLGNBQWNULDZDQUFNQSxDQUFDO0lBQzNCLElBQUlVO0lBQ0osTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQTtJQUUxQ0YsZ0RBQVNBLENBQUM7UUFDUlcsYUFBYVIscURBQVVBLENBQUNXLE1BQU0sQ0FBQztZQUM3QkMsV0FBV0wsWUFBWU0sT0FBTztZQUM5QkMsV0FBVztnQkFDVCw2RUFBNkU7Z0JBQzdFO2FBT0Q7WUFDREMsZUFBZTtZQUNmLDBFQUEwRTtZQUMxRUMsS0FBS1YsS0FBS1csR0FBRztZQUNiQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsZUFBZTtZQUNmQyxXQUFXO1lBQ1hDLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxXQUFXO1lBQ1hDLFdBQVc7WUFDWEMsVUFBVTtRQUNaO1FBRUFsQixXQUFXbUIsRUFBRSxDQUFDLFVBQVU7WUFDdEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBRUFyQixXQUFXbUIsRUFBRSxDQUFDLFNBQVM7WUFDckJDLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBQ0EsT0FBTztZQUNMckIsV0FBV3NCLE9BQU87UUFDcEI7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNQyxhQUFhO1FBQ2pCLElBQUl2QixZQUFZO1lBQ2RBLFdBQVd3QixJQUFJO1FBQ2pCO0lBQ0Y7SUFDQSxNQUFNQyxjQUFjO1FBQ2xCLElBQUl6QixZQUFZO1lBQ2RBLFdBQVdDLFNBQVM7UUFDdEI7SUFDRjtJQUVBLE1BQU15QixvQkFBb0I7UUFDeEIsSUFBSTFCLFlBQVk7WUFDZEEsV0FBVzJCLElBQUksQ0FBQztRQUNsQjtJQUNGO0lBQ0EsTUFBTUMsaUJBQWlCO1FBQ3JCLElBQUk1QixZQUFZO1lBQ2RBLFdBQVcyQixJQUFJLENBQUMsQ0FBQztRQUNuQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQU9iLDhEQUFDQzs4QkFBRTs7Ozs7OzhCQUVILDhEQUFDRjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUNDRyxLQUFLakM7NEJBQ0wrQixXQUFVOzRCQUNWRyxPQUFPO2dDQUFFQyxpQkFBaUI7NEJBQU87Ozs7OztzQ0FFbkMsOERBQUNMOzRCQUFJQyxXQUFVO3NDQU9iLDRFQUFDRDtnQ0FBSU0sT0FBTTswQ0FDVCw0RUFBQ047b0NBQUlNLE9BQU07OENBQ1QsNEVBQUNDO3dDQUFLQyxTQUFTWjt3Q0FBYVUsT0FBTTtrREFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQi9EO0dBN0d3QnRDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2F2ZXN1cmZlclBsYXllci5qcz9iODEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXYXZlU3VyZmVyIGZyb20gXCJ3YXZlc3VyZmVyLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgQnNGaWxsU3RvcEZpbGwsXHJcbiAgQnNGaWxsUGxheUZpbGwsXHJcbiAgQnNTa2lwRm9yd2FyZCxcclxuICBCc1NraXBCYWNrd2FyZCxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhdmVTdXJmZXJQbGF5ZXIoeyBzb25nIH0pIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwic29uZ1wiLCBzb25nKTtcclxuXHJcbiAgY29uc3Qgd2F2ZWZvcm1SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IHdhdmVzdXJmZXI7XHJcbiAgY29uc3QgW3BsYXlQYXVzZSwgc2V0UGxheVBhdXNlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3YXZlc3VyZmVyID0gV2F2ZVN1cmZlci5jcmVhdGUoe1xyXG4gICAgICBjb250YWluZXI6IHdhdmVmb3JtUmVmLmN1cnJlbnQsXHJcbiAgICAgIHdhdmVDb2xvcjogW1xyXG4gICAgICAgIC8vIGFuIGFycmF5IG9mIGNvbG9ycywgdG8gYmUgYXBwbGllZCBhcyBncmFkaWVudCBjb2xvciBzdG9wcyB0byB0aGUgd2F2ZWZvcm0uXHJcbiAgICAgICAgXCIjY2VkNGRhXCIsXHJcbiAgICAgICAgLy8gXCIjNjBlZmZmXCIsXHJcbiAgICAgICAgLy8gLy8gXCJyZWRcIixcclxuICAgICAgICAvLyAvLyBcImdyZWVuXCIsXHJcbiAgICAgICAgLy8gLy8gXCJwdXJwbGVcIixcclxuICAgICAgICAvLyAvLyBcInllbGxvd1wiLFxyXG4gICAgICAgIC8vIFwicmdiYSgwLDI1NSwyNTUsLjUpXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIHByb2dyZXNzQ29sb3I6IFwiIzM0M2E0MFwiLFxyXG4gICAgICAvLyAgIHVybDogXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9hdWRpby8yMDIyLzA4LzIzL2F1ZGlvX2QxNjczN2RjMjgubXAzXCIsXHJcbiAgICAgIHVybDogc29uZy5zcmMsXHJcbiAgICAgIGRyYWdUb1NlZWs6IHRydWUsXHJcbiAgICAgIHdpZHRoOiBcIjM1dndcIixcclxuICAgICAgaGlkZVNjcm9sbGJhcjogdHJ1ZSxcclxuICAgICAgbm9ybWFsaXplOiB0cnVlLFxyXG4gICAgICBiYXJHYXA6IDEsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgIGJhckhlaWdodDogMjAsXHJcbiAgICAgIGJhclJhZGl1czogMjAsXHJcbiAgICAgIGJhcldpZHRoOiA1LFxyXG4gICAgfSk7XHJcblxyXG4gICAgd2F2ZXN1cmZlci5vbihcImZpbmlzaFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29uZyBmaW5pc2hlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdhdmVzdXJmZXIub24oXCJyZWFkeVwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiV2F2ZWZvcm0gaXMgcmVhZHlcIik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdhdmVzdXJmZXIuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcclxuICAgIGlmICh3YXZlc3VyZmVyKSB7XHJcbiAgICAgIHdhdmVzdXJmZXIuc3RvcCgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUGF1c2UgPSAoKSA9PiB7XHJcbiAgICBpZiAod2F2ZXN1cmZlcikge1xyXG4gICAgICB3YXZlc3VyZmVyLnBsYXlQYXVzZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNraXBGb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgaWYgKHdhdmVzdXJmZXIpIHtcclxuICAgICAgd2F2ZXN1cmZlci5za2lwKDIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU2tpcEJhY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAod2F2ZXN1cmZlcikge1xyXG4gICAgICB3YXZlc3VyZmVyLnNraXAoLTIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1jb250YWluZXJcIj5cclxuICAgICAgICB7LyogPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIxLzExLzA0LzA1LzMzL2RvbWUtNjc2NzQyMl85NjBfNzIwLmpwZ1wiXHJcbiAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgIGhlaWdodD17MTAwMH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImF1ZGlvLWltYWdlXCJcclxuICAgICAgICAvPiAqL31cclxuICAgICAgICA8cD5PY2VhbnM8L3A+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGJvcmRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXt3YXZlZm9ybVJlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2F2ZXN1cmZlci1jb250YWluZXIgdy0xMDBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlc3VyZmVyLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNraXBCYWNrfT5cclxuICAgICAgICAgICAgPEJzU2tpcEJhY2t3YXJkIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBhdXNlfT5cclxuICAgICAgICAgICAgICA8QnNGaWxsUGxheUZpbGwgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXVkaW8tcGxheWVyLWJ0bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheS1idXR0b24gcGxheS1idXR0b24tbnl0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtoYW5kbGVQYXVzZX0gY2xhc3M9XCJwbGF5LWFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIFBsYXlcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9PlxyXG4gICAgICAgICAgICA8QnNGaWxsU3RvcEZpbGwgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTa2lwRm9yd2FyZH0+XHJcbiAgICAgICAgICAgIDxCc1NraXBGb3J3YXJkIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiV2F2ZVN1cmZlciIsIkJzRmlsbFN0b3BGaWxsIiwiQnNGaWxsUGxheUZpbGwiLCJCc1NraXBGb3J3YXJkIiwiQnNTa2lwQmFja3dhcmQiLCJXYXZlU3VyZmVyUGxheWVyIiwic29uZyIsIndhdmVmb3JtUmVmIiwid2F2ZXN1cmZlciIsInBsYXlQYXVzZSIsInNldFBsYXlQYXVzZSIsImNyZWF0ZSIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJ3YXZlQ29sb3IiLCJwcm9ncmVzc0NvbG9yIiwidXJsIiwic3JjIiwiZHJhZ1RvU2VlayIsIndpZHRoIiwiaGlkZVNjcm9sbGJhciIsIm5vcm1hbGl6ZSIsImJhckdhcCIsImhlaWdodCIsImJhckhlaWdodCIsImJhclJhZGl1cyIsImJhcldpZHRoIiwib24iLCJjb25zb2xlIiwibG9nIiwiZGVzdHJveSIsImhhbmRsZVN0b3AiLCJzdG9wIiwiaGFuZGxlUGF1c2UiLCJoYW5kbGVTa2lwRm9yd2FyZCIsInNraXAiLCJoYW5kbGVTa2lwQmFjayIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJyZWYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzIiwic3BhbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WavesurferPlayer.js\n"));

/***/ })

});