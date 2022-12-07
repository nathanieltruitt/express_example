import express from "express";
import { router as productRouter } from "./routes/product.routes";
import { router as loginRouter } from "./routes/login.routes";
import { logger } from "./middleware/logger.middleware";
const app = express();

// static assets
app.use(express.static("./public"));

// add json parsing
app.use(express.json());

// add logger
app.use(logger);

// add routers
app.use("/api/v1/product", productRouter);
app.use("/api/v1/login", loginRouter);

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
