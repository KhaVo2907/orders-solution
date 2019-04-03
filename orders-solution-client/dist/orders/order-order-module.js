(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./src/app/order/add-order/add-order.component.css":
/*!*********************************************************!*\
  !*** ./src/app/order/add-order/add-order.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/add-order/add-order.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order/add-order/add-order.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\" class=\"container-top\">\n  <div fxFlex=\"60%\">\n    <form [formGroup]=\"addValueForm\" (ngSubmit)=\"add()\">\n      <mat-card>\n        <mat-card-header>Create Order</mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>number</mat-label>\n            <input matInput placeholder=\"number\" formControlName=\"number\">\n            <mat-icon matSuffix>format_list_numbered_rtl</mat-icon>\n          </mat-form-field>\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>description</mat-label>\n            <input matInput placeholder=\"description\" formControlName=\"description\">\n            <mat-icon matSuffix>description</mat-icon>\n          </mat-form-field>\n          <mat-card-actions fxLayout=\"column\">\n            <button mat-raised-button color=\"primary\" type=\"submit\">\n              Submit\n            </button>\n          </mat-card-actions>\n        </mat-card-content>\n      </mat-card>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/order/add-order/add-order.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order/add-order/add-order.component.ts ***!
  \********************************************************/
/*! exports provided: AddOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderComponent", function() { return AddOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var src_app_payment_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/payment/payment.service */ "./src/app/payment/payment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddOrderComponent = /** @class */ (function () {
    function AddOrderComponent(orderService, paymentService, router, formBuilder) {
        this.orderService = orderService;
        this.paymentService = paymentService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.addValueForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
    }
    AddOrderComponent.prototype.ngOnInit = function () {
        this.addValueForm = this.formBuilder.group({
            number: [''],
            description: ['']
        });
    };
    AddOrderComponent.prototype.add = function () {
        var _this = this;
        var number = this.addValueForm.get('number').value;
        var description = this.addValueForm.get('description').value;
        var newOrder = {
            number: number,
            description: description,
            status: status,
            id: ''
        };
        this.orderService.addOrder(newOrder)
            .subscribe(function (data) {
            _this.processOrder(data);
        });
    };
    AddOrderComponent.prototype.processOrder = function (order) {
        var _this = this;
        var payment = {
            order: {
                id: order.data._id
            }
        };
        this.paymentService.add(payment).subscribe(function (data) {
            if (data.data && data.data.status === 'declined') {
                data.data.status = 'canceled';
            }
            else if (data.data && data.data.status === 'confirmed') {
                data.data.status = 'confirmed';
            }
            _this.orderService.updateOrder(data.data).subscribe(function (result) {
                _this.router.navigate(['/orders']);
            });
        });
    };
    AddOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-order',
            template: __webpack_require__(/*! ./add-order.component.html */ "./src/app/order/add-order/add-order.component.html"),
            styles: [__webpack_require__(/*! ./add-order.component.css */ "./src/app/order/add-order/add-order.component.css")]
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"], src_app_payment_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddOrderComponent);
    return AddOrderComponent;
}());



/***/ }),

/***/ "./src/app/order/order-edit/order-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order/order-edit/order-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/order-edit/order-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/order/order-edit/order-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Card w/ Name, Dropdown for favorite, List w/ book names -->\n<div fxLayout=\"column\"\n     fxLayoutAlign=\"space-around start\">\n  <div fxLayout=\"row\">\n   <div fxFlex=\"50%\" fxFlexOffset=\"30%\">\n    <h2>User</h2>\n\n    <!-- Add to reading -->\n    <mat-form-field>\n      <mat-select placeholder=\"Favorite food\">\n        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n            {{food.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <!-- Add favorite -->\n    <mat-form-field>\n      <mat-select placeholder=\"Favorite food\">\n        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n            {{food.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-list>\n      <h4 mat-subheader>Reading List</h4>\n    <mat-list-item>\n      <mat-icon mat-list-icon>book</mat-icon>\n      <h4 mat-line>Title</h4>\n      <p mat-line class=\"top-spacer\">Author: </p>\n      <p mat-line class=\"top-spacer\">Year: </p>\n     </mat-list-item>\n    </mat-list>\n\n    </div>\n  </div>\n</div>\n\n\n<!-- Card w/ Name, Dropdown for favorite, Show reading list -->\n<!-- <div fxLayout=\"column\"\n     fxLayoutAlign=\"space-around start\">\n  <div fxLayout=\"row\">\n   <div fxFlex=\"50%\" fxFlexOffset=\"30%\">\n    <h2>{{user?.name}}</h2>\n\n    <form (ngSubmit)=\"saveBook(selectedBook)\">\n    <mat-form-field>\n        <mat-select placeholder=\"Add to Reading\" [(ngModel)]=\"selectedBook\" name=\"book\">\n          <mat-option *ngFor=\"let book of books\" [value]=\"book.id\">{{book.title}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div class=\"button-row\" style=\"margin-left: 10px;\">\n        <button mat-raised-button\n                color=\"primary\"\n                class=\"button-margin-btm\">Submit</button>\n      </div>\n    </form>\n\n    <form (ngSubmit)=\"saveFavorite(selectedFav)\">\n    <mat-form-field>\n      <mat-select placeholder=\"Favorite Book\" [(ngModel)]=\"selectedFav\" name=\"book\">\n        <mat-option *ngFor=\"let book of books\" [value]=\"book.title\">\n          {{book.title}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div class=\"button-row\" style=\"margin-left: 10px;\">\n      <button mat-raised-button\n              color=\"primary\"\n              class=\"button-margin-btm\">Submit</button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n\n<div fxLayout=\"row\"\n  fxLayoutAlign=\"space-around start\">\n  <div fxFlex=\"90%\">\n    <mat-list>\n      <h4 mat-subheader>Favorite</h4>\n    <mat-list-item>\n      <mat-icon mat-list-icon>book</mat-icon>\n      <h4 mat-line>{{favorite?.title}}</h4>\n     </mat-list-item>\n    </mat-list>\n  </div>\n</div>\n\n<div fxLayout=\"row\"\n  fxLayoutAlign=\"space-around start\">\n  <div fxFlex=\"90%\">\n    <mat-list>\n      <h4 mat-subheader>Reading List</h4>\n    <mat-list-item *ngFor=\"let reading of readingList\">\n      <mat-icon mat-list-icon>book</mat-icon>\n      <h4 mat-line>{{reading.title}}</h4>\n      <p mat-line class=\"top-spacer\">Author: {{reading.author}}</p>\n     </mat-list-item>\n    </mat-list>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/order/order-edit/order-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order/order-edit/order-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEditComponent", function() { return OrderEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderEditComponent = /** @class */ (function () {
    function OrderEditComponent(orderService, router, route) {
        this.orderService = orderService;
        this.router = router;
        this.route = route;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    OrderEditComponent.prototype.ngOnInit = function () {
        // const param = +this.route.snapshot.paramMap.get('id');
        // if (param) {
        //   console.log(param);
        //   const id = param;
        //   this.getOrder(id);
        // }
        // this.getBooks();
    };
    OrderEditComponent.prototype.getOrder = function (id) {
        var _this = this;
        this.orderService.getOrderDetails(id)
            .subscribe(function (results) {
            _this.order = results;
        });
    };
    OrderEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-edit',
            template: __webpack_require__(/*! ./order-edit.component.html */ "./src/app/order/order-edit/order-edit.component.html"),
            styles: [__webpack_require__(/*! ./order-edit.component.css */ "./src/app/order/order-edit/order-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OrderEditComponent);
    return OrderEditComponent;
}());



/***/ }),

/***/ "./src/app/order/order-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/order/order-routing.module.ts ***!
  \***********************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/order/orders/orders.component.ts");
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-order/add-order.component */ "./src/app/order/add-order/add-order.component.ts");
/* harmony import */ var _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-edit/order-edit.component */ "./src/app/order/order-edit/order-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        pathMatch: 'full',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"]
    }, {
        path: 'add-order',
        pathMatch: 'full',
        component: _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_3__["AddOrderComponent"]
    }, {
        path: 'edit-order',
        // path: ':id',
        pathMatch: 'full',
        component: _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_4__["OrderEditComponent"]
    }];
var OrderRoutingModule = /** @class */ (function () {
    function OrderRoutingModule() {
    }
    OrderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrderRoutingModule);
    return OrderRoutingModule;
}());



/***/ }),

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/order/orders/orders.component.ts");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/order/order-routing.module.ts");
/* harmony import */ var _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-edit/order-edit.component */ "./src/app/order/order-edit/order-edit.component.ts");
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-order/add-order.component */ "./src/app/order/add-order/add-order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _order_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderRoutingModule"]
            ],
            declarations: [_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"], _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_6__["OrderEditComponent"], _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_7__["AddOrderComponent"]]
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ }),

/***/ "./src/app/order/order.service.ts":
/*!****************************************!*\
  !*** ./src/app/order/order.service.ts ***!
  \****************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
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




var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.API = 'http://localhost:4000/orders';
    }
    OrderService.prototype.getOrders = function () {
        return this
            .http
            .get("" + this.API)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    OrderService.prototype.getOrderDetails = function (id) {
        return this
            .http
            .get(this.API + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    OrderService.prototype.addOrder = function (order) {
        return this
            .http
            .post("" + this.API, order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    OrderService.prototype.updateOrder = function (order) {
        return this
            .http
            .put(this.API + "/update/" + order.id, order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    OrderService.prototype.handleError = function (res) {
        console.error(res);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res.error || 'Server error');
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/order/orders/orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/order/orders/orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-icon {\r\n  color: rgba(26, 111, 209, 0.54);\r\n}\r\n"

/***/ }),

/***/ "./src/app/order/orders/orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/order/orders/orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\">\n  <div fxFlex=\"90%\">\n    <mat-list>\n      <h2 mat-subheader>Orders</h2>\n      <mat-list-item *ngFor=\"let order of orders\">\n        <h4 mat-line>{{order._id}}</h4>\n        <h4 mat-line>Number: {{order.number}}</h4>\n        <h4 mat-line>Description: {{order.description}}</h4>\n        <h4 mat-line>Status: {{order.status}}</h4>\n      </mat-list-item>\n    </mat-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/order/orders/orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/order/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../order.service */ "./src/app/order/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(orderService) {
        this.orderService = orderService;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.allOrders();
    };
    OrdersComponent.prototype.allOrders = function () {
        var _this = this;
        this.orderService.getOrders()
            .subscribe(function (res) { return _this.orders = res.data; });
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/order/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/order/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=order-order-module.js.map