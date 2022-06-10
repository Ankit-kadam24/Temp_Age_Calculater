"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page1_page1_module_ts"],{

/***/ 8082:
/*!***********************************************!*\
  !*** ./src/app/page1/page1-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page1PageRoutingModule": () => (/* binding */ Page1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _page1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page1.page */ 3932);




const routes = [
    {
        path: '',
        component: _page1_page__WEBPACK_IMPORTED_MODULE_0__.Page1Page
    }
];
let Page1PageRoutingModule = class Page1PageRoutingModule {
};
Page1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Page1PageRoutingModule);



/***/ }),

/***/ 5508:
/*!***************************************!*\
  !*** ./src/app/page1/page1.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page1PageModule": () => (/* binding */ Page1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _page1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page1-routing.module */ 8082);
/* harmony import */ var _page1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page1.page */ 3932);







let Page1PageModule = class Page1PageModule {
};
Page1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _page1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Page1PageRoutingModule
        ],
        declarations: [_page1_page__WEBPACK_IMPORTED_MODULE_1__.Page1Page]
    })
], Page1PageModule);



/***/ }),

/***/ 3932:
/*!*************************************!*\
  !*** ./src/app/page1/page1.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page1Page": () => (/* binding */ Page1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Ankit_Daily_New_03_March_2022_Age_Calculator_node_modules_ngtools_webpack_src_loaders_direct_resource_js_page1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./page1.page.html */ 6056);
/* harmony import */ var _page1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page1.page.scss */ 2626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);





let Page1Page = class Page1Page {
    constructor(NavCtr) {
        this.NavCtr = NavCtr;
    }
    goBack() {
        //  this.NavCtr.pop();
        this.NavCtr.navigateBack('home', { skipLocationChange: true }).then(() => {
            this.NavCtr.navigateForward('home');
        });
    }
    onClick() {
        this.NavCtr.navigateForward('page2');
    }
    ngOnInit() {
    }
};
Page1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
Page1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-page1',
        template: _D_Ankit_Daily_New_03_March_2022_Age_Calculator_node_modules_ngtools_webpack_src_loaders_direct_resource_js_page1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_page1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Page1Page);



/***/ }),

/***/ 6056:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/page1/page1.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Page1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!-- <ion-button (click)=\"goBack()\">Back </ion-button>\n<ion-button (click)=\"onClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n  Click me\n</ion-button> -->\n\n<mbsc-datepicker\n    [controls]=\"['date']\"\n    [touchUi]=\"true\">\n</mbsc-datepicker>\n</ion-content>\n");

/***/ }),

/***/ 2626:
/*!***************************************!*\
  !*** ./src/app/page1/page1.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = ".wrapper {\n  width: 80%;\n  margin: 5% auto;\n}\n\n.text {\n  margin: 10px;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.item-class {\n  color: white;\n}\n\n.calculate {\n  --box-shadow: none;\n  --background: #622c8d;\n  padding: 20px;\n}\n\n.result {\n  text-align: center;\n}\n\n.h1 {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.year {\n  font-size: 50px;\n  padding: 20px;\n  margin: 10px;\n}\n\n.result h2 {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.labelitem {\n  font-size: 15px;\n}\n\n.labelitem ion-icon {\n  size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDQyxZQUFBO0FBRUg7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7QUFJSjs7QUFGRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkU7RUFDRSxlQUFBO0VBQ0UsaUJBQUE7QUFPTjs7QUFMRTtFQUNFLGVBQUE7QUFRSjs7QUFMRTtFQUNFLFdBQUE7QUFRSiIsImZpbGUiOiJwYWdlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLndyYXBwZXJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIH1cclxuLnRleHQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5pdGVtLWNsYXNze1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5jYWxjdWxhdGUge1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNjIyYzhkO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgLnJlc3VsdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5oMXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAueWVhcntcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIC5yZXN1bHQgaDJ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAubGFiZWxpdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICBcclxuICB9XHJcbiAgLmxhYmVsaXRlbSBpb24taWNvbiB7XHJcbiAgICBzaXplOiBsYXJnZTtcclxuICAgIFxyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_page1_page1_module_ts.js.map