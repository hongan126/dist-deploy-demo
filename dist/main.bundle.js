webpackJsonp(["main"],{

/***/ "./api/server/collections/groups.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteGroups; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_meteor_rxjs__ = __webpack_require__("./node_modules/meteor-rxjs/dist/index.js");

var NoteGroups = new __WEBPACK_IMPORTED_MODULE_0_meteor_rxjs__["b" /* MongoObservable */].Collection('groups');


/***/ }),

/***/ "./api/server/collections/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notes__ = __webpack_require__("./api/server/collections/notes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__notes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__groups__ = __webpack_require__("./api/server/collections/groups.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__("./api/server/collections/users.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "./api/server/collections/notes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_meteor_rxjs__ = __webpack_require__("./node_modules/meteor-rxjs/dist/index.js");

var Notes = new __WEBPACK_IMPORTED_MODULE_0_meteor_rxjs__["b" /* MongoObservable */].Collection('notes');


/***/ }),

/***/ "./api/server/collections/users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_meteor_rxjs__ = __webpack_require__("./node_modules/meteor-rxjs/dist/index.js");

var Users = __WEBPACK_IMPORTED_MODULE_0_meteor_rxjs__["b" /* MongoObservable */].fromExisting(Meteor.users);


/***/ }),

/***/ "./api/server/models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteType; });
var NoteType;
(function (NoteType) {
    NoteType["TEXT"] = "text note";
    NoteType["TODO"] = "todo note";
})(NoteType || (NoteType = {}));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>\r\n  <i *ngIf=\"data.type==='error'\" class=\"fa fa-exclamation-triangle fa-2x\" style=\"color: #ff0000;\" aria-hidden=\"true\"></i>\r\n  <i *ngIf=\"data.type==='success'\" class=\"fa fa-check-circle fa-2x\" style=\"color: green;\" aria-hidden=\"true\"></i>\r\n  {{data.reason}}\r\n</h3>\r\n<!--<div mat-dialog-content>-->\r\n<!--</div>-->\r\n<div mat-dialog-actions style=\"float: right;\">\r\n  <button tabindex=\"2\" mat-raised-button (click)=\"onOk()\">Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AlertComponent = (function () {
    function AlertComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AlertComponent.prototype.onOk = function () {
        this.dialogRef.close();
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert',
            template: __webpack_require__("./src/app/_alert/alert.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (Meteor.userId()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout layout all-of-page\">\r\n  <!--Header BEGIN-->\r\n  <div>\r\n    <mat-toolbar>\r\n      <!--Title-->\r\n      <a routerLink=\"/\" class=\"toolbar-title\">\r\n        <i style=\"color: white; font-size: 2em;\" class=\"material-icons\">view_list</i>\r\n      </a>\r\n      <a routerLink=\"/\" class=\"toolbar-title\">\r\n        <span>FTEL Notes</span>\r\n      </a>\r\n\r\n      <!--Search box-->\r\n      <input [hidden]=\"!user\" class=\"search-box\" type=\"text\" [(ngModel)]=\"searchStr\" (keyup.enter)=\"onSearch()\" placeholder=\"search\">\r\n      <button [hidden]=\"!user\" mat-button class=\"search-btn\" (click)=\"onSearch()\"><i class=\"material-icons white\">search</i></button>\r\n\r\n\r\n      <span class=\"fill-remaining-space\"></span>\r\n\r\n      <!--Login/Sign up-->\r\n      <!--<div [hidden]=\"user\">-->\r\n      <button [hidden]=\"user\" mat-button routerLink=\"/login\" class=\"white\">Login</button>\r\n      <button [hidden]=\"user\" mat-button routerLink=\"/signup\" class=\"white\">Sign up</button>\r\n      <!--</div>-->\r\n\r\n      <!--User/Logout-->\r\n      <div [hidden]=\"!user\">\r\n        <button mat-button [matMenuTriggerFor]=\"userMenu\">\r\n        <span mat-button *ngIf=\"user\" class=\"white\" style=\"font-size: 1.25em;\">\r\n          <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n          {{ user.profile.firstName + ' ' + user.profile.lastName }}\r\n          <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\r\n        </span>\r\n        </button>\r\n        <mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\">\r\n          <button mat-menu-item routerLink=\"/profile\">\r\n            <mat-icon><i class=\"fa fa-user\" aria-hidden=\"true\"></i></mat-icon>\r\n            <span> Profile</span>\r\n          </button>\r\n          <button mat-menu-item routerLink=\"/change-pass\">\r\n            <mat-icon><i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></mat-icon>\r\n            <span> Change password</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"logout()\">\r\n            <mat-icon><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></mat-icon>\r\n            <span>Logout</span>\r\n          </button>\r\n        </mat-menu>\r\n      </div>\r\n    </mat-toolbar>\r\n  </div>\r\n  <!--Header END-->\r\n\r\n  <!--<header class=\"mdl-layout__header mdl-layout__header--waterfall\">-->\r\n  <!--&lt;!&ndash; Top row, always visible &ndash;&gt;-->\r\n  <!--<div class=\"mdl-layout__header-row\">-->\r\n  <!--&lt;!&ndash; Title &ndash;&gt;-->\r\n  <!--<span class=\"mdl-layout-title\">Title</span>-->\r\n  <!--<div class=\"mdl-layout-spacer\"></div>-->\r\n  <!--<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable-->\r\n  <!--mdl-textfield--floating-label mdl-textfield--align-right\">-->\r\n  <!--<label class=\"mdl-button mdl-js-button mdl-button--icon\"-->\r\n  <!--for=\"waterfall-exp\">-->\r\n  <!--<i class=\"material-icons\">search</i>-->\r\n  <!--</label>-->\r\n  <!--<div class=\"mdl-textfield__expandable-holder\">-->\r\n  <!--<input class=\"mdl-textfield__input\" type=\"text\" name=\"sample\"-->\r\n  <!--id=\"waterfall-exp\">-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n  <!--<nav class=\"mdl-navigation\">-->\r\n  <!--<a class=\"mdl-navigation__link\" href=\"\">Link</a>-->\r\n  <!--<a class=\"mdl-navigation__link\" href=\"\">Link</a>-->\r\n  <!--<a class=\"mdl-navigation__link\" href=\"\">Link</a>-->\r\n  <!--<a class=\"mdl-navigation__link\" href=\"\">Link</a>-->\r\n  <!--</nav>-->\r\n  <!--</div>-->\r\n  <!--</header>-->\r\n\r\n  <!--<div class=\"mdl-layout__drawer\">-->\r\n  <!--<span class=\"mdl-layout-title\">Title</span>-->\r\n  <!--<nav class=\"mdl-navigation\">-->\r\n  <!--<a class=\"mdl-navigation__link\" href=\"\">Link</a>-->\r\n  <!--<a class=\"mdl-navigation__link\" href=\"\">Link</a>-->\r\n  <!--<a class=\"mdl-navigation__link\" href=\"\">Link</a>-->\r\n  <!--<a class=\"mdl-navigation__link\" href=\"\">Link</a>-->\r\n  <!--</nav>-->\r\n  <!--</div>-->\r\n\r\n  <!--Content-->\r\n  <main class=\"mdl-layout__content main-content\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background-color: #F5F5F5; }\n\n.all-of-page {\n  overflow-y: hidden; }\n\n::-webkit-scrollbar-thumb {\n  background-color: #444444; }\n\n.toolbar-title {\n  text-decoration: none;\n  color: white;\n  display: block;\n  line-height: 1;\n  vertical-align: middle; }\n\n.mat-toolbar {\n  background: #3f51b5;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n\n.white {\n  color: white; }\n\n.search-box {\n  margin-left: 20px;\n  font-size: 0.8em;\n  width: 30%;\n  padding: 5px;\n  height: 24px;\n  border: 0px;\n  border-radius: 5px 0px 0px 5px; }\n\n.search-btn {\n  border-radius: 0px 5px 5px 0px;\n  background-color: #243ab3;\n  width: 20px;\n  height: 34px; }\n\n.mdl-layout__content.main-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_meteor_meteor__ = __webpack_require__("meteor/meteor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_meteor_meteor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_meteor_meteor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_service__ = __webpack_require__("./src/app/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, zone, searchService) {
        this.router = router;
        this.zone = zone;
        this.searchService = searchService;
        this.user = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setUserToShow();
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.zone.run(function () {
            __WEBPACK_IMPORTED_MODULE_2_meteor_meteor__["Meteor"].logout();
            _this.router.navigate(['/login']);
        });
        this.user = null;
    };
    AppComponent.prototype.setUserToShow = function () {
        !!__WEBPACK_IMPORTED_MODULE_2_meteor_meteor__["Meteor"].userId() ? this.user = __WEBPACK_IMPORTED_MODULE_2_meteor_meteor__["Meteor"].user() : this.user = null;
    };
    AppComponent.prototype.onSearch = function () {
        // this.notesMgn.searchNote(this.searchStr);
        this.searchService.searchNote(this.searchStr);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__search_service__["a" /* SearchService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatRadioModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatTextareaAutosize */]
            ],
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_material_module__ = __webpack_require__("./src/app/app.material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notes_manager_notes_manager_component__ = __webpack_require__("./src/app/notes-manager/notes-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__note_group_note_group_add_component__ = __webpack_require__("./src/app/note-group/note-group.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__note_group_note_group_remove_component__ = __webpack_require__("./src/app/note-group/note-group.remove.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__share_manager_share_manager_remove_component__ = __webpack_require__("./src/app/share-manager/share-manager.remove.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__note_details_note_details_component__ = __webpack_require__("./src/app/note-details/note-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__note_details_note_remove_component__ = __webpack_require__("./src/app/note-details/note.remove.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__note_group_note_group_invite_member_component__ = __webpack_require__("./src/app/note-group/note-group.invite-member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__alert_alert_component__ = __webpack_require__("./src/app/_alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__password_change_password_change_password_component__ = __webpack_require__("./src/app/password/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__password_reset_password_reset_password_component__ = __webpack_require__("./src/app/password/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__password_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/password/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__search_service__ = __webpack_require__("./src/app/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__notes_manager_notes_manager_component__["a" /* NotesManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__note_group_note_group_add_component__["a" /* NoteGroupAddComponent */],
                __WEBPACK_IMPORTED_MODULE_11__note_group_note_group_remove_component__["a" /* NoteGroupRemoveComponent */],
                __WEBPACK_IMPORTED_MODULE_12__share_manager_share_manager_remove_component__["a" /* ShareManagerRemoveComponent */],
                __WEBPACK_IMPORTED_MODULE_13__note_details_note_details_component__["a" /* NoteDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__note_details_note_remove_component__["a" /* NoteRemoveComponent */],
                __WEBPACK_IMPORTED_MODULE_16__note_group_note_group_invite_member_component__["a" /* NoteGroupInviteMemberComponent */],
                __WEBPACK_IMPORTED_MODULE_17__alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_18__password_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_19__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__password_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_21__password_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_material_module__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__search_service__["a" /* SearchService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notes_manager_notes_manager_component__ = __webpack_require__("./src/app/notes-manager/notes-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__note_group_note_group_add_component__ = __webpack_require__("./src/app/note-group/note-group.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__note_group_note_group_remove_component__ = __webpack_require__("./src/app/note-group/note-group.remove.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_manager_share_manager_remove_component__ = __webpack_require__("./src/app/share-manager/share-manager.remove.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__note_details_note_details_component__ = __webpack_require__("./src/app/note-details/note-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__note_details_note_remove_component__ = __webpack_require__("./src/app/note-details/note.remove.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__note_group_note_group_invite_member_component__ = __webpack_require__("./src/app/note-group/note-group.invite-member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alert_alert_component__ = __webpack_require__("./src/app/_alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__password_change_password_change_password_component__ = __webpack_require__("./src/app/password/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__password_reset_password_reset_password_component__ = __webpack_require__("./src/app/password/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__password_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/password/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__notes_manager_notes_manager_component__["a" /* NotesManagerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
    // {path: 'notes', component: NotesManagerComponent},
    { path: 'group-add', component: __WEBPACK_IMPORTED_MODULE_5__note_group_note_group_add_component__["a" /* NoteGroupAddComponent */] },
    { path: 'group-remove', component: __WEBPACK_IMPORTED_MODULE_6__note_group_note_group_remove_component__["a" /* NoteGroupRemoveComponent */] },
    { path: 'share-remove', component: __WEBPACK_IMPORTED_MODULE_7__share_manager_share_manager_remove_component__["a" /* ShareManagerRemoveComponent */] },
    { path: 'note-details', component: __WEBPACK_IMPORTED_MODULE_8__note_details_note_details_component__["a" /* NoteDetailsComponent */] },
    { path: 'note-remove', component: __WEBPACK_IMPORTED_MODULE_9__note_details_note_remove_component__["a" /* NoteRemoveComponent */] },
    { path: 'invite-member', component: __WEBPACK_IMPORTED_MODULE_11__note_group_note_group_invite_member_component__["a" /* NoteGroupInviteMemberComponent */] },
    { path: 'alert', component: __WEBPACK_IMPORTED_MODULE_12__alert_alert_component__["a" /* AlertComponent */] },
    { path: 'change-pass', component: __WEBPACK_IMPORTED_MODULE_13__password_change_password_change_password_component__["a" /* ChangePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reset-password/:token', component: __WEBPACK_IMPORTED_MODULE_15__password_reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
    { path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_16__password_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/common-child.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = eventSubscriber;
var subscription;
function eventSubscriber(action, handler, off) {
    if (off === void 0) { off = false; }
    if (off && subscription) {
        subscription.unsubscribe();
    }
    else {
        subscription = action.subscribe(function (searchStr) { return handler(searchStr); });
    }
}


/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form novalidate name=\"form\" class=\"mdc-elevation--z5 profile-form\"\n        [formGroup]=\"loginFg\" (ngSubmit)=\"login()\">\n\n    <h3 class=\"align-canter\">Login to your account</h3>\n\n    <div>\n      <i class=\"material-icons\">account_box</i>\n      <mat-form-field class=\"full-width\">\n        <input type=\"text\" matInput placeholder=\"Email\" name=\"username\"\n               [(ngModel)]=\"model.username\"\n               formControlName=\"username\"\n        />\n        <mat-error *ngIf=\"loginFg.get('username').hasError('email') && !loginFg.get('username').hasError('required')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"loginFg.get('username').hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div>\n      <i class=\"material-icons\">lock</i>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Password\" name=\"password\"\n               [type]=\"hide ? 'password':'text'\" formControlName=\"password\"\n               [(ngModel)]=\"model.password\"\n        />\n        <mat-icon matSuffix (click)=\"hide = !hide\">\n          {{hide?'visibility':'visibility_off'}}\n        </mat-icon>\n        <mat-error *ngIf=\"loginFg.get('password').hasError('required')\">\n          Password is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <mat-checkbox color=\"primary\" [(checked)]=\"rememberMyAcc\" (change)=\"rememberMyAcc=!rememberMyAcc\">Remember my account</mat-checkbox>\n    <span class=\"error\" [hidden]=\"error == ''\">{{error}}</span>\n    <div style=\"width: 100%; text-align: center; margin-top: 10px;\">\n      <button\n        style=\"width: 90%;\"\n        type=\"submit\" mat-raised-button color=\"primary\"\n        [disabled]=\"loginFg.get('username').invalid || loginFg.get('password').invalid\">\n        <b> Login</b>\n      </button>\n    </div>\n\n    <div style=\"width: 100%; margin-top: 10px;\">\n      <a style=\"text-align: left;\" [routerLink]=\"['/forgot-password']\" class=\"btn btn-link\">Forgot password</a>\n      <span class=\"fill-remaining-space\"></span>\n      <a style=\"float: right;\" [routerLink]=\"['/signup']\" class=\"btn btn-link\">Create new account</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-login {\n  width: 100%; }\n\n.profile-form {\n  width: auto;\n  min-width: 400px;\n  max-width: 300px;\n  height: auto;\n  border-radius: 3px;\n  background-color: white;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.align-canter {\n  margin: 0;\n  text-align: center; }\n\n.full-width {\n  width: auto;\n  min-width: 90%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_meteor_meteor__ = __webpack_require__("meteor/meteor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_meteor_meteor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_meteor_meteor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, router, zone, app) {
        this.fb = fb;
        this.router = router;
        this.zone = zone;
        this.app = app;
        this.hide = true;
        this.model = {};
        this.error = '';
        this.rememberMyAcc = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFg = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginFg.valid) {
            __WEBPACK_IMPORTED_MODULE_3_meteor_meteor__["Meteor"].loginWithPassword(this.model.username, this.model.password, function (err) {
                _this.zone.run(function () {
                    if (err) {
                        _this.error = err.reason;
                    }
                    else {
                        if (_this.rememberMyAcc === false) {
                            // Accounts._unstoreLoginToken();
                            // Accounts._autoLoginEnabled = false;
                        }
                        _this.router.navigate(['/']);
                    }
                });
                _this.app.setUserToShow();
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/note-details/note-details.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"data.typeDialog==='add-new-note'\" mat-dialog-title>Add new note to {{groupName}}</h3>\r\n<div *ngIf=\"data.typeDialog==='add-new-note'\" mat-dialog-content class=\"dialog-content\">\r\n  <form novalidate name=\"form-note-details\" [formGroup]=\"noteDetailsFg\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Title\" formControlName=\"title\" name=\"title\" [(ngModel)]=\"model.title\" cdkFocusInitial>\r\n      <mat-error *ngIf=\"noteDetailsFg.get('title').hasError('required')\">\r\n        Title is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-radio-group formControlName=\"noteType\" [(ngModel)]=\"noteType\">\r\n      <mat-radio-button color=\"primary\" value=\"text\">\r\n        Text\r\n      </mat-radio-button>\r\n      <mat-radio-button color=\"primary\" value=\"todo\">\r\n        Todo list\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n\r\n    <div *ngIf=\"noteType=='text'\">\r\n      <mat-form-field>\r\n        <textarea formControlName=\"noteContent\" matInput matTextareaAutosize\r\n                  matAutosizeMinRows=\"6\" [(ngModel)]=\"model.noteContent\"\r\n                  placeholder=\"Content\"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n      <!--Todo list div-->\r\n      <div class=\"todo-list-add\" *ngIf=\"noteType!='text'\">\r\n        <!--Todo list-->\r\n        <div class=\"todo-item\" *ngFor=\"let item of todoList\">\r\n          <mat-checkbox [checked]=\"item.checked\" (change)=\"item.checked = !item.checked\"\r\n                        [class.checked]=\"item.checked\"\r\n                        color=\"primary\">\r\n            {{item.content}}\r\n          </mat-checkbox>\r\n          <!--Todo delete-->\r\n          <!--{{item.checked}}-->\r\n          <div class=\"fill-remaining-space\"></div>\r\n          <a (click)=\"removeTodoItem(item)\" mat-icon-button class=\"icon-btn-size-xm\">\r\n            <i class=\"fa fa-times-circle fa-2x\" aria-hidden=\"true\"></i>\r\n          </a>\r\n        </div>\r\n\r\n        <!--Add new todo DIV-->\r\n        <div class=\"add-new-item-div\">\r\n          <mat-form-field style=\"width: 50%;\">\r\n            <input formControlName=\"todoName\" [(ngModel)]=\"model.todoItem\" (keyup.enter)=\"addTodoItem()\"\r\n                   matInput\r\n                   placeholder=\"Type a todo\">\r\n            <mat-error *ngIf=\"noteDetailsFg.get('todoName').hasError('required')\">\r\n              Todo name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <button type=\"button\" mat-icon-button (click)=\"addTodoItem(todoItem)\"\r\n                  [disabled]=\"noteDetailsFg.get('todoName').invalid\">\r\n            <i class=\"fa fa-plus fa-2x\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n  </form>\r\n</div>\r\n<div *ngIf=\"data.typeDialog==='add-new-note'\" mat-dialog-actions style=\"float: right;\">\r\n  <button type=\"button\" tabindex=\"2\" mat-raised-button color=\"warn\" (click)=\"onCancel()\">Cancel</button>\r\n  <button type=\"button\" [disabled]=\"noteDetailsFg.get('title').invalid\" tabindex=\"3\" mat-raised-button\r\n          class=\"add-button\"\r\n          [mat-dialog-close]=\"returnNote()\">Add\r\n  </button>\r\n</div>\r\n\r\n<!--Edit note-->\r\n<h3 *ngIf=\"data.typeDialog==='edit-note'\" mat-dialog-title>Edit note {{data.note.title}} of {{groupName}}</h3>\r\n<div *ngIf=\"data.typeDialog==='edit-note'\" mat-dialog-content class=\"dialog-content\">\r\n  <form novalidate name=\"form-note-edit\" [formGroup]=\"noteDetailsFg\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Title\" cdkFocusInitial formControlName=\"title\" name=\"title\" [(ngModel)]=\"note.title\">\r\n      <mat-error *ngIf=\"noteDetailsFg.get('title').hasError('required')\">\r\n        Title is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-radio-group [disabled]=\"note\">\r\n      <mat-radio-button color=\"primary\" value=\"text\" [checked]=\"noteType=='text'\">\r\n        Text\r\n      </mat-radio-button>\r\n      <mat-radio-button color=\"primary\" value=\"todo\" [checked]=\"noteType=='todo'\">\r\n        Todo list\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n\r\n    <div *ngIf=\"noteType=='text'\">\r\n      <mat-form-field>\r\n        <textarea formControlName=\"noteContent\" matInput\r\n                  matTextareaAutosize matAutosizeMinRows=\"6\"\r\n                  [(ngModel)]=\"note.content\"\r\n                  placeholder=\"Content\">{{note.content}}</textarea>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <!--Todo list div-->\r\n    <div class=\"todo-list-add\" *ngIf=\"noteType!='text'\">\r\n      <!--Todo list-->\r\n      <div class=\"todo-item\" *ngFor=\"let item of todoList\">\r\n        <mat-checkbox [checked]=\"item.checked\" (change)=\"item.checked = !item.checked\"\r\n                      [class.checked]=\"item.checked\"\r\n                      color=\"primary\">\r\n          {{item.content}}\r\n        </mat-checkbox>\r\n        <!--todo delete-->\r\n        <!--{{item.checked}}-->\r\n        <div class=\"fill-remaining-space\"></div>\r\n        <a (click)=\"removeTodoItem(item)\" mat-icon-button class=\"icon-btn-size-xm\">\r\n          <i class=\"fa fa-times-circle fa-2x\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <!--Add new todo DIV-->\r\n      <div class=\"add-new-item-div\">\r\n        <mat-form-field style=\"width: 50%;\">\r\n          <input formControlName=\"todoName\" [(ngModel)]=\"model.todoItem\" (keyup.enter)=\"addTodoItem()\"\r\n                 matInput\r\n                 placeholder=\"Type a todo\">\r\n          <mat-error *ngIf=\"noteDetailsFg.get('todoName').hasError('required')\">\r\n            Todo name is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <button type=\"button\" mat-icon-button (click)=\"addTodoItem(todoItem)\"\r\n                [disabled]=\"noteDetailsFg.get('todoName').invalid\">\r\n          <i class=\"fa fa-plus fa-2x\" aria-hidden=\"true\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n<div *ngIf=\"data.typeDialog==='edit-note'\" mat-dialog-actions style=\"float: right;\">\r\n  <button type=\"button\" tabindex=\"2\" mat-raised-button color=\"warn\" (click)=\"onCancel()\">Cancel</button>\r\n  <button type=\"button\" [disabled]=\"noteDetailsFg.get('title').invalid\" tabindex=\"3\" mat-raised-button\r\n          class=\"add-button\"\r\n          [mat-dialog-close]=\"returnNote()\">Edit\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/note-details/note-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog-content {\n  height: -webkit-fill-available; }\n\nform {\n  width: 100%; }\n  form mat-form-field {\n    width: 100%; }\n\n.mat-radio-button {\n  margin: 5px; }\n\n.todo-list-add {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.todo-item {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  padding: 6px;\n  border-radius: 4px; }\n  .todo-item:hover {\n    background-color: #cbcbcb; }\n\n.icon-btn-size-xm {\n  line-height: 24px;\n  width: 24px;\n  height: 24px; }\n\n.add-new-item-div {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.add-new-item-btn {\n  line-height: 38px;\n  height: 38px;\n  width: 140px; }\n\n.add-button {\n  background-color: #33691E;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/note-details/note-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_server_models__ = __webpack_require__("./api/server/models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NoteDetailsComponent = (function () {
    function NoteDetailsComponent(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.todoList = [];
        this.model = {};
    }
    NoteDetailsComponent.prototype.ngOnInit = function () {
        this.noteDetailsFg = this.fb.group({
            title: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            noteType: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            todoName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            todoItems: this.fb.array([this.fb.control('')]),
            noteContent: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]]
        });
        this.noteType = 'text';
        this.groupName = this.data.groupName;
        if (this.data.note) {
            this.note = this.data.note;
            this.todoList = this.note.todoList;
            this.note.type === __WEBPACK_IMPORTED_MODULE_3__api_server_models__["a" /* NoteType */].TEXT ? this.noteType = 'text' : this.noteType = 'todo';
        }
    };
    NoteDetailsComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    NoteDetailsComponent.prototype.addTodoItem = function () {
        var todo = { _id: this.getTodoId(), content: this.model.todoItem, checked: false };
        this.todoList.push(todo);
        this.todoItem = '';
        this.noteDetailsFg.get('todoName').reset();
    };
    NoteDetailsComponent.prototype.removeTodoItem = function (item) {
        this.todoList = this.todoList.filter(function (n) { return n !== item; });
    };
    NoteDetailsComponent.prototype.returnNote = function () {
        if (this.data.typeDialog === 'add-new-note') {
            if (this.noteType === 'text') {
                this.newNote = {
                    groupId: this.data.groupId,
                    title: this.model.title,
                    type: __WEBPACK_IMPORTED_MODULE_3__api_server_models__["a" /* NoteType */].TEXT,
                    content: this.model.noteContent
                };
            }
            else {
                this.newNote = {
                    groupId: this.data.groupId,
                    title: this.model.title,
                    type: __WEBPACK_IMPORTED_MODULE_3__api_server_models__["a" /* NoteType */].TODO,
                    todoList: this.todoList
                };
            }
            return this.newNote;
        }
        else {
            if (this.note.type === __WEBPACK_IMPORTED_MODULE_3__api_server_models__["a" /* NoteType */].TODO) {
                this.note.todoList = this.todoList;
            }
            return this.note;
        }
    };
    NoteDetailsComponent.prototype.getTodoId = function () {
        if (this.todoList.length) {
            return Math.max.apply(Math, this.todoList.map(function (item) {
                return item._id;
            })) + 1;
        }
        else {
            return 1;
        }
    };
    NoteDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-note-details',
            template: __webpack_require__("./src/app/note-details/note-details.component.html"),
            styles: [__webpack_require__("./src/app/note-details/note-details.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], NoteDetailsComponent);
    return NoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/note-details/note.remove.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Remove note: {{data.noteTitle}}<br/>of group: {{data.groupName}} <br/>Are you sure?</h3>\r\n<div mat-dialog-actions style=\"float: right;\">\r\n  <button tabindex=\"2\" mat-raised-button color=\"primary\" (click)=\"onCancel()\">Cancel</button>\r\n  <button tabindex=\"3\" mat-raised-button style=\"background-color: red; color: white;\" [mat-dialog-close]=\"data\">Remove</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/note-details/note.remove.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteRemoveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NoteRemoveComponent = (function () {
    function NoteRemoveComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NoteRemoveComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    NoteRemoveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-note-remove',
            template: __webpack_require__("./src/app/note-details/note.remove.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], NoteRemoveComponent);
    return NoteRemoveComponent;
}());



/***/ }),

/***/ "./src/app/note-group/note-group.add.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Add new notes group</h3>\r\n<div mat-dialog-content>\r\n  <mat-form-field style=\"width:100%;\">\r\n    <input matInput tabindex=\"1\" cdkFocusInitial style=\"width:100%;\" required placeholder=\"Group name\" [(ngModel)]=\"groupName\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions style=\"float: right;\">\r\n  <button tabindex=\"2\" mat-raised-button color=\"warn\" (click)=\"onCancel()\">Cancel</button>\r\n  <button tabindex=\"3\" mat-raised-button style=\"background-color: #33691E; color: white;\" [mat-dialog-close]=\"groupName\">Add</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/note-group/note-group.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteGroupAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NoteGroupAddComponent = (function () {
    function NoteGroupAddComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NoteGroupAddComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    NoteGroupAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-note-group-add',
            template: __webpack_require__("./src/app/note-group/note-group.add.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], NoteGroupAddComponent);
    return NoteGroupAddComponent;
}());



/***/ }),

/***/ "./src/app/note-group/note-group.invite-member.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Invite members to join the note group.</h3>\r\n<p>Members can edit every notes in this note group.</p>\r\n<div mat-dialog-content>\r\n  <mat-form-field style=\"width:100%;\">\r\n    <input matInput tabindex=\"1\" style=\"width:100%;\" required placeholder=\"The member's email\"\r\n           [(ngModel)]=\"memberEmail\"\r\n           (keyup)=\"findMemberEmail()\" cdkFocusInitial>\r\n  </mat-form-field>\r\n  <div style=\"line-height: 40px; height: 40px\">\r\n    <p [@fadeInOut]=\"state\" *ngIf=\"showError\" style=\"color: red;\">Not found! <i class=\"fa fa-exclamation-circle\"\r\n                                                                                aria-hidden=\"true\"></i></p>\r\n    <p [@fadeInOut]=\"state\" *ngIf=\"memberName\">{{memberName}} <i class=\"fa fa-check-circle\" aria-hidden=\"true\"\r\n                                                                 style=\"color: green;\"></i></p>\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions style=\"float: right;\">\r\n  <button tabindex=\"2\" mat-raised-button color=\"warn\" (click)=\"onCancel()\">Cancel</button>\r\n  <button tabindex=\"3\" mat-raised-button [disabled]=\"!memberId\" class=\"add-button\" [mat-dialog-close]=\"memberId\">Add\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/note-group/note-group.invite-member.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-button {\n  background-color: #33691E;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/note-group/note-group.invite-member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteGroupInviteMemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_meteor_rxjs__ = __webpack_require__("./node_modules/meteor-rxjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NoteGroupInviteMemberComponent = (function () {
    function NoteGroupInviteMemberComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.memberEmail = '';
        this.showError = false;
    }
    NoteGroupInviteMemberComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    NoteGroupInviteMemberComponent.prototype.findMemberEmail = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_meteor_rxjs__["a" /* MeteorObservable */].call('findMemberEmail', this.memberEmail).subscribe(function (response) {
            if (response) {
                var user = response;
                _this.memberName = user.profile.firstName + ' ' + user.profile.lastName;
                _this.memberId = user._id;
                _this.showError = false;
            }
            else {
                _this.showError = true;
                _this.memberName = '';
                _this.memberId = '';
            }
        });
    };
    NoteGroupInviteMemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-note-group-invite',
            template: __webpack_require__("./src/app/note-group/note-group.invite-member.component.html"),
            styles: [__webpack_require__("./src/app/note-group/note-group.invite-member.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(400, Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(10px)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                        ]))
                    ])
                ])
            ]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], NoteGroupInviteMemberComponent);
    return NoteGroupInviteMemberComponent;
}());



/***/ }),

/***/ "./src/app/note-group/note-group.remove.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Are you sure remove note group:</h3>\r\n<div mat-dialog-content>\r\n  <h4 style=\"width: 100%; text-align: center;\">{{data.notesGroup.name}}</h4>\r\n</div>\r\n<div mat-dialog-actions style=\"float: right;\">\r\n  <button tabindex=\"2\" mat-raised-button color=\"primary\" (click)=\"onCancel()\">Cancel</button>\r\n  <button tabindex=\"3\" mat-raised-button style=\"background-color: red; color: white;\" [mat-dialog-close]=\"data.notesGroup._id\">Remove</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/note-group/note-group.remove.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteGroupRemoveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NoteGroupRemoveComponent = (function () {
    function NoteGroupRemoveComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NoteGroupRemoveComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    NoteGroupRemoveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-note-group-remove',
            template: __webpack_require__("./src/app/note-group/note-group.remove.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], NoteGroupRemoveComponent);
    return NoteGroupRemoveComponent;
}());



/***/ }),

/***/ "./src/app/notes-manager/notes-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid mdl-grid--no-spacing content-notes-manager\">\r\n  <!--Note Group list DIV-->\r\n  <div class=\"mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone note-group-layout\">\r\n    <!--menu of NoteGroup-->\r\n    <div class=\"head-menu-bar\" style=\"background-color: #E0E0E0;\">\r\n      <span class=\"padding-left-font-bold\">Group</span>\r\n      <div class=\"fill-remaining-space\"></div>\r\n      <button mat-icon-button (click)=\"openNoteGroupRemoveDialog()\">\r\n        <i class=\"fa fa-minus icon-btn-size-m\" aria-hidden=\"true\"></i>\r\n      </button>\r\n      <button mat-icon-button (click)=\"openNoteGroupAddDialog()\">\r\n        <i class=\"fa fa-plus icon-btn-size-m\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"note-group-list\">\r\n      <mat-selection-list aria-multiselectable=\"false\" color=\"primary\">\r\n        <mat-list-option *ngFor=\"let group of groupList | async\"\r\n                         (click)=\"loadNoteList(group)\"\r\n                         [selected]=\"checkGroup(group._id)\"\r\n                         [class.selectedGroup]=\"group===selectedGroup\">\r\n          {{group.name}}\r\n        </mat-list-option>\r\n      </mat-selection-list>\r\n    </div>\r\n\r\n  </div><!--End of NoteGroup list-->\r\n\r\n  <!--Notes list DIV-->\r\n  <div class=\"mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone notes-list-layout\"\r\n       *ngIf=\"selectedGroup\">\r\n    <div class=\"head-menu-bar\">\r\n      <span class=\"padding-left-font-bold\">{{selectedGroup.name}}</span>\r\n      <button mat-button [matMenuTriggerFor]=\"shareMenu\" style=\"font-size: 1em;\">\r\n        <span *ngIf=\"selectedGroup.memberIds.length>0\">Public ({{selectedGroup.memberIds.length}})</span>\r\n        <span *ngIf=\"selectedGroup.memberIds.length<=0\">Private</span>\r\n        <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\r\n      </button>\r\n      <mat-menu #shareMenu=\"matMenu\" [overlapTrigger]=\"false\">\r\n        <button mat-menu-item [disabled]=\"!isOwned(selectedGroup.ownerId)\" (click)=\"openInviteMemberDialog()\">\r\n          <span>Invite...</span>\r\n        </button>\r\n        <button mat-menu-item [disabled]=\"(!isOwned(selectedGroup.ownerId))||isEmptyMember()\"\r\n                (click)=\"setPrivateNoteGroup()\">\r\n          <span>Set private</span>\r\n        </button>\r\n        <button mat-menu-item\r\n                [disabled]=\"!isOwned(selectedGroup.ownerId)\"\r\n                *ngFor=\"let mem of members | async\"\r\n                (click)=\"openShareManagerRemoveDialog(mem)\">\r\n          <span>{{ mem.profile.firstName + ' ' + mem.profile.lastName }}</span>\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n\r\n    <!--New note Button-->\r\n    <div style=\"display: inline;\">\r\n      <button mat-raised-button (click)=\"openNoteDialog()\" class=\"btn-new-note\">New note <i\r\n        class=\"fa fa-pencil icon-btn-size-xm\" aria-hidden=\"true\"></i></button>\r\n    </div>\r\n\r\n    <!--List note-->\r\n    <div class=\"notes-list\">\r\n      <div class=\"note-card\" *ngFor=\"let note of notesList | async\">\r\n        <div class=\"note-card-title\">\r\n          <div>\r\n            <span>{{note.title}}</span><br/>\r\n            <span\r\n              style=\"font-size: 0.9em; color: gray; font-style: italic;\">{{ note.createdAt | date:\"dd/MM/yyyy\" }}</span>\r\n          </div>\r\n          <div class=\"fill-remaining-space\"></div>\r\n          <mat-spinner [@loadState]=\"state\" mode=\"indeterminate\" [diameter]=\"24\"\r\n                       style=\"margin-top: auto; margin-bottom: auto; opacity: 0;\"></mat-spinner>\r\n          <button mat-icon-button [matMenuTriggerFor]=\"itemMenu\" style=\"font-size: 1em;\">\r\n            <i class=\"fa fa-ellipsis-v\" style=\"font-size: 1.5em;\" aria-hidden=\"true\"></i>\r\n          </button>\r\n          <mat-menu #itemMenu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"setPositionForNote(note.groupId, note._id, true)\">\r\n              <span>Move to top</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"setPositionForNote(note.groupId, note._id, false)\">\r\n              <span>Move to bottom</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openNoteDialog(note)\">\r\n              <span>Edit</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openRemoveNoteDialog(note)\">\r\n              <span>Delete</span>\r\n            </button>\r\n          </mat-menu>\r\n        </div>\r\n        <div *ngIf=\"isTextNote(note.type)\" class=\"note-card-content\">\r\n          {{note.content}}\r\n        </div>\r\n        <div *ngIf=\"!isTextNote(note.type)\" class=\"note-card-content\">\r\n          <div *ngFor=\"let todo of note.todoList\">\r\n            <mat-checkbox color=\"primary\" [checked]=\"todo.checked\" [class.checked]=\"todo.checked\"\r\n                          (change)=\"todoItemChange(todo, note)\">\r\n              <span class=\"mat-checkbox-fix-text\">{{todo.content}}</span>\r\n            </mat-checkbox>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--End of Notes list-->\r\n  </div>\r\n\r\n<!--Search Note-->\r\n  <div class=\"mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone notes-list-layout\"\r\n       *ngIf=\"foundNotes\">\r\n    <!--List note-->\r\n    <div class=\"notes-list\">\r\n      <div class=\"note-card\" *ngFor=\"let note of foundNotes | async\">\r\n        <div class=\"note-card-title\">\r\n          <div>\r\n            <span>{{note.title}}</span><br/>\r\n            <span\r\n              style=\"font-size: 0.9em; color: gray; font-style: italic;\">{{ note.createdAt | date:\"dd/MM/yyyy\" }}</span>\r\n          </div>\r\n          <div class=\"fill-remaining-space\"></div>\r\n          <mat-spinner [@loadState]=\"state\" mode=\"indeterminate\" [diameter]=\"24\"\r\n                       style=\"margin-top: auto; margin-bottom: auto; opacity: 0;\"></mat-spinner>\r\n          <button mat-icon-button [matMenuTriggerFor]=\"itemMenu\" style=\"font-size: 1em;\">\r\n            <i class=\"fa fa-ellipsis-v\" style=\"font-size: 1.5em;\" aria-hidden=\"true\"></i>\r\n          </button>\r\n          <mat-menu #itemMenu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"setPositionForNote(note.groupId, note._id, true)\">\r\n              <span>Move to top</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"setPositionForNote(note.groupId, note._id, false)\">\r\n              <span>Move to bottom</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openNoteDialog(note)\">\r\n              <span>Edit</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openRemoveNoteDialog(note)\">\r\n              <span>Delete</span>\r\n            </button>\r\n          </mat-menu>\r\n        </div>\r\n        <div *ngIf=\"isTextNote(note.type)\" class=\"note-card-content\">\r\n          {{note.content}}\r\n        </div>\r\n        <div *ngIf=\"!isTextNote(note.type)\" class=\"note-card-content\">\r\n          <div *ngFor=\"let todo of note.todoList\">\r\n            <mat-checkbox color=\"primary\" [checked]=\"todo.checked\" [class.checked]=\"todo.checked\"\r\n                          (change)=\"todoItemChange(todo, note)\">\r\n              <span class=\"mat-checkbox-fix-text\">{{todo.content}}</span>\r\n            </mat-checkbox>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--End of Notes list-->\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/notes-manager/notes-manager.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-notes-manager {\n  width: 100%; }\n\n.content-notes-manager {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  height: 100%;\n  overflow: hidden; }\n\n.note-group-layout {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: white;\n  overflow-y: hidden;\n  border-right: 1px solid gray; }\n\n.note-group-list {\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: inherit; }\n\n.notes-list-layout {\n  overflow-y: auto; }\n\n.head-menu-bar {\n  width: 100%;\n  background-color: white;\n  line-height: 40px;\n  display: -webkit-inline-box;\n  vertical-align: middle; }\n\n.icon-btn-size-m {\n  color: black;\n  font-size: 1.2em; }\n\n.padding-left-font-bold {\n  padding-left: 5px;\n  font-weight: bold; }\n\n.btn-new-note {\n  background-color: #33691E;\n  color: white;\n  margin-top: 15px;\n  margin-left: 15px; }\n\n.note-card {\n  margin: 15px;\n  border-radius: 2px;\n  padding: 10px;\n  background-color: white; }\n\n.note-card-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 5px; }\n\n.note-card-content {\n  padding-left: 5px; }\n\n.selectedGroup {\n  background: #B3E5FC; }\n\n.mat-checkbox-layout {\n  display: block !important;\n  white-space: normal !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/notes-manager/notes-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__note_group_note_group_add_component__ = __webpack_require__("./src/app/note-group/note-group.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__note_group_note_group_remove_component__ = __webpack_require__("./src/app/note-group/note-group.remove.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_manager_share_manager_remove_component__ = __webpack_require__("./src/app/share-manager/share-manager.remove.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__note_details_note_details_component__ = __webpack_require__("./src/app/note-details/note-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_server_models__ = __webpack_require__("./api/server/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_server_collections__ = __webpack_require__("./api/server/collections/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_server_collections_groups__ = __webpack_require__("./api/server/collections/groups.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_meteor_rxjs__ = __webpack_require__("./node_modules/meteor-rxjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__note_details_note_remove_component__ = __webpack_require__("./src/app/note-details/note.remove.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__note_group_note_group_invite_member_component__ = __webpack_require__("./src/app/note-group/note-group.invite-member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_server_collections_users__ = __webpack_require__("./api/server/collections/users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__alert_alert_component__ = __webpack_require__("./src/app/_alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_service__ = __webpack_require__("./src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_child_interface__ = __webpack_require__("./src/app/common-child.interface.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var NotesManagerComponent = (function () {
    function NotesManagerComponent(dialog, searchService) {
        this.dialog = dialog;
        this.searchService = searchService;
        this.searchNote = this.searchNote.bind(this);
        Object(__WEBPACK_IMPORTED_MODULE_16__common_child_interface__["a" /* eventSubscriber */])(searchService.subscription, this.searchNote);
    }
    NotesManagerComponent.prototype.ngOnInit = function () {
        this.loadNoteGroup();
        var that = this;
        this.groupList.observeChanges({
            changed: function (id, fieldsChanged) {
                if (that.selectedGroup._id === id) {
                    that.selectedGroup = that.groupList._data.find(function (g) { return g._id === id; });
                    that.selectedGroup.memberIds = fieldsChanged.memberIds;
                    that.loadMember();
                }
            },
            removed: function (id) {
                if (that.selectedGroup._id === id) {
                    that.loadNoteList(that.selectedGroup);
                }
            }
        });
    };
    NotesManagerComponent.prototype.ngOnDestroy = function () {
        Object(__WEBPACK_IMPORTED_MODULE_16__common_child_interface__["a" /* eventSubscriber */])(this.searchService.subscription, this.searchNote, true);
    };
    NotesManagerComponent.prototype.loadNoteGroup = function () {
        this.groupList = __WEBPACK_IMPORTED_MODULE_8__api_server_collections_groups__["a" /* NoteGroups */].find({
            $or: [
                { ownerId: Meteor.userId() },
                { memberIds: Meteor.userId() }
            ]
        }, { sort: { createdAt: -1 } });
    };
    NotesManagerComponent.prototype.loadNoteList = function (group) {
        this.foundNotes = null;
        if (group === this.selectedGroup) {
            this.selectedGroup = null;
            this.notesList = null;
            this.members = [];
        }
        else {
            this.selectedGroup = group;
            this.notesList = __WEBPACK_IMPORTED_MODULE_7__api_server_collections__["a" /* Notes */].find({ groupId: group._id }, { sort: { createdAt: -1 } });
            this.loadMember();
            // console.log(this.notesList);
        }
    };
    NotesManagerComponent.prototype.loadMember = function () {
        this.members = __WEBPACK_IMPORTED_MODULE_13__api_server_collections_users__["a" /* Users */].find({ _id: { $in: this.selectedGroup.memberIds } });
    };
    // Dialog: Add Note Group
    NotesManagerComponent.prototype.openNoteGroupAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__note_group_note_group_add_component__["a" /* NoteGroupAddComponent */], {
            width: '60%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The Note NoteGroup Add dialog was closed');
            if (!result) {
                return;
            }
            _this.groupName = result;
            __WEBPACK_IMPORTED_MODULE_9_meteor_rxjs__["a" /* MeteorObservable */].call('addGroup', _this.groupName).zone()
                .subscribe(function () {
                _this.groupName = '';
            }, function (err) {
                _this.openAlert(err.reason);
            });
        });
    };
    // Dialog: Remove Group
    NotesManagerComponent.prototype.openNoteGroupRemoveDialog = function () {
        var _this = this;
        if (!this.selectedGroup) {
            this.openAlert('Please choice a note group!');
            return;
        }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__note_group_note_group_remove_component__["a" /* NoteGroupRemoveComponent */], {
            width: '60%',
            data: { notesGroup: this.selectedGroup }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The Note NoteGroup Remove dialog was closed');
            if (!result) {
                return;
            }
            __WEBPACK_IMPORTED_MODULE_9_meteor_rxjs__["a" /* MeteorObservable */].call('removeGroup', result).zone()
                .subscribe(function () {
                // Null selected group
                _this.loadNoteList(_this.selectedGroup);
                _this.selectedGroup = null;
            }, function (err) {
                _this.openAlert(err.reason);
            });
        });
    };
    // Dialog: Invite Member
    NotesManagerComponent.prototype.openInviteMemberDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__note_group_note_group_invite_member_component__["a" /* NoteGroupInviteMemberComponent */], {
            width: '60%',
            data: { groupName: this.selectedGroup.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The Invite Member dialog was closed');
            if (!result) {
                return;
            }
            _this.rememberSelectedGroupId = _this.selectedGroup._id;
            __WEBPACK_IMPORTED_MODULE_9_meteor_rxjs__["a" /* MeteorObservable */].call('addMember', _this.selectedGroup._id, result).zone()
                .subscribe(function () {
            }, function (err) {
                _this.openAlert(err.reason);
            });
        });
    };
    // Dialog: Remove a member can edit note from group
    NotesManagerComponent.prototype.openShareManagerRemoveDialog = function (member) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__share_manager_share_manager_remove_component__["a" /* ShareManagerRemoveComponent */], {
            width: '60%',
            data: {
                memberName: member.profile.firstName + ' ' + member.profile.lastName,
                memberId: member._id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The Share Manager Remove dialog was closed');
            if (!result) {
                return;
            }
            var memberId = result;
            __WEBPACK_IMPORTED_MODULE_9_meteor_rxjs__["a" /* MeteorObservable */].call('removeMember', _this.selectedGroup._id, memberId).zone()
                .subscribe(function () {
            }, function (err) {
                _this.openAlert(err.reason);
            });
        });
    };
    // Dialog: NEW NOTE, or Note Details to Edit
    NotesManagerComponent.prototype.openNoteDialog = function (note) {
        var _this = this;
        // note!=null => edit note
        if (note) {
            var noteGroup = __WEBPACK_IMPORTED_MODULE_8__api_server_collections_groups__["a" /* NoteGroups */].findOne({ _id: note.groupId });
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__note_details_note_details_component__["a" /* NoteDetailsComponent */], {
                width: '60%',
                data: { typeDialog: 'edit-note', note: note, groupName: noteGroup.name }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The Edit note dialog was closed');
                if (!result) {
                    return;
                }
                __WEBPACK_IMPORTED_MODULE_9_meteor_rxjs__["a" /* MeteorObservable */].call('updateNote', result).zone()
                    .subscribe(function () {
                }, function (err) {
                    _this.openAlert(err.reason);
                });
            });
        }
        else {
            // note==null => new note
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__note_details_note_details_component__["a" /* NoteDetailsComponent */], {
                width: '60%',
                data: { typeDialog: 'add-new-note', groupName: this.selectedGroup.name, groupId: this.selectedGroup._id }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The New note dialog was closed');
                if (!result) {
                    return;
                }
                _this.newNote = result;
                __WEBPACK_IMPORTED_MODULE_9_meteor_rxjs__["a" /* MeteorObservable */].call('addNote', _this.newNote).zone()
                    .subscribe(function () {
                }, function (err) {
                    _this.openAlert(err.reason);
                });
            });
        }
    };
    // Dialog: Remove note
    NotesManagerComponent.prototype.openRemoveNoteDialog = function (note) {
        var _this = this;
        var noteGroup = __WEBPACK_IMPORTED_MODULE_8__api_server_collections_groups__["a" /* NoteGroups */].findOne({ _id: note.groupId });
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__note_details_note_remove_component__["a" /* NoteRemoveComponent */], {
            width: '60%',
            data: { groupName: noteGroup.name, noteTitle: note.title, id: note._id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The Remove note dialog was closed');
            if (!result) {
                return;
            }
            __WEBPACK_IMPORTED_MODULE_9_meteor_rxjs__["a" /* MeteorObservable */].call('removeNote', result.id).zone()
                .subscribe(function () {
            }, function (err) {
                _this.openAlert(err.reason);
            });
        });
    };
    // update checked field of to-do item in mongoDb
    NotesManagerComponent.prototype.todoItemChange = function (todo, note) {
        var _this = this;
        todo.checked = !todo.checked;
        __WEBPACK_IMPORTED_MODULE_9_meteor_rxjs__["a" /* MeteorObservable */].call('updateCheckedTodoInNote', note._id, todo._id, todo.checked).zone()
            .subscribe(function () {
        }, function (err) {
            _this.openAlert(err.reason);
        });
    };
    NotesManagerComponent.prototype.isTextNote = function (type) {
        if (type === __WEBPACK_IMPORTED_MODULE_6__api_server_models__["a" /* NoteType */].TEXT) {
            return true;
        }
        return false;
    };
    // Open alert dialog
    NotesManagerComponent.prototype.openAlert = function (msg) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_14__alert_alert_component__["a" /* AlertComponent */], {
            data: { reason: msg, type: 'error' }
        });
    };
    NotesManagerComponent.prototype.setPositionForNote = function (groupId, noteId, moveTop) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_meteor_rxjs__["a" /* MeteorObservable */].call('setCreatedDate', groupId, noteId, moveTop).zone()
            .subscribe(function () {
        }, function (err) {
            _this.openAlert(err.reason);
        });
    };
    NotesManagerComponent.prototype.isOwned = function (ownerId) {
        return ownerId === Meteor.userId();
    };
    NotesManagerComponent.prototype.isEmptyMember = function () {
        if (this.selectedGroup.memberIds.length <= 0) {
            return true;
        }
        return false;
    };
    NotesManagerComponent.prototype.setPrivateNoteGroup = function () {
        var _this = this;
        this.rememberSelectedGroupId = this.selectedGroup._id;
        __WEBPACK_IMPORTED_MODULE_9_meteor_rxjs__["a" /* MeteorObservable */].call('setPrivateNoteGroup', this.selectedGroup._id).zone()
            .subscribe(function () {
            _this.selectedGroup = _this.groupList._data.find(function (g) { return g._id === _this.rememberSelectedGroupId; });
            _this.loadMember();
        }, function (err) {
            _this.openAlert(err.reason);
        });
    };
    NotesManagerComponent.prototype.checkGroup = function (id) {
        if (!this.selectedGroup) {
            return false;
        }
        if (id === this.selectedGroup._id) {
            return true;
        }
        return false;
    };
    NotesManagerComponent.prototype.searchNote = function (searchStr) {
        this.selectedGroup = null;
        var ownedAndSharedGroupIds = [];
        this.groupList._data.forEach(function (group) {
            ownedAndSharedGroupIds.push(group._id);
        });
        console.log(ownedAndSharedGroupIds);
        this.foundNotes = __WEBPACK_IMPORTED_MODULE_7__api_server_collections__["a" /* Notes */].find({
            $or: [
                { title: { '$regex': '.*' + searchStr + '.*', '$options': 'i' } },
                { content: { '$regex': '.*' + searchStr + '.*', '$options': 'i' } },
                { 'todoList.content': { '$regex': '.*' + searchStr + '.*', '$options': 'i' } }
            ],
            groupId: { $in: ownedAndSharedGroupIds }
        }, { sort: { createdAt: -1 } });
        console.log(this.foundNotes);
    };
    NotesManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notes-manager',
            template: __webpack_require__("./src/app/notes-manager/notes-manager.component.html"),
            styles: [__webpack_require__("./src/app/notes-manager/notes-manager.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["k" /* trigger */])('loadState', [
                    Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["j" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(0)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0.1 }),
                            Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_15__search_service__["a" /* SearchService */]])
    ], NotesManagerComponent);
    return NotesManagerComponent;
}());



/***/ }),

/***/ "./src/app/password/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate name=\"form\"\n      (ngSubmit)=\"changePass()\"\n      [formGroup]=\"fgChangePass\"\n      class=\"mdc-elevation--z5 change-pass-form\">\n\n  <h3 class=\"align-canter\">Change password</h3>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input matInput placeholder=\"Old password\" name=\"old-password\"\n           [type]=\"hide ? 'password':'text'\"\n           formControlName=\"oldPassword\" autofocus\n    />\n    <mat-icon\n      matSuffix (click)=\"hide = !hide\">{{hide?'visibility':'visibility_off'}}\n    </mat-icon>\n    <mat-error *ngIf=\"fgChangePass.get('password').hasError('required')\">\n      Passs is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input matInput placeholder=\"Password\" name=\"password\"\n           [type]=\"hide2 ? 'password':'text'\"\n           formControlName=\"password\"\n           [(ngModel)]=\"confPass\"\n    />\n    <mat-icon\n      matSuffix (click)=\"hide2 = !hide2\">{{hide2?'visibility':'visibility_off'}}\n    </mat-icon>\n    <mat-error *ngIf=\"fgChangePass.get('password').hasError('required')\">\n      Passs is <strong>required</strong>\n    </mat-error>\n    <mat-error *ngIf=\"fgChangePass.get('password').hasError('minlength')\">\n      The minimum number of characters is 8.\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input matInput placeholder=\"Confirm password\" name=\"confirm-password\"\n           [type]=\"hide3 ? 'password':'text'\"\n           formControlName=\"confirmPass\"\n           pattern=\"{{confPass}}\"\n    />\n    <mat-icon\n      matSuffix (click)=\"hide3 = !hide3\">{{hide3?'visibility':'visibility_off'}}\n    </mat-icon>\n    <mat-error *ngIf=\"fgChangePass.get('confirmPass').hasError('required')\">\n      Passs is <strong>required</strong>\n    </mat-error>\n    <mat-error *ngIf=\"fgChangePass.get('confirmPass').hasError('minlength')\">\n      The minimum number of characters is 8.\n    </mat-error>\n    <mat-error *ngIf=\"fgChangePass.get('confirmPass').hasError('pattern')&&!fgChangePass.get('confirmPass').hasError('minlength')\">\n      Confirm new password <strong>do not match</strong>\n    </mat-error>\n  </mat-form-field>\n\n  <span class=\"error\" [hidden]=\"error == ''\">{{error}}</span>\n  <div style=\"width: 100%; text-align: right;\">\n    <a mat-raised-button color=\"warn\" routerLink=\"/\">Cancel</a>\n    <button\n      class=\"edit-button\"\n      [disabled]=\"fgChangePass.get('oldPassword').invalid ||\n      fgChangePass.get('password').invalid ||\n      fgChangePass.get('confirmPass').invalid\"\n      type=\"submit\" mat-raised-button color=\"default\">\n      <b>Change</b>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/password/change-password/change-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-change-password {\n  width: 100%; }\n\n.change-pass-form {\n  width: auto;\n  min-width: 400px;\n  max-width: 300px;\n  height: auto;\n  border-radius: 3px;\n  background-color: white;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.align-canter {\n  margin: 0;\n  text-align: center; }\n\n.full-width {\n  width: auto;\n  min-width: 90%; }\n\n.edit-button {\n  background-color: #33691e;\n  color: white;\n  width: 50%; }\n  .edit-button:disabled {\n    background-color: #C5E1A5;\n    color: gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/password/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_meteor_accounts_base__ = __webpack_require__("meteor/accounts-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_meteor_accounts_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_meteor_accounts_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert_component__ = __webpack_require__("./src/app/_alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(fb, router, zone, dialog) {
        this.fb = fb;
        this.router = router;
        this.zone = zone;
        this.dialog = dialog;
        this.hide = true;
        this.hide2 = true;
        this.hide3 = true;
        this.error = '';
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.fgChangePass = this.fb.group({
            oldPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(8)]],
            confirmPass: [this.confPass, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.confPass)]]
        });
    };
    ChangePasswordComponent.prototype.changePass = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_meteor_accounts_base__["Accounts"].changePassword(this.fgChangePass.value.oldPassword, this.fgChangePass.value.confirmPass, function (err) {
            _this.zone.run(function () {
                if (err) {
                    _this.error = err.reason;
                    console.log(err);
                }
                else {
                    _this.router.navigate(['/']);
                    _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__alert_alert_component__["a" /* AlertComponent */], {
                        data: { reason: "Change password successful.", type: 'success' }
                    });
                }
            });
        });
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-password',
            template: __webpack_require__("./src/app/password/change-password/change-password.component.html"),
            styles: [__webpack_require__("./src/app/password/change-password/change-password.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/password/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate name=\"form\"\n      (ngSubmit)=\"onSubmit()\"\n      [formGroup]=\"fgForgotPass\"\n      class=\"mdc-elevation--z5 profile-form\">\n\n  <h3 class=\"align-canter\">Forgot password</h3>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input type=\"text\" matInput placeholder=\"Enter your email\" name=\"username\"\n           formControlName=\"username\" autofocus\n    />\n    <mat-error\n      *ngIf=\"fgForgotPass.get('username').hasError('email') && !fgForgotPass.get('username').hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"fgForgotPass.get('username').hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n    <mat-error\n      *ngIf=\"fgForgotPass.get('username').hasError('invalid-username') && !fgForgotPass.get('username').hasError('email')\">\n      Email is <strong>invalid</strong>\n    </mat-error>\n  </mat-form-field>\n  <div style=\"display: flex;\">\n    <div class=\"fill-remaining-space\"></div>\n    <mat-spinner [hidden]=\"hidenLoading\" mode=\"indeterminate\" [diameter]=\"24\"\n                 style=\"margin-top: auto; margin-bottom: auto;\"></mat-spinner>\n  </div>\n  <span class=\"error\" [hidden]=\"error == ''\">{{error}}</span>\n  <div style=\"width: 100%; text-align: right;\">\n    <a mat-raised-button color=\"warn\" routerLink=\"/\">Cancel</a>\n    <button\n      class=\"edit-button\"\n      [disabled]=\"fgForgotPass.get('username').invalid || disableBtn\"\n      type=\"submit\" mat-raised-button color=\"default\">\n      <b>Reset password</b>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/password/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-forgot-password {\n  width: 100%; }\n\n.profile-form {\n  width: auto;\n  min-width: 400px;\n  max-width: 300px;\n  height: auto;\n  border-radius: 3px;\n  background-color: white;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.align-canter {\n  margin: 0;\n  text-align: center; }\n\n.full-width {\n  width: auto;\n  min-width: 90%; }\n\n.edit-button {\n  background-color: #33691E;\n  color: white;\n  width: 50%; }\n  .edit-button:disabled {\n    background-color: #C5E1A5;\n    color: gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/password/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_meteor_rxjs__ = __webpack_require__("./node_modules/meteor-rxjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_alert_component__ = __webpack_require__("./src/app/_alert/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(fb, router, zone, dialog) {
        this.fb = fb;
        this.router = router;
        this.zone = zone;
        this.dialog = dialog;
        this.error = '';
        this.disableBtn = false;
        this.hidenLoading = true;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.fgForgotPass = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]]
        });
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.disableBtn = true;
        this.hidenLoading = false;
        __WEBPACK_IMPORTED_MODULE_3_meteor_rxjs__["a" /* MeteorObservable */].call('findMemberEmail', this.fgForgotPass.value.username).subscribe(function (response) {
            if (!response) {
                _this.error = 'Can not find your email!';
            }
            else {
                _this.error = '';
                Accounts.forgotPassword({ email: _this.fgForgotPass.value.username }, function (err) {
                    _this.zone.run(function () {
                        if (err) {
                            console.log(err);
                            _this.error = err.reasons.error.reason;
                        }
                        else {
                            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__alert_alert_component__["a" /* AlertComponent */], {
                                data: { reason: 'Please check your email to reset your password!', type: 'success' }
                            });
                            _this.router.navigate(['/']);
                        }
                    });
                });
            }
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__("./src/app/password/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("./src/app/password/forgot-password/forgot-password.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/password/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate name=\"form\"\n      (ngSubmit)=\"resetPassword()\"\n      [formGroup]=\"fgResetPass\"\n      class=\"mdc-elevation--z5 change-pass-form\">\n\n  <h3 class=\"align-canter\">Reset password</h3>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input matInput placeholder=\"Password\" name=\"newPassword\"\n           [type]=\"hide ? 'password':'text'\"\n           formControlName=\"newPassword\"\n           [(ngModel)]=\"confPass\" autofocus\n    />\n    <mat-icon\n      matSuffix (click)=\"hide = !hide\">{{hide?'visibility':'visibility_off'}}\n    </mat-icon>\n    <mat-error *ngIf=\"fgResetPass.get('newPassword').hasError('required')\">\n      Passs is <strong>required</strong>\n    </mat-error>\n    <mat-error *ngIf=\"fgResetPass.get('newPassword').hasError('minlength')\">\n      The minimum number of characters is 8.\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input matInput placeholder=\"Confirm password\" name=\"confirm-password\"\n           [type]=\"hide1 ? 'password':'text'\"\n           formControlName=\"confirmPass\"\n           pattern=\"{{confPass}}\"\n    />\n    <mat-icon\n      matSuffix (click)=\"hide1 = !hide1\">{{hide1?'visibility':'visibility_off'}}\n    </mat-icon>\n    <mat-error *ngIf=\"fgResetPass.get('confirmPass').hasError('required')\">\n      Passs is <strong>required</strong>\n    </mat-error>\n    <mat-error *ngIf=\"fgResetPass.get('confirmPass').hasError('minlength')\">\n      The minimum number of characters is 8.\n    </mat-error>\n    <mat-error\n      *ngIf=\"fgResetPass.get('confirmPass').hasError('pattern')&&!fgResetPass.get('confirmPass').hasError('minlength')\">\n      Confirm new password <strong>do not match</strong>\n    </mat-error>\n  </mat-form-field>\n\n  <span class=\"error\" [hidden]=\"error == ''\">{{error}}</span>\n  <div style=\"width: 100%; text-align: right;\">\n    <!--<a mat-raised-button color=\"warn\" routerLink=\"/\">Cancel</a>-->\n    <button\n      class=\"edit-button\"\n      [disabled]=\"fgResetPass.get('newPassword').invalid ||\n      fgResetPass.get('confirmPass').invalid\"\n      type=\"submit\" mat-raised-button color=\"default\">\n      <b>Change</b>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/password/reset-password/reset-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-reset-password {\n  width: 100%; }\n\n.change-pass-form {\n  width: auto;\n  min-width: 400px;\n  max-width: 300px;\n  height: auto;\n  border-radius: 3px;\n  background-color: white;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.align-canter {\n  margin: 0;\n  text-align: center; }\n\n.full-width {\n  width: auto;\n  min-width: 90%; }\n\n.edit-button {\n  background-color: #33691e;\n  color: white;\n  width: 50%; }\n  .edit-button:disabled {\n    background-color: #C5E1A5;\n    color: gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/password/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert_component__ = __webpack_require__("./src/app/_alert/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(fb, router, route, zone, dialog) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.zone = zone;
        this.dialog = dialog;
        this.hide = true;
        this.hide1 = true;
        this.error = '';
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.fgResetPass = this.fb.group({
            newPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(8)]],
            confirmPass: [this.confPass, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.confPass)]]
        });
        this.token = this.route.snapshot.paramMap.get('token');
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        Accounts.resetPassword(this.token, this.fgResetPass.value.newPassword, function (err) {
            _this.zone.run(function () {
                if (!err) {
                    _this.router.navigate(['/login']);
                    _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__alert_alert_component__["a" /* AlertComponent */], {
                        data: { reason: 'Reset password successful!', type: 'success' }
                    });
                }
                else {
                    _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__alert_alert_component__["a" /* AlertComponent */], {
                        data: { reason: err.reason, type: 'error' }
                    });
                }
            });
        });
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset-password',
            template: __webpack_require__("./src/app/password/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("./src/app/password/reset-password/reset-password.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate name=\"form\"\n      (ngSubmit)=\"editProfile()\"\n      [formGroup]=\"fgSignup\"\n      class=\"mdc-elevation--z5 profile-form\">\n\n  <h3 class=\"align-canter\">Your profile</h3>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input type=\"text\" matInput placeholder=\"Firstname\" name=\"firstname\"\n           formControlName=\"firstName\" [(ngModel)]=\"user.profile.firstName\" autofocus\n    />\n    <mat-error *ngIf=\"fgSignup.get('firstName').hasError('required')\">\n      Firstname is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input type=\"text\" matInput placeholder=\"Lastname\" name=\"lastname\"\n           formControlName=\"lastName\" [(ngModel)]=\"user.profile.lastName\">\n    <mat-error *ngIf=\"fgSignup.get('lastName').hasError('required')\">\n      Lastname is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n\n  <span class=\"error\" [hidden]=\"error == ''\">{{error}}</span>\n  <div style=\"width: 100%; text-align: right;\">\n    <a mat-raised-button color=\"warn\" routerLink=\"/\">Cancel</a>\n    <button\n      class=\"edit-button\"\n      [disabled]=\"\n      fgSignup.get('firstName').invalid ||\n      fgSignup.get('lastName').invalid\"\n      type=\"submit\" mat-raised-button color=\"default\">\n      <b>Edit</b>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-profile {\n  width: 100%; }\n\n.profile-form {\n  width: auto;\n  min-width: 400px;\n  max-width: 300px;\n  height: auto;\n  border-radius: 3px;\n  background-color: white;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.align-canter {\n  margin: 0;\n  text-align: center; }\n\n.full-width {\n  width: auto;\n  min-width: 90%; }\n\n.edit-button {\n  background-color: #33691E;\n  color: white;\n  width: 50%; }\n  .edit-button:disabled {\n    background-color: #C5E1A5;\n    color: gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_meteor_meteor__ = __webpack_require__("meteor/meteor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_meteor_meteor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_meteor_meteor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(fb, router, zone, app) {
        this.fb = fb;
        this.router = router;
        this.zone = zone;
        this.app = app;
        this.error = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.fgSignup = this.fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]]
        });
        this.user = __WEBPACK_IMPORTED_MODULE_3_meteor_meteor__["Meteor"].user();
    };
    ProfileComponent.prototype.editProfile = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_meteor_meteor__["Meteor"].users.update({ _id: __WEBPACK_IMPORTED_MODULE_3_meteor_meteor__["Meteor"].userId() }, {
            $set: {
                'profile.firstName': this.user.profile.firstName,
                'profile.lastName': this.user.profile.lastName
            }
        }, function (err) {
            _this.zone.run(function () {
                if (!err) {
                    _this.router.navigate(['/']);
                    _this.app.setUserToShow();
                }
            });
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = (function () {
    function SearchService() {
        this.subscription = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    SearchService.prototype.searchNote = function (searchStr) {
        this.subscription.next(searchStr);
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/share-manager/share-manager.remove.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Remove {{data.memberName}} from this note group. <br/>Are you sure?</h3>\r\n<div mat-dialog-actions style=\"float: right;\">\r\n  <button tabindex=\"2\" mat-raised-button color=\"primary\" (click)=\"onCancel()\">Cancel</button>\r\n  <button tabindex=\"3\" mat-raised-button style=\"background-color: red; color: white;\" [mat-dialog-close]=\"data.memberId\" cdkFocusInitial>Remove</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/share-manager/share-manager.remove.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareManagerRemoveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ShareManagerRemoveComponent = (function () {
    function ShareManagerRemoveComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ShareManagerRemoveComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    ShareManagerRemoveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-note-group-remove',
            template: __webpack_require__("./src/app/share-manager/share-manager.remove.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], ShareManagerRemoveComponent);
    return ShareManagerRemoveComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate name=\"form\"\n      (ngSubmit)=\"signup()\"\n      [formGroup]=\"fgSignup\"\n      class=\"mdc-elevation--z5 profile-form\">\n\n  <h3 class=\"align-canter\">Create new account</h3>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input type=\"text\" matInput placeholder=\"Firstname\" name=\"firstname\"\n           formControlName=\"firstName\"\n    />\n    <mat-error *ngIf=\"fgSignup.get('firstName').hasError('required')\">\n      Firstname is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input type=\"text\" matInput placeholder=\"Lastname\" name=\"lastname\"\n           formControlName=\"lastName\">\n    <mat-error *ngIf=\"fgSignup.get('lastName').hasError('required')\">\n      Lastname is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input type=\"text\" matInput placeholder=\"Email\" name=\"username\"\n           formControlName=\"username\"\n    />\n    <mat-error *ngIf=\"fgSignup.get('username').hasError('email') && !fgSignup.get('username').hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"fgSignup.get('username').hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n    <mat-error\n      *ngIf=\"fgSignup.get('username').hasError('invalid-username') && !fgSignup.get('username').hasError('email')\">\n      Email is <strong>invalid</strong>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input matInput placeholder=\"Password\" name=\"password\"\n           [type]=\"hide ? 'password':'text'\"\n           formControlName=\"password\"\n           [(ngModel)]=\"confPass\"\n    />\n    <mat-icon\n      matSuffix (click)=\"hide = !hide\">{{hide?'visibility':'visibility_off'}}\n    </mat-icon>\n    <mat-error *ngIf=\"fgSignup.get('password').hasError('required')\">\n      Passs is <strong>required</strong>\n    </mat-error>\n    <mat-error *ngIf=\"fgSignup.get('password').hasError('minlength')\">\n      The minimum number of characters is 8.\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width-signin\">\n    <input matInput placeholder=\"Confirm password\" name=\"confirm-password\"\n           [type]=\"hide2 ? 'password':'text'\"\n           formControlName=\"confirmPass\"\n           pattern=\"{{confPass}}\"\n    />\n    <mat-icon\n      matSuffix (click)=\"hide2 = !hide2\">{{hide2?'visibility':'visibility_off'}}\n    </mat-icon>\n    <mat-error *ngIf=\"fgSignup.get('confirmPass').hasError('required')\">\n      Passs is <strong>required</strong>\n    </mat-error>\n    <mat-error *ngIf=\"fgSignup.get('confirmPass').hasError('minlength')\">\n      The minimum number of characters is 8.\n    </mat-error>\n    <mat-error *ngIf=\"fgSignup.get('confirmPass').hasError('pattern')\">\n      Confirm new password <strong>do not match</strong>\n    </mat-error>\n  </mat-form-field>\n\n  <span class=\"error\" [hidden]=\"error == ''\">{{error}}</span>\n  <div style=\"width: 100%; text-align: right;\">\n\n    <button\n      class=\"edit-button\"\n      [disabled]=\"\n      fgSignup.get('firstName').invalid ||\n      fgSignup.get('lastName').invalid ||\n      fgSignup.get('username').invalid ||\n      fgSignup.get('password').invalid ||\n      fgSignup.get('confirmPass').invalid\"\n      type=\"submit\" mat-raised-button color=\"default\">\n      <b>Sign up</b>\n    </button>\n  </div>\n  <div style=\"width: 100%; text-align: right; margin-top: 10px;\">\n    <a routerLink=\"/login\">I have a account</a>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-signup {\n  width: 100%; }\n\n.profile-form {\n  width: auto;\n  min-width: 400px;\n  max-width: 300px;\n  height: auto;\n  border-radius: 3px;\n  background-color: white;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.align-canter {\n  margin: 0;\n  text-align: center; }\n\n.full-width {\n  width: auto;\n  min-width: 90%; }\n\n.edit-button {\n  background-color: #33691E;\n  color: white;\n  width: 50%; }\n  .edit-button:disabled {\n    background-color: #C5E1A5;\n    color: gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export forbiddenUsername */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_meteor_accounts_base__ = __webpack_require__("meteor/accounts-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_meteor_accounts_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_meteor_accounts_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Meteor } from 'meteor/meteor';
function forbiddenUsername(u) {
    var users = ['manager', 'admin', 'manager@gmail.com', 'admin@gmail.com'];
    if (users.includes(u.value)) {
        return { 'invalid-username': true };
    }
    return null;
}
var SignupComponent = (function () {
    function SignupComponent(fb, router, zone) {
        this.fb = fb;
        this.router = router;
        this.zone = zone;
        this.hide = true;
        this.hide2 = true;
        this.error = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.fgSignup = this.fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email, forbiddenUsername]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(8)]],
            confirmPass: [this.confPass, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern(this.confPass)]]
        });
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_meteor_accounts_base__["Accounts"].createUser({
            email: this.fgSignup.value.username,
            password: this.fgSignup.value.password,
            profile: {
                firstName: this.fgSignup.value.firstName,
                lastName: this.fgSignup.value.lastName
            }
        }, function (err) {
            if (err) {
                _this.zone.run(function () {
                    _this.error = err.reason;
                    console.log(err);
                });
            }
            else {
                _this.zone.run(function () {
                    _this.error = '';
                    console.log('Signup - ' + _this.fgSignup.value.username);
                    _this.router.navigate(['/login']);
                });
            }
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_meteor_client__ = __webpack_require__("./node_modules/meteor-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_meteor_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_meteor_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_meteor_rxjs__ = __webpack_require__("./node_modules/meteor-rxjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_meteor_meteor__ = __webpack_require__("meteor/meteor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_meteor_meteor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_meteor_meteor__);








__WEBPACK_IMPORTED_MODULE_7_meteor_meteor__["Meteor"].startup(function () {
    var subscription = __WEBPACK_IMPORTED_MODULE_6_meteor_rxjs__["a" /* MeteorObservable */].autorun().subscribe(function () {
        if (__WEBPACK_IMPORTED_MODULE_7_meteor_meteor__["Meteor"].loggingIn()) {
            return;
        }
        setTimeout(function () { return subscription.unsubscribe(); });
        if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_17" /* enableProdMode */])();
        }
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */])
            .catch(function (err) { return console.log(err); });
    });
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ "meteor/accounts-base":
/***/ (function(module, exports) {

module.exports = Package["accounts-base"];

/***/ }),

/***/ "meteor/meteor":
/***/ (function(module, exports) {

module.exports = Package["meteor"];

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map