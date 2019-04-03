var assert = require('assert');
var request = require("request");
var orderController = require('../orders/order.controller');

describe('OrderController', function () {
    describe('getById', function () {
        var url = "http://localhost:4000/123";

        it("returns status 200", function () {
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    assert(response.statusCode, 200);
                }
            });
        });
    });

    describe('cancel', function () {
        it('should return false if can not find order', function () {
            var request = {
                body:
                {
                    id: ''
                }
            };
            var order = orderController.cancel(request);
            assert(order.success, false);
        });
    });
});