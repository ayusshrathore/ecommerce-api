# eCommerce-API

Introducing a full-fledged eCommerce API solution, built using Node.js, is a one-stop for all your eCommerce needs. With a user-friendly interface and seamless integration, this API is designed to help you effortlessly manage your online store. From product management to payment processing, this API provides an all-in-one solution that will take your eCommerce business to the next level.

<hr>

## Table of Contents

-   [Features](#features)
-   [Getting Started](#getting-started)
-   [API-Documentation](#api-documentation)
-   [Models Schema](#models-schema)
-   [License](#license)
-   [Contributing](#contributing)

<hr>

## Features

> -   User Authentication
> -   User Management
> -   Product Management
> -   Cart Management
> -   Order Management
> -   Payment Gateway Integration

<hr>

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/en/download/)
-   [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1.  Clone the repo

```sh
git clone https://github.com/ayusshrathore/ecommerce-api.git
```

2.  Install NPM packages

```sh
npm install
```

or

```sh
yarn install
```

3.  [Create a .env file in the root directory and add the following](./sample.env)

```sh
PORT=8080
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret
```

4.  Run the server

```sh
npm start
```

<hr>

## API Documentation

###

| End-point                                                       | Method                  | Description                                       |
| --------------------------------------------------------------- | ----------------------- | ------------------------------------------------- |
| [/api/v1/user/login](#end-point-user-login)                     | [POST](#method-post)    | [User login](#end-point-user-login)               |
| [/api/v1/user/register](#end-point-user-register)               | [POST](#method-post-1)  | [User register](#end-point-user-login)            |
| [/api/v1/user/update](#end-point-user-update)                   | [POST](#method-post-2)  | [User update](#end-point-user-update)             |
| [/api/v1/user/update/address](#end-point-user-address-update)   | [POST](#method-post-3)  | [User address update]()                           |
| [/api/v1/user/delete](#end-point-user-delete)                   | [POST](#method-post-4)  | [User delete](#end-point-user-delete)             |
| [/api/v1/user/get](#end-point-user-get)                         | [GET](#method-get)      | [User get](#end-point-user-get)                   |
| [/api/v1/blog/add](#end-point-blog-add)                         | [POST](#method-post-5)  | [Blog add](#end-point-blog-add)                   |
| [/api/v1/blog/add](#end-point-blog-update)                      | [POST](#method-post-6)  | [Blog update](#end-point-blog-update)             |
| [/api/v1/product/add](#end-point-product-add)                   | [POST](#method-post-7)  | [Product add](#end-point-product-add)             |
| [api/v1/product/delete?\_id=some_id](#end-point-product-delete) | [POST](#method-post-8)  | [Product delete](#end-point-product-delete)       |
| [/api/v1/product/get](#end-point-product-get)                   | [GET](#method-get-1)    | [Product get](#end-point-product-get)             |
| [/api/v1/mail/send](#end-point-mail-send)                       | [POST](#method-post-9)  | [Mail send](#end-point-mail-send)                 |
| [/api/v1/customer/add](#end-point-customer-add)                 | [POST](#method-post-10) | [Customer add](#end-point-customer-add)           |
| [/api/v1/admin/register](#end-point-admin-register)             | [POST](#method-post-11) | [Admin register](/api/v1/admin/register)          |
| [/api/v1/user/get](#end-point-user-get-by-email)                | [POST](#method-post-12) | [User get by email](#end-point-user-get-by-email) |
| [/api/v1/cart/add](#end-point-cart-add)                         | [POST](#method-post-13) | [Cart add](#end-point-cart-add)                   |
| [/api/v1/cart/update](#end-point-cart-update)                   | [POST](#method-post-14) | [Cart update](#end-point-cart-update)             |
| [/api/v1/cart/delete](#end-point-cart-remove)                   | [POST](#method-post-15) | [Cart delete](#end-point-cart-remove)             |
| [/api/v1/cart/getAll](#end-point-cart-get)                      | [GET](#method-get-2)    | [Cart get all](#end-point-cart-get)               |
| [/api/v1/cart/remove](#end-point-cart-remove-1)                 | [POST](#method-post-16) | [Cart remove](#end-point-cart-remove-1)           |
| [/api/v1/payment/verify](#end-point-payment-verify)             | [POST](#method-post-17) | [Payment verify](#end-point-payment-verify)       |
| [/api/v1/payment/create](#end-point-payment-create)             | [POST](#method-post-18) | [Payment create](#end-point-payment-create)       |
| [/api/v1/order/create](#end-point-order-create)                 | [POST](#method-post-19) | [Order create](#end-point-order-create)           |
| [/api/v1/order/get](#/api/v1/order/get)                         | [POST](#method-post-20) | [Order get](#/api/v1/order/get)                   |
| [/api/v1/order/cancel](#end-point-order-cancel)                 | [POST](#method-post-21) | [Order delete](#end-point-order-cancel)           |
| [/api/v1/auth](#end-point-check-auth)                           | [POST](#method-post-22) | [Check auth](#end-point-check-auth)               |

---

### End-point: User login

##### Method: POST

> ```
> http://localhost:8080/api/v1/user/login
> ```

##### Body (**raw**)

```json
{
	"email": "heyfreaker@gmail.com",
	"password": "123456"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: User register

##### Method: POST

> ```
> http://localhost:8080/api/v1/user/register
> ```

##### Body (**raw**)

```json
{
	"firstName": "Ayush",
	"lastName": "Rathore",
	"email": "heyfreaker@gmail.com",
	"phone": "123456789",
	"password": "123456"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: User update

##### Method: POST

> ```
> http://localhost:8080/api/v1/user/update
> ```

##### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjU1ODA4NDcyLCJleHAiOjE2NTU4OTQ4NzJ9.t714_A7DccbFEyyf7DcqK7HU6RQm4l0RKSlDcq_73GU|


##### Body (**raw**)

```json
{
	"firstName": "Ayush",
	"lastName": "Rathore",
	"email": "heyfreaker@gmail.com",
	"phone": "987654321"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: User address update

##### Method: POST

> ```
> http://localhost:8080/api/v1/user/update/address
> ```

##### Headers


|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjU1ODA4NDcyLCJleHAiOjE2NTU4OTQ4NzJ9.t714_A7DccbFEyyf7DcqK7HU6RQm4l0RKSlDcq_73GU|


#### Body (**raw**)

```json
{
	"email": "heyfreaker@gmail.com",
	"house": "007",
	"street": "Durga Colony",
	"city": "Jodhpur",
	"state": "Rajasthan",
	"pincode": "342012"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: User delete

#### Method: POST

> ```
> http://localhost:8080/api/v1/user/delete
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA3NDJjMjNjOWU0ZDFjNTc2ZGQ3ZiIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzY0NTkxMiwiZXhwIjoxNjUzNzMyMzEyfQ.gNSzwrFa6SeXXjLksV3wmoFKsf8qZxnqiZeOzGkllog|

#### Query Params

| Param        | value |
| ------------ | ----- |
| access-token |       |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: User get

#### Method: GET

> ```
> http://localhost:8080/api/v1/user/get
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjU1ODA4MTcyLCJleHAiOjE2NTU4OTQ1NzJ9.rFtOLgFVMUmEkrKRQZT7YQMphVyKW2XjVnpoePI4pTg|

#### Body (**raw**)

```json

```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Blog add

#### Method: POST

> ```
> http://localhost:8080/api/v1/blog/add
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA3NDJjMjNjOWU0ZDFjNTc2ZGQ3ZiIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzYzNDExMCwiZXhwIjoxNjUzNzIwNTEwfQ.KuNGAtKRg9Jh41EBHwRHOV_2uKVcB58z_oNhPTUi1fo|

#### Body formdata

| Param       | value                            | Type |
| ----------- | -------------------------------- | ---- |
| title       | Blog title                       | text |
| content     | Blog content                     | text |
| image       | /home/freaker/Pictures/Ayush.jpg | file |
| description | Blog description                 | text |
| category    | Blog category                    | text |
| author      | Freaker                          | text |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Blog update

#### Method: POST

> ```
> http://localhost:8080/api/v1/blog/add
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA3NDJjMjNjOWU0ZDFjNTc2ZGQ3ZiIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzY0NTkxMiwiZXhwIjoxNjUzNzMyMzEyfQ.gNSzwrFa6SeXXjLksV3wmoFKsf8qZxnqiZeOzGkllog|

#### Body (**raw**)

```json
{
    ""
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Product add

#### Method: POST

> ```
> http://localhost:8080/api/v1/product/add
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFkNDFmMDMzNzMyM2U4OGZjY2NhZCIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzcyNDIxOCwiZXhwIjoxNjUzODEwNjE4fQ.p-9VhzhRT5_q_2R1cXG-MfgCD2A4CyNoxZiDP3ITYHk|


#### Body formdata

| Param       | value                            | Type |
| ----------- | -------------------------------- | ---- |
| image       | /home/freaker/Pictures/Ayush.jpg | file |
| name        | Product 2                        | text |
| price       | 200                              | text |
| description | Product 2 description            | text |
| category    | Category 2                       | text |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Product delete

#### Method: POST

> ```
> http://localhost:8080/api/v1/product/delete?_id=6290c9741847935bb3b462d8
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA3NDJjMjNjOWU0ZDFjNTc2ZGQ3ZiIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzYzNDExMCwiZXhwIjoxNjUzNzIwNTEwfQ.KuNGAtKRg9Jh41EBHwRHOV_2uKVcB58z_oNhPTUi1fo|

#### Query Params

| Param | value                    |
| ----- | ------------------------ |
| \_id  | 6290c9741847935bb3b462d8 |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Product get

#### Method: GET

> ```
> http://localhost:3000/api/v1/products?limit=15
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFkNDFmMDMzNzMyM2U4OGZjY2NhZCIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzcyNDIxOCwiZXhwIjoxNjUzODEwNjE4fQ.p-9VhzhRT5_q_2R1cXG-MfgCD2A4CyNoxZiDP3ITYHk|


#### Query Params

| Param | value |
| ----- | ----- |
| limit | 15    |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Mail send

#### Method: POST

> ```
> http://localhost:8080/api/v1/mail/send
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA3NDJjMjNjOWU0ZDFjNTc2ZGQ3ZiIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzY0NTk1NCwiZXhwIjoxNjUzNzMyMzU0fQ.pydKZCyOsgjE2zUwSNG1vyGY9FdJSRm0No2PL_rXuj0|

#### Body (**raw**)

```json
{
	"email": "aayushh79@gmail.com",
	"name": "Ayush Rathore"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Customer add

#### Method: POST

> ```
> http://localhost:8080/api/v1/customer/add
> ```

#### Body (**raw**)

```json
{
	"name": "John Doe",
	"email": "johndoe@gmail.com",
	"phone": "123456789"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Admin register

#### Method: POST

> ```
> http://localhost:8080/api/v1/admin/register
> ```

#### Body (**raw**)

```json
{
	"name": "Freaker",
	"email": "heyfreaker@gmail.com",
	"password": "123456"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: User get by email

#### Method: POST

> ```
> http://localhost:8080/api/v1/user/get
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTg3NjU0MzIxIiwiaWF0IjoxNjU1ODEzNTU0LCJleHAiOjE2NTU4OTk5NTR9.6jk-QlD1seZQuCHbgjx9Rtl2_RlhHbXT3vowhRBbONA|


#### Body (**raw**)

```json
{
	"email": "heyfreaker@gmai.com"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Cart add

#### Method: POST

> ```
> http://localhost:8080/api/v1/cart/add
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNjMwMywiZXhwIjoxNjU1OTkyNzAzfQ.m2_aNRd3K_5zOkdl98yj5ZmYKkl76sxNT-eun6fmbBA|


#### Body (**raw**)

```json
{
	"name": "Henna",
	"price": "250",
	"category": "Herbal",
	"quantity": 1,
	"userId": "heyfreaker@gmail.com",
	"id": "1"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Cart update

#### Method: POST

> ```
> http://localhost:8080/api/v1/cart/update
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNjMwMywiZXhwIjoxNjU1OTkyNzAzfQ.m2_aNRd3K_5zOkdl98yj5ZmYKkl76sxNT-eun6fmbBA|

#### Body (**raw**)

```json
{
	"id": "62aec60a9518dc5197404c39"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Cart remove

#### Method: POST

> ```
> http://localhost:8080/api/v1/cart/delete
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNjMwMywiZXhwIjoxNjU1OTkyNzAzfQ.m2_aNRd3K_5zOkdl98yj5ZmYKkl76sxNT-eun6fmbBA|

#### Body (**raw**)

```json
{
	"id": "1"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Cart get

#### Method: GET

> ```
> http://localhost:8080/api/v1/cart/getAll
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNzEwMCwiZXhwIjoxNjU1OTkzNTAwfQ.G2NgC2gpZHa5ljy9FAfsiTMjW0oojPhREVkdxQ4PAUw|

#### Query Params


|Param|value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNzEwMCwiZXhwIjoxNjU1OTkzNTAwfQ.G2NgC2gpZHa5ljy9FAfsiTMjW0oojPhREVkdxQ4PAUw|

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Cart remove

#### Method: POST

> ```
> http://localhost:8080/api/v1/cart/remove
> ```

#### Headers
                                               
|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNzE4MSwiZXhwIjoxNjU1OTkzNTgxfQ.jH-BFiwPDlBxbyEVd9seorFunp2-_rF2aSFC9Qq1lgk|


#### Body (**raw**)

```json
{
	"id": "62b320a50521d6f236d809fa"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Payment verify

#### Method: POST

> ```
> http://localhost:8080/api/v1/payment/verify
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NjA2ODM5MSwiZXhwIjoxNjU2MTU0NzkxfQ.VAy-XS9AcP5xNh4Wi4LhfjLpy0-VuCiBJX1Mc8saFLg|

#### Body (**raw**)

```json
{
	"razorpay_order_id": "order_JlbstvXZZJCiLI",
	"razorpay_payment_id": "pay_JlbtK1nfACKN9Z",
	"razorpay_signature": "a94fadc9fde88d9ccf3aa5766f7cf2b4808c287d53a6401f830ea1aace56337d"
}
```

#### 🔑 Authentication basic

| Param | value | Type |
| ----- | ----- | ---- |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Payment create

#### Method: POST

> ```
> http://localhost:8080/api/v1/payment/create
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NjA2ODM5MSwiZXhwIjoxNjU2MTU0NzkxfQ.VAy-XS9AcP5xNh4Wi4LhfjLpy0-VuCiBJX1Mc8saFLg|

#### Body (**raw**)

```json
{
	"amount": "500",
	"currency": "INR",
	"receipt": "receipt_bhumija_1"
}
```

#### 🔑 Authentication basic

| Param | value | Type |
| ----- | ----- | ---- |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Order create

#### Method: POST

> ```
> http://localhost:8080/api/v1/order/create
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NjE2NjE5NCwiZXhwIjoxNjU2MjUyNTk0fQ.j-qTr12FHcJFQPW_gJFgXFxawy3LAwcwEo2ckjydWsU|

#### Body (**raw**)

```json
{
	"name": "Henna",
	"price": "250",
	"category": "Herbal",
	"quantity": 1,
	"userId": "heyfreaker@gmail.com",
	"productId": "1",
	"user": "Ayush Rathore",
	"phone": "9413503230",
	"address": {
		"house": "1",
		"street": "Durga Colony",
		"city": "Jodhpur",
		"state": "Rajasthan",
		"pincode": "342001"
	},
	"orderId": "62b71740814034c3f953008e"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Order get

#### Method: POST

> ```
> http://localhost:8080/api/v1/order/get
> ```

#### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NjE2NjE5NCwiZXhwIjoxNjU2MjUyNTk0fQ.j-qTr12FHcJFQPW_gJFgXFxawy3LAwcwEo2ckjydWsU|


#### Body (**raw**)

```json
{
	"userId": "heyfreaker@gmail.com"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Order cancel

#### Method: POST

> ```
> http://localhost:8080/api/v1/order/cancel
> ```

#### Headers
         |
|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NjE2NjE5NCwiZXhwIjoxNjU2MjUyNTk0fQ.j-qTr12FHcJFQPW_gJFgXFxawy3LAwcwEo2ckjydWsU|

#### Body (**raw**)

```json
{
	"orderId": "62b71740814034c3f953008e"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Check auth

#### Method: POST

> ```
> http://localhost:8080/api/v1/auth
> ```

#### Headers

| Content-Type | Value |
| ------------ | ----- |
| access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhleWZyZWFrZXJAZ21haWwuY29tIiwiaWQiOiI2MmJmMTYwMjk0OWQ0ZDJmMjc1YmFkYmMiLCJjb2xsZWN0aW9uIjoidXNlcnMiLCJpYXQiOjE2NTY4NTgxNTUsImV4cCI6MTY1NzQ2Mjk1NX0.waeGCtbjl4W3tM5pHdIGygj9LnSEpeh0i0taN_6iYl4 |

<hr>

## [**Models Schema**](./model/)

### [**User**](./model/user.js)

| Field     | Type                      |
| --------- | ------------------------- |
| \_id      | ObjectId                  |
| firstName | String                    |
| lastName  | String                    |
| email     | String                    |
| phone     | String                    |
| address   | [addressSchema](#address) |
| password  | String                    |
| createdAt | Date                      |
| updatedAt | Date                      |
| deletedAt | Date                      |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### [Admin](./model/admin.js)

| Field     | Type     |
| --------- | -------- |
| \_id      | ObjectId |
| name      | String   |
| email     | String   |
| password  | String   |
| createdAt | Date     |
| updatedAt | Date     |
| deletedAt | Date     |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### [Customer](./model/customer.js)

| Field     | Type     |
| --------- | -------- |
| \_id      | ObjectId |
| name      | String   |
| email     | String   |
| phone     | String   |
| createdAt | Date     |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### [Address](./model/orders.js)

| Field   | Type     |
| ------- | -------- |
| \_id    | ObjectId |
| house   | String   |
| street  | String   |
| city    | String   |
| state   | String   |
| pincode | String   |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### [Blog](./model/blog.js)

| Field       | Type                |
| ----------- | ------------------- |
| \_id        | ObjectId            |
| title       | String              |
| content     | String              |
| image       | String              |
| mimeType    | String              |
| description | String              |
| category    | String              |
| tags        | [String]            |
| author      | [userSchema](#user) |
| createdAt   | Date                |
| updatedAt   | Date                |
| deletedAt   | Date                |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### [**Product**](./model/product.js)

| Field       | Type     |
| ----------- | -------- |
| \_id        | ObjectId |
| name        | String   |
| price       | Number   |
| image       | String   |
| description | String   |
| category    | String   |
| mimeType    | String   |
| tags        | [String] |
| quantity    | Number   |
| createdAt   | Date     |
| updatedAt   | Date     |
| deletedAt   | Date     |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## [Cart](./model/cart.js)

| Field     | Type   |
| --------- | ------ |
| id        | String |
| productId | String |
| name      | String |
| price     | Number |
| image     | String |
| category  | String |
| quantity  | Number |
| userId    | String |
| createdAt | Date   |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### [**Order**](./model/order.js)

| Field       | Type                |
| ----------- | ------------------- |
| \_id        | ObjectId            |
| productId   | String              |
| name        | String              |
| amount      | Number              |
| image       | String              |
| category    | Date                |
| quantity    | Number              |
| user        | [userSchema](#user) |
| status      | String              |
| status      | Date                |
| deliveredOn | Date                |
| createdAt   | Date                |

<hr>

## Authors

-   [@ayusshrathore](https://www.github.com/ayusshrathore)

<hr>

## License

[MIT](https://choosealicense.com/licenses/mit/)

<hr>

## Credits
-  [@aaaravv](https://github.com/aaaravv) for contributing to the docs.

<hr>

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
