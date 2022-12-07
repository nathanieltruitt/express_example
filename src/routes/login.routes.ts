import express from "express";
import { login } from "../controllers/login.controller";
export const router = express.Router();

router.route("/").post(login);
