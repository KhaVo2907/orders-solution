(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/add-user/add-user.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/add-user/add-user.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/add-user/add-user.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/add-user/add-user.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\" class=\"container-top\">\n  <div fxFlex=\"60%\">\n    <form [formGroup]=\"addValueForm\" (ngSubmit)=\"add()\">\n      <mat-card>\n        <mat-card-header>Add User</mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <!--firstName-->\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>firstName</mat-label>\n            <input matInput placeholder=\"firstName\" formControlName=\"firstName\">\n            <mat-icon matSuffix>person</mat-icon>\n          </mat-form-field>\n          <!--lastName-->\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>lastName</mat-label>\n            <input matInput placeholder=\"lastName\" formControlName=\"lastName\">\n            <mat-icon matSuffix>person</mat-icon>\n          </mat-form-field>\n          <!--email-->\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>email</mat-label>\n            <input matInput placeholder=\"email\" formControlName=\"email\">\n            <mat-icon matSuffix>email</mat-icon>\n          </mat-form-field>\n          <!--gender-->\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>gender</mat-label>\n            <input matInput placeholder=\"gender\" formControlName=\"gender\">\n            <mat-icon matSuffix>gender</mat-icon>\n          </mat-form-field>\n          <!--username-->\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>username</mat-label>\n            <input matInput placeholder=\"username\" formControlName=\"username\">\n            <mat-icon matSuffix>person</mat-icon>\n          </mat-form-field>\n          <!--password-->\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>password</mat-label>\n            <input matInput type=\"password\" formControlName=\"password\">\n            <mat-icon matSuffix>password</mat-icon>\n          </mat-form-field>\n          <!--avatar-->\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>avatar</mat-label>\n            <input matInput placeholder=\"avatar\" formControlName=\"avatar\">\n            <mat-icon matSuffix>person</mat-icon>\n          </mat-form-field>\n          <mat-card-actions fxLayout=\"column\">\n            <button mat-raised-button color=\"primary\" type=\"submit\">\n              Submit\n            </button>\n          </mat-card-actions>\n        </mat-card-content>\n      </mat-card>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/add-user/add-user.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/add-user/add-user.component.ts ***!
  \*****************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(userService, router, formBuilder) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.addValueForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.addValueForm = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            email: [''],
            gender: [''],
            username: [''],
            password: [''],
            avatar: ['']
        });
    };
    AddUserComponent.prototype.add = function () {
        var _this = this;
        var firstName = this.addValueForm.get('firstName').value;
        var lastName = this.addValueForm.get('lastName').value;
        var email = this.addValueForm.get('email').value;
        var gender = this.addValueForm.get('gender').value;
        var username = this.addValueForm.get('username').value;
        var password = this.addValueForm.get('password').value;
        var avatar = this.addValueForm.get('avatar').value;
        var newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            username: username,
            password: password,
            avatar: avatar,
            id: 1
        };
        this.userService.addUser(newUser)
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return _this.router.navigate(['/books']); });
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/user/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/user/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Card w/ Name, Dropdown for favorite, List w/ book names -->\n<div fxLayout=\"column\"\n     fxLayoutAlign=\"space-around start\">\n  <div fxLayout=\"row\">\n   <div fxFlex=\"50%\" fxFlexOffset=\"30%\">\n    <h2>User</h2>\n\n    <!-- Add to reading -->\n    <mat-form-field>\n      <mat-select placeholder=\"Favorite food\">\n        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n            {{food.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <!-- Add favorite -->\n    <mat-form-field>\n      <mat-select placeholder=\"Favorite food\">\n        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n            {{food.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-list>\n      <h4 mat-subheader>Reading List</h4>\n    <mat-list-item>\n      <mat-icon mat-list-icon>book</mat-icon>\n      <h4 mat-line>Title</h4>\n      <p mat-line class=\"top-spacer\">Author: </p>\n      <p mat-line class=\"top-spacer\">Year: </p>\n     </mat-list-item>\n    </mat-list>\n\n    </div>\n  </div>\n</div>\n\n\n<!-- Card w/ Name, Dropdown for favorite, Show reading list -->\n<!-- <div fxLayout=\"column\"\n     fxLayoutAlign=\"space-around start\">\n  <div fxLayout=\"row\">\n   <div fxFlex=\"50%\" fxFlexOffset=\"30%\">\n    <h2>{{user?.name}}</h2>\n\n    <form (ngSubmit)=\"saveBook(selectedBook)\">\n    <mat-form-field>\n        <mat-select placeholder=\"Add to Reading\" [(ngModel)]=\"selectedBook\" name=\"book\">\n          <mat-option *ngFor=\"let book of books\" [value]=\"book.id\">{{book.title}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div class=\"button-row\" style=\"margin-left: 10px;\">\n        <button mat-raised-button\n                color=\"primary\"\n                class=\"button-margin-btm\">Submit</button>\n      </div>\n    </form>\n\n    <form (ngSubmit)=\"saveFavorite(selectedFav)\">\n    <mat-form-field>\n      <mat-select placeholder=\"Favorite Book\" [(ngModel)]=\"selectedFav\" name=\"book\">\n        <mat-option *ngFor=\"let book of books\" [value]=\"book.title\">\n          {{book.title}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div class=\"button-row\" style=\"margin-left: 10px;\">\n      <button mat-raised-button\n              color=\"primary\"\n              class=\"button-margin-btm\">Submit</button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n\n<div fxLayout=\"row\"\n  fxLayoutAlign=\"space-around start\">\n  <div fxFlex=\"90%\">\n    <mat-list>\n      <h4 mat-subheader>Favorite</h4>\n    <mat-list-item>\n      <mat-icon mat-list-icon>book</mat-icon>\n      <h4 mat-line>{{favorite?.title}}</h4>\n     </mat-list-item>\n    </mat-list>\n  </div>\n</div>\n\n<div fxLayout=\"row\"\n  fxLayoutAlign=\"space-around start\">\n  <div fxFlex=\"90%\">\n    <mat-list>\n      <h4 mat-subheader>Reading List</h4>\n    <mat-list-item *ngFor=\"let reading of readingList\">\n      <mat-icon mat-list-icon>book</mat-icon>\n      <h4 mat-line>{{reading.title}}</h4>\n      <p mat-line class=\"top-spacer\">Author: {{reading.author}}</p>\n     </mat-list-item>\n    </mat-list>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _book_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../book/book.service */ "./src/app/book/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(userService, bookService, router, route) {
        this.userService = userService;
        this.bookService = bookService;
        this.router = router;
        this.route = route;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    UserEditComponent.prototype.ngOnInit = function () {
        // const param = +this.route.snapshot.paramMap.get('id');
        // if (param) {
        //   console.log(param);
        //   const id = param;
        //   this.getUser(id);
        // }
        // this.getBooks();
    };
    UserEditComponent.prototype.getUser = function (id) {
        var _this = this;
        this.userService.getUserDetails(id)
            .subscribe(function (results) {
            _this.user = results;
            _this.readingList = {}; // results.Reading;
            _this.favorite = {}; // results.Favorite;
        });
    };
    UserEditComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; });
    };
    UserEditComponent.prototype.saveBook = function (bookValue) {
        var _this = this;
        var ID = {
            bookId: bookValue,
            userId: this.user.id
        };
        console.log(ID);
        this.bookService.add(ID)
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () {
            _this.selectedBook = { id: -1 };
            _this.getUser(_this.user.id);
        });
    };
    UserEditComponent.prototype.saveFavorite = function (favValue) {
        var _this = this;
        var ID = {
            bookTitle: favValue,
            userId: this.user.id
        };
        console.log(ID);
        this.userService.saveUserFavorite(ID)
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () {
            _this.selectedFav = { id: -1 };
            _this.getUser(_this.user.id);
        });
    };
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/user/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/user/user-edit/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _book_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "./src/app/user/users/users.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/user/add-user/add-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        pathMatch: 'full',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
    }, {
        path: 'add-user',
        pathMatch: 'full',
        component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__["AddUserComponent"]
    }, {
        path: 'edit-user',
        // path: ':id',
        pathMatch: 'full',
        component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__["UserEditComponent"]
    }];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "./src/app/user/users/users.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/user/add-user/add-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"]
            ],
            declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.API = 'http://localhost:3000/users';
    }
    UserService.prototype.getUsers = function () {
        return this
            .http
            .get("" + this.API)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UserService.prototype.getUserDetails = function (id) {
        return this
            .http
            .get(this.API + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UserService.prototype.addUser = function (user) {
        return this
            .http
            .post("" + this.API, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UserService.prototype.saveUserFavorite = function (newFav) {
        return this
            .http
            .put(this.API + "/saveUserFav", newFav)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UserService.prototype.handleError = function (res) {
        console.error(res);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res.error || 'Server error');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/users/users.component.css":
/*!************************************************!*\
  !*** ./src/app/user/users/users.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-icon {\r\n  color: rgba(26, 111, 209, 0.54);\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/users/users.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/users/users.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\">\n  <div fxFlex=\"90%\">\n    <mat-list>\n      <h2 mat-subheader>Users</h2>\n      <mat-list-item *ngFor=\"let user of users\">\n        <mat-icon mat-list-icon>account_circle</mat-icon>\n        <h4 mat-line>{{user.username}}</h4>\n        <a mat-line [routerLink]=\"['/users', user._id]\" class=\"top-spacer\">edit</a>\n      </mat-list-item>\n    </mat-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/users/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.allUsers();
    };
    UsersComponent.prototype.allUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (res) { return _this.users = res.data; });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/user/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/user/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map