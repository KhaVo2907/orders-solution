# orders-solution
Orders Solution 

There are 2 micro service by Nodejs framework, using MongoDB, and Winston at middleware for logging error/debug/info to static file.
Using Angular 7 and Angular material for display UI. 
The main function of the app is orders and payments management.

-Orders Service ( port 4000):
    + get all orders
    + get order by id
    + add new order
    + update order
    + cancel order
    + delete order

-Payments Service ( port 3000 ):
    + get all payments
    + add new payment (handle state of order: update order to CONFIRM state)
    + delete payment

Currently we have the general scenario: 
    0. Default screen is payment managements, there is menu for switching orders management and payments management.
    1. Create new order with order info (number,description,id) at create order screen.
    2. Order created saved to DB with CREATED state.
    3. Orders service will call to Payments service with the order information and the Payment service return to Order state is CONFIRMED.
    4. The app auto redirect to orders management screen.
    5. Orders service will call api update to order state is CONFIRMED.
