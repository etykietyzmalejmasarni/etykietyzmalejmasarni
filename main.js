(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/s1f":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_labels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/labels.service */ "5pZN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a1) { return ["edit", a1]; };
function MainComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_div_8_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const label_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r3.confirmDeleteLabel(label_r1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, index_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](label_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](label_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatDate(label_r1.expirationDate));
} }
class MainComponent {
    constructor(labelsService) {
        this.labelsService = labelsService;
    }
    ngOnInit() {
    }
    formatDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('DD.MM.yyyy');
    }
    confirmClearingLabels() {
        if (confirm('Czy jesteś pewny że chcesz wyczyścić wszystkie etykiety?')) {
            this.labelsService.clearLabels();
        }
    }
    confirmDeleteLabel(label) {
        if (confirm(`Czy jesteś pewny że chcesz usunąć etykietę dla ${label.title}?`)) {
            this.labelsService.deleteLabel(label);
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_labels_service__WEBPACK_IMPORTED_MODULE_2__["LabelsService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 9, vars: 1, consts: [["routerLink", "edit"], ["routerLink", "print"], [3, "click"], [1, "labels"], ["class", "label", 4, "ngFor", "ngForOf"], [1, "label"], [1, "delete", 3, "click"], [1, "label-wrapper", 3, "routerLink"], ["src", "../../../assets/emptyLabel.jpg"], [1, "description-wrapper"], [1, "quantity"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dodaj etykiete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Drukuj");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_Template_button_click_5_listener() { return ctx.confirmClearingLabels(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Wyczy\u015B\u0107 etykiety");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MainComponent_div_8_Template, 12, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.labelsService.allLabels);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".labels[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 8px;\n  justify-content: flex-start;\n  width: calc(100% - 16px);\n  flex-wrap: wrap;\n}\n.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 10vw;\n  min-width: 120px;\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 16px;\n  flex-shrink: 0;\n}\n.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  border: 3px solid black;\n  background-color: #ffffff;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: -8px;\n  right: -8px;\n  border-radius: 16px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n  font-weight: bolder;\n}\n.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .label-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .label-wrapper[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-weight: bolder;\n  color: #000000;\n  bottom: 0;\n  height: 100%;\n  padding: 8px;\n  box-sizing: border-box;\n}\n.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .label-wrapper[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUNNO0VBQ0UsZUFBQTtBQUNSO0FBR0k7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBRE47QUFHTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQURSO0FBR1E7RUFDRSxlQUFBO0FBRFY7QUFNSTtFQUNFLFdBQUE7QUFKTiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIC5sYWJlbCB7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgIC5kZWxldGUge1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB0b3A6IC04cHg7XHJcbiAgICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsLXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIC5kZXNjcmlwdGlvbi13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAucXVhbnRpdHkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\Projects\MasarniaLablesApp\src\main.ts */"zUnb");


/***/ }),

/***/ "5pZN":
/*!********************************************!*\
  !*** ./src/app/services/labels.service.ts ***!
  \********************************************/
/*! exports provided: LabelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsService", function() { return LabelsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LabelsService {
    constructor() {
        this.labels = [];
        const labelsString = localStorage.getItem('labels');
        if (labelsString) {
            this.labels = JSON.parse(labelsString);
        }
    }
    clearLabels() {
        this.labels = [];
        this.saveLabels();
    }
    addLabel(label) {
        this.labels = [...this.labels, label];
        this.saveLabels();
    }
    deleteLabel(label) {
        let labelIndex;
        if (typeof (label) === 'number') {
            labelIndex = label;
        }
        else {
            labelIndex = this.labels.indexOf(label);
        }
        this.labels.splice(labelIndex, 1);
        this.labels = [...this.labels];
        this.saveLabels();
    }
    getLabelByIndex(index) {
        return Object.assign({}, this.labels[index]);
    }
    updateLabelByIndex(index, label) {
        this.labels.splice(index, 1, label);
        this.saveLabels();
        return this.labels = [...this.labels];
    }
    get labelsToPrint() {
        return this.labels.filter((label) => label.quantity > 0);
    }
    get allLabels() {
        return this.labels;
    }
    saveLabels() {
        localStorage.setItem('labels', JSON.stringify(this.labels));
    }
}
LabelsService.ɵfac = function LabelsService_Factory(t) { return new (t || LabelsService)(); };
LabelsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LabelsService, factory: LabelsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "98vM":
/*!*****************************************************!*\
  !*** ./src/app/components/label/label.component.ts ***!
  \*****************************************************/
/*! exports provided: LabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponent", function() { return LabelComponent; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LabelComponent_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.label.title);
} }
function LabelComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.label.subTitle);
} }
function LabelComponent_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Sk\u0142adniki: ", ctx_r3.label.ingredients, " ");
} }
function LabelComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Produkt mo\u017Ce zawiera\u0107 ", ctx_r4.label.allergens, " ");
} }
function LabelComponent_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Przechowywa\u0107 w temperaturze ", ctx_r5.label.temperature, " ");
} }
function LabelComponent_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.label.additionalInfo, " ");
} }
function LabelComponent_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Warto\u015B\u0107 od\u017Cywcza na 100g produktu:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r7.label.nutritionalValue, " ");
} }
function LabelComponent_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nale\u017Cy spo\u017Cy\u0107 do: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.formatDate(ctx_r8.label.expirationDate));
} }
function LabelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LabelComponent_div_1_span_2_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LabelComponent_div_1_span_3_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LabelComponent_div_1_span_5_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LabelComponent_div_1_span_6_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LabelComponent_div_1_span_7_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LabelComponent_div_1_span_8_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LabelComponent_div_1_span_9_Template, 4, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LabelComponent_div_1_span_10_Template, 4, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-size", ctx_r0.fontSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.label.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.label.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.label.ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.label.allergens);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.label.temperature);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.label.additionalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.label.nutritionalValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.label.expirationDate);
} }
class LabelComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.fontSize = '12px';
        this.refreshInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(500);
    }
    ngOnInit() {
        this.refreshIntervalSubscription = this.refreshInterval.subscribe(this.refreshFont.bind(this));
    }
    ngOnDestroy() {
        this.refreshIntervalSubscription.unsubscribe();
    }
    refreshFont() {
        var _a, _b;
        const currentHeight = ((_b = (_a = this.elementRef) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 534;
        this.fontSize = `${currentHeight / 534 * 14}px`;
    }
    formatDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('DD.MM.yyyy');
    }
}
LabelComponent.ɵfac = function LabelComponent_Factory(t) { return new (t || LabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
LabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LabelComponent, selectors: [["app-label"]], inputs: { label: "label" }, decls: 2, vars: 1, consts: [["src", "../../../assets/emptyLabel.jpg"], ["class", "label-wrapper", 3, "fontSize", 4, "ngIf"], [1, "label-wrapper"], [1, "title-wrapper"], ["class", "title", 4, "ngIf"], ["class", "sub-title", 4, "ngIf"], [1, "description-wrapper"], ["class", "ingredients", 4, "ngIf"], ["class", "allergens", 4, "ngIf"], ["class", "temperature", 4, "ngIf"], ["class", "additional-info", 4, "ngIf"], ["class", "nutritional-value", 4, "ngIf"], ["class", "expiration-date", 4, "ngIf"], [1, "title"], [1, "sub-title"], [1, "ingredients"], [1, "allergens"], [1, "temperature"], [1, "additional-info"], [1, "nutritional-value"], [1, "expiration-date"]], template: function LabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LabelComponent_div_1_Template, 11, 10, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.label);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  position: relative;\n  font-family: \"Baloo Tammudu 2\", cursive;\n  line-height: 1;\n  font-weight: 800;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n}\n[_nghost-%COMP%]   .label-wrapper[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 6% 88% auto;\n  grid-template-rows: 16.5% 15.5% 60% 5%;\n  grid-template-areas: \". . .\" \" . title . \" \". description .\" \". . .\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n[_nghost-%COMP%]   .label-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .label-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n  grid-area: title;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 8px;\n  box-sizing: border-box;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .label-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"Titan One\", cursive;\n  font-size: 1.5em;\n  font-weight: normal;\n  margin-bottom: 4px;\n}\n[_nghost-%COMP%]   .label-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n}\n[_nghost-%COMP%]   .label-wrapper[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%] {\n  grid-area: description;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  padding: 4px;\n  box-sizing: border-box;\n  font-size: 0.9em;\n}\n[_nghost-%COMP%]   .label-wrapper[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYWJlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUVBLG9FQUNBO0VBS0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBTko7QUFRSTtFQUNFLGtCQUFBO0FBTk47QUFTSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFQTjtBQVNNO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVVNO0VBQ0UsaUJBQUE7QUFSUjtBQVlJO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVZOO0FBWU07RUFDRSxhQUFBO0FBVlIiLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogJ0JhbG9vIFRhbW11ZHUgMicsIGN1cnNpdmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubGFiZWwtd3JhcHBlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYlIDg4JSBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNi41JSAxNS41JSA2MCUgNSU7XHJcblxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiLiAuIC5cIlxyXG4gICAgXCIgLiB0aXRsZSAuIFwiXHJcbiAgICBcIi4gZGVzY3JpcHRpb24gLlwiXHJcbiAgICBcIi4gLiAuXCI7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlLXdyYXBwZXIge1xyXG4gICAgICBncmlkLWFyZWE6IHRpdGxlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1RpdGFuIE9uZScsIGN1cnNpdmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1Yi10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24td3JhcHBlciB7XHJcbiAgICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JILS":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-label/edit-label.component.ts ***!
  \**********************************************************/
/*! exports provided: EditLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLabelComponent", function() { return EditLabelComponent; });
/* harmony import */ var src_app_models_label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/label */ "b7rC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_labels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/labels.service */ "5pZN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/label/label.component */ "98vM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function EditLabelComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", index_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](label_r1.title);
} }
class EditLabelComponent {
    constructor(labelsService, activatedRoute, router) {
        this.labelsService = labelsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.predefiniedLabels = labels;
        this.label = new src_app_models_label__WEBPACK_IMPORTED_MODULE_0__["Label"]();
    }
    ngOnInit() {
        if (this.activatedRoute.snapshot.paramMap.has('index')) {
            this.label = this.labelsService.getLabelByIndex(parseInt(this.activatedRoute.snapshot.paramMap.get('index')));
        }
        else {
            this.label = new src_app_models_label__WEBPACK_IMPORTED_MODULE_0__["Label"]();
        }
    }
    add() {
        if (this.activatedRoute.snapshot.paramMap.has('index')) {
            this.labelsService.updateLabelByIndex(parseInt(this.activatedRoute.snapshot.paramMap.get('index')), this.label);
        }
        else {
            this.labelsService.addLabel(this.label);
        }
        this.label = new src_app_models_label__WEBPACK_IMPORTED_MODULE_0__["Label"]();
        this.router.navigate(['']);
    }
    selectLabel(index) {
        this.label = Object.assign({}, this.predefiniedLabels[index]);
    }
}
EditLabelComponent.ɵfac = function EditLabelComponent_Factory(t) { return new (t || EditLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_labels_service__WEBPACK_IMPORTED_MODULE_2__["LabelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
EditLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditLabelComponent, selectors: [["app-edit-label"]], decls: 55, vars: 11, consts: [["routerLink", ""], [3, "click"], [1, "label"], [3, "label"], [1, "values"], [1, "value-item"], ["name", "predefiniedLabel", 3, "change"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "title", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "subTitle", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "ingredients", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "allergens", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "temperature", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "additionalInfo", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "nutritionalValue", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "expirationDate", "type", "date", 3, "ngModel", "ngModelChange"], ["name", "quantity", "type", "number", 3, "ngModel", "ngModelChange"], [3, "value"]], template: function EditLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Anuluj");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditLabelComponent_Template_button_click_3_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Zapisz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Predefiniowane etykiety");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditLabelComponent_Template_select_change_12_listener($event) { return ctx.selectLabel($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EditLabelComponent_option_14_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Tytu\u0142");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditLabelComponent_Template_input_ngModelChange_18_listener($event) { return ctx.label.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Opis skr\u00F3cony");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditLabelComponent_Template_input_ngModelChange_23_listener($event) { return ctx.label.subTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Sk\u0142adniki");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditLabelComponent_Template_input_ngModelChange_27_listener($event) { return ctx.label.ingredients = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Allergeny");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditLabelComponent_Template_input_ngModelChange_32_listener($event) { return ctx.label.allergens = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Temperatura przechowywania");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditLabelComponent_Template_input_ngModelChange_36_listener($event) { return ctx.label.temperature = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Dodatkowe informacje");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditLabelComponent_Template_input_ngModelChange_41_listener($event) { return ctx.label.additionalInfo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Warto\u015Bci od\u017Cywcze");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditLabelComponent_Template_input_ngModelChange_45_listener($event) { return ctx.label.nutritionalValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Data przydatno\u015Bci do spo\u017Cycia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditLabelComponent_Template_input_ngModelChange_50_listener($event) { return ctx.label.expirationDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Liczba kopii");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditLabelComponent_Template_input_ngModelChange_54_listener($event) { return ctx.label.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.predefiniedLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.label.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.label.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.label.ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.label.allergens);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.label.temperature);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.label.additionalInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.label.nutritionalValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.label.expirationDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.label.quantity);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _components_label_label_component__WEBPACK_IMPORTED_MODULE_4__["LabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]], styles: [".label[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n}\n.label[_ngcontent-%COMP%]   app-label[_ngcontent-%COMP%], .label[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%] {\n  height: 70vh;\n}\n.value-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  padding: 16px;\n  margin: 8px;\n  border: 2px solid #ffffff;\n  background-color: #c8ac87;\n}\n.value-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  font-weight: bolder;\n}\n.value-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .value-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  width: 350px;\n  height: 33px;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZGl0LWxhYmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQUFGO0FBRUU7RUFDRSxZQUFBO0FBQUo7QUFJQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFERjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFGSiIsImZpbGUiOiJlZGl0LWxhYmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBhcHAtbGFiZWwsIC52YWx1ZXMge1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gIH1cclxufVxyXG5cclxuLnZhbHVlLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW46IDhweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGFjODc7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG5cclxuICBpbnB1dCwgc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
const labels = [
    {
        "quantity": 1,
        "title": "Karczek",
        "subTitle": "Karkówka wieprzowa, wędzona, parzona z dodatkiem wody. ",
        "ingredients": "Karkówka wieprzowa, woda, sól, azotyn sodu, wzmacniacz smaku",
        "allergens": "",
        "temperature": "",
        "additionalInfo": "",
        "nutritionalValue": ""
    },
    {
        "quantity": 1,
        "title": "Boczek",
        "subTitle": "Boczek wędzony surowy",
        "ingredients": "mięso wieprzowe, tłuszcz wieprzowy, woda, sól, azotyn sodu, wzmacniacz smaku.",
        "allergens": "",
        "temperature": "",
        "additionalInfo": "100g produktu wyprodukowano ze 105g mięsa wieprzowego.",
        "nutritionalValue": ""
    },
    {
        "quantity": 1,
        "title": "Frankfuterki parzone",
        "subTitle": "Kiełbasa wieprzowa, średnio rozdrobniona, wędzona, parzona, w jelicie baranim jadalnym",
        "ingredients": "mięso wieprzowe, sól, cukier, przyprawy, wzmacniacz smaku.",
        "allergens": "soję, gorczycę, glutem, seler, laktozę (z mleka)",
        "temperature": "od +2°C do +6°C.",
        "additionalInfo": "100g produktu wyprodukowano ze 110g mięsa wieprzowego.",
        "nutritionalValue": "wartość energetyczna 1172kJ/283kcal, tłuszcz 23g w tym tłuszcze nasycone 9g, węglowodany 0.7g, w tym cukry 0.5g, białko 20g, sól 2.7g"
    },
    {
        "quantity": 1,
        "title": "Frankfuterki surowe",
        "subTitle": "Kiełbasa wieprzowa, średnio rozdrobniona, wędzona, surowa, w jelicie baranim jadalnym",
        "ingredients": "mięso wieprzowe, sól, cukier, przyprawy.",
        "allergens": "soję, gorczycę, glutem, seler, laktozę (z mleka)",
        "temperature": "od +2°C do +6°C.",
        "additionalInfo": "100g produktu wyprodukowano ze 110g mięsa wieprzowego.",
        "nutritionalValue": "wartość energetyczna 1172kJ/283kcal, tłuszcz 23g w tym tłuszcze nasycone 9g, węglowodany 0.7g, w tym cukry 0.5g, białko 20g, sól 2.7g"
    },
    {
        "quantity": 1,
        "title": "Kiełbasa staropolska",
        "subTitle": "Kiełbasa wieprzowa średnio rozdrobniona wędzona parzona w jelicie wieprzowym",
        "ingredients": "mięso wieprzowe (100%), woda, sól, czosnek, pieprz czarny, cukier, kolendra, wzmacniacz smaku azotyn sodu.",
        "allergens": "",
        "temperature": "",
        "additionalInfo": "",
        "nutritionalValue": "wartość energetyczna 1172kJ/283kcal, tłuszcz 23g w tym tłuszcze nasycone 9g, węglowodany 0.7g, w tym cukry 0.5g, białko 20g, sól 2.7g."
    },
    {
        "quantity": 1,
        "title": "Kiełbasa z jury",
        "subTitle": "Kiełbasa wieprzowa, średnio rozdrobniona, wędzona parzona w jelicie wieprzowym",
        "ingredients": "mięso wieprzowe, sól, cukier, przyprawy.",
        "allergens": "soję, gorczycę, glutem, seler, laktozę (z mleka)",
        "temperature": "od +2°C do +6°C.",
        "additionalInfo": "100g produktu wyprodukowano ze 110g mięsa wieprzowego.",
        "nutritionalValue": "wartość energetyczna 1172kJ/283kcal, tłuszcz 23g w tym tłuszcze nasycone 9g, węglowodany 0.7g, w tym cukry 0.5g, białko 20g, sól 2.7g."
    },
    {
        "quantity": 1,
        "title": "Kiełbasa z wędzarni",
        "subTitle": "Kiełbasa wieprzowa, średnio rozdrobniona, wędzona parzona w jelicie wieprzowym",
        "ingredients": "mięso wieprzowe, sól, cukier, przyprawy.",
        "allergens": "soję, gorczycę, glutem, seler, laktozę (z mleka)",
        "temperature": "od +2°C do +6°C.",
        "additionalInfo": "100g produktu wyprodukowano ze 110g mięsa wieprzowego.",
        "nutritionalValue": "wartość energetyczna 1172kJ/283kcal, tłuszcz 23g w tym tłuszcze nasycone 9g, węglowodany 0.7g, w tym cukry 0.5g, białko 20g, sól 2.7g."
    },
    {
        "quantity": 1,
        "title": "Krakowska",
        "subTitle": "Kiełbasa wieprzowa, grubo mielona, wędzona parzona w jelicie białkowym",
        "ingredients": "mięso wieprzowe, sól, cukier, przyprawy, kminek drobno zmielony, ziarno, pieprz, gałka muszkatołowa.",
        "allergens": "soję, gorczycę, glutem, seler, laktozę (z mleka)",
        "temperature": "od +2°C do +6°C.",
        "additionalInfo": "100g produktu wyprodukowano ze 120g mięsa wieprzowego.",
        "nutritionalValue": "wartość energetyczna 1172kJ/283kcal, tłuszcz 23g w tym tłuszcze nasycone 9g, węglowodany 0.7g, w tym cukry 0.5g, białko 20g, sól 2.7g."
    },
    {
        "quantity": 1,
        "title": "Ligawka",
        "subTitle": "Ligawka wędzona parzona",
        "ingredients": "ligawka, sól, cukier, wzmacniacz smaku, azotyn sodu.",
        "allergens": "soję, gorczycę, gluten, seler, laktozę (z mleka)",
        "temperature": "od +2°C do +6°C.",
        "additionalInfo": "",
        "nutritionalValue": "wartość energetyczna 1172kJ/283kcal, tłuszcz 23g w tym tłuszcze nasycone 9g, węglowodany 0.7g, w tym cukry 0.5g, białko 20g, sól 2.7g."
    },
    {
        "quantity": 1,
        "title": "Szynka z tłuszczykiem",
        "subTitle": "szynka wieprzowa, wędzona, parzona",
        "ingredients": "szynka wieprzowa, woda, sól, cukier, wzmacniacz smaku, azotyn sodu",
        "allergens": "",
        "temperature": "",
        "additionalInfo": "",
        "nutritionalValue": "wartość energetyczna 1172kJ/283kcal, tłuszcz 23g w tym tłuszcze nasycone 9g, węglowodany 0.7g, w tym cukry 0.5g, białko 20g, sól 2.7g."
    },
    {
        "quantity": 1,
        "title": "Baleron",
        "subTitle": "Karkówka wieprzowa, wędzona, parzona, z dodatkiem wody w siatce",
        "ingredients": "mięso wieprzowe, woda, sól, azotyn sodu, wzmacniacz smaku",
        "allergens": "soję, gorczycę, gluten, seler, laktozę (z mleka)",
        "temperature": "od +2°C do +6°C.",
        "additionalInfo": "100g produktu wyprodukowano ze 115g mięsa wieprzowego.",
        "nutritionalValue": "wartość energetyczna 1172kJ/283kcal, tłuszcz 23g w tym tłuszcze nasycone 9g, węglowodany 0.7g, w tym cukry 0.5g, białko 20g, sól 2.7g."
    },
    {
        "quantity": 1,
        "title": "Kabanosy",
        "subTitle": "Kiełbasa wieprzowa średniorozdrobniona w jelicie baranim",
        "ingredients": "mięso wieprzowe, sól, cukier, kminek mielony, gałka muszkatołowa, bez dodatku błonnika sojowego",
        "allergens": "soję, gorczycę, gluten, seler, laktozę (z mleka)",
        "temperature": "od +2°C do +6°C.",
        "additionalInfo": "100g produktu wyprodukowano ze 145g mięsa wieprzowego.",
        "nutritionalValue": ""
    },
    {
        "quantity": 1,
        "title": "Szynka długo wędzona",
        "subTitle": "Szynka wieprzowa, wędzona, parzona",
        "ingredients": "szynka wieprzowa, sól, cukier, wzmacniacz smaku, azotan sodu.",
        "allergens": "gorczycę, seler, laktozę (z mleka)",
        "temperature": "od +2°C do +6°C.",
        "additionalInfo": "100g produktu wyprodukowano ze 125g mięsa wieprzowego.",
        "nutritionalValue": ""
    },
    {
        "quantity": 1,
        "title": "Szynka krucha",
        "subTitle": "Szynka wieprzowa, wędzona, parzona",
        "ingredients": "szynka wieprzowa, sól, cukier, wzmacniacz smaku, azotan sodu.",
        "allergens": "gorczycę, seler, laktozę (z mleka)",
        "temperature": "od +2°C do +6°C.",
        "additionalInfo": "100g produktu wyprodukowano ze 116g mięsa wieprzowego.",
        "nutritionalValue": ""
    },
    {
        "quantity": 1,
        "title": "Kiełbasa biała parzona",
        "subTitle": "Mięso wieprzowe, jelito wieprzowe",
        "ingredients": "mięso wieprzowe, woda, sól, czosnek, pieprz czarny, cukier, majeranek, wzmacniacz smaku, azotan sodu.",
        "allergens": "gorczycę, seler, laktozę (z mleka)",
        "temperature": "od +2°C do +6°C.",
        "additionalInfo": "100g produktu wyprodukowano ze 110g mięsa wieprzowego.",
        "nutritionalValue": ""
    }
];


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'MasarniaLablesApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "main"], ["src", "../assets/logo.jpg"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  border: 4px solid #ffffff;\n  background-color: #c8ac87;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGhlYWRlciB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4YWM4NztcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_edit_label_edit_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/edit-label/edit-label.component */ "JILS");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main/main.component */ "/s1f");
/* harmony import */ var _components_label_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/label/label.component */ "98vM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_print_print_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/print/print.component */ "fFcw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_edit_label_edit_label_component__WEBPACK_IMPORTED_MODULE_3__["EditLabelComponent"],
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        _components_label_label_component__WEBPACK_IMPORTED_MODULE_5__["LabelComponent"],
        _pages_print_print_component__WEBPACK_IMPORTED_MODULE_7__["PrintComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();


/***/ }),

/***/ "b7rC":
/*!*********************************!*\
  !*** ./src/app/models/label.ts ***!
  \*********************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
class Label {
    constructor() {
        this.quantity = 1;
    }
}


/***/ }),

/***/ "fFcw":
/*!************************************************!*\
  !*** ./src/app/pages/print/print.component.ts ***!
  \************************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_labels_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/labels.service */ "5pZN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/label/label.component */ "98vM");





function PrintComponent_ng_container_6_app_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-label", 5);
} if (rf & 2) {
    const label_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", label_r1);
} }
function PrintComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrintComponent_ng_container_6_app_label_1_Template, 1, 1, "app-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const label_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.copies(label_r1.quantity));
} }
class PrintComponent {
    constructor(labelsService) {
        this.labelsService = labelsService;
    }
    ngAfterViewInit() {
        setTimeout(this.print, 1000);
    }
    copies(quantity) {
        return new Array(quantity);
    }
    print() {
        window.print();
    }
}
PrintComponent.ɵfac = function PrintComponent_Factory(t) { return new (t || PrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_labels_service__WEBPACK_IMPORTED_MODULE_1__["LabelsService"])); };
PrintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintComponent, selectors: [["app-print"]], decls: 7, vars: 1, consts: [["routerLink", ""], [3, "click"], [1, "labels"], [4, "ngFor", "ngForOf"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"]], template: function PrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Powr\u00F3t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintComponent_Template_button_click_3_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Drukuj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PrintComponent_ng_container_6_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labelsService.labelsToPrint);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_label_label_component__WEBPACK_IMPORTED_MODULE_4__["LabelComponent"]], styles: ["app-label[_ngcontent-%COMP%] {\n  height: 110mm;\n  margin: 1mm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcmludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoicHJpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbGFiZWwge1xyXG4gIGhlaWdodDogMTEwbW07XHJcbiAgbWFyZ2luOiAxbW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_edit_label_edit_label_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/edit-label/edit-label.component */ "JILS");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main/main.component */ "/s1f");
/* harmony import */ var _pages_print_print_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/print/print.component */ "fFcw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [{
        path: '',
        pathMatch: 'full',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        path: 'print',
        pathMatch: 'full',
        component: _pages_print_print_component__WEBPACK_IMPORTED_MODULE_3__["PrintComponent"]
    },
    {
        path: 'edit/:index',
        pathMatch: 'full',
        component: _pages_edit_label_edit_label_component__WEBPACK_IMPORTED_MODULE_1__["EditLabelComponent"]
    },
    {
        path: 'edit',
        pathMatch: 'full',
        component: _pages_edit_label_edit_label_component__WEBPACK_IMPORTED_MODULE_1__["EditLabelComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map