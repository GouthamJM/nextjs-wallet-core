"use strict";
exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _utils_walletCore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(365);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);



function PageLayoutHoc(HocComponent) {
    function PageLayoutHoc(props) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "pageWrapper",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HocComponent, {
                    ...props
                })
            })
        });
    }
    return PageLayoutHoc;
}
const Layout = ({ Component, pageProps })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
};
const PageLayoutWithTrustWalletService = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(async ()=>{
    await _utils_walletCore__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.init();
    return PageLayoutHoc(Layout);
}, {
    ssr: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLayoutWithTrustWalletService);


/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trustwallet_wallet_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(484);
/* harmony import */ var _trustwallet_wallet_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trustwallet_wallet_core__WEBPACK_IMPORTED_MODULE_0__);

class TrustWalletCore {
    constructor(_walletCore){
        this.suggestMenumonic = (val)=>{
            return this.walletCore.Mnemonic.suggest(val);
        };
        this.walletCore = _walletCore;
        this.CoinType = _walletCore.CoinType;
    }
    async init() {
        const _walletCore = await (0,_trustwallet_wallet_core__WEBPACK_IMPORTED_MODULE_0__.initWasm)();
        this.walletCore = _walletCore;
        this.CoinType = _walletCore.CoinType;
    }
    getWalletCore() {
        return this.walletCore;
    }
}
const trustWalletService = new TrustWalletCore({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trustWalletService);


/***/ })

};
;