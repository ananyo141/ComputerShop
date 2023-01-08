## TODOS

- [ ] Use jwt auth
- [ ] Send packages from get point to frontend

## Routes

- [ ] configure routes for api
- [ ] use pagination while providing products api

## API Design

- _Base Url_: `/api/v1/`

  - _Products_: `/products` (get)

  - _Users_:
    - register: `/users/register` (post)
    - login: `/users/login` (post)
    - user specific: (base url `/users/:id`)
      - cart: `/cart`
      - orders: `/orders`
      - bio: `/bio`
