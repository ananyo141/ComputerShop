# Computer  Shop | [DEMO](https://computershop-frontend.onrender.com/)

A full-featured _online shopping application_, that captures the usual flow of _user registration/login_, choosing products and _adding to cart_, and finally _checking out_ the order with personal details.

This project is written entirely with **TypeScript**, with best practices in mind leveraging **Redux Toolkit** and custom _typed hooks_ and an _expressive project structure_.

Check out the readme scripts for the individual repos for [frontend](./frontend/README.md) and [backend](./backend/README.md).

## Demo

The entirety of the application (frontend and backend) is hosted on [Render](https://render.com/).

Frontend (global CDN): [Try it out](https://computershop-frontend.onrender.com/)

Backend (Singapore): [Try it out](https://computershop-ananyo.onrender.com/api/v1/products/)

Youtube Demo: [On my channel](https://www.youtube.com/watch?v=1uHAwhE77C0)

_**NOTE**: Since render has restrictions for free tier web services, the startup time can take several seconds for the first request._

## Features

- Support logins from multiple devices, all user carts and _details are preserved_, ie, add products from another device, checkout from another afterwards
- Saved previous orders
- **Secure logins** with _JSON Web Tokens (**JWT**)_
- **Fully responsive** and works well with mobiles, laptops and desktops
- Beautiful and intuitive UI, powered by **TailwindCSS**

## Tech Stack
Leverages the latest and greatest technologies for better optimization and support.

#### Frontend:
 - **ReactJS**
 - **Redux Toolkit**
 - **Typed/custom hooks**

#### Backend:
 - **ExpressJS** _(NodeJS framework)_
 - **JWT Package** for secure authentication
 - **Mongoose** for seamless integration with **MongoDB**

**TypeScript** for runtime type safety.

**Husky** for pre-commit code linting and **prettier** for formatting.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. Also consult the .env.example sample file.

`CONNECTIONSTR` contains the _MONGODB URI_ for associated **NoSQL database**

`ACCESS_TOKEN_SECRET` secret to sign the access tokens with

`REFRESH_TOKEN_SECRET` secret to sign the refresh tokens with

## License

[GPL v3](./LICENSE)
