import { NextFunction, Request, Response } from "express";
import { ResponseData } from "./models/response-data.model";

export function authorize(req: Request, res: Response, next: NextFunction) {
  const { user } = req.query;
  if (user !== "nathan") {
    return res.send(new ResponseData(false, 401, { message: "Unauthorized" }));
  }
  console.log("authorize");
  next();
}
