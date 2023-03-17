## TODOS

- [x] Use axios for requests
- [ ] Add highlight for current tab in navbar
- [ ] Add wishlist feature
- [x] Implement useReducer for optimised state management
- [x] Add logout

## FIXME
- [x] Footer overlapping on short content
- [x] State doesn't update on few reloads
- [x] Page scroll to top on route / page change

### Home Page

- [x] Render login/signup if not logged in; render logout if logged in
- [x] Add state for home add to cart
- [x] Add search bar to filter products by name
  - [x] Add interactivity
  - [ ] Embolden found search term
- [x] Show total number of products in cart navbar
- [x] Show previous orders in notifications navbar
- [x] Show user profile (basics - avatar, name, email) on navbar

### State Management

The global state is managed by [Redux Toolkit](https://redux-toolkit.js.org/). 

Save these items at the top layer of app:

    1. User login details
    2. Products database, and
    3. List of cart items chosen
    4. List of previous orders

- **Products: Stateful**
  Backend Provides initial products database as
  A JSON array of objects with _id_:

  ```
  [
    {
      _id: string,
      imgLink: string,
      name: string,
      price: number,
      seller: string,
      desc: string,
      inStock: number
    }
  ]
  ```

  Converted to an object with id fields as keys:

  ```
  {
    id1: {
      imgLink: string,
      name: string,
      price: number,
      seller: string,
      desc: string,
      inStock: number
    }
  ]
  ```

  Fetch it first time the app loads.

- **CartItems: Stateful**
  Save a stateful object that tracks the id of the chosen item and the amount
  required, also if wishlisted.

  ```
  { _id1: amount, _id2: amount }
  ```

  Render this object in the Cart page, with removal feature.
  
  Products, Cart and wishlistItems are part of a larger state object managed by
  Redux toolkit.

  #### As in, the redux state looks like this:
  ```
  {
    cart: {
      items: {},
      amount: 0,
      subtotal: 0,
      shippingCost: 0,
      tax: 0,
      total: 0,
      isLoading: false,
      error: null
    },
    products: {
      items: {},
      isLoading: true,
      error: null
    },
    login: {
      isLoggedIn: false,
      name: null,
      email: null,
      accessToken: null,
      isLoading: false,
      error: null
    },
    orders: {
      orders: [],
      newOrderNotifications: 0,
      isLoading: false,
      error: null
    }
  }
  ```
