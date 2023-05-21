(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Shared/can-active-child.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Shared/can-active-child.service.ts ***!
  \****************************************************/
/*! exports provided: CanActiveChildService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActiveChildService", function() { return CanActiveChildService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanActiveChildService = /** @class */ (function () {
    function CanActiveChildService() {
    }
    CanActiveChildService.prototype.canActivateChild = function () {
        alert("in side a child");
        return true;
    };
    CanActiveChildService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CanActiveChildService);
    return CanActiveChildService;
}());



/***/ }),

/***/ "./src/app/Shared/can-active.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Shared/can-active.service.ts ***!
  \**********************************************/
/*! exports provided: CanActiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActiveService", function() { return CanActiveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanActiveService = /** @class */ (function () {
    function CanActiveService() {
    }
    CanActiveService.prototype.canActivate = function () {
        //alert("you are in profile");
        return true;
    };
    CanActiveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CanActiveService);
    return CanActiveService;
}());



/***/ }),

/***/ "./src/app/Shared/can-deactivate-guard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Shared/can-deactivate-guard.service.ts ***!
  \********************************************************/
/*! exports provided: CanDeactivateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuardService", function() { return CanDeactivateGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanDeactivateGuardService = /** @class */ (function () {
    function CanDeactivateGuardService() {
    }
    CanDeactivateGuardService.prototype.canDeactivate = function (component) {
        console.log("in desctibe Guard");
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CanDeactivateGuardService);
    return CanDeactivateGuardService;
}());



/***/ }),

/***/ "./src/app/Shared/http.service.ts":
/*!****************************************!*\
  !*** ./src/app/Shared/http.service.ts ***!
  \****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.test = "hey";
    }
    HttpService.prototype.httpGet = function (url) {
        return this.http.get(url);
    };
    HttpService.prototype.httpPost = function (url, _a) {
        return this.http.post(url, { name: "Subrat" });
    };
    HttpService.prototype.sendEmail = function (url, data) {
        return this.http.post(url, data);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/app-material.ts":
/*!*********************************!*\
  !*** ./src/app/app-material.ts ***!
  \*********************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var materialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
];
var Material = /** @class */ (function () {
    function Material() {
    }
    Material = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: materialComponents,
            exports: materialComponents,
        })
    ], Material);
    return Material;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _Shared_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shared/can-deactivate-guard.service */ "./src/app/Shared/can-deactivate-guard.service.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _Shared_can_active_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Shared/can-active.service */ "./src/app/Shared/can-active.service.ts");
/* harmony import */ var _Shared_can_active_child_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shared/can-active-child.service */ "./src/app/Shared/can-active-child.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/form', pathMatch: 'full' },
    { path: "form", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'profile/:userId', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        children: [
            { path: "form", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
        ],
        canDeactivate: [_Shared_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateGuardService"]],
        canActivate: [_Shared_can_active_service__WEBPACK_IMPORTED_MODULE_6__["CanActiveService"]],
        canActivateChild: [_Shared_can_active_child_service__WEBPACK_IMPORTED_MODULE_7__["CanActiveChildService"]]
    },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<!-- <h1>In AppComponent</h1> -->\n<div style=\"text-align: center; margin-top: 20px\">\n  <router-outlet></router-outlet>\n</div>\n\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shared/http.service */ "./src/app/Shared/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'form';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_Shared_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _Shared_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Shared/http.service */ "./src/app/Shared/http.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _peofile_child_peofile_child_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./peofile-child/peofile-child.component */ "./src/app/peofile-child/peofile-child.component.ts");
/* harmony import */ var _custome_derective_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custome-derective.directive */ "./src/app/custome-derective.directive.ts");
/* harmony import */ var _structural_directives_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./structural-directives.directive */ "./src/app/structural-directives.directive.ts");
/* harmony import */ var _pipes_addition_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/addition.pipe */ "./src/app/pipes/addition.pipe.ts");
/* harmony import */ var _app_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-material */ "./src/app/app-material.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _dummy_cow_cow_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dummy/cow/cow.component */ "./src/app/dummy/cow/cow.component.ts");
/* harmony import */ var _dummy_dog_dog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dummy/dog/dog.component */ "./src/app/dummy/dog/dog.component.ts");
/* harmony import */ var _dummy_cat_cat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dummy/cat/cat.component */ "./src/app/dummy/cat/cat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _peofile_child_peofile_child_component__WEBPACK_IMPORTED_MODULE_10__["PeofileChildComponent"],
                _custome_derective_directive__WEBPACK_IMPORTED_MODULE_11__["CustomeDerectiveDirective"],
                _structural_directives_directive__WEBPACK_IMPORTED_MODULE_12__["StructuralDirectivesDirective"],
                _pipes_addition_pipe__WEBPACK_IMPORTED_MODULE_13__["AdditionPipe"],
                _dummy_cow_cow_component__WEBPACK_IMPORTED_MODULE_16__["CowComponent"],
                _dummy_dog_dog_component__WEBPACK_IMPORTED_MODULE_17__["DogComponent"],
                _dummy_cat_cat_component__WEBPACK_IMPORTED_MODULE_18__["CatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_material__WEBPACK_IMPORTED_MODULE_14__["Material"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
            ], entryComponents: [_dummy_dog_dog_component__WEBPACK_IMPORTED_MODULE_17__["DogComponent"], _dummy_cow_cow_component__WEBPACK_IMPORTED_MODULE_16__["CowComponent"], _dummy_cat_cat_component__WEBPACK_IMPORTED_MODULE_18__["CatComponent"]],
            providers: [_Shared_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custome-derective.directive.ts":
/*!************************************************!*\
  !*** ./src/app/custome-derective.directive.ts ***!
  \************************************************/
/*! exports provided: CustomeDerectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomeDerectiveDirective", function() { return CustomeDerectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomeDerectiveDirective = /** @class */ (function () {
    function CustomeDerectiveDirective(el) {
        this.el = el;
    }
    CustomeDerectiveDirective.prototype.onMouseEnter = function () {
        this.highlight(this.myColor || 'yellow');
    };
    CustomeDerectiveDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    CustomeDerectiveDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("appCustomeDerective"),
        __metadata("design:type", Object)
    ], CustomeDerectiveDirective.prototype, "myColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CustomeDerectiveDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CustomeDerectiveDirective.prototype, "onMouseLeave", null);
    CustomeDerectiveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appCustomeDerective]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CustomeDerectiveDirective);
    return CustomeDerectiveDirective;
}());



/***/ }),

/***/ "./src/app/dummy/cat/cat.component.css":
/*!*********************************************!*\
  !*** ./src/app/dummy/cat/cat.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R1bW15L2NhdC9jYXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dummy/cat/cat.component.html":
/*!**********************************************!*\
  !*** ./src/app/dummy/cat/cat.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cat works!\n</p>\n"

/***/ }),

/***/ "./src/app/dummy/cat/cat.component.ts":
/*!********************************************!*\
  !*** ./src/app/dummy/cat/cat.component.ts ***!
  \********************************************/
/*! exports provided: CatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatComponent", function() { return CatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatComponent = /** @class */ (function () {
    function CatComponent() {
    }
    CatComponent.prototype.ngOnInit = function () {
    };
    CatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cat',
            template: __webpack_require__(/*! ./cat.component.html */ "./src/app/dummy/cat/cat.component.html"),
            styles: [__webpack_require__(/*! ./cat.component.css */ "./src/app/dummy/cat/cat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CatComponent);
    return CatComponent;
}());



/***/ }),

/***/ "./src/app/dummy/cow/cow.component.css":
/*!*********************************************!*\
  !*** ./src/app/dummy/cow/cow.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R1bW15L2Nvdy9jb3cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dummy/cow/cow.component.html":
/*!**********************************************!*\
  !*** ./src/app/dummy/cow/cow.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cow works!\n</p>\n"

/***/ }),

/***/ "./src/app/dummy/cow/cow.component.ts":
/*!********************************************!*\
  !*** ./src/app/dummy/cow/cow.component.ts ***!
  \********************************************/
/*! exports provided: CowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CowComponent", function() { return CowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CowComponent = /** @class */ (function () {
    function CowComponent() {
    }
    CowComponent.prototype.ngOnInit = function () {
    };
    CowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cow',
            template: __webpack_require__(/*! ./cow.component.html */ "./src/app/dummy/cow/cow.component.html"),
            styles: [__webpack_require__(/*! ./cow.component.css */ "./src/app/dummy/cow/cow.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CowComponent);
    return CowComponent;
}());



/***/ }),

/***/ "./src/app/dummy/dog/dog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dummy/dog/dog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R1bW15L2RvZy9kb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dummy/dog/dog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dummy/dog/dog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dog works!\n</p>\n"

/***/ }),

/***/ "./src/app/dummy/dog/dog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dummy/dog/dog.component.ts ***!
  \********************************************/
/*! exports provided: DogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogComponent", function() { return DogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DogComponent = /** @class */ (function () {
    function DogComponent() {
    }
    DogComponent.prototype.ngOnInit = function () {
    };
    DogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dog',
            template: __webpack_require__(/*! ./dog.component.html */ "./src/app/dummy/dog/dog.component.html"),
            styles: [__webpack_require__(/*! ./dog.component.css */ "./src/app/dummy/dog/dog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DogComponent);
    return DogComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dinamic{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGluYW1pY3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC1nYXA6IDJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>arbi saidi</h1>\n\n<form  (ngSubmit)=\"onSubmit()\" style=\"width: 50%; margin: auto\" >\n  <!-- <input id=\"name\" name=\"name1\" required minlength=\"4\" [(ngModel)]=\"name1\" #nameId=\"ngModel\" placeholder=\"Name\" style=\"width: 100%; height: 30px;font-size: 20px;\">\n  <br>\n  <div *ngIf=\"nameId.invalid && (nameId.dirty || nameId.touched)\">\n\n    <div *ngIf=\"nameId?.errors.required\" style=\"color: red;font-size: 20px;\">\n      Name is required.\n    </div>\n    <div *ngIf=\"nameId?.errors.minlength\" style=\"color: red;font-size: 20px;\">\n      Name must be at least 4 characters long.\n    </div>\n\n  </div>\n <br><br> -->\n  <mat-card>\n    <h1>عيد اضحى مبارك </h1>\n\n    <mat-form-field style=\"width: 100%\">\n      <input matInput placeholder=\"Name\" [formControl]=\"nameFormControl\" />\n      <mat-error *ngIf=\"nameFormControl.hasError('minlength')\">\n        Name must be at least 4 characters long.\n      </mat-error>\n      <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n        Name is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n\n    <mat-form-field style=\"width: 100%\">\n      <input matInput placeholder=\"City\" [formControl]=\"cityFormControl\" />\n      <mat-error *ngIf=\"cityFormControl.hasError('minlength')\">\n        city must be at least 4 characters long.\n      </mat-error>\n      <mat-error *ngIf=\"cityFormControl.hasError('required')\">\n        city is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n\n\n\n    <mat-form-field style=\"width: 100%\">\n      <input type=\"number\" matInput placeholder=\"Number\" [formControl]=\"numberFormControl\" />\n      <mat-error *ngIf=\"numberFormControl.hasError('minlength')\">\n        Number must be at least 4 characters long.\n      </mat-error>\n      <mat-error *ngIf=\"numberFormControl.hasError('required')\">\n        number is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n    \n\n    <button\n\n      mat-raised-button\n      [disabled]=\"numberFormControl.invalid ||cityFormControl.invalid||nameFormControl.invalid || loading\"\n      color=\"primary\"\n      (click)=\"register()\"\n      \n    type=\"submit\"\n    >\n      {{buttionText}}\n    </button>\n    \n  </mat-card>\n  <div *ngIf=\"isSubmitted\" class=\"thank-you-message\">\n    Thank you for submitting the form!\n  </div>\n</form>\n\n<!-- <button [routerLink]=\"['/profile', 12367]\">Go to Profile</button> -->\n<br />\n\n\n<div style=\"width: 50%; margin: auto\">\n \n\n  \n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/http.service */ "./src/app/Shared/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dummy_dog_dog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dummy/dog/dog.component */ "./src/app/dummy/dog/dog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(http) {
        this.http = http;
        this.isSubmitted = false;
        this.image = "https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg";
        this.loading = false;
        this.buttionText = "Submit";
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)
        ]);
        this.cityFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)
        ]);
        this.numberFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
        ]);
        this.dummyComponent = _dummy_dog_dog_component__WEBPACK_IMPORTED_MODULE_3__["DogComponent"];
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(this.http.test);
    };
    LoginComponent.prototype.onSubmit = function () {
        // Perform form submission logic here
        this.isSubmitted = true;
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.buttionText = "Submiting...";
        var user = {
            name: this.nameFormControl.value,
            email: "solmimohamed@gmail.com",
            city: this.cityFormControl.value,
            number: this.numberFormControl.value
        };
        this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(function (data) {
            var res = data;
            console.log("\uD83D\uDC4F > \uD83D\uDC4F > \uD83D\uDC4F > \uD83D\uDC4F " + user.name + " is successfully register and mail has been sent and the message id is " + res.messageId);
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.buttionText = "Submit";
        }, function () {
            _this.loading = false;
            _this.buttionText = "Submit";
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_Shared_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: '<h1>404 Page Not found</h1>'
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/peofile-child/peofile-child.component.css":
/*!***********************************************************!*\
  !*** ./src/app/peofile-child/peofile-child.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb2ZpbGUtY2hpbGQvcGVvZmlsZS1jaGlsZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/peofile-child/peofile-child.component.html":
/*!************************************************************!*\
  !*** ./src/app/peofile-child/peofile-child.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  The data from the profile is {{profileData}}\n</p>\n\n<h4>{{ someData?.name }}</h4>\n\n<button (click)=\"emmitString('Hi Subrat!!!!')\">Emmit</button>\n"

/***/ }),

/***/ "./src/app/peofile-child/peofile-child.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/peofile-child/peofile-child.component.ts ***!
  \**********************************************************/
/*! exports provided: PeofileChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeofileChildComponent", function() { return PeofileChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/http.service */ "./src/app/Shared/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PeofileChildComponent = /** @class */ (function () {
    function PeofileChildComponent(httpService) {
        this.httpService = httpService;
        this.profileData = "";
        this.stringOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PeofileChildComponent.prototype.ngOnInit = function () {
        var _this = this;
        var serverData = this.httpService.httpGet("http://localhost:3000/data").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (err) { return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (retryCount) {
            if (retryCount > 5)
                throw err;
            else {
                retryCount++;
                return retryCount;
            }
        }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delayWhen"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000); })); }));
        serverData.subscribe(function (data) {
            _this.someData = data;
            console.log(JSON.stringify(_this.someData, null, 2));
        }, function (err) {
            console.error(err);
        }, function () { return console.log("done"); });
        var serverData1 = this.httpService.httpGet("http://localhost:3000/data/2");
        var serverData2 = this.httpService.httpGet("http://localhost:3000/data/123");
        var serverData3 = this.httpService.httpGet("http://localhost:3000/data/43");
        var serverData4 = this.httpService.httpGet("http://localhost:3000/data/321");
        var arr = [serverData1, serverData2, serverData3, serverData4];
        var multiCall = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(arr);
        multiCall.subscribe(function (data) {
            console.log(JSON.stringify(data[0], null, 2));
            console.log(JSON.stringify(data[1], null, 2));
            console.log(JSON.stringify(data[2], null, 2));
            console.log(JSON.stringify(data[3], null, 2));
        }, function (err) {
            console.error(err);
        }, function () { return console.log("done"); });
    };
    PeofileChildComponent.prototype.emmitString = function (data) {
        this.stringOutput.emit(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PeofileChildComponent.prototype, "profileData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PeofileChildComponent.prototype, "stringOutput", void 0);
    PeofileChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-peofile-child',
            template: __webpack_require__(/*! ./peofile-child.component.html */ "./src/app/peofile-child/peofile-child.component.html"),
            styles: [__webpack_require__(/*! ./peofile-child.component.css */ "./src/app/peofile-child/peofile-child.component.css")]
        }),
        __metadata("design:paramtypes", [_Shared_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], PeofileChildComponent);
    return PeofileChildComponent;
}());



/***/ }),

/***/ "./src/app/pipes/addition.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/addition.pipe.ts ***!
  \****************************************/
/*! exports provided: AdditionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionPipe", function() { return AdditionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdditionPipe = /** @class */ (function () {
    function AdditionPipe() {
    }
    AdditionPipe.prototype.transform = function (value, args) {
        // console.log("check");
        return value + args;
    };
    AdditionPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'addition',
            pure: true
        })
    ], AdditionPipe);
    return AdditionPipe;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #ob>\n  <h1 [appCustomeDerective]=\"'red'\">\n    The User Id is {{userId}} with {{childData}}\n  </h1>\n  <h2 *appStructuralDirectives=\"name\">Hi I am Subart</h2>\n  <!-- <h3>{{date | date : 'dd/MM/yyyy'}}</h3> -->\n  <h3>{{numVal | addition : 5000}}</h3>\n  <!-- <ng-template [appStructuralDirectives]=\"name\"> \n    <h1>Hi I am Subart</h1>\n  </ng-template> -->\n  <!-- <ng-template #another><h2>I am Biku !!!!</h2></ng-template> -->\n  <button routerLink=\"/login\">Back to login</button>\n  <button routerLink=\"login\">To child</button>\n  <app-peofile-child [profileData]=\"userId\" (stringOutput)=\"dispalyChildValue($event)\"></app-peofile-child>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route) {
        this.route = route;
        this.name = true;
        this.date = new Date();
        this.numVal = 2000;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.userId = params.userId; });
        this.clicks = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.button.nativeElement, 'click');
        var mouseEvent = this.clicks.subscribe(function (mouse) { return console.log(mouse.clientX, mouse.clientY); });
        setTimeout(function () {
            mouseEvent.unsubscribe();
        }, 5000);
        var arr = [1, 2, 3, 4, 5, 5, 6];
        var obj = {
            name: 'Subrat',
            from: 'Bangalore'
        };
        var stringArray = ['hi', 'i', 'am', 'Biku'];
        var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(23, arr, obj, 'Subart', stringArray, {});
        // obs.subscribe(
        //   data => console.log(data)
        // )
        // setTimeout(() => {
        //   obs.subscribe(
        //     data => console.log(data)
        //   )
        // }, 1000)
        var obser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            observer.next("The 1st emit");
            setTimeout(function () {
                observer.next("The 2nd emit");
                // observer.complete();
                observer.error("oops something went wrong");
            }, 3000);
        });
        // // Create a new Observable that will deliver the above sequence
        var SequenceOld = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](this.multipleSubscriber());
        var Sequence = SequenceOld.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        // Subscribe starts the clock, and begins to emit after 1 second
        // Sequence.subscribe({
        //   next(num) { console.log('1st subscribe: ' + num); },
        //   complete() { console.log('1st finished.'); }
        // });
        // // After 1 1/2 seconds, subscribe again (should "miss" the first value).
        // setTimeout(() => {
        //   Sequence.subscribe({
        //     next(num) { console.log('2nd subscribe: ' + num); },
        //     complete() { console.log('2nd finished.'); }
        //   });
        // }, 3000);
        // obser.subscribe(
        //   // {
        //   // next(data){console.log(data); },
        //   // error(err){console.error(err); }
        //   // }
        //   data => {
        //     console.log(data);
        //   },err => {
        //     console.error(err);
        //   },() => console.log("The Observable is complete")
        // )
    };
    ProfileComponent.prototype.multipleSubscriber = function () {
        var _this = this;
        var arr = [1, 2, 3, 4, 5, 6];
        return function (observer) {
            _this.run(observer, arr, 0);
            return {
                unsubscribe: function () {
                }
            };
        };
    };
    ProfileComponent.prototype.run = function (observer, arr, index) {
        var _this = this;
        return setTimeout(function () {
            observer.next(arr[index]);
            if (index === arr.length - 1) {
                observer.complete();
            }
            else {
                _this.run(observer, arr, ++index);
            }
        }, 1000);
    };
    ProfileComponent.prototype.multiCastSubscriber = function () {
        var _this = this;
        var arr = [1, 2, 3, 4, 5, 6, 7];
        var observers = [];
        var timeoutId;
        return function (observer) {
            observers.push(observer);
            // When this is the first subscription, start
            if (observers.length === 1) {
                timeoutId = _this.run({
                    next: function (val) {
                        // Iterate through observers and notify all subscriptions
                        observers.forEach(function (obs) { return obs.next(val); });
                    },
                    complete: function () {
                        // Notify all complete callbacks
                        observers.slice(0).forEach(function (obs) { return obs.complete(); });
                    }
                }, arr, 0);
            }
            return {
                unsubscribe: function () {
                    observers.splice(observers.indexOf(observer), 1);
                    // If there's no more listeners, do cleanup
                    if (observers.length === 0) {
                        clearTimeout(timeoutId);
                    }
                }
            };
        };
    };
    ProfileComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        console.log("in profile");
        return window.confirm('Discard changes?');
    };
    ProfileComponent.prototype.dispalyChildValue = function (event) {
        this.childData = event;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ob'),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "button", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/structural-directives.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/structural-directives.directive.ts ***!
  \****************************************************/
/*! exports provided: StructuralDirectivesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuralDirectivesDirective", function() { return StructuralDirectivesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StructuralDirectivesDirective = /** @class */ (function () {
    function StructuralDirectivesDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(StructuralDirectivesDirective.prototype, "appStructuralDirectives", {
        set: function (condition) {
            if (condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], StructuralDirectivesDirective.prototype, "appStructuralDirectives", null);
    StructuralDirectivesDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appStructuralDirectives]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], StructuralDirectivesDirective);
    return StructuralDirectivesDirective;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\OneDrive\Bureau\kheli\startAngular-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map