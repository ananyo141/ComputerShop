# API Documentation for ComputerShop Backend

## Auth
  1. `/api/v1/login` _POST:_ Create auth token for session
  2. `/api/v1/register` _POST:_ Create new user and get auth token
  3. `/api/v1/logout` _POST:_ Logout the current session and destroy token

## Users
  **User Information**
  1. `/api/v1/users`
     - _GET:_ Get all the users in database
  2. `/api/v1/users/:id`
     - _GET:_ Get the user info
     - _PATCH:_ Update the user
     - _DELETE:_ Delete the user

  **User Cart**
  1. `/api/v1/users/:id/cart`
     - _GET:_ Get cart contents of user
     - _POST:_ Add product to cart

  2. `/api/v1/users/:id/cart/:prod_id`
     - _PATCH:_ Update product in cart
     - _DELETE:_ Delete product from cart

  **User Orders**
  1. `/api/v1/users/:id/orders`
     - _GET:_ Get previous orders
     - _POST:_ Create new order

  2. `/api/v1/users/:id/orders/:order_id`
     - _GET:_ Get previous order details

## Products
  1. `/api/v1/products`
     - _GET:_ Get all products from database
  2. `/api/v1/products/:id`
     - _GET:_ Get specified product from database
