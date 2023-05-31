"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const environment_1 = __importDefault(require("./utils/environment"));
const productRoutes_1 = require("./routes/productRoutes");
const userRoutes_1 = require("./routes/userRoutes");
const authRoutes_1 = require("./routes/authRoutes");
const routeNotFound_1 = require("./middleware/routeNotFound");
const errorHandler_1 = require("./middleware/errorHandler");
const constants_1 = require("./constants");
const connectDB_1 = require("./db/connectDB");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(`${constants_1.BASEURL}/auth`, authRoutes_1.authRouter);
app.use(`${constants_1.BASEURL}/users`, userRoutes_1.userRouter);
app.use(`${constants_1.BASEURL}/products`, productRoutes_1.productRouter);
app.use(routeNotFound_1.routeNotFound);
app.use(errorHandler_1.errorHandler);
const port = environment_1.default.PORT || constants_1.PORT;
try {
  (0, connectDB_1.connectDB)();
  app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}/`);
  });
} catch (error) {
  console.error(error);
}
