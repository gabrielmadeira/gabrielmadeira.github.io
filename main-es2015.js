(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");






const routes = [
    { path: '', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"] },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'gabrielmadeira';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");







// import { ScullyLibModule } from '@scullyio/ng-lib';



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
                    _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { title: "title", institution: "institution", description: "description", imgUrl: "imgUrl", imgLink: "imgLink", period: "period", location: "location" }, decls: 14, vars: 7, consts: [[1, "row"], [1, "col-md-4", "col-6", "offset-3", "offset-md-0", 2, "text-align", "right"], ["target", "_blank", 3, "href"], [1, "rounded", "img-fluid", "card-img", 3, "src"], [1, "col-md-8", "text-justify", "text-md-left"], [1, "text-responsive-institution"], [1, "text-responsive-title"], [1, "text-responsive-general"], [1, "text-responsive-general", "text-justify", 3, "innerHTML"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.imgLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.institution);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.period);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".card[_ngcontent-%COMP%] {\n  background-color: #031a2c15;\n}\n\n.text-responsive-institution[_ngcontent-%COMP%] {\n  font-size: calc(40% + 1vw + 1vh);\n}\n\n.text-responsive-title[_ngcontent-%COMP%] {\n  font-size: calc(30% + 1vw + 1vh);\n}\n\n.text-responsive-general[_ngcontent-%COMP%] {\n  font-size: calc(8% + 1vw + 1vh);\n}\n\n@media (min-width: 992px) {\n  .text-responsive-general[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n.card-img[_ngcontent-%COMP%] {\n  margin-bottom: 5vw;\n}\n\n@media (min-width: 720px) {\n  .row[_ngcontent-%COMP%] {\n    margin-left: 5vw;\n    margin-right: 5vw;\n  }\n\n  .img-fluid[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .card-img[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxtL2Rldi9nYWJyaWVsbWFkZWlyYS13ZWJzaXRlL3NyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBREtBO0VBQ0ksZ0NBQUE7QUNGSjs7QURLQTtFQUNJLGdDQUFBO0FDRko7O0FES0E7RUFDSSwrQkFBQTtBQ0ZKOztBRE1BO0VBQ0k7SUFDSSxlQUFBO0VDSE47QUFDRjs7QURPQTtFQUdJLGtCQUFBO0FDUEo7O0FEcUJBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VDbEJOOztFRG9CRTtJQUNJLFVBQUE7RUNqQk47O0VEbUJFO0lBQ0ksWUFBQTtFQ2hCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzFhMmMxNTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICMwMTE2Mjc7XG4gICAgLy8gcGFkZGluZzogMTB2dztcbn1cblxuLnRleHQtcmVzcG9uc2l2ZS1pbnN0aXR1dGlvbiB7XG4gICAgZm9udC1zaXplOiBjYWxjKDQwJSArIDF2dyArIDF2aCk7XG59XG5cbi50ZXh0LXJlc3BvbnNpdmUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogY2FsYygzMCUgKyAxdncgKyAxdmgpO1xufVxuXG4udGV4dC1yZXNwb25zaXZlLWdlbmVyYWwge1xuICAgIGZvbnQtc2l6ZTogY2FsYyg4JSArIDF2dyArIDF2aCk7XG4gICAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC50ZXh0LXJlc3BvbnNpdmUtZ2VuZXJhbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG59XG5cblxuLmNhcmQtaW1nIHtcbiAgICAvLyB3aWR0aDogMzAwcHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1dnc7XG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgIzAxMTYyNztcbn1cblxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCkge1xuLy8gICAgIC5jYXJkIHtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vICAgICAuY2FyZC1pbWcge1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICB9XG4vLyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgICB9XG4gICAgLmltZy1mbHVpZHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgLmNhcmQtaW1nIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cbn1cblxuXG4iLCIuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzFhMmMxNTtcbn1cblxuLnRleHQtcmVzcG9uc2l2ZS1pbnN0aXR1dGlvbiB7XG4gIGZvbnQtc2l6ZTogY2FsYyg0MCUgKyAxdncgKyAxdmgpO1xufVxuXG4udGV4dC1yZXNwb25zaXZlLXRpdGxlIHtcbiAgZm9udC1zaXplOiBjYWxjKDMwJSArIDF2dyArIDF2aCk7XG59XG5cbi50ZXh0LXJlc3BvbnNpdmUtZ2VuZXJhbCB7XG4gIGZvbnQtc2l6ZTogY2FsYyg4JSArIDF2dyArIDF2aCk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudGV4dC1yZXNwb25zaXZlLWdlbmVyYWwge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuLmNhcmQtaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgfVxuXG4gIC5pbWctZmx1aWQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuY2FyZC1pbWcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], institution: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imgUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imgLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], period: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarComponent {
    constructor() { }
    onWindowScroll(e) {
        let element = document.querySelector('.navbar');
        if (window.pageYOffset * 0.5 > element.clientHeight) {
            element.classList.remove('navbar-inverse');
        }
        else {
            element.classList.add('navbar-inverse');
        }
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 14, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top", "navbar-inverse"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "#about", 1, "nav-link"], ["href", "#experiences", 1, "nav-link"], ["href", "#skills", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "EXPERIENCES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["nav[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n@media (min-width: 992px) {\n  .navbar-nav[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0;\n    margin-left: auto;\n  }\n\n  .navbar-nav.navbar-right[_ngcontent-%COMP%]:last-child {\n    margin-right: -15px;\n    margin-left: 0;\n  }\n}\n\nnav.navbar[_ngcontent-%COMP%] {\n  transition: all 0.4s ease;\n}\n\n.navbar-inverse[_ngcontent-%COMP%] {\n  background-color: rgba(255, 134, 134, 0) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxtL2Rldi9nYWJyaWVsbWFkZWlyYS13ZWJzaXRlL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxTQUFBO0lBQ0EsaUJBQUE7RUNDTjs7RURDRTtJQUNJLG1CQUFBO0lBQ0EsY0FBQTtFQ0VOO0FBQ0Y7O0FEQUE7RUFFSSx5QkFBQTtBQ0VKOztBRENBO0VBR0ksbURBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAubmF2YmFyLW5hdiB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cbiAgICAubmF2YmFyLW5hdi5uYXZiYXItcmlnaHQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbn1cbm5hdi5uYXZiYXJ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG59XG4gXG4ubmF2YmFyLWludmVyc2Uge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgLy8gYm9yZGVyLWNvbG9yOiAjMDgwODA4O1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDEzNCwgMTM0LCAwKSAhaW1wb3J0YW50O1xufSIsIm5hdiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhci1uYXYge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIC5uYXZiYXItbmF2Lm5hdmJhci1yaWdodDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5uYXYubmF2YmFyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xufVxuXG4ubmF2YmFyLWludmVyc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTM0LCAxMzQsIDApICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js");
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skills/skills.component */ "./src/app/skills/skills.component.ts");






class ResumeComponent {
    constructor() { }
    ngOnInit() {
        Object(jarallax__WEBPACK_IMPORTED_MODULE_1__["jarallax"])(document.querySelectorAll('.jarallax'));
        Object(jarallax__WEBPACK_IMPORTED_MODULE_1__["jarallax"])(document.querySelectorAll('.jarallax-keep-img'), {
            keepImg: true,
        });
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 50, vars: 0, consts: [[1, "view", "jarallax", "main-container", 2, "height", "100vh"], ["src", "../assets/images/main-background.jpg", 1, "jarallax-img"], ["data-text", "Gabriel Madeira"], ["id", "about", 1, "container"], [1, "row"], [1, "col-sm-12", "text-center", "section-title"], [1, "col-md-3", "col-sm-4", "offset-md-2", "offset-3", "col-6", "offset-sm-0"], ["src", "../assets/images/profile.jpg", 1, "img-fluid", "img-thumbnail"], [1, "col-10", "offset-1", "offset-sm-0", "col-md-5", "col-sm-8", "text-justify", "about-span"], [2, "color", "#2d80c4"], ["href", "https://www.linkedin.com/in/gabriel-madeira", "target", "_blank", 1, "fa", "fa-linkedin"], ["href", "mailto:gabr.madeira@gmail.com", "target", "_blank", 1, "fa", "fa-envelope"], ["href", "https://github.com/gabrielmadeira", "target", "_blank", 1, "fa", "fa-github"], ["href", "https://www.instagram.com/gabr.madeira", "target", "_blank", 1, "fa", "fa-instagram"], ["id", "experiences", 1, "container-fluid", "container-var"], [1, "col", "text-center", "section-title"], [1, "col", "text-center", "subsection-title"], ["imgUrl", "assets/images/dfki.png", "imgLink", "https://www.dfki.de/", "title", "Exchange Student", "institution", "German Research Center for Artificial Intelligence (DFKI)", "period", "April 2023 - March 2024", "location", "Kaiserslautern - Germany", "description", "Working in the Smart Data & Knowledge Services department as part of an exchange program."], ["imgUrl", "assets/images/inf.png", "imgLink", "https://www.inf.ufrgs.br/site/en/", "title", "Undergraduate Researcher", "institution", "Computer Graphics and Image Processing Research Group", "period", "June 2022 - November 2022", "location", "Porto Alegre - RS - Brazil", "description", "\n    \u2022 Advised by Prof. <a href='https://www.inf.ufrgs.br/~oliveira/' target='_blank'><b>Manuel M. Oliveira</b></a>. <br>\n    \u2022 Study of deep learning techniques applied to image classification and segmentation.\n    "], ["imgUrl", "assets/images/nelogica.png", "imgLink", "https://www.nelogica.com.br/", "title", "Software Development Intern (Back-end)", "institution", "Nelogica", "period", "October 2021 - March 2022", "location", "Porto Alegre - RS - Brazil", "description", "\n    \u2022 Implementation of a database event proxy REST API service, in the OpenAPI Specification, almost zeroing the rate of accumulated DB commands in the message service for clients. <br>\n    \u2022 Implementation of a service dynamic installer, making the process of creating specific new instances easier. <br>\n    \u2022 Implementation of replaceable tags feature in the body of a message in the notification service for clients. <br>\n    \u2022 Technologies: Delphi.\n    "], ["imgUrl", "assets/images/nelogica.png", "imgLink", "https://www.nelogica.com.br/", "title", "Software Development Intern (Front-end)", "institution", "Nelogica", "period", "February 2021 - September 2021", "location", "Porto Alegre - RS - Brazil", "description", "\n    \u2022 Helping to develop a web platform to operate in the financial market. <br>\n    \u2022 Creation of a virtual wallet component, which simulates a real exchange wallet. <br>\n    \u2022 Login screen loading optimization, using asynchronous imports in JavaScript, ~47% reduction in file size required for the login screen. <br>\n    \u2022 Asset conversion method from several different quote sources using JavaScript promises. <br>\n    \u2022 Technologies: Vue.js, JavaScript, CSS, HTML.\n    "], ["imgUrl", "assets/images/ginfo.png", "imgLink", "https://www.instagram.com/ginfo_cflex/", "title", "Undergraduate Researcher", "institution", "Information Management Research Group - FURG", "period", "April 2018 - July 2020", "location", "Rio Grande - RS - Brazil", "description", "\n    \u2022 Advised by Prof. <a href='https://scholar.google.com/citations?user=DF7aOYMAAAAJ&hl=en' target='_blank'><b>Eduardo Borges</b></a>.<br>\n    \u2022 Cleaning anomalies in a database of more than 500 thousand rows with Postgresql. <br>\n    \u2022 Development of a recursive algorithm forthe visualization of academic trees. <br>\n    \u2022 Developed <a href='http://thegoldtree.c3.furg.br' target='_blank'><b>The Gold Tree</b></a>, a web tool for academic genealogy analysis using HTML, CSS, Javascript and Postgresql. <br>\n    \u2022 Study of several machine learning technical algorithms. <br>\n    \u2022 The Nearest Centroid algorithm and TF-IDF method were used to model an advisor recommendation system. <br>\n    <br>\n    <b>Publications:</b> <br>\n    <a href='https://www.researchgate.net/publication/333435352_The_Gold_Tree_An_Information_System_for_Analyzing_Academic_Genealogy' target='_blank'><b>[1]</b></a> Madeira, G., Borges, E.N., Baranano, M., Nascimento, P.K., Lucca, G., de Fatima Maia, M., Santos, H.S. and Dimuro, G.P., 2019. The Gold Tree: An Information System for Analyzing Academic Genealogy. In Proceedings of the ICEIS 2019 (pp. 114-120). <br>\n    <a href='https://www.researchgate.net/publication/339384557_A_Tool_for_Analyzing_Academic_Genealogy' target='_blank'><b>[2]</b></a> Madeira, G., Borges, E.N., Lucca, G., Santos, H. and Dimuro, G., 2019. A tool for analyzing academic genealogy. In Lecture Notes in Business Information Processing, vol 378, (pp. 443\u2013456). <br>\n    <a href='https://www.scitepress.org/Papers/2021/104426/104426.pdf' target='_blank'><b>[3]</b></a> Madeira, G., Borges, E.N., Lucca, G., de Carvalho Segundo, W., Wieczynski, J.C., Santos, H.S. and Dimuro, G.P., 2021. Using Academic Genealogy for Recommending Supervisors. In Proceedings of the ICEIS 2021 (pp. 885-892).\n    "], ["imgUrl", "assets/images/qwertyp.png", "imgLink", "https://www.qwerty.com.br/", "title", "Computer Technician", "institution", "Qwerty News Portal", "period", "April 2016 - July 2017", "location", "Dom Pedrito - RS - Brazil", "description", " \n    \u2022 Developed a Arrival and departure control system using HTML, CSS, Javascript, PHP, MySql. <br>\n    \u2022 Developed a Transparency portal using HTML, CSS, Javascript, PHP, MySql. <br>\n    \u2022 Video editing and art creation for the news portal."], ["imgUrl", "assets/images/rptu.png", "imgLink", "https://rptu.de/", "title", "Computer Science Exchange Student", "institution", "Rheinland-Pf\u00E4lzische Technische Universit\u00E4t Kaiserslautern-Landau", "period", "April 2023 - March 2024", "location", "Kaiserslautern - Germany", "description", "Attending Master's classes as part of an exchange program."], ["imgUrl", "assets/images/ufrgs.png", "imgLink", "http://www.ufrgs.br/english/home", "title", "Computer Science Undergraduate", "institution", "Federal University of Rio Grande do Sul", "period", "March 2020 - Present", "location", "Porto Alegre - RS - Brazil", "description", "GPA: 9.30/10.00"], ["imgUrl", "assets/images/furg.png", "imgLink", "https://www.furg.br/en/", "title", "Computer Engineering Undergraduate", "institution", "Federal University of Rio Grande (FURG)", "period", "March 2019 - Dezember 2019", "location", "Rio Grande - RS - Brazil", "description", "GPA: 9.40/10.00<br>\n    (university and course transfer after one year)"], ["imgUrl", "assets/images/furg.png", "imgLink", "https://www.furg.br/en/", "title", "Information Systems Undergraduate", "institution", "Federal University of Rio Grande (FURG)", "period", "March 2018 - Dezember 2018", "location", "Rio Grande - RS - Brazil", "description", "GPA: 9.62/10.00<br>\n    (course transfer after one year)"], ["imgUrl", "assets/images/qwertye.png", "imgLink", "https://escola.qwerty.com.br/", "title", "Technical course - Computing Technician", "institution", "Qwerty Escola", "period", "March 2015 - Dezember 2016", "location", "Dom Pedrito - RS - Brazil", "description", "GPA: 9.32/10.00"], ["id", "skills", 1, "container-fluid"], [1, "col", "text-center"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Gabriel Madeira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hey, I'm Gabriel,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Computer Science Exchange Student \uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "@ RPTU \uD83C\uDFDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "located in Kaiserslautern - Germany \uD83C\uDDE9\uD83C\uDDEA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "EXPERIENCES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-card", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Tangerine\");\n@import url(\"https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1[_ngcontent-%COMP%], 300&display=swap\")[_ngcontent-%COMP%];\n.main-container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #234F66;\n  padding: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #F4F6F7;\n}\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  flex: 0 0 120px;\n  margin-bottom: 0.5em;\n  font-family: \"Merriweather\", serif;\n  font-size: 8vw;\n  color: #E4E5E6;\n  position: relative;\n  background: linear-gradient(to right, #F4F6F7, #F4F6F7, #F4F6F7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:before, h1[_ngcontent-%COMP%]:after {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:before {\n  z-index: -1;\n  text-shadow: -0.001em -0.001em 1px rgba(255, 255, 255, 0.15);\n}\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after {\n  z-index: -2;\n  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5), 20px 20px 20px rgba(0, 0, 0, 0.4), 30px 30px 30px rgba(0, 0, 0, 0.1);\n  mix-blend-mode: multiply;\n}\n@media (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 8vw !important;\n  }\n\n  .main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 11vw !important;\n  }\n}\n.main-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 0 0 120px;\n  font-size: 5vw;\n  font-family: \"Tangerine\", serif;\n  text-shadow: 4px 4px 4px #aaa;\n}\n.main-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container-var[_ngcontent-%COMP%] {\n  background-color: #dadada;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  padding-bottom: 2vw;\n}\n.img-fluid[_ngcontent-%COMP%] {\n  margin-bottom: 2vw;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: calc(60% + 1vw + 1vh);\n  padding-top: 2vw;\n  padding-bottom: 2vw;\n}\n.subsection-title[_ngcontent-%COMP%] {\n  font-size: calc(40% + 1vw + 1vh);\n  padding-bottom: 2vw;\n  font-weight: bold;\n}\n.about-span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: calc(8% + 1vw + 1vh);\n}\n@media (min-width: 992px) {\n  .about-span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.about-span[_ngcontent-%COMP%] {\n  padding-bottom: 5vw;\n}\n.fa[_ngcontent-%COMP%] {\n  padding: 6px;\n  font-size: 20px;\n  width: 35px;\n  text-align: center;\n  text-decoration: none;\n  margin: 2px 1px;\n}\n.fa[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.fa-instagram[_ngcontent-%COMP%] {\n  background: #125688;\n  color: white;\n}\n.fa-linkedin[_ngcontent-%COMP%] {\n  background: #007bb5;\n  color: white;\n}\n.fa-envelope[_ngcontent-%COMP%] {\n  background: #011627;\n  color: white;\n}\n.fa-github[_ngcontent-%COMP%] {\n  background: #011627;\n  color: white;\n}\n.fa-file-pdf-o[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n  font-size: 20px;\n  padding: 6px;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxtL2Rldi9nYWJyaWVsbWFkZWlyYS13ZWJzaXRlL3NyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxnRUFBQTtBQUNBLHVHQUFBO0FBR1I7RUFDSSxXQUFBO0VBRUEseUJBQUE7RUFFQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSko7QURTQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQ05KO0FEU0E7O0VBRUEsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDTkE7QURRQTtFQUNBLFdBQUE7RUFDQSw0REFBQTtBQ0xBO0FET0E7RUFDQSxXQUFBO0VBQ0Esb0hBQUE7RUFDQSx3QkFBQTtBQ0pBO0FETUE7RUFDSTtJQUNJLHlCQUFBO0VDSE47O0VES0U7SUFDSSwwQkFBQTtFQ0ZOO0FBQ0Y7QURLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ0hKO0FETUE7RUFDSSxrQkFBQTtBQ0hKO0FEaUJBO0VBQ0kseUJBQUE7QUNkSjtBRGlCQTtFQUNJLG1CQUFBO0FDZEo7QURpQkE7RUFDSSxrQkFBQTtBQ2RKO0FEaUJBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDZEo7QURpQkE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNkSjtBRGlCQTtFQUNJLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0FDZEo7QURpQkE7RUFDSTtJQUNJLGVBQUE7RUNkTjtBQUNGO0FEaUJBO0VBQ0ksbUJBQUE7QUNmSjtBRGtCQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDZko7QURtQkE7RUFDSSxZQUFBO0FDaEJKO0FEbUJBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDaEJKO0FEbUJBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDaEJKO0FEbUJBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDaEJKO0FEbUJBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDaEJKO0FEbUJBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDaEJKIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGFuZ2VyaW5lJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXI6aXRhbCx3Z2h0QDAsNDAwOzEsMzAwJmRpc3BsYXk9c3dhcCcpO1xuXG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzRGNjY7XG4gICAgLy8gaGVpZ2h0OiAzMHZoO1xuICAgIHBhZGRpbmc6IDV2aDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogI0Y0RjZGNztcbiAgICAvLyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9tYWluX3Bob3RvMi5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvY292ZXJcblxufVxuXG4ubWFpbi1jb250YWluZXIgaDEge1xuICAgIGZsZXg6IDAgMCAxMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiA4dnc7XG4gICAgY29sb3I6ICNFNEU1RTY7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGNEY2RjcsI0Y0RjZGNywjRjRGNkY3KTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciBoMTpiZWZvcmUsXG5oMTphZnRlciB7XG5jb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDA7XG5sZWZ0OiAwOyB9XG5cbi5tYWluLWNvbnRhaW5lciBoMTpiZWZvcmUge1xuei1pbmRleDogLTE7XG50ZXh0LXNoYWRvdzogLTAuMDAxZW0gLTAuMDAxZW0gMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjE1KX1cblxuLm1haW4tY29udGFpbmVyIGgxOmFmdGVyIHtcbnotaW5kZXg6IC0yO1xudGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsLjUpLCAyMHB4IDIwcHggMjBweCByZ2JhKDAsMCwwLC40KSwgMzBweCAzMHB4IDMwcHggcmdiYSgwLDAsMCwuMSk7XG5taXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLm1haW4tY29udGFpbmVyIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiA4dncgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm1haW4tY29udGFpbmVyIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXZ3ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ubWFpbi1jb250YWluZXIgaDIge1xuICAgIGZsZXg6IDAgMCAxMjBweDtcbiAgICBmb250LXNpemU6IDV2dztcbiAgICBmb250LWZhbWlseTogJ1RhbmdlcmluZScsIHNlcmlmO1xuICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCAjYWFhO1xufVxuXG4ubWFpbi1jb250YWluZXIgZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8vIC5tYWluLWNvbnRhaW5lciBpbWcge1xuLy8gICAgIGZpbHRlcjogYmx1cig4cHgpO1xuLy8gICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XG4vLyB9XG5cbi8vIC5jb250YWluZXItZmx1aWQge1xuICAgIC8vIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIC8vIG1hcmdpbjogMTB2dztcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gfVxuXG4uY29udGFpbmVyLXZhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZ3O1xufVxuXG4uaW1nLWZsdWlke1xuICAgIG1hcmdpbi1ib3R0b206IDJ2dztcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogY2FsYyg2MCUgKyAxdncgKyAxdmgpO1xuICAgIHBhZGRpbmctdG9wOiAydnc7XG4gICAgcGFkZGluZy1ib3R0b206IDJ2dztcbn1cblxuLnN1YnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogY2FsYyg0MCUgKyAxdncgKyAxdmgpO1xuICAgIHBhZGRpbmctYm90dG9tOiAydnc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hYm91dC1zcGFuIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogY2FsYyg4JSArIDF2dyArIDF2aCk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5hYm91dC1zcGFuIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuXG4uYWJvdXQtc3BhbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDV2dztcbn1cblxuLmZhIHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiAycHggMXB4O1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xufVxuICBcbi5mYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uZmEtaW5zdGFncmFtIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTI1Njg4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWxpbmtlZGluIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWVudmVsb3BlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDExNjI3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWdpdGh1YiB7XG4gICAgYmFja2dyb3VuZDogIzAxMTYyNztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1maWxlLXBkZi1vIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UYW5nZXJpbmVcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyOml0YWwsd2dodEAwLDQwMDsxLDMwMCZkaXNwbGF5PXN3YXBcIik7XG4ubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNEY2NjtcbiAgcGFkZGluZzogNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNGNEY2Rjc7XG59XG5cbi5tYWluLWNvbnRhaW5lciBoMSB7XG4gIGZsZXg6IDAgMCAxMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiA4dnc7XG4gIGNvbG9yOiAjRTRFNUU2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0Y0RjZGNywgI0Y0RjZGNywgI0Y0RjZGNyk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciBoMTpiZWZvcmUsXG5oMTphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5tYWluLWNvbnRhaW5lciBoMTpiZWZvcmUge1xuICB6LWluZGV4OiAtMTtcbiAgdGV4dC1zaGFkb3c6IC0wLjAwMWVtIC0wLjAwMWVtIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuXG4ubWFpbi1jb250YWluZXIgaDE6YWZ0ZXIge1xuICB6LWluZGV4OiAtMjtcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMjBweCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpLCAzMHB4IDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciBoMiB7XG4gICAgZm9udC1zaXplOiA4dncgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYWluLWNvbnRhaW5lciBoMSB7XG4gICAgZm9udC1zaXplOiAxMXZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5tYWluLWNvbnRhaW5lciBoMiB7XG4gIGZsZXg6IDAgMCAxMjBweDtcbiAgZm9udC1zaXplOiA1dnc7XG4gIGZvbnQtZmFtaWx5OiBcIlRhbmdlcmluZVwiLCBzZXJpZjtcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4ICNhYWE7XG59XG5cbi5tYWluLWNvbnRhaW5lciBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItdmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctYm90dG9tOiAydnc7XG59XG5cbi5pbWctZmx1aWQge1xuICBtYXJnaW4tYm90dG9tOiAydnc7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiBjYWxjKDYwJSArIDF2dyArIDF2aCk7XG4gIHBhZGRpbmctdG9wOiAydnc7XG4gIHBhZGRpbmctYm90dG9tOiAydnc7XG59XG5cbi5zdWJzZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiBjYWxjKDQwJSArIDF2dyArIDF2aCk7XG4gIHBhZGRpbmctYm90dG9tOiAydnc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWJvdXQtc3BhbiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IGNhbGMoOCUgKyAxdncgKyAxdmgpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmFib3V0LXNwYW4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4uYWJvdXQtc3BhbiB7XG4gIHBhZGRpbmctYm90dG9tOiA1dnc7XG59XG5cbi5mYSB7XG4gIHBhZGRpbmc6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMnB4IDFweDtcbn1cblxuLmZhOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uZmEtaW5zdGFncmFtIHtcbiAgYmFja2dyb3VuZDogIzEyNTY4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1lbnZlbG9wZSB7XG4gIGJhY2tncm91bmQ6ICMwMTE2Mjc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWdpdGh1YiB7XG4gIGJhY2tncm91bmQ6ICMwMTE2Mjc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWZpbGUtcGRmLW8ge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgd2lkdGg6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 0, vars: 0, template: function ServicesComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SkillsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r2.time);
} }
function SkillsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.name);
} }
class SkillsComponent {
    constructor() {
        this.langList = [
            {
                name: "Python",
                time: "2 years"
            },
            {
                name: "JavaScript",
                time: "2 years"
            },
            {
                name: "SQL",
                time: "2 years"
            },
            {
                name: "C/C++",
                time: "1 year"
            },
            {
                name: "PHP",
                time: "1 year"
            },
            {
                name: "Java",
                time: "4 months"
            },
            {
                name: "Delphi",
                time: "4 months"
            }
        ];
        this.techList = [
            {
                name: "HTML",
            },
            {
                name: "CSS",
            },
            {
                name: "Vue.js",
            },
            {
                name: "Git",
            },
            {
                name: "Unix/Bash",
            },
            {
                name: "Scikit-Learn",
            },
            {
                name: "Tensorflow",
            },
            {
                name: "Pandas",
            },
            {
                name: "Angular",
            },
            {
                name: "Qt",
            }
        ];
    }
    ngOnInit() {
        this.drawInterestsPentagon();
    }
    onResize(event) {
        this.drawInterestsPentagon();
    }
    drawInterestsPentagon() {
        var skills = [
            {
                header: 'My Fields of Interest',
                header2: 'in Computer Science',
                captions: ['Data\nScience', 'Artificial\nIntelligence', 'Application\nDevelopment', 'Computer\nGraphics', 'Cyber\nSecurity'],
                values: [0.7, 0.9, 0.7, 0.8, 0.7],
            }
        ];
        var pentagonIndex = 0;
        var valueIndex = 0;
        var width = 0;
        var height = 0;
        var radOffset = Math.PI / 2;
        var sides = 5; // Number of sides in the polygon
        var theta = (2 * Math.PI) / sides; // radians per section
        function getXY(i, radius) {
            return {
                x: Math.cos(radOffset + theta * i) * radius * width + width / 2,
                y: Math.sin(radOffset + theta * i) * radius * height + height / 2,
            };
        }
        var hue = [];
        var hueOffset = 200;
        $(skills).each(function (s) {
            // console.log(s);
            $('.content-interests').html('<div class="pentagon" id="interests"><div class="header"></div><canvas class="pentCanvas"/></div>');
            hue[s] = (hueOffset + (255 * s) / skills.length) % 255;
        });
        $('.pentagon').each(function (index) {
            width = $(this).width() * 0.85;
            // console.log($(this).width());
            // height = $(this).height();
            height = width;
            var ctx = $(this).find('canvas')[0].getContext('2d');
            ctx.canvas.width = width;
            ctx.canvas.height = height;
            ctx.font = 'bold 14px Helvetica';
            ctx.textAlign = 'center';
            /*** LABEL ***/
            var color = 'hsl(' + hue[pentagonIndex] + ', 11%, 15%)';
            ctx.fillStyle = color;
            ctx.fillText(skills[pentagonIndex].header, width / 2, 15);
            ctx.fillText(skills[pentagonIndex].header2, width / 2, 32);
            ctx.font = 'bold 12px Helvetica';
            /*** PENTAGON BACKGROUND ***/
            for (var i = 0; i < sides; i++) {
                // For each side, draw two segments: the side, and the radius
                ctx.beginPath();
                var xy = getXY(i, 0.3);
                var colorJitter = 25 + theta * i * 2;
                color = 'hsl(' + hue[pentagonIndex] + ',11%,' + colorJitter + '%)';
                ctx.fillStyle = color;
                ctx.strokeStyle = color;
                ctx.moveTo(0.5 * width, 0.5 * height); //center
                ctx.lineTo(xy.x, xy.y);
                xy = getXY(i + 1, 0.3);
                ctx.lineTo(xy.x, xy.y);
                xy = getXY(i, 0.37);
                // console.log();
                var lines = skills[pentagonIndex].captions[valueIndex].split('\n');
                var lineheight = 12;
                var moveValuesX = [0, +2, -10, +10, +5];
                var moveValuesY = [5, 8, -10, -10, 0];
                for (var j = 0; j < lines.length; j++) {
                    ctx.fillText(lines[j], xy.x + moveValuesX[valueIndex], xy.y + 5 + moveValuesY[valueIndex] + (j * lineheight));
                }
                valueIndex++;
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            valueIndex = 0;
            ctx.beginPath();
            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.lineWidth = 5;
            var value = skills[pentagonIndex].values[valueIndex];
            xy = getXY(i, value * 0.3);
            ctx.moveTo(xy.x, xy.y);
            /*** SKILL GRAPH ***/
            for (var i = 0; i < sides; i++) {
                xy = getXY(i, value * 0.3);
                ctx.lineTo(xy.x, xy.y);
                valueIndex++;
                value = skills[pentagonIndex].values[valueIndex];
            }
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            valueIndex = 0;
            pentagonIndex++;
        });
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], hostBindings: function SkillsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SkillsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 9, vars: 2, consts: [[1, "row"], [1, "col-md-6", "col-10", "offset-1", "offset-md-0", "text-center", "star-skills"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_div_4_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SkillsComponent_div_8_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".content[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n}\n\n#c[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin: 0;\n  height: 25px;\n}\n\n.pentagon[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 3px 3px 0px 3px;\n  display: inline-block;\n}\n\n.checked[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.star-skills[_ngcontent-%COMP%] {\n  font-size: calc(40% + 1vw + 1vh);\n  margin-top: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxtL2Rldi9nYWJyaWVsbWFkZWlyYS13ZWJzaXRlL3NyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUdFLFNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDREY7O0FES0E7RUFDSSxhQUFBO0FDRko7O0FES0E7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucGVudGFnb24ge1xuICAvLyB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDNweCAzcHggMHB4IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cbi5jaGVja2VkIHtcbiAgICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3Rhci1za2lsbHMge1xuICBmb250LXNpemU6IGNhbGMoNDAlICsgMXZ3ICsgMXZoKTs7XG4gIG1hcmdpbi10b3A6IDV2dztcbn0iLCIuY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucGVudGFnb24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDNweCAzcHggMHB4IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2hlY2tlZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGFyLXNraWxscyB7XG4gIGZvbnQtc2l6ZTogY2FsYyg0MCUgKyAxdncgKyAxdmgpO1xuICBtYXJnaW4tdG9wOiA1dnc7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss'],
            }]
    }], function () { return []; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gabrielm/dev/gabrielmadeira-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map