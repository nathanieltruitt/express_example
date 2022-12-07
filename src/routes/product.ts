import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/product";

// setup router
export const router = express.Router();

router.route("/").get(getProduct);
router.route("/add").post(addProduct);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);
