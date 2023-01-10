## TODOS

- [ ] Use jwt auth
- [ ] Send products from get point to frontend

## Routes

- [ ] configure routes for api
- [ ] use pagination while providing products api

## API Design

- _Base Url_: `/api/v1/`

  - _Products_:

    - get all: `/products`
    - get one: `/products/:id`

  - _Users_:

    - bio: `/users/:id`
    - cart: `/users/:id/cart`
    - orders: `/users/:id/orders`

  - _Authentication_:
    - register **(post)**: `/register`
    - login **(post)**: `/login`
