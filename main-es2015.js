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
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");





const routes = [
    { path: '', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"] },
    // { path: 'services', component: ServicesComponent },
    // { path: 'projects', component: ProjectsComponent },
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");








// import { ScullyLibModule } from '@scullyio/ng-lib';







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            // ScullyLibModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].NONE }),
            ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
                    _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                    _project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    // ScullyLibModule,
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].NONE }),
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"].forChild()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CardComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.imgLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { cardTitle: "cardTitle", institution: "institution", description: "description", imgUrl: "imgUrl", imgLink: "imgLink", period: "period", location: "location" }, decls: 14, vars: 7, consts: [[1, "row"], [1, "col-md-4", "col-6", "offset-3", "offset-md-0", 2, "text-align", "right"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 4, "ngIf"], [1, "col-md-8", "text-justify", "text-md-left"], [1, "text-responsive-institution"], [1, "text-responsive-title"], [1, "text-responsive-general"], [1, "text-responsive-general", "text-justify", 3, "innerHTML"], ["target", "_blank", 3, "href"], [1, "rounded", "img-fluid", "card-img", 3, "src"], ["target", "_blank"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_a_2_Template, 2, 2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_a_3_Template, 2, 1, "a", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgLink !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgLink === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.institution);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.period);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\n  background-color: #031a2c15;\n}\n\n.text-responsive-institution[_ngcontent-%COMP%] {\n  font-size: calc(40% + 1vw + 1vh);\n}\n\n.text-responsive-title[_ngcontent-%COMP%] {\n  font-size: calc(30% + 1vw + 1vh);\n}\n\n.text-responsive-general[_ngcontent-%COMP%] {\n  font-size: calc(8% + 1vw + 1vh);\n}\n\n@media (min-width: 992px) {\n  .text-responsive-institution[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n\n  .text-responsive-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .text-responsive-general[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n.card-img[_ngcontent-%COMP%] {\n  margin-bottom: 5vw;\n}\n\n@media (min-width: 720px) {\n  .row[_ngcontent-%COMP%] {\n    margin-left: 5vw;\n    margin-right: 5vw;\n  }\n\n  .img-fluid[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .card-img[_ngcontent-%COMP%] {\n    width: 170px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxtL2Rldi9nYWJyaWVsbWFkZWlyYS13ZWJzaXRlL3NyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBREtBO0VBQ0ksZ0NBQUE7QUNGSjs7QURLQTtFQUNJLGdDQUFBO0FDRko7O0FES0E7RUFDSSwrQkFBQTtBQ0ZKOztBRE1BO0VBQ0k7SUFDSSxlQUFBO0VDSE47O0VES0U7SUFDSSxlQUFBO0VDRk47O0VESUU7SUFDSSxlQUFBO0VDRE47QUFDRjs7QURLQTtFQUdJLGtCQUFBO0FDTEo7O0FEbUJBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VDaEJOOztFRGtCRTtJQUNJLFVBQUE7RUNmTjs7RURpQkU7SUFDSSxZQUFBO0VDZE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxYTJjMTU7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjMDExNjI3O1xuICAgIC8vIHBhZGRpbmc6IDEwdnc7XG59XG5cbi50ZXh0LXJlc3BvbnNpdmUtaW5zdGl0dXRpb24ge1xuICAgIGZvbnQtc2l6ZTogY2FsYyg0MCUgKyAxdncgKyAxdmgpO1xufVxuXG4udGV4dC1yZXNwb25zaXZlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGNhbGMoMzAlICsgMXZ3ICsgMXZoKTtcbn1cblxuLnRleHQtcmVzcG9uc2l2ZS1nZW5lcmFsIHtcbiAgICBmb250LXNpemU6IGNhbGMoOCUgKyAxdncgKyAxdmgpO1xuICAgIFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAudGV4dC1yZXNwb25zaXZlLWluc3RpdHV0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgICAudGV4dC1yZXNwb25zaXZlLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICAudGV4dC1yZXNwb25zaXZlLWdlbmVyYWwge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuXG5cbi5jYXJkLWltZyB7XG4gICAgLy8gd2lkdGg6IDMwMHB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXZ3O1xuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICMwMTE2Mjc7XG59XG5cbi8vIEBtZWRpYSAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbi8vICAgICAuY2FyZCB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbi8vICAgICB9XG4vLyAgICAgLmNhcmQtaW1nIHtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgfVxuLy8gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgICAucm93IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gICAgfVxuICAgIC5pbWctZmx1aWR7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICAgIC5jYXJkLWltZyB7XG4gICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICB9XG59XG5cblxuIiwiLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxYTJjMTU7XG59XG5cbi50ZXh0LXJlc3BvbnNpdmUtaW5zdGl0dXRpb24ge1xuICBmb250LXNpemU6IGNhbGMoNDAlICsgMXZ3ICsgMXZoKTtcbn1cblxuLnRleHQtcmVzcG9uc2l2ZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogY2FsYygzMCUgKyAxdncgKyAxdmgpO1xufVxuXG4udGV4dC1yZXNwb25zaXZlLWdlbmVyYWwge1xuICBmb250LXNpemU6IGNhbGMoOCUgKyAxdncgKyAxdmgpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnRleHQtcmVzcG9uc2l2ZS1pbnN0aXR1dGlvbiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG5cbiAgLnRleHQtcmVzcG9uc2l2ZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgLnRleHQtcmVzcG9uc2l2ZS1nZW5lcmFsIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi5jYXJkLWltZyB7XG4gIG1hcmdpbi1ib3R0b206IDV2dztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIC5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gIH1cblxuICAuaW1nLWZsdWlkIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLmNhcmQtaW1nIHtcbiAgICB3aWR0aDogMTcwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, { cardTitle: [{
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
    } }, decls: 17, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top", "navbar-inverse"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "#about", 1, "nav-link"], ["href", "#experiences", 1, "nav-link"], ["href", "#skills", 1, "nav-link"], ["href", "#projects", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PROJECTS");
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

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");





const _c0 = ["collapseDiv"];
const _c1 = ["markdownComponent"];
function ProjectComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", i_r4 % 2 == 0 ? "primary" : "secondary", " ml-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
class ProjectComponent {
    constructor(http) {
        this.http = http;
        this.githubRepositoryUrl = '';
        this.githubRepositoryRawUrl = '';
        this.collapsed = true;
    }
    ngOnInit() {
        this.githubRepositoryUrl = 'https://github.com/' + this.githubRepositoryID;
        this.githubRepositoryRawUrl = 'https://raw.githubusercontent.com/' + this.githubRepositoryID + '/' + this.githubRepositoryBranch + '/';
    }
    fixImagesUrl(baseURI) {
        for (let img of this.markdownComponent.element.nativeElement.getElementsByTagName('img')) {
            img.src = img.src.replace(img.baseURI, baseURI);
        }
    }
    collapseButtonClick() {
        this.collapsed = !this.collapsed;
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], viewQuery: function ProjectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.collapseDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.markdownComponent = _t.first);
    } }, inputs: { githubRepositoryID: "githubRepositoryID", githubRepositoryBranch: "githubRepositoryBranch", githubRepositoryMetadata: "githubRepositoryMetadata", stack: "stack" }, decls: 15, vars: 11, consts: [[1, "card", "mt-5", "mb-5", "project", 3, "id"], [1, "card-header"], [1, "mb-3"], ["target", "_blank", 2, "font-weight", "700", 3, "href"], [3, "class", 4, "ngFor", "ngForOf"], ["data-toggle", "collapse", "aria-expanded", "true", 1, "btn", "btn-link", 2, "float", "inline-end", 3, "click"], [1, "collapse", 3, "id"], ["collapseDiv", ""], [1, "card-body"], [1, "markdown", 3, "src", "load"], ["markdownComponent", ""]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectComponent_span_5_Template, 2, 4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_6_listener() { return ctx.collapseButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "markdown", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ProjectComponent_Template_markdown_load_13_listener() { return ctx.fixImagesUrl(ctx.githubRepositoryRawUrl); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.githubRepositoryMetadata["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.githubRepositoryUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.githubRepositoryMetadata["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#collapse-" + ctx.githubRepositoryMetadata["name"])("aria-controls", "collapse-" + ctx.githubRepositoryMetadata["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.collapsed ? "Expand" : "Collapse", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.githubRepositoryMetadata["description"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapse-", ctx.githubRepositoryMetadata["name"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", "heading-" + ctx.githubRepositoryMetadata["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.githubRepositoryRawUrl ? ctx.githubRepositoryRawUrl + "README.md" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"]], styles: [".markdown[_ngcontent-%COMP%]     img {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxtL2Rldi9nYWJyaWVsbWFkZWlyYS13ZWJzaXRlL3NyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFya2Rvd24gOjpuZy1kZWVwIGltZyB7XG4gIG1heC13aWR0aDogMTAwJVxufSIsIi5tYXJrZG93biA6Om5nLWRlZXAgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.scss'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { collapseDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['collapseDiv']
        }], markdownComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['markdownComponent']
        }], githubRepositoryID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], githubRepositoryBranch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], githubRepositoryMetadata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project/project.component */ "./src/app/project/project.component.ts");





function ProjectsComponent_app_project_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project", 2);
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("githubRepositoryID", project_r1.githubRepositoryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("githubRepositoryBranch", project_r1.githubRepositoryBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("githubRepositoryMetadata", project_r1.githubRepositoryMetadata)("stack", project_r1.stack);
} }
class ProjectsComponent {
    constructor(http) {
        this.http = http;
        this.projectList = [
            {
                githubRepositoryID: "gabrielmadeira/ascii-art",
                githubRepositoryBranch: "main",
                githubRepositoryMetadata: { name: 'ascii-art' },
                stack: ['C++', 'Qt', 'OpenCV']
            },
            {
                githubRepositoryID: "gabrielmadeira/image-processing-app",
                githubRepositoryBranch: "main",
                githubRepositoryMetadata: { name: 'image-processing-app' },
                stack: ['C++', 'Qt', 'OpenCV']
            },
            {
                githubRepositoryID: "gabrielmadeira/INFinityDrive",
                githubRepositoryBranch: "main",
                githubRepositoryMetadata: { name: 'INFinityDrive' },
                stack: ['C++', 'TCP Sockets']
            },
            {
                githubRepositoryID: "gabrielmadeira/compiler-project",
                githubRepositoryBranch: "main",
                githubRepositoryMetadata: { name: 'compiler-project' },
                stack: ['C', 'Lex', 'Yacc', 'Assembly', 'Makefile']
            },
            {
                githubRepositoryID: "gabrielmadeira/academic-genealogy-rs",
                githubRepositoryBranch: "master",
                githubRepositoryMetadata: { name: 'academic-genealogy-rs' },
                stack: ['Python', 'Scikit-learn']
            },
            {
                githubRepositoryID: "gabrielmadeira/murk",
                githubRepositoryBranch: "main",
                githubRepositoryMetadata: { name: 'murk' },
                stack: ['C#', 'Unity']
            },
            {
                githubRepositoryID: "gabrielmadeira/news-recommender-system",
                githubRepositoryBranch: "main",
                githubRepositoryMetadata: { name: 'news-recommender-system' },
                stack: ['Vue.js', 'Neo4j', 'Python']
            },
            {
                githubRepositoryID: "gabrielmadeira/thegoldtree",
                githubRepositoryBranch: "master",
                githubRepositoryMetadata: { name: 'thegoldtree' },
                stack: ['Javascript', 'd3.js', 'HTML', 'CSS', 'PostgreSQL']
            },
            {
                githubRepositoryID: "gabrielmadeira/z-waves",
                githubRepositoryBranch: "master",
                githubRepositoryMetadata: { name: 'z-waves' },
                stack: ['C++', 'OpenGL']
            },
            {
                githubRepositoryID: "gabrielmadeira/music-creator",
                githubRepositoryBranch: "main",
                githubRepositoryMetadata: { name: 'music-creator' },
                stack: ['Java']
            },
            {
                githubRepositoryID: "gabrielmadeira/youtube-db",
                githubRepositoryBranch: "main",
                githubRepositoryMetadata: { name: 'youtube-db' },
                stack: ['PostgreSQL', 'Python']
            },
        ];
    }
    ngOnInit() {
        this.http.get('https://api.github.com/users/gabrielmadeira/repos').subscribe((response) => {
            // console.log(response)  
            for (let project of this.projectList) {
                let repo = Object.values(response).find(repo => project['githubRepositoryID'] === repo.full_name);
                if (repo !== undefined)
                    project['githubRepositoryMetadata'] = repo;
            }
            // console.log(this.projectList)
        });
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 2, vars: 1, consts: [[1, "container"], [3, "githubRepositoryID", "githubRepositoryBranch", "githubRepositoryMetadata", "stack", 4, "ngFor", "ngForOf"], [3, "githubRepositoryID", "githubRepositoryBranch", "githubRepositoryMetadata", "stack"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_app_project_1_Template, 1, 4, "app-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/projects/projects.component.ts");







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
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 54, vars: 0, consts: [[1, "main-container", 2, "height", "100vh"], ["data-text", "Gabriel Madeira"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 640 512", 1, "main-icon"], ["d", "M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"], ["id", "about", 1, "container"], [1, "row"], [1, "col-sm-12", "text-center", "section-title"], [1, "col-md-3", "col-sm-4", "offset-md-2", "offset-3", "col-6", "offset-sm-0"], ["src", "../assets/images/profile.jpg", 1, "img-fluid", "img-thumbnail"], [1, "col-10", "offset-1", "offset-sm-0", "col-md-5", "col-sm-8", "text-justify", "about-span"], [2, "color", "#2d80c4"], ["href", "https://www.linkedin.com/in/gabriel-madeira", "target", "_blank", 1, "fa", "fa-linkedin"], ["href", "mailto:gabr.madeira@gmail.com", "target", "_blank", 1, "fa", "fa-envelope"], ["href", "https://github.com/gabrielmadeira", "target", "_blank", 1, "fa", "fa-github"], ["id", "experiences", 1, "container-fluid", "container-var"], [1, "col", "text-center", "section-title"], [1, "col", "text-center", "subsection-title"], ["imgUrl", "assets/images/dfki.png", "imgLink", "https://www.dfki.de/", "cardTitle", "Exchange Student", "institution", "German Research Center for Artificial Intelligence (DFKI)", "period", "April 2023 - March 2024", "location", "Kaiserslautern - Germany", "description", "Working in the Smart Data & Knowledge Services department as part of an exchange program."], ["imgUrl", "assets/images/inf.png", "imgLink", "https://www.inf.ufrgs.br/site/en/", "cardTitle", "Undergraduate Researcher", "institution", "Computer Graphics and Image Processing Research Group", "period", "June 2022 - November 2022", "location", "Porto Alegre - RS - Brazil", "description", "\n    \u2022 Advised by Prof. <a href='https://www.inf.ufrgs.br/~oliveira/' target='_blank'><b>Manuel M. Oliveira</b></a>. <br>\n    \u2022 Study of deep learning techniques applied to image classification and segmentation.\n    "], ["imgUrl", "assets/images/nelogica.png", "imgLink", "https://www.nelogica.com.br/", "cardTitle", "Software Development Intern (Back-end)", "institution", "Nelogica", "period", "October 2021 - March 2022", "location", "Porto Alegre - RS - Brazil", "description", "\n    \u2022 Implementation of a database event proxy REST API service, in the OpenAPI Specification, almost zeroing the rate of accumulated DB commands in the message service for clients. <br>\n    \u2022 Implementation of a service dynamic installer, making the process of creating specific new instances easier. <br>\n    \u2022 Implementation of replaceable tags feature in the body of a message in the notification service for clients. <br>\n    \u2022 Technologies: Delphi.\n    "], ["imgUrl", "assets/images/nelogica.png", "imgLink", "https://www.nelogica.com.br/", "cardTitle", "Software Development Intern (Front-end)", "institution", "Nelogica", "period", "February 2021 - September 2021", "location", "Porto Alegre - RS - Brazil", "description", "\n    \u2022 Helping to develop a web platform to operate in the financial market. <br>\n    \u2022 Creation of a virtual wallet component, which simulates a real exchange wallet. <br>\n    \u2022 Login screen loading optimization, using asynchronous imports in JavaScript, ~47% reduction in file size required for the login screen. <br>\n    \u2022 Asset conversion method from several different quote sources using JavaScript promises. <br>\n    \u2022 Technologies: Vue.js, JavaScript, CSS, HTML.\n    "], ["imgUrl", "assets/images/ginfo.png", "imgLink", "", "cardTitle", "Undergraduate Researcher", "institution", "Information Management Research Group - FURG", "period", "April 2018 - July 2020", "location", "Rio Grande - RS - Brazil", "description", "\n    \u2022 Advised by Prof. <a href='https://scholar.google.com/citations?user=DF7aOYMAAAAJ&hl=en' target='_blank'><b>Eduardo Borges</b></a>.<br>\n    \u2022 Cleaning anomalies in a database of more than 500 thousand rows with Postgresql. <br>\n    \u2022 Development of a recursive algorithm forthe visualization of academic trees. <br>\n    \u2022 Developed <a href='http://thegoldtree.c3.furg.br' target='_blank'><b>The Gold Tree</b></a>, a web tool for academic genealogy analysis using HTML, CSS, Javascript and Postgresql. <br>\n    \u2022 Study of several machine learning technical algorithms. <br>\n    \u2022 The Nearest Centroid algorithm and TF-IDF method were used to model an advisor recommendation system. <br>\n    <br>\n    <b>Publications:</b> <br>\n    <a href='https://www.researchgate.net/publication/333435352_The_Gold_Tree_An_Information_System_for_Analyzing_Academic_Genealogy' target='_blank'><b>[1]</b></a> Madeira, G., Borges, E.N., Baranano, M., Nascimento, P.K., Lucca, G., de Fatima Maia, M., Santos, H.S. and Dimuro, G.P., 2019. The Gold Tree: An Information System for Analyzing Academic Genealogy. In Proceedings of the ICEIS 2019 (pp. 114-120). <br>\n    <a href='https://www.researchgate.net/publication/339384557_A_Tool_for_Analyzing_Academic_Genealogy' target='_blank'><b>[2]</b></a> Madeira, G., Borges, E.N., Lucca, G., Santos, H. and Dimuro, G., 2019. A tool for analyzing academic genealogy. In Lecture Notes in Business Information Processing, vol 378, (pp. 443\u2013456). <br>\n    <a href='https://www.scitepress.org/Papers/2021/104426/104426.pdf' target='_blank'><b>[3]</b></a> Madeira, G., Borges, E.N., Lucca, G., de Carvalho Segundo, W., Wieczynski, J.C., Santos, H.S. and Dimuro, G.P., 2021. Using Academic Genealogy for Recommending Supervisors. In Proceedings of the ICEIS 2021 (pp. 885-892).\n    "], ["imgUrl", "assets/images/qwertyp.png", "imgLink", "", "cardTitle", "Computer Technician", "institution", "Qwerty News Portal", "period", "April 2016 - July 2017", "location", "Dom Pedrito - RS - Brazil", "description", " \n    \u2022 Developed a Arrival and departure control system using HTML, CSS, Javascript, PHP, MySql. <br>\n    \u2022 Developed a Transparency portal using HTML, CSS, Javascript, PHP, MySql. <br>\n    \u2022 Video editing and art creation for the news portal."], ["imgUrl", "assets/images/rptu.png", "imgLink", "https://rptu.de/", "cardTitle", "Computer Science Exchange Student", "institution", "Rheinland-Pf\u00E4lzische Technische Universit\u00E4t Kaiserslautern-Landau", "period", "April 2023 - March 2024", "location", "Kaiserslautern - Germany", "description", "Attending Master's classes as part of an exchange program."], ["imgUrl", "assets/images/ufrgs.png", "imgLink", "http://www.ufrgs.br/english/home", "cardTitle", "Computer Science Undergraduate", "institution", "Federal University of Rio Grande do Sul", "period", "March 2020 - Present", "location", "Porto Alegre - RS - Brazil", "description", "GPA: 9.40/10.00"], ["imgUrl", "assets/images/furg.png", "imgLink", "https://www.furg.br/en/", "cardTitle", "Computer Engineering Undergraduate", "institution", "Federal University of Rio Grande (FURG)", "period", "March 2019 - December 2019", "location", "Rio Grande - RS - Brazil", "description", "GPA: 9.40/10.00<br>\n    (university and course transfer after one year)"], ["imgUrl", "assets/images/furg.png", "imgLink", "https://www.furg.br/en/", "cardTitle", "Information Systems Undergraduate", "institution", "Federal University of Rio Grande (FURG)", "period", "March 2018 - December 2018", "location", "Rio Grande - RS - Brazil", "description", "GPA: 9.62/10.00<br>\n    (course transfer after one year)"], ["imgUrl", "assets/images/qwertye.png", "imgLink", "", "cardTitle", "Technical course - Computing Technician", "institution", "Qwerty Escola", "period", "March 2015 - December 2016", "location", "Dom Pedrito - RS - Brazil", "description", "GPA: 9.32/10.00"], ["id", "skills", 1, "container-fluid"], [1, "col", "text-center"], ["id", "projects", 1, "container-fluid", 2, "background-color", "#dadada"], [1, "col"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gabriel Madeira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hey, I'm Gabriel,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Computer Science Student \uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "@ Federal University of Rio Grande do Sul \uD83C\uDFDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "EXPERIENCES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-card", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #F4F6F7;\n  background: linear-gradient(-45deg, #374040, #2a3439, #384048, #2a343c, #1b2328);\n  background-size: 400% 400%;\n  -webkit-animation: gradientBG 5s linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%) infinite;\n          animation: gradientBG 5s linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%) infinite;\n}\n\n@-webkit-keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  flex: 0 0 120px;\n  font-family: \"Courier New\", monospace;\n  font-size: 35px;\n  color: #E4E5E6;\n  position: relative;\n  margin-bottom: 0.2rem;\n  background: linear-gradient(to right, #F4F6F7, #F4F6F7, #F4F6F7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.main-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #E4E5E6;\n  flex: 0 0 120px;\n  font-size: 30px;\n  font-family: \"Courier New\", monospace;\n}\n\n.main-icon[_ngcontent-%COMP%] {\n  color: #E4E5E6;\n  width: 45px;\n  height: 45px;\n}\n\n.main-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #E4E5E6;\n}\n\n@media (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 4vw !important;\n  }\n\n  .main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 5vw !important;\n  }\n\n  .main-icon[_ngcontent-%COMP%] {\n    width: 7vw !important;\n    height: 7vw !important;\n  }\n}\n\n.main-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.container-var[_ngcontent-%COMP%] {\n  background-color: #dadada;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-bottom: 2vw;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  margin-bottom: 2vw;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: calc(60% + 1vw + 1vh);\n  padding-top: 2vw;\n  padding-bottom: 2vw;\n}\n\n.subsection-title[_ngcontent-%COMP%] {\n  font-size: calc(40% + 1vw + 1vh);\n  padding-bottom: 2vw;\n  font-weight: bold;\n}\n\n.about-span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: calc(8% + 1vw + 1vh);\n}\n\n@media (min-width: 992px) {\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n\n  .subsection-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .about-span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n.about-span[_ngcontent-%COMP%] {\n  padding-bottom: 5vw;\n}\n\n.fa[_ngcontent-%COMP%] {\n  padding: 6px;\n  font-size: 20px;\n  width: 35px;\n  text-align: center;\n  text-decoration: none;\n  margin: 2px 1px;\n}\n\n.fa[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.fa-instagram[_ngcontent-%COMP%] {\n  background: #125688;\n  color: white;\n}\n\n.fa-linkedin[_ngcontent-%COMP%] {\n  background: #007bb5;\n  color: white;\n}\n\n.fa-envelope[_ngcontent-%COMP%] {\n  background: #011627;\n  color: white;\n}\n\n.fa-github[_ngcontent-%COMP%] {\n  background: #011627;\n  color: white;\n}\n\n.fa-file-pdf-o[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n  font-size: 20px;\n  padding: 6px;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxtL2Rldi9nYWJyaWVsbWFkZWlyYS13ZWJzaXRlL3NyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFJQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsZ0ZBQUE7RUFDSCwwQkFBQTtFQUNBLDRTQUFBO1VBQUEsb1NBQUE7QUNIRDs7QURNQTtFQUNDO0lBQ0MsMkJBQUE7RUNIQTtFREtEO0lBQ0MsNkJBQUE7RUNIQTtFREtEO0lBQ0MsMkJBQUE7RUNIQTtBQUNGOztBRE5BO0VBQ0M7SUFDQywyQkFBQTtFQ0hBO0VES0Q7SUFDQyw2QkFBQTtFQ0hBO0VES0Q7SUFDQywyQkFBQTtFQ0hBO0FBQ0Y7O0FETUE7RUFDSSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnRUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUNKSjs7QURPQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FDSko7O0FET0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUNJLGFBQUE7QUNKSjs7QURPQTtFQUNJO0lBQ0kseUJBQUE7RUNKTjs7RURNRTtJQUNJLHlCQUFBO0VDSE47O0VES0U7SUFDSSxxQkFBQTtJQUNBLHNCQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJLGtCQUFBO0FDSEo7O0FES0E7RUFDSSx5QkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7QUNGSjs7QURLQTtFQUNJO0lBQ0ksZUFBQTtFQ0ZOOztFREtFO0lBQ0ksZUFBQTtFQ0ZOOztFRElFO0lBQ0ksZUFBQTtFQ0ROO0FBQ0Y7O0FESUE7RUFDSSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNGSjs7QURNQTtFQUNJLFlBQUE7QUNISjs7QURNQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNISjs7QURNQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzFhMWQyMjtcbiAgICAvLyBoZWlnaHQ6IDMwdmg7XG4gICAgcGFkZGluZzogNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogI0Y0RjZGNztcblxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIzM3NDA0MCwgIzJhMzQzOSwgIzM4NDA0OCwgIzJhMzQzYywgIzFiMjMyOCk7XG5cdGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuXHRhbmltYXRpb246IGdyYWRpZW50QkcgNXMgbGluZWFyKDAgMCUsIDAgMS44JSwgMC4wMSAzLjYlLCAwLjAzIDYuMzUlLCAwLjA3IDkuMSUsIDAuMTMgMTEuNCUsIDAuMTkgMTMuNCUsIDAuMjcgMTUlLCAwLjM0IDE2LjElLCAwLjU0IDE4LjM1JSwgMC42NiAyMC42JSwgMC43MiAyMi40JSwgMC43NyAyNC42JSwgMC44MSAyNy4zJSwgMC44NSAzMC40JSwgMC44OCAzNS4xJSwgMC45MiA0MC42JSwgMC45NCA0Ny4yJSwgMC45NiA1NSUsIDAuOTggNjQlLCAwLjk5IDc0LjQlLCAxIDg2LjQlLCAxIDEwMCUpIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50Qkcge1xuXHQwJSB7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuXHR9XG5cdDUwJSB7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG5cdH1cblx0MTAwJSB7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuXHR9XG59XG5cbi5tYWluLWNvbnRhaW5lciBoMSB7XG4gICAgZmxleDogMCAwIDEyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjRTRFNUU2OyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0Y0RjZGNywjRjRGNkY3LCNGNEY2RjcpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1haW4tY29udGFpbmVyIGgyIHtcbiAgICBjb2xvcjogI0U0RTVFNjtcbiAgICBmbGV4OiAwIDAgMTIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG59XG5cbi5tYWluLWljb24ge1xuICAgIGNvbG9yOiAjRTRFNUU2O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLm1haW4taWNvbiBwYXRoIHtcbiAgICBmaWxsOiAjRTRFNUU2O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAubWFpbi1jb250YWluZXIgaDIge1xuICAgICAgICBmb250LXNpemU6IDR2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubWFpbi1jb250YWluZXIgaDEge1xuICAgICAgICBmb250LXNpemU6IDV2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubWFpbi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDd2dyAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDd2dyAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm1haW4tY29udGFpbmVyIGRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lci12YXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDJ2dztcbn1cblxuLmltZy1mbHVpZHtcbiAgICBtYXJnaW4tYm90dG9tOiAydnc7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGNhbGMoNjAlICsgMXZ3ICsgMXZoKTtcbiAgICBwYWRkaW5nLXRvcDogMnZ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAydnc7XG59XG5cbi5zdWJzZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGNhbGMoNDAlICsgMXZ3ICsgMXZoKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZ3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWJvdXQtc3BhbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IGNhbGMoOCUgKyAxdncgKyAxdmgpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgXG4gICAgLnN1YnNlY3Rpb24tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIC5hYm91dC1zcGFuIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuXG4uYWJvdXQtc3BhbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDV2dztcbn1cblxuLmZhIHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiAycHggMXB4O1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xufVxuICBcbi5mYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uZmEtaW5zdGFncmFtIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTI1Njg4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWxpbmtlZGluIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWVudmVsb3BlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDExNjI3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWdpdGh1YiB7XG4gICAgYmFja2dyb3VuZDogIzAxMTYyNztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1maWxlLXBkZi1vIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcbn0iLCIubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNGNEY2Rjc7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMzNzQwNDAsICMyYTM0MzksICMzODQwNDgsICMyYTM0M2MsICMxYjIzMjgpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgYW5pbWF0aW9uOiBncmFkaWVudEJHIDVzIGxpbmVhcigwIDAlLCAwIDEuOCUsIDAuMDEgMy42JSwgMC4wMyA2LjM1JSwgMC4wNyA5LjElLCAwLjEzIDExLjQlLCAwLjE5IDEzLjQlLCAwLjI3IDE1JSwgMC4zNCAxNi4xJSwgMC41NCAxOC4zNSUsIDAuNjYgMjAuNiUsIDAuNzIgMjIuNCUsIDAuNzcgMjQuNiUsIDAuODEgMjcuMyUsIDAuODUgMzAuNCUsIDAuODggMzUuMSUsIDAuOTIgNDAuNiUsIDAuOTQgNDcuMiUsIDAuOTYgNTUlLCAwLjk4IDY0JSwgMC45OSA3NC40JSwgMSA4Ni40JSwgMSAxMDAlKSBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBncmFkaWVudEJHIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxufVxuLm1haW4tY29udGFpbmVyIGgxIHtcbiAgZmxleDogMCAwIDEyMHB4O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICNFNEU1RTY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGNEY2RjcsICNGNEY2RjcsICNGNEY2RjcpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWFpbi1jb250YWluZXIgaDIge1xuICBjb2xvcjogI0U0RTVFNjtcbiAgZmxleDogMCAwIDEyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuLm1haW4taWNvbiB7XG4gIGNvbG9yOiAjRTRFNUU2O1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ubWFpbi1pY29uIHBhdGgge1xuICBmaWxsOiAjRTRFNUU2O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tY29udGFpbmVyIGgyIHtcbiAgICBmb250LXNpemU6IDR2dyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1haW4tY29udGFpbmVyIGgxIHtcbiAgICBmb250LXNpemU6IDV2dyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1haW4taWNvbiB7XG4gICAgd2lkdGg6IDd2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogN3Z3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5tYWluLWNvbnRhaW5lciBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItdmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctYm90dG9tOiAydnc7XG59XG5cbi5pbWctZmx1aWQge1xuICBtYXJnaW4tYm90dG9tOiAydnc7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiBjYWxjKDYwJSArIDF2dyArIDF2aCk7XG4gIHBhZGRpbmctdG9wOiAydnc7XG4gIHBhZGRpbmctYm90dG9tOiAydnc7XG59XG5cbi5zdWJzZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiBjYWxjKDQwJSArIDF2dyArIDF2aCk7XG4gIHBhZGRpbmctYm90dG9tOiAydnc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWJvdXQtc3BhbiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IGNhbGMoOCUgKyAxdncgKyAxdmgpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxuXG4gIC5zdWJzZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAuYWJvdXQtc3BhbiBzcGFuIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi5hYm91dC1zcGFuIHtcbiAgcGFkZGluZy1ib3R0b206IDV2dztcbn1cblxuLmZhIHtcbiAgcGFkZGluZzogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAycHggMXB4O1xufVxuXG4uZmE6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mYS1pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiAjMTI1Njg4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQ6ICMwMDdiYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWVudmVsb3BlIHtcbiAgYmFja2dyb3VuZDogIzAxMTYyNztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtZ2l0aHViIHtcbiAgYmFja2dyb3VuZDogIzAxMTYyNztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtZmlsZS1wZGYtbyB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNnB4O1xuICB3aWR0aDogYXV0bztcbn0iXX0= */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.time);
} }
function SkillsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r4.name);
} }
function SkillsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r5.level);
} }
class SkillsComponent {
    constructor() {
        this.programLangList = [
            {
                name: "JavaScript",
                time: "2 years"
            },
            {
                name: "SQL",
                time: "2 years"
            },
            {
                name: "Python",
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
                time: "6 months"
            },
            {
                name: "Delphi",
                time: "4 months"
            }
        ];
        this.techList = [
            {
                name: "Vue.js",
            },
            {
                name: "Spring Boot",
            },
            {
                name: "Git",
            },
            {
                name: "Unix, Bash",
            },
            {
                name: "Docker",
            },
            {
                name: "Scikit-Learn, Tensorflow",
            },
            {
                name: "HTML, CSS",
            },
            {
                name: "Angular",
            },
            {
                name: "Qt",
            }
        ];
        this.langList = [
            {
                name: "English",
                level: "Advanced"
            },
            {
                name: "Portuguese",
                level: "Native"
            },
            {
                name: "German",
                level: "Beginner"
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
    } }, decls: 13, vars: 3, consts: [[1, "row"], [1, "col-md-4", "col-10", "offset-1", "offset-md-0", "text-center", "star-skills"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col", 2, "text-align", "right"], [1, "col", 2, "text-align", "left"], [1, "col"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Programming Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_div_4_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SkillsComponent_div_8_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SkillsComponent_div_12_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programLangList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".content[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n}\n\n#c[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin: 0;\n  height: 25px;\n}\n\n.pentagon[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 3px 3px 0px 3px;\n  display: inline-block;\n}\n\n.checked[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.star-skills[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 5vw;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxtL2Rldi9nYWJyaWVsbWFkZWlyYS13ZWJzaXRlL3NyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUdFLFNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDREY7O0FES0E7RUFDSSxhQUFBO0FDRko7O0FES0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5wZW50YWdvbiB7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICAvLyBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogM3B4IDNweCAwcHggM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cblxuLmNoZWNrZWQge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGFyLXNraWxscyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogNXZ3O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbiIsIi5jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5wZW50YWdvbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogM3B4IDNweCAwcHggM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jaGVja2VkIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXItc2tpbGxzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1dnc7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */"] });
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