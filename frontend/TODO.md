## TODOS

- [x] Use axios for requests
- [ ] Add highlight for current tab in navbar
- [ ] Add wishlist feature
- [x] Implement useReducer for optimised state management
- [ ] Use cookies for saving tokens

### Home Page

- [ ] Render login/signup if not logged in; render logout if logged in
- [x] Add state for home add to cart
- [x] Add search bar to filter products by name
  - [x] Add interactivity
  - [ ] Embolden found search term
- [x] Show total number of products in cart navbar
- [ ] Show previous orders in notifications navbar
- [ ] Show user profile (basics - avatar, name, email) on navbar

### Data Format

Save two items at the top layer of app:

1. products database, and
2. list of cart items chosen

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

  Render this object in the Cart page, with removal feature
  Products, Cart and wishlistItems are part of a larger state object managed by
  useReducer.
