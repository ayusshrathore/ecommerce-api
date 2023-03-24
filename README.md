# eCommerce-API
Introducing a full-fledged eCommerce API solution, built using Node.js, is a one-stop for all your eCommerce needs. With a user-friendly interface and seamless integration, this API is designed to help you effortlessly manage your online store. From product management to payment processing, this API provides an all-in-one solution that will take your eCommerce business to the next level.

## End-point: User login
### Method: POST
>```
>http://localhost:8080/api/v1/user/login
>```
### Body (**raw**)

```json
{
    "email": "heyfreaker@gmail.com",
    "password": "123456"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User register
### Method: POST
>```
>http://localhost:8080/api/v1/user/register
>```
### Body (**raw**)

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

## End-point: User update
### Method: POST
>```
>http://localhost:8080/api/v1/user/update
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjU1ODA4NDcyLCJleHAiOjE2NTU4OTQ4NzJ9.t714_A7DccbFEyyf7DcqK7HU6RQm4l0RKSlDcq_73GU|


### Body (**raw**)

```json
{
    "firstName": "Ayush",
    "lastName": "Rathore",
    "email": "heyfreaker@gmail.com",
    "phone": "987654321"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User address update
### Method: POST
>```
>http://localhost:8080/api/v1/user/update/address
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjU1ODA4NDcyLCJleHAiOjE2NTU4OTQ4NzJ9.t714_A7DccbFEyyf7DcqK7HU6RQm4l0RKSlDcq_73GU|


### Body (**raw**)

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

## End-point: User delete
### Method: POST
>```
>http://localhost:8080/api/v1/user/delete
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA3NDJjMjNjOWU0ZDFjNTc2ZGQ3ZiIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzY0NTkxMiwiZXhwIjoxNjUzNzMyMzEyfQ.gNSzwrFa6SeXXjLksV3wmoFKsf8qZxnqiZeOzGkllog|


### Query Params

|Param|value|
|---|---|
|access-token||



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User get
### Method: GET
>```
>http://localhost:8080/api/v1/user/get
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjU1ODA4MTcyLCJleHAiOjE2NTU4OTQ1NzJ9.rFtOLgFVMUmEkrKRQZT7YQMphVyKW2XjVnpoePI4pTg|


### Body (**raw**)

```json

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Blog add
### Method: POST
>```
>http://localhost:8080/api/v1/blog/add
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA3NDJjMjNjOWU0ZDFjNTc2ZGQ3ZiIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzYzNDExMCwiZXhwIjoxNjUzNzIwNTEwfQ.KuNGAtKRg9Jh41EBHwRHOV_2uKVcB58z_oNhPTUi1fo|


### Body formdata

|Param|value|Type|
|---|---|---|
|title|Blog title|text|
|content|Blog content|text|
|image|/home/freaker/Pictures/Ayush.jpg|file|
|description|Blog description|text|
|category|Blog category|text|
|author|Freaker|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Blog update
### Method: POST
>```
>http://localhost:8080/api/v1/blog/add
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA3NDJjMjNjOWU0ZDFjNTc2ZGQ3ZiIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzY0NTkxMiwiZXhwIjoxNjUzNzMyMzEyfQ.gNSzwrFa6SeXXjLksV3wmoFKsf8qZxnqiZeOzGkllog|


### Body (**raw**)

```json
{
    ""
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Product add
### Method: POST
>```
>http://localhost:8080/api/v1/product/add
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFkNDFmMDMzNzMyM2U4OGZjY2NhZCIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzcyNDIxOCwiZXhwIjoxNjUzODEwNjE4fQ.p-9VhzhRT5_q_2R1cXG-MfgCD2A4CyNoxZiDP3ITYHk|


### Body formdata

|Param|value|Type|
|---|---|---|
|image|/home/freaker/Pictures/Ayush.jpg|file|
|name|Product 2|text|
|price|200|text|
|description|Product 2 description|text|
|category|Category 2|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Product delete
### Method: POST
>```
>http://localhost:8080/api/v1/product/delete?_id=6290c9741847935bb3b462d8
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA3NDJjMjNjOWU0ZDFjNTc2ZGQ3ZiIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzYzNDExMCwiZXhwIjoxNjUzNzIwNTEwfQ.KuNGAtKRg9Jh41EBHwRHOV_2uKVcB58z_oNhPTUi1fo|


### Query Params

|Param|value|
|---|---|
|_id|6290c9741847935bb3b462d8|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Product get
### Method: GET
>```
>http://localhost:3000/api/v1/products?limit=15
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFkNDFmMDMzNzMyM2U4OGZjY2NhZCIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzcyNDIxOCwiZXhwIjoxNjUzODEwNjE4fQ.p-9VhzhRT5_q_2R1cXG-MfgCD2A4CyNoxZiDP3ITYHk|


### Query Params

|Param|value|
|---|---|
|limit|15|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Mail send
### Method: POST
>```
>http://localhost:8080/api/v1/mail/send
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA3NDJjMjNjOWU0ZDFjNTc2ZGQ3ZiIsIm5hbWUiOiJGcmVha2VyIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzY0NTk1NCwiZXhwIjoxNjUzNzMyMzU0fQ.pydKZCyOsgjE2zUwSNG1vyGY9FdJSRm0No2PL_rXuj0|


### Body (**raw**)

```json
{
    "email": "aayushh79@gmail.com",
    "name": "Ayush Rathore"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Customer add
### Method: POST
>```
>http://localhost:8080/api/v1/customer/add
>```
### Body (**raw**)

```json
{
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "phone": "123456789"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Admin register
### Method: POST
>```
>http://localhost:8080/api/v1/admin/register
>```
### Body (**raw**)

```json
{
    "name": "Freaker",
    "email": "heyfreaker@gmail.com",
    "password": "123456"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User get by email
### Method: POST
>```
>http://localhost:8080/api/v1/user/get
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTg3NjU0MzIxIiwiaWF0IjoxNjU1ODEzNTU0LCJleHAiOjE2NTU4OTk5NTR9.6jk-QlD1seZQuCHbgjx9Rtl2_RlhHbXT3vowhRBbONA|


### Body (**raw**)

```json
{
    "email": "heyfreaker@gmai.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Cart add
### Method: POST
>```
>http://localhost:8080/api/v1/cart/add
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNjMwMywiZXhwIjoxNjU1OTkyNzAzfQ.m2_aNRd3K_5zOkdl98yj5ZmYKkl76sxNT-eun6fmbBA|


### Body (**raw**)

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

## End-point: Cart update
### Method: POST
>```
>http://localhost:8080/api/v1/cart/update
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNjMwMywiZXhwIjoxNjU1OTkyNzAzfQ.m2_aNRd3K_5zOkdl98yj5ZmYKkl76sxNT-eun6fmbBA|


### Body (**raw**)

```json
{
    "id": "62aec60a9518dc5197404c39"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Cart remove
### Method: POST
>```
>http://localhost:8080/api/v1/cart/delete
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNjMwMywiZXhwIjoxNjU1OTkyNzAzfQ.m2_aNRd3K_5zOkdl98yj5ZmYKkl76sxNT-eun6fmbBA|


### Body (**raw**)

```json
{
    "id": "1"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Cart get
### Method: GET
>```
>http://localhost:8080/api/v1/cart/getAll
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNzEwMCwiZXhwIjoxNjU1OTkzNTAwfQ.G2NgC2gpZHa5ljy9FAfsiTMjW0oojPhREVkdxQ4PAUw|


### Query Params

|Param|value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNzEwMCwiZXhwIjoxNjU1OTkzNTAwfQ.G2NgC2gpZHa5ljy9FAfsiTMjW0oojPhREVkdxQ4PAUw|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Cart remove
### Method: POST
>```
>http://localhost:8080/api/v1/cart/remove
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NTkwNzE4MSwiZXhwIjoxNjU1OTkzNTgxfQ.jH-BFiwPDlBxbyEVd9seorFunp2-_rF2aSFC9Qq1lgk|


### Body (**raw**)

```json
{
    "id": "62b320a50521d6f236d809fa"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Payment verify
### Method: POST
>```
>http://localhost:8080/api/v1/payment/verify
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NjA2ODM5MSwiZXhwIjoxNjU2MTU0NzkxfQ.VAy-XS9AcP5xNh4Wi4LhfjLpy0-VuCiBJX1Mc8saFLg|


### Body (**raw**)

```json
{
    "razorpay_order_id": "order_JlbstvXZZJCiLI",
    "razorpay_payment_id": "pay_JlbtK1nfACKN9Z",
    "razorpay_signature": "a94fadc9fde88d9ccf3aa5766f7cf2b4808c287d53a6401f830ea1aace56337d"
}
```

### 🔑 Authentication basic

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Payment create
### Method: POST
>```
>http://localhost:8080/api/v1/payment/create
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NjA2ODM5MSwiZXhwIjoxNjU2MTU0NzkxfQ.VAy-XS9AcP5xNh4Wi4LhfjLpy0-VuCiBJX1Mc8saFLg|


### Body (**raw**)

```json
{
    "amount": "500",
    "currency": "INR",
    "receipt": "receipt_bhumija_1"
}
```

### 🔑 Authentication basic

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Order create
### Method: POST
>```
>http://localhost:8080/api/v1/order/create
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NjE2NjE5NCwiZXhwIjoxNjU2MjUyNTk0fQ.j-qTr12FHcJFQPW_gJFgXFxawy3LAwcwEo2ckjydWsU|


### Body (**raw**)

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

## End-point: Order get
### Method: POST
>```
>http://localhost:8080/api/v1/order/get
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NjE2NjE5NCwiZXhwIjoxNjU2MjUyNTk0fQ.j-qTr12FHcJFQPW_gJFgXFxawy3LAwcwEo2ckjydWsU|


### Body (**raw**)

```json
{
    "userId": "heyfreaker@gmail.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Order cancel
### Method: POST
>```
>http://localhost:8080/api/v1/order/cancel
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjFhMDk2YzA5MTdlZTEzYWZhOWQ5OSIsImZpcnN0TmFtZSI6IkF5dXNoIiwibGFzdE5hbWUiOiJSYXRob3JlIiwiZW1haWwiOiJoZXlmcmVha2VyQGdtYWlsLmNvbSIsInBob25lIjoiOTQxMzUwMzIzMCIsImlhdCI6MTY1NjE2NjE5NCwiZXhwIjoxNjU2MjUyNTk0fQ.j-qTr12FHcJFQPW_gJFgXFxawy3LAwcwEo2ckjydWsU|


### Body (**raw**)

```json
{
    "orderId": "62b71740814034c3f953008e"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Check auth
### Method: POST
>```
>http://localhost:8080/api/v1/auth
>```
### Headers

|Content-Type|Value|
|---|---|
|access-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhleWZyZWFrZXJAZ21haWwuY29tIiwiaWQiOiI2MmJmMTYwMjk0OWQ0ZDJmMjc1YmFkYmMiLCJjb2xsZWN0aW9uIjoidXNlcnMiLCJpYXQiOjE2NTY4NTgxNTUsImV4cCI6MTY1NzQ2Mjk1NX0.waeGCtbjl4W3tM5pHdIGygj9LnSEpeh0i0taN_6iYl4|
