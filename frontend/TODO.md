## TODOS

- [ ] Use axios for requests
- [ ] Add highlight for current tab in navbar

### Home Page

- [ ] Render login/signup if not logged in; render logout if logged in
- [ ] Add state for home add to cart
- [ ] Add search bar to filter products by name
- [ ] Show total number of products in cart navbar
- [ ] Show previous orders in notifications navbar
- [ ] Show user profile (basics - avatar, name, email) on navbar

### Data Format

Save three items at the top layer of app:

1. products database,
2. list of cart items chosen,
3. list of wishlist items

- **Products: Non-Stateful**
  Backend Provides initial products database as
  A JSON object of _id_ fields and _keys_:

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
  }
  ```

  We save it as a const array (non-state) in the top of the application stack.
  Fetch it first time the app loads.

- **CartItems: Stateful**
  Save a stateful array that tracks the id of the chosen item and the amount
  required.

  ```
  [
    {
      "id": string,
      "amount": number
    }
  ]
  ```

  Render this array in the Cart page, with removal feature

- **Wishlist: Stateful**
  Save a stateful array that keeps the id of items marked as wishlist.
  Show in wishlist page with option to buy, and remove from wishlist.
  ```
  ["id1", "id2", "id3"]
  ```
