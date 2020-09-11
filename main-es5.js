function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");

    var routes = [{
      path: '',
      component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]
    }, {
      path: 'services',
      component: _services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'gabrielmadeira';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_7__["ScullyLibModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_7__["ScullyLibModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_7__["ScullyLibModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)();
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        title: "title",
        institution: "institution",
        description: "description",
        imgUrl: "imgUrl",
        period: "period",
        location: "location"
      },
      decls: 14,
      vars: 6,
      consts: [[1, "row"], [1, "col-md-4", "col-6", "offset-3", "offset-md-0"], [1, "rounded", "img-fluid", "card-img", 3, "src"], [1, "col-md-8", "text-justify", "text-md-left"], [1, "text-responsive-institution"], [1, "text-responsive-title"], [1, "text-responsive-general"], [1, "text-responsive-general", "text-justify"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.institution);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.period);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
        }
      },
      styles: [".card[_ngcontent-%COMP%] {\n  background-color: #031a2c15;\n}\n\n.text-responsive-institution[_ngcontent-%COMP%] {\n  font-size: calc(40% + 1vw + 1vh);\n}\n\n.text-responsive-title[_ngcontent-%COMP%] {\n  font-size: calc(30% + 1vw + 1vh);\n}\n\n.text-responsive-general[_ngcontent-%COMP%] {\n  font-size: calc(15% + 1vw + 1vh);\n}\n\n.card-img[_ngcontent-%COMP%] {\n  margin-bottom: 5vw;\n}\n\n@media (min-width: 720px) {\n  .row[_ngcontent-%COMP%] {\n    margin-left: 5vw;\n    margin-right: 5vw;\n  }\n\n  .img-fluid[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWwvZGV2L2dhYnJpZWxtYWRlaXJhL3NyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBREtBO0VBQ0ksZ0NBQUE7QUNGSjs7QURLQTtFQUNJLGdDQUFBO0FDRko7O0FES0E7RUFDSSxnQ0FBQTtBQ0ZKOztBREtBO0VBR0ksa0JBQUE7QUNKSjs7QURrQkE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUNmTjs7RURpQkU7SUFDSSxVQUFBO0VDZE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxYTJjMTU7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjMDExNjI3O1xuICAgIC8vIHBhZGRpbmc6IDEwdnc7XG59XG5cbi50ZXh0LXJlc3BvbnNpdmUtaW5zdGl0dXRpb24ge1xuICAgIGZvbnQtc2l6ZTogY2FsYyg0MCUgKyAxdncgKyAxdmgpO1xufVxuXG4udGV4dC1yZXNwb25zaXZlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGNhbGMoMzAlICsgMXZ3ICsgMXZoKTtcbn1cblxuLnRleHQtcmVzcG9uc2l2ZS1nZW5lcmFsIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTUlICsgMXZ3ICsgMXZoKTtcbn1cblxuLmNhcmQtaW1nIHtcbiAgICAvLyB3aWR0aDogMzAwcHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1dnc7XG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgIzAxMTYyNztcbn1cblxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCkge1xuLy8gICAgIC5jYXJkIHtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vICAgICAuY2FyZC1pbWcge1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICB9XG4vLyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgICB9XG4gICAgLmltZy1mbHVpZHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG59IiwiLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxYTJjMTU7XG59XG5cbi50ZXh0LXJlc3BvbnNpdmUtaW5zdGl0dXRpb24ge1xuICBmb250LXNpemU6IGNhbGMoNDAlICsgMXZ3ICsgMXZoKTtcbn1cblxuLnRleHQtcmVzcG9uc2l2ZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogY2FsYygzMCUgKyAxdncgKyAxdmgpO1xufVxuXG4udGV4dC1yZXNwb25zaXZlLWdlbmVyYWwge1xuICBmb250LXNpemU6IGNhbGMoMTUlICsgMXZ3ICsgMXZoKTtcbn1cblxuLmNhcmQtaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgfVxuXG4gIC5pbWctZmx1aWQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        institution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imgUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        period: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        location: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "onWindowScroll",
        value: function onWindowScroll(e) {
          var element = document.querySelector('.navbar');

          if (window.pageYOffset * 0.5 > element.clientHeight) {
            element.classList.remove('navbar-inverse');
          } else {
            element.classList.add('navbar-inverse');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) {
            return ctx.onWindowScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 14,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top", "navbar-inverse"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "#about", 1, "nav-link"], ["href", "#experiences", 1, "nav-link"], ["href", "#skills", 1, "nav-link"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: ["nav[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n@media (min-width: 992px) {\n  .navbar-nav[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0;\n    margin-left: 40%;\n  }\n\n  .navbar-nav.navbar-right[_ngcontent-%COMP%]:last-child {\n    margin-right: -15px;\n    margin-left: 0;\n  }\n}\n\nnav.navbar[_ngcontent-%COMP%] {\n  transition: all 0.4s ease;\n}\n\n.navbar-inverse[_ngcontent-%COMP%] {\n  background-color: rgba(255, 134, 134, 0) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWwvZGV2L2dhYnJpZWxtYWRlaXJhL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7RUNDTjs7RURDRTtJQUNJLG1CQUFBO0lBQ0EsY0FBQTtFQ0VOO0FBQ0Y7O0FEQUE7RUFFSSx5QkFBQTtBQ0VKOztBRENBO0VBR0ksbURBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAubmF2YmFyLW5hdiB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgfVxuICAgIC5uYXZiYXItbmF2Lm5hdmJhci1yaWdodDpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxufVxubmF2Lm5hdmJhcntcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cbiBcbi5uYXZiYXItaW52ZXJzZSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICAvLyBib3JkZXItY29sb3I6ICMwODA4MDg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMTM0LCAxMzQsIDApICFpbXBvcnRhbnQ7XG59IiwibmF2IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubmF2YmFyLW5hdiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cblxuICAubmF2YmFyLW5hdi5uYXZiYXItcmlnaHQ6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxubmF2Lm5hdmJhciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cblxuLm5hdmJhci1pbnZlcnNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEzNCwgMTM0LCAwKSAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resume/resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/resume/resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jarallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jarallax */
    "./node_modules/jarallax/index.js");
    /* harmony import */


    var jarallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../skills/skills.component */
    "./src/app/skills/skills.component.ts");

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          Object(jarallax__WEBPACK_IMPORTED_MODULE_1__["jarallax"])(document.querySelectorAll('.jarallax'));
          Object(jarallax__WEBPACK_IMPORTED_MODULE_1__["jarallax"])(document.querySelectorAll('.jarallax-keep-img'), {
            keepImg: true
          });
        }
      }]);

      return ResumeComponent;
    }();

    ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)();
    };

    ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      decls: 47,
      vars: 0,
      consts: [[1, "view", "jarallax", "main-container", 2, "height", "100vh"], ["src", "../assets/images/main-background.jpg", 1, "jarallax-img"], ["data-text", "Gabriel Madeira"], ["id", "about", 1, "container"], [1, "row"], [1, "col-sm-12", "text-center", "section-title"], [1, "col-md-3", "col-sm-4", "offset-md-2", "offset-3", "col-6", "offset-sm-0"], ["src", "../assets/images/profile.jpg", 1, "img-fluid", "img-thumbnail"], [1, "col-10", "offset-1", "offset-sm-0", "col-md-5", "col-sm-8", "text-justify", "about-span"], [2, "color", "#2d80c4"], ["href", "../assets/files/resume_gabrielmadeira.pdf", "target", "_blank", 1, "fa", "fa-download"], [2, "font-size", "14px", "display", "inline"], ["href", "https://www.linkedin.com/in/gabriel-madeira", "target", "_blank", 1, "fa", "fa-linkedin"], ["href", "https://www.instagram.com/gabr.madeira", "target", "_blank", 1, "fa", "fa-instagram"], ["href", "mailto:gabr.madeira@gmail.com", "target", "_blank", 1, "fa", "fa-envelope"], ["id", "experiences", 1, "container-fluid", "container-var"], [1, "col", "text-center", "section-title"], [1, "col", "text-center", "subsection-title"], ["imgUrl", "assets/images/ufrgs.png", "title", "Computer Science Undergraduate", "institution", "Federal University of Rio Grande do Sul", "period", "March 2020 - Now (Graduating in December 2023)", "location", "Porto Alegre - RS - Brazil", "description", ""], ["imgUrl", "assets/images/furg.png", "title", "Computer Engineering Undergraduate", "institution", "Federal University of Rio Grande (FURG)", "period", "March 2019 - Dezember 2019", "location", "Rio Grande - RS - Brazil", "description", ""], ["imgUrl", "assets/images/furg.png", "title", "Information Systems Undergraduate", "institution", "Federal University of Rio Grande (FURG)", "period", "March 2018 - Dezember 2018", "location", "Rio Grande - RS - Brazil", "description", ""], ["imgUrl", "assets/images/qwertye.png", "title", "Technical course - Computing Technician", "institution", "Qwerty Escola", "period", "March 2015 - Dezember 2016", "location", "Dom Pedrito - RS - Brazil", "description", ""], ["imgUrl", "assets/images/ginfo.png", "title", "Undergraduate Researcher", "institution", "Information Management Research Group - FURG", "period", "April 2018 - July 2020", "location", "Rio Grande - RS - Brazil", "description", ""], ["imgUrl", "assets/images/qwertyp.png", "title", "Computer Technician", "institution", "Qwerty News Portal", "period", "April 2016 - July 2017", "location", "Dom Pedrito - RS - Brazil", "description", ""], ["id", "skills", 1, "container-fluid"], [1, "col", "text-center"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Interactive Resume");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Computer Science Student \uD83D\uDCBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "@ Federal University of Rio Grande do Sul \uD83C\uDFDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "located in Porto Alegre - RS \uD83C\uDDE7\uD83C\uDDF7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "EXPERIENCES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-card", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Work Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-card", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-card", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "SKILLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Tangerine\");\n@import url(\"https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1[_ngcontent-%COMP%], 300&display=swap\")[_ngcontent-%COMP%];\n.main-container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #234F66;\n  padding: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #F4F6F7;\n}\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  flex: 0 0 120px;\n  margin-bottom: 0.5em;\n  font-family: \"Merriweather\", serif;\n  font-size: 8vw;\n  color: #E4E5E6;\n  position: relative;\n  background: linear-gradient(to right, #F4F6F7, #F4F6F7, #F4F6F7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:before, h1[_ngcontent-%COMP%]:after {\n  content: attr(data-text);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:before {\n  z-index: -1;\n  text-shadow: -0.001em -0.001em 1px rgba(255, 255, 255, 0.15);\n}\n.main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after {\n  z-index: -2;\n  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5), 20px 20px 20px rgba(0, 0, 0, 0.4), 30px 30px 30px rgba(0, 0, 0, 0.1);\n  mix-blend-mode: multiply;\n}\n@media (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 8vw !important;\n  }\n\n  .main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 11vw !important;\n  }\n}\n.main-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 0 0 120px;\n  font-size: 5vw;\n  font-family: \"Tangerine\", serif;\n  text-shadow: 4px 4px 4px #aaa;\n}\n.main-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container-var[_ngcontent-%COMP%] {\n  background-color: #dadada;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  padding-bottom: 2vw;\n}\n.img-fluid[_ngcontent-%COMP%] {\n  margin-bottom: 2vw;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: calc(60% + 1vw + 1vh);\n  padding-top: 2vw;\n  padding-bottom: 2vw;\n}\n.subsection-title[_ngcontent-%COMP%] {\n  font-size: calc(40% + 1vw + 1vh);\n  padding-bottom: 2vw;\n}\n.about-span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: calc(15% + 1vw + 1vh);\n}\n.about-span[_ngcontent-%COMP%] {\n  padding-bottom: 5vw;\n}\n.fa[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 20px;\n  width: 40px;\n  text-align: center;\n  text-decoration: none;\n  margin: 2.5px 1px;\n}\n.fa[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.fa-instagram[_ngcontent-%COMP%] {\n  background: #125688;\n  color: white;\n}\n.fa-linkedin[_ngcontent-%COMP%] {\n  background: #007bb5;\n  color: white;\n}\n.fa-envelope[_ngcontent-%COMP%] {\n  background: #011627;\n  color: white;\n}\n.fa-download[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n  font-size: 20px;\n  padding: 10px;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWwvZGV2L2dhYnJpZWxtYWRlaXJhL3NyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxnRUFBQTtBQUNBLHVHQUFBO0FBR1I7RUFDSSxXQUFBO0VBRUEseUJBQUE7RUFFQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSko7QURTQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQ05KO0FEU0E7O0VBRUEsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDTkE7QURRQTtFQUNBLFdBQUE7RUFDQSw0REFBQTtBQ0xBO0FET0E7RUFDQSxXQUFBO0VBQ0Esb0hBQUE7RUFDQSx3QkFBQTtBQ0pBO0FETUE7RUFDSTtJQUNJLHlCQUFBO0VDSE47O0VES0U7SUFDSSwwQkFBQTtFQ0ZOO0FBQ0Y7QURLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ0hKO0FETUE7RUFDSSxrQkFBQTtBQ0hKO0FEaUJBO0VBQ0kseUJBQUE7QUNkSjtBRGlCQTtFQUNJLG1CQUFBO0FDZEo7QURpQkE7RUFDSSxrQkFBQTtBQ2RKO0FEaUJBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDZEo7QURpQkE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FDZEo7QURpQkE7RUFDSSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtBQ2RKO0FEaUJBO0VBQ0ksbUJBQUE7QUNkSjtBRGlCQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ2RKO0FEa0JBO0VBQ0ksWUFBQTtBQ2ZKO0FEa0JBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDZko7QURrQkE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNmSjtBRGtCQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ2ZKO0FEa0JBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDZkoiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UYW5nZXJpbmUnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcjppdGFsLHdnaHRAMCw0MDA7MSwzMDAmZGlzcGxheT1zd2FwJyk7XG5cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzNEY2NjtcbiAgICAvLyBoZWlnaHQ6IDMwdmg7XG4gICAgcGFkZGluZzogNXZoO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjRjRGNkY3O1xuICAgIC8vIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQgdXJsKCcuLi9hc3NldHMvaW1hZ2VzL21haW5fcGhvdG8yLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC9jb3ZlclxuXG59XG5cbi5tYWluLWNvbnRhaW5lciBoMSB7XG4gICAgZmxleDogMCAwIDEyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDh2dztcbiAgICBjb2xvcjogI0U0RTVFNjsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0Y0RjZGNywjRjRGNkY3LCNGNEY2RjcpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1haW4tY29udGFpbmVyIGgxOmJlZm9yZSxcbmgxOmFmdGVyIHtcbmNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDogMDtcbmxlZnQ6IDA7IH1cblxuLm1haW4tY29udGFpbmVyIGgxOmJlZm9yZSB7XG56LWluZGV4OiAtMTtcbnRleHQtc2hhZG93OiAtMC4wMDFlbSAtMC4wMDFlbSAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMTUpfVxuXG4ubWFpbi1jb250YWluZXIgaDE6YWZ0ZXIge1xuei1pbmRleDogLTI7XG50ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwuNSksIDIwcHggMjBweCAyMHB4IHJnYmEoMCwwLDAsLjQpLCAzMHB4IDMwcHggMzBweCByZ2JhKDAsMCwwLC4xKTtcbm1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAubWFpbi1jb250YWluZXIgaDIge1xuICAgICAgICBmb250LXNpemU6IDh2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubWFpbi1jb250YWluZXIgaDEge1xuICAgICAgICBmb250LXNpemU6IDExdncgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5tYWluLWNvbnRhaW5lciBoMiB7XG4gICAgZmxleDogMCAwIDEyMHB4O1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgIGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgc2VyaWY7XG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4ICNhYWE7XG59XG5cbi5tYWluLWNvbnRhaW5lciBkaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLy8gLm1haW4tY29udGFpbmVyIGltZyB7XG4vLyAgICAgZmlsdGVyOiBibHVyKDhweCk7XG4vLyAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMnB4KTtcbi8vIH1cblxuLy8gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgLy8gbWluLWhlaWdodDogMTAwdmg7XG4gICAgLy8gbWFyZ2luOiAxMHZ3O1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG4vLyB9XG5cbi5jb250YWluZXItdmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyMTgsIDIxOCk7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctYm90dG9tOiAydnc7XG59XG5cbi5pbWctZmx1aWR7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDYwJSArIDF2dyArIDF2aCk7XG4gICAgcGFkZGluZy10b3A6IDJ2dztcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZ3O1xufVxuXG4uc3Vic2VjdGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDQwJSArIDF2dyArIDF2aCk7XG4gICAgcGFkZGluZy1ib3R0b206IDJ2dztcbn1cblxuLmFib3V0LXNwYW4gc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiBjYWxjKDE1JSArIDF2dyArIDF2aCk7XG59XG5cbi5hYm91dC1zcGFuIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xufVxuXG4uZmEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiAyLjVweCAxcHg7XG4gICAgLy8gZGlzcGxheTogYmxvY2s7XG59XG4gIFxuLmZhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mYS1pbnN0YWdyYW0ge1xuICAgIGJhY2tncm91bmQ6ICMxMjU2ODg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtbGlua2VkaW4ge1xuICAgIGJhY2tncm91bmQ6ICMwMDdiYjU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtZW52ZWxvcGUge1xuICAgIGJhY2tncm91bmQ6ICMwMTE2Mjc7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtZG93bmxvYWQge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UYW5nZXJpbmVcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyOml0YWwsd2dodEAwLDQwMDsxLDMwMCZkaXNwbGF5PXN3YXBcIik7XG4ubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNEY2NjtcbiAgcGFkZGluZzogNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNGNEY2Rjc7XG59XG5cbi5tYWluLWNvbnRhaW5lciBoMSB7XG4gIGZsZXg6IDAgMCAxMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiA4dnc7XG4gIGNvbG9yOiAjRTRFNUU2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0Y0RjZGNywgI0Y0RjZGNywgI0Y0RjZGNyk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciBoMTpiZWZvcmUsXG5oMTphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5tYWluLWNvbnRhaW5lciBoMTpiZWZvcmUge1xuICB6LWluZGV4OiAtMTtcbiAgdGV4dC1zaGFkb3c6IC0wLjAwMWVtIC0wLjAwMWVtIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuXG4ubWFpbi1jb250YWluZXIgaDE6YWZ0ZXIge1xuICB6LWluZGV4OiAtMjtcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMjBweCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpLCAzMHB4IDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciBoMiB7XG4gICAgZm9udC1zaXplOiA4dncgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYWluLWNvbnRhaW5lciBoMSB7XG4gICAgZm9udC1zaXplOiAxMXZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5tYWluLWNvbnRhaW5lciBoMiB7XG4gIGZsZXg6IDAgMCAxMjBweDtcbiAgZm9udC1zaXplOiA1dnc7XG4gIGZvbnQtZmFtaWx5OiBcIlRhbmdlcmluZVwiLCBzZXJpZjtcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4ICNhYWE7XG59XG5cbi5tYWluLWNvbnRhaW5lciBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItdmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctYm90dG9tOiAydnc7XG59XG5cbi5pbWctZmx1aWQge1xuICBtYXJnaW4tYm90dG9tOiAydnc7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiBjYWxjKDYwJSArIDF2dyArIDF2aCk7XG4gIHBhZGRpbmctdG9wOiAydnc7XG4gIHBhZGRpbmctYm90dG9tOiAydnc7XG59XG5cbi5zdWJzZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiBjYWxjKDQwJSArIDF2dyArIDF2aCk7XG4gIHBhZGRpbmctYm90dG9tOiAydnc7XG59XG5cbi5hYm91dC1zcGFuIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogY2FsYygxNSUgKyAxdncgKyAxdmgpO1xufVxuXG4uYWJvdXQtc3BhbiB7XG4gIHBhZGRpbmctYm90dG9tOiA1dnc7XG59XG5cbi5mYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDIuNXB4IDFweDtcbn1cblxuLmZhOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uZmEtaW5zdGFncmFtIHtcbiAgYmFja2dyb3VuZDogIzEyNTY4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1lbnZlbG9wZSB7XG4gIGJhY2tncm91bmQ6ICMwMTE2Mjc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWRvd25sb2FkIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume',
          templateUrl: './resume.component.html',
          styleUrls: ['./resume.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/services.component.ts":
  /*!************************************************!*\
    !*** ./src/app/services/services.component.ts ***!
    \************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };

    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 0,
      vars: 0,
      template: function ServicesComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-services',
          templateUrl: './services.component.html',
          styleUrls: ['./services.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "checked": a0
      };
    };

    function SkillsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, skill_r2.rating >= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, skill_r2.rating >= 2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, skill_r2.rating >= 3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, skill_r2.rating >= 4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, skill_r2.rating >= 5));
      }
    }

    function SkillsComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, skill_r3.rating >= 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, skill_r3.rating >= 2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, skill_r3.rating >= 3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, skill_r3.rating >= 4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, skill_r3.rating >= 5));
      }
    }

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);

        this.skillList1 = [{
          name: "HTML",
          rating: 3
        }, {
          name: "CSS",
          rating: 3
        }, {
          name: "Javscript",
          rating: 3
        }, {
          name: "PHP",
          rating: 2
        }, {
          name: "Angular",
          rating: 2
        }, {
          name: "Shell",
          rating: 2
        }];
        this.skillList2 = [{
          name: "Python",
          rating: 3
        }, {
          name: "C++",
          rating: 2
        }, {
          name: "C",
          rating: 2
        }, {
          name: "PostgreSQL",
          rating: 3
        }, {
          name: "MySQL",
          rating: 3
        }];
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.drawInterestsPentagon();
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.drawInterestsPentagon();
        }
      }, {
        key: "drawInterestsPentagon",
        value: function drawInterestsPentagon() {
          var skills = [{
            header: 'Computer Science Fields',
            captions: ['Data\nScience', 'Artificial\nIntelligence', 'Application\nDevelopment', 'Computer\nGraphics', 'Cyber\nSecurity'],
            values: [0.7, 0.9, 0.7, 0.8, 0.7]
          }];
          var pentagonIndex = 0;
          var valueIndex = 0;
          var width = 0;
          var height = 0;
          var radOffset = Math.PI / 2;
          var sides = 5; // Number of sides in the polygon

          var theta = 2 * Math.PI / sides; // radians per section

          function getXY(i, radius) {
            return {
              x: Math.cos(radOffset + theta * i) * radius * width + width / 2,
              y: Math.sin(radOffset + theta * i) * radius * height + height / 2
            };
          }

          var hue = [];
          var hueOffset = 200;
          $(skills).each(function (s) {
            // console.log(s);
            $('.content-interests').html('<div class="pentagon" id="interests"><div class="header"></div><canvas class="pentCanvas"/></div>');
            hue[s] = (hueOffset + 255 * s / skills.length) % 255;
          });
          $('.pentagon').each(function (index) {
            width = $(this).width() * 0.85; // console.log($(this).width());
            // height = $(this).height();

            height = width;
            var ctx = $(this).find('canvas')[0].getContext('2d');
            ctx.canvas.width = width;
            ctx.canvas.height = height;
            ctx.font = 'bold 15px Helvetica';
            ctx.textAlign = 'center';
            /*** LABEL ***/

            var color = 'hsl(' + hue[pentagonIndex] + ', 11%, 15%)';
            ctx.fillStyle = color;
            ctx.fillText(skills[pentagonIndex].header, width / 2, 15);
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
              xy = getXY(i, 0.37); // console.log();

              var lines = skills[pentagonIndex].captions[valueIndex].split('\n');
              var lineheight = 12;
              var moveValuesX = [0, +2, -10, +10, +5];
              var moveValuesY = [5, 8, -10, -10, 0];

              for (var j = 0; j < lines.length; j++) {
                ctx.fillText(lines[j], xy.x + moveValuesX[valueIndex], xy.y + 5 + moveValuesY[valueIndex] + j * lineheight);
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
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      hostBindings: function SkillsComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SkillsComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 7,
      vars: 2,
      consts: [[1, "row"], [1, "col-md-4"], [1, "content-interests"], [1, "col-md-4", "col-10", "offset-1", "offset-md-0", "text-center", "star-skills"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col"], [1, "fa", "fa-star", 3, "ngClass"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_div_4_Template, 9, 16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SkillsComponent_div_6_Template, 9, 16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillList1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillList2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".content[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n}\n\n#c[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin: 0;\n  height: 25px;\n}\n\n.pentagon[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 3px 3px 0px 3px;\n  display: inline-block;\n}\n\n.checked[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.star-skills[_ngcontent-%COMP%] {\n  font-size: calc(40% + 1vw + 1vh);\n  margin-top: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWwvZGV2L2dhYnJpZWxtYWRlaXJhL3NyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUdFLFNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDREY7O0FES0E7RUFDSSxhQUFBO0FDRko7O0FES0E7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucGVudGFnb24ge1xuICAvLyB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDNweCAzcHggMHB4IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cbi5jaGVja2VkIHtcbiAgICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3Rhci1za2lsbHMge1xuICBmb250LXNpemU6IGNhbGMoNDAlICsgMXZ3ICsgMXZoKTs7XG4gIG1hcmdpbi10b3A6IDV2dztcbn0iLCIuY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucGVudGFnb24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDNweCAzcHggMHB4IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2hlY2tlZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zdGFyLXNraWxscyB7XG4gIGZvbnQtc2l6ZTogY2FsYyg0MCUgKyAxdncgKyAxdmgpO1xuICBtYXJnaW4tdG9wOiA1dnc7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/gabriel/dev/gabrielmadeira/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map