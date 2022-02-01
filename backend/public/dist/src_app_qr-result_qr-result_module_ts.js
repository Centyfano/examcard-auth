(self["webpackChunkexamcard_auth"] = self["webpackChunkexamcard_auth"] || []).push([["src_app_qr-result_qr-result_module_ts"],{

/***/ 83239:
/*!*******************************************************!*\
  !*** ./src/app/qr-result/qr-result-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrResultRoutingModule": () => (/* binding */ QrResultRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _qr_result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-result.component */ 33035);




const routes = [
    {
        path: '',
        component: _qr_result_component__WEBPACK_IMPORTED_MODULE_0__.QrResultComponent,
    },
];
let QrResultRoutingModule = class QrResultRoutingModule {
};
QrResultRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrResultRoutingModule);



/***/ }),

/***/ 33035:
/*!**************************************************!*\
  !*** ./src/app/qr-result/qr-result.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrResultComponent": () => (/* binding */ QrResultComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_qr_result_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-result.component.html */ 72885);
/* harmony import */ var _qr_result_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-result.component.scss */ 59979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _qr_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-result.service */ 14128);






let QrResultComponent = class QrResultComponent {
    constructor(qrResult, route) {
        this.qrResult = qrResult;
        this.route = route;
        this.qrCode = this.route.snapshot.params.code;
    }
    getRes() {
        this.qrResult.fetchResult(this.qrCode).subscribe((res) => {
            res.regNumber = res.eligibleStudentIdStudentStudentRegNumber;
            this.userDetails = res;
            this.userDetails.fullName = this.fullName(res.eligible_student_id.student.firstName, res.eligible_student_id.student.middleName, res.eligible_student_id.student.lastName);
        }, (err) => {
            console.error(err);
            if (err) {
                this.userErr = err.error.message;
            }
        });
    }
    fullName(f, m, l) {
        if (m === null) {
            m = '';
        }
        return `${f} ${m} ${l}`; //15
    }
    ngOnInit() {
        this.getRes();
    }
};
QrResultComponent.ctorParameters = () => [
    { type: _qr_result_service__WEBPACK_IMPORTED_MODULE_2__.QrResultService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
QrResultComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-qr-result',
        template: _raw_loader_qr_result_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_result_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrResultComponent);



/***/ }),

/***/ 23369:
/*!***********************************************!*\
  !*** ./src/app/qr-result/qr-result.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrResultModule": () => (/* binding */ QrResultModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _qr_result_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-result-routing.module */ 83239);
/* harmony import */ var _qr_result_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-result.component */ 33035);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zxing/ngx-scanner */ 53820);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);







let QrResultModule = class QrResultModule {
};
QrResultModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_qr_result_component__WEBPACK_IMPORTED_MODULE_1__.QrResultComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _qr_result_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrResultRoutingModule,
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__.ZXingScannerModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        ],
    })
], QrResultModule);



/***/ }),

/***/ 59979:
/*!****************************************************!*\
  !*** ./src/app/qr-result/qr-result.component.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".unit-name {\n  font-size: smaller;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoicXItcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVuaXQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ 72885:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qr-result/qr-result.component.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Student Details</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content [scrollEvents]=\"true\">\n  <!-- Default Item -->\n\n  <ion-item *ngIf=\"userErr\" color=\"danger\">\n    <ion-label>\n      {{userErr}}\n    </ion-label>\n  </ion-item>\n\n  <div *ngIf=\"!userErr && userDetails\">\n\n\n    <ion-item>\n      <ion-note slot=\"end\">Student Name</ion-note>\n      <ion-label>{{userDetails.fullName}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-note slot=\"end\">Reg. Number</ion-note>\n      <ion-label>{{userDetails.regNumber}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-note slot=\"end\">Academic Year</ion-note>\n      <ion-label>{{userDetails.examination.academicYear}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <span class=\"ion-margin-end\">Year of study: <strong>0{{userDetails.yearOfStudy}}</strong></span>\n        <span class=\"ion-margin-start\">Semester: <strong>0{{userDetails.semesterOfStudy}}</strong></span>\n      </ion-label>\n    </ion-item>\n\n    <div class=\"ion-margin\"></div>\n    <ion-list>\n      <ion-list-header lines=\"none\">\n        <ion-label color=\"\">\n          <h1>Units</h1>\n        </ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let unit of userDetails.units\" lines=\"inset\">\n        <span class=\"ion-margin-end\">{{unit.code}}</span> <span class=\"ion-margin-start unit-name\">{{unit.name}}</span>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n</ion-content>\n\n<ion-footer *ngIf=\"!userErr && userDetails\">\n  <ion-item color=\"primary\">\n    <ion-label class=\"ion-text-center unit-nam\">\n      <strong>{{userDetails.fullName | uppercase}}</strong> is\n      <strong>APPROVED</strong>\n    </ion-label>\n  </ion-item>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_qr-result_qr-result_module_ts.js.map