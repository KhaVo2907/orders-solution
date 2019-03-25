(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-book-module"],{

/***/ "./src/app/book/add-book/add-book.component.css":
/*!******************************************************!*\
  !*** ./src/app/book/add-book/add-book.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/add-book/add-book.component.html":
/*!*******************************************************!*\
  !*** ./src/app/book/add-book/add-book.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\" class=\"container-top\">\n  <div fxFlex=\"60%\">\n    <form [formGroup]=\"addValueForm\" (ngSubmit)=\"addBook()\">\n      <mat-card>\n        <mat-card-header>Add Book</mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <!--title-->\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Title</mat-label>\n            <input matInput placeholder=\"Title\" formControlName=\"title\">\n            <mat-icon matSuffix>book</mat-icon>\n          </mat-form-field>\n          <!--author-->\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Author</mat-label>\n            <input matInput placeholder=\"Author\" formControlName=\"author\">\n            <mat-icon matSuffix>person</mat-icon>\n          </mat-form-field>\n          <!--year-->\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Year</mat-label>\n            <input matInput placeholder=\"Year\" formControlName=\"year\">\n            <mat-icon matSuffix>date_range</mat-icon>\n          </mat-form-field>\n          <mat-card-actions fxLayout=\"column\">\n            <button mat-raised-button color=\"primary\" type=\"submit\">\n              Submit\n            </button>\n          </mat-card-actions>\n        </mat-card-content>\n      </mat-card>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book/add-book/add-book.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/book/add-book/add-book.component.ts ***!
  \*****************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book.service */ "./src/app/book/book.service.ts");
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




var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(bookService, router, formBuilder) {
        this.bookService = bookService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.addValueForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
    }
    AddBookComponent.prototype.ngOnInit = function () {
        this.addValueForm = this.formBuilder.group({
            title: [''],
            author: [''],
            year: [''],
        });
    };
    AddBookComponent.prototype.addBook = function () {
        var _this = this;
        var title = this.addValueForm.get('title').value;
        var author = this.addValueForm.get('author').value;
        var year = this.addValueForm.get('year').value;
        var newBook = {
            title: title,
            author: author,
            year: year,
        };
        this.bookService.add(newBook)
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return _this.router.navigate(['/books']); });
    };
    AddBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/book/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/book/add-book/add-book.component.css")]
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/book/book-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/book/book-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookRoutingModule", function() { return BookRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books/books.component */ "./src/app/book/books/books.component.ts");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/book/add-book/add-book.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        pathMatch: 'full',
        component: _books_books_component__WEBPACK_IMPORTED_MODULE_2__["BooksComponent"]
    }, {
        path: 'add-book',
        pathMatch: 'full',
        component: _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_3__["AddBookComponent"]
    }];
var BookRoutingModule = /** @class */ (function () {
    function BookRoutingModule() {
    }
    BookRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BookRoutingModule);
    return BookRoutingModule;
}());



/***/ }),

/***/ "./src/app/book/book.module.ts":
/*!*************************************!*\
  !*** ./src/app/book/book.module.ts ***!
  \*************************************/
/*! exports provided: BookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModule", function() { return BookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _book_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-routing.module */ "./src/app/book/book-routing.module.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books/books.component */ "./src/app/book/books/books.component.ts");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/book/add-book/add-book.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BookModule = /** @class */ (function () {
    function BookModule() {
    }
    BookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _book_routing_module__WEBPACK_IMPORTED_MODULE_2__["BookRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            declarations: [_books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"], _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_6__["AddBookComponent"]]
        })
    ], BookModule);
    return BookModule;
}());



/***/ }),

/***/ "./src/app/book/books/books.component.css":
/*!************************************************!*\
  !*** ./src/app/book/books/books.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/books/books.component.html":
/*!*************************************************!*\
  !*** ./src/app/book/books/books.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\">\n  <div fxFlex=\"90%\">\n    <mat-list>\n      <h4 mat-subheader>Books</h4>\n      <mat-list-item *ngFor=\"let book of books\">\n        <mat-icon mat-list-icon>book</mat-icon>\n        <h4 mat-line>{{book.title}}</h4>\n        <h4 mat-line>Author: {{book.author}}</h4>\n        <h4 mat-line>Year: {{book.year}}</h4>\n      </mat-list-item>\n    </mat-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book/books/books.component.ts":
/*!***********************************************!*\
  !*** ./src/app/book/books/books.component.ts ***!
  \***********************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book.service */ "./src/app/book/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = /** @class */ (function () {
    function BooksComponent(bookService) {
        this.bookService = bookService;
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.allBooks();
    };
    BooksComponent.prototype.allBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (res) { return _this.books = res.data; });
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/book/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/book/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ })

}]);
//# sourceMappingURL=book-book-module.js.map