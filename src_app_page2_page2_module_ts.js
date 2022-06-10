"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page2_page2_module_ts"],{

/***/ 1611:
/*!***********************************************!*\
  !*** ./src/app/page2/page2-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page2PageRoutingModule": () => (/* binding */ Page2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _page2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page2.page */ 2397);




const routes = [
    {
        path: '',
        component: _page2_page__WEBPACK_IMPORTED_MODULE_0__.Page2Page
    }
];
let Page2PageRoutingModule = class Page2PageRoutingModule {
};
Page2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Page2PageRoutingModule);



/***/ }),

/***/ 9068:
/*!***************************************!*\
  !*** ./src/app/page2/page2.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page2PageModule": () => (/* binding */ Page2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _page2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page2-routing.module */ 1611);
/* harmony import */ var _page2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2.page */ 2397);







let Page2PageModule = class Page2PageModule {
};
Page2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _page2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Page2PageRoutingModule
        ],
        declarations: [_page2_page__WEBPACK_IMPORTED_MODULE_1__.Page2Page]
    })
], Page2PageModule);



/***/ }),

/***/ 2397:
/*!*************************************!*\
  !*** ./src/app/page2/page2.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page2Page": () => (/* binding */ Page2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Ankit_Daily_New_03_March_2022_Age_Calculator_node_modules_ngtools_webpack_src_loaders_direct_resource_js_page2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./page2.page.html */ 928);
/* harmony import */ var _page2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2.page.scss */ 4411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Page2Page = class Page2Page {
    constructor() { }
    ngOnInit() {
    }
};
Page2Page.ctorParameters = () => [];
Page2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-page2',
        template: _D_Ankit_Daily_New_03_March_2022_Age_Calculator_node_modules_ngtools_webpack_src_loaders_direct_resource_js_page2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_page2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Page2Page);



/***/ }),

/***/ 928:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/page2/page2.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Page2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 4411:
/*!***************************************!*\
  !*** ./src/app/page2/page2.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlMi5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_page2_page2_module_ts.js.map