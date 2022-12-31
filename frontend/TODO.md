## TODOS

- [ ] Use axios for requests
- [ ] Add highlight for current tab in navbar
- [ ] Add wishlist feature

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

- **Products: Non-Stateful**
  Backend Provides initial products database as
  A JSON object of _id_ fields and _keys_:

  ```
  {
    id: {
        imgLink: string,
        name: string,
        price: number,
        seller: string,
        desc: string,
        inStock: number
    }
  }
  ```

  We save it as a const array (non-state) in the top of the application stack.
  Fetch it first time the app loads.

- **CartItems: Stateful**
  Save a stateful object that tracks the id of the chosen item and the amount
  required, also if wishlisted.

  ```
  {
    id: {
      amount: number,
      isWishlisted: boolean
    }
  }
  ```

  Render this object in the Cart page, with removal feature
