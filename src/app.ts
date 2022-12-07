import express from "express";
import { router as productRouter } from "./routes/product";
import { router as loginRouter } from "./routes/login";
const app = express();

// static assets
app.use(express.static("./public"));

// add json parsing
app.use(express.json());

// add routers
app.use("/api/v1/product", productRouter);
app.use("/api/v1/login", loginRouter);

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
