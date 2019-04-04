# orders-solution 

## Tool
Angular 7 - Angular material <br/>
NodeJS version 10.x  <br/>
MongoDB 4.x <br/>
Docker <br/>

## Architecture for microservice

                  Orders UI
                     |                     
    (Rest API) Order Service <-----> Payment Service(Rest API) 
                     |                           |
                     |                           |
                 MongoDB                       MongoDB
## Structure:

    orders-solution
    ├── docker-compose.override.yml
    ├── docker-compose.yml
    ├── README.md
    ├── orders-service       
    │   ├── config
    |   ├── enum
    |   ├── logging
    |   ├── middlewares
    |   ├── orders-logs (auto generate by Winston)
    |   ├── routes
    |   ├── services
    |   ├───── orders
    |   ├──────── order.controller
    |   ├──────── order.controller.spec
    |   ├──────── order.model
    │   ├── Dockerfile
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── README.md
    │   └── orders-service
    │  
    ├── orders-solution-client  
    │   └── src
    |   ├───── app
    |   ├───────── order
    |   ├───────── payment
    |   ├───────── ui
    |   ├───────── shared
    |   ├───── assets
    |   ├───── environments
    |   ├───── index.html
    │   ├── Dockerfile
    │   ├── angular.json
    │   ├── tsconfig.json
    │   ├── tslint.json
    │   ├── package-lock.json
    │   └── package.json
    |
    ├── payments-service    
    │   ├── config
    |   ├── enum
    |   ├── logging
    |   ├── middlewares
    |   ├── payments-logs (auto generate by Winston)
    |   ├── routes
    |   ├── services
    |   ├───── payments
    |   ├──────── payment.controller
    |   ├──────── payment.model
    │   ├── Dockerfile
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── README.md
    │   └── payments-service
                     
## Description

First step please run "npm i" for install required package for the application.<br/>

-Orders Service ( port 4000): <br/>
    + get all orders <br/>
    + get order by id <br/>
    + add new order <br/>
    + update order <br/>
    + cancel order <br/>
    + delete order <br/>

-Payments Service: <br/>
    + get all payments <br/>
    + add new payment (handle state of order: update order to CONFIRM state) <br/>
    + delete payment <br/>
    
## Run

   Docker commands for running the app:  <br/>
    - docker-compose -f docker-compose.yml -f docker-compose.override.yml up --build -d <br/>
    - docker-compose up -d <br/>
            + order-web front end (port 4200)<br/>
            + order-api (port 4000) <br/>
            + payment-api (port 3000)  <br/>
## Scenario

Currently we have the general scenario:  <br/>
    0. Default screen is payment managements, there is menu for switching orders management and payments management. <br/>
    1. Create new order with order info (number,description,id) at create order screen. <br/>
    2. Order created saved to DB with CREATED state.<br/>
    3. Orders service will call to Payments service with the order information and the Payment service return to Order state is CONFIRMED.<br/>
    4. The app auto redirect to orders management screen.<br/>
    5. Orders service will call api update to order state is CONFIRMED.<br/>
    
## UPDATED:<br/>

  -Refactor the previous application follow micro service architecture <br/>
  -Config docker for build and deploy. <br/>
  -Using mocha, add unit test for order service <br/>
