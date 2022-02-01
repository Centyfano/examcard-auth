(self["webpackChunkexamcard_auth"] = self["webpackChunkexamcard_auth"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 99818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 53746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @zxing/ngx-scanner */ 53820);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 99818);










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_9__.ZXingScannerModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page],
    })
], Tab3PageModule);



/***/ }),

/***/ 78592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 64255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 90943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _qr_result_qr_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../qr-result/qr-result.service */ 14128);








let Tab3Page = class Tab3Page {
    constructor(alertController, router, qrResult, // private qrScanner: QRScanner
    title) {
        this.alertController = alertController;
        this.router = router;
        this.qrResult = qrResult;
        this.title = title;
        this.currentDevice = null;
        this.torchEnabled = false;
        this.torchCompatible = false;
        this.enableCamera = true;
        this.currentCameraIndex = 0;
        this.title.setTitle('Scan Code');
    }
    onHasPermission(hasPermission) {
        if (!hasPermission) {
            this.alertController
                .create({
                header: 'No permission',
                message: 'In order to scan QR codes, you need to grant permisison for camera access',
                buttons: ['OK'],
            })
                .then((alert) => alert.present());
        }
    }
    onIsTorchCompatible(compatible) {
        this.torchCompatible = compatible;
    }
    onCamerasFound(cameras) {
        this.availableCameras = cameras;
        this.currentDevice = this.availableCameras[0];
    }
    switchCamera() {
        this.currentCameraIndex++;
        if (this.currentCameraIndex === this.availableCameras.length) {
            this.currentCameraIndex = 0;
        }
        this.currentDevice = this.availableCameras[this.currentCameraIndex];
    }
    onCodeResult(result) {
        const res = 'U2FsdGVkX18p0CvASSI63GV8nxf8yEUyiCB8ZaYTQUtaegwLuHMCMMB6wTn9w7FWODz3zwLQa+/XWrLc4kem1Q==';
        this.router.navigate(['/result', { code: result }]);
    }
    set res(result) {
        this.qrResult.result = result;
    }
    get res() {
        return this.qrResult.result;
    }
    ngOnInit() { }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _qr_result_qr_result_service__WEBPACK_IMPORTED_MODULE_2__.QrResultService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 90943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("::ng-deep zxing-scanner video {\n  height: 100% !important;\n}\n::ng-deep .hole {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 200px;\n  height: 200px;\n  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.65);\n  background: linear-gradient(to right, #3880ff 5px, transparent 5px) 0 0, linear-gradient(to right, #3880ff 5px, transparent 5px) 0 100%, linear-gradient(to left, #3880ff 5px, transparent 5px) 100% 0, linear-gradient(to left, #3880ff 5px, transparent 5px) 100% 100%, linear-gradient(to bottom, #3880ff 5px, transparent 5px) 0 0, linear-gradient(to bottom, #3880ff 5px, transparent 5px) 100% 0, linear-gradient(to top, #3880ff 5px, transparent 5px) 0 100%, linear-gradient(to top, #3880ff 5px, transparent 5px) 100% 100%;\n  background-repeat: no-repeat;\n  background-size: 30px 30px;\n}\n::ng-deep .hole-laser {\n  width: 100%;\n  height: 1px;\n  position: relative;\n  background: #3880ff;\n  animation: anim 2s 10;\n  animation-direction: alternate;\n}\n@keyframes anim {\n  0% {\n    left: 0px;\n    top: 0px;\n  }\n  100% {\n    left: 0px;\n    top: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsdUJBQUE7QUFETjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtFQUVBLHNnQkFDUTtFQVNSLDRCQUFBO0VBQ0EsMEJBQUE7QUFkSjtBQWdCSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFkTjtBQWtCQTtFQUNFO0lBQU8sU0FBQTtJQUFXLFFBQUE7RUFibEI7RUFjQTtJQUFPLFNBQUE7SUFBVyxVQUFBO0VBVmxCO0FBQ0YiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICB6eGluZy1zY2FubmVyIHtcbiAgICB2aWRlbyB7XG4gICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDs7XG4gICAgICAvL29iamVjdC1maXQ6IGZpbGwgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuaG9sZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCA5OTk5cHggcmdiYSgwLCAwLCAwLCAwLjY1KTtcblxuICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzODgwZmYgNXB4LCB0cmFuc3BhcmVudCA1cHgpIDAgMCxcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM4ODBmZiA1cHgsIHRyYW5zcGFyZW50IDVweCkgMCAxMDAlLFxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMzODgwZmYgNXB4LCB0cmFuc3BhcmVudCA1cHgpIDEwMCUgMCxcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMzg4MGZmIDVweCwgdHJhbnNwYXJlbnQgNXB4KSAxMDAlIDEwMCUsXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzg4MGZmIDVweCwgdHJhbnNwYXJlbnQgNXB4KSAwIDAsXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzg4MGZmIDVweCwgdHJhbnNwYXJlbnQgNXB4KSAxMDAlIDAsXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzg4MGZmIDVweCwgdHJhbnNwYXJlbnQgNXB4KSAwIDEwMCUsXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzg4MGZmIDVweCwgdHJhbnNwYXJlbnQgNXB4KSAxMDAlIDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCAzMHB4O1xuXG4gICAgJi1sYXNlcntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmIDtcbiAgICAgIGFuaW1hdGlvbjogYW5pbSAycyAxMDtcbiAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgICB9XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbSB7XG4gIDAlICAgeyBsZWZ0OiAwcHg7IHRvcDogMHB4O31cbiAgMTAwJSB7IGxlZnQ6IDBweDsgdG9wOiAyMDBweDt9XG59Il19 */");

/***/ }),

/***/ 64255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Scan Code\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div style=\"width: 100%; height: 100%\">\n    <zxing-scanner style=\"height: 100%; width: 100%\" \n      #scanner [device]=\"currentDevice\" \n      [torch]=\"torchEnabled\"\n      previewFitMode=\"fill\" \n      (scanSuccess)=\"onCodeResult($event)\" \n      (permissionResponse)=\"onHasPermission($event)\"\n      (camerasFound)=\"onCamerasFound($event)\" \n      (torchCompatible)=\"onIsTorchCompatible($event)\"\n      [enable]=\"enableCamera\"\n      >\n    </zxing-scanner>\n  <div class=\"hole\"><div class=\"hole-laser\"></div></div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map