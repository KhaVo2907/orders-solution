const orderList = require('../orders/order.model');
const orderEnum = require('../../enum/order');
const request = require('request');
const config = require('../../config/config');

exports.get = function (req, res) {
    var pageNo = parseInt(req.query.pageNo);
    var pageSize = parseInt(req.query.pageSize);

    orderList.get(pageNo, pageSize, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all orders. Error: ${err}` });
        }
        else {
            if (data) {
                var totalPages = Math.ceil(data.length / pageSize);
            }
            res.write(JSON.stringify({ success: true, data: data, totalPages: totalPages }, null, 2));
            res.end();
        }
    });
};

exports.post = function (req, res) {
    let newOrder = new orderList({
        number: req.body.number,
        description: req.body.description,
        status: orderEnum.CREATED
    });

    orderList.add(newOrder, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Failed to create a new Order. Error: ${err}` });
        } else {
            const orderJson = {
                order: {
                    id: data._id
                }
            };
            request.post({
                headers: { 'content-type': 'application/json' },
                url: config.apiPayment,
                body: JSON.stringify(orderJson)
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var resData = JSON.parse(response.body);
                    res.write(JSON.stringify({ success: true, data: resData }, null, 2));
                    res.end();
                    if (resData.data.status == 'confirmed') {
                        setTimeout(() => {
                            data.status = 'delivered';
                            orderList.update(data);
                        }, 3000);
                    }
                }
            });
        }
    })
}

exports.delete = function (req, res, next) {
    let id = req.params.id;
    orderList.delete(id, (err, list) => {
        if (err) {
            res.json({ success: false, message: `Failed to delete the list. Error: ${err}` });
        }
        else if (list) {
            res.json({ success: true, message: "Deleted successfully" });
        }
        else
            res.json({ success: false });
    })
};

exports.cancel = function (req, res) {
    orderList.getById(req.body.id, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Can't find the Order. Error: ${err}` });
        } else {
            if (data) {
                data.status = orderEnum.CANCELED;
                orderList.update(data);
            }
            res.json({ success: true, message: "Cancel Order successfully." });
        }
    })
}

exports.update = function (req, res) {
    orderList.getById(req.body.id, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Can't find the Order. Error: ${err}` });
        } else {
            if (data) {
                data.status = req.body.status;
                orderList.update(data);
            }
            res.json({ success: true, message: "Update Order successfully." });
        }
    })
}

exports.getBy = function (req, res) {
    orderList.getById(req.params.id, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Failed to get Order. Error: ${err}` });
        }
        else {
            res.write(JSON.stringify({ success: true, data: data.status }, null, 2));
            res.end();
        }
    });
};