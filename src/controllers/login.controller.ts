import { ResponseData } from "../models/response-data.model";
import { Request, Response } from "express";

export function login(req: Request, res: Response) {
  const { username, password } = req.body;

  if (username && password) {
    return res
      .status(200)
      .json(
        new ResponseData(true, 200, { message: "you successfully logged in!" })
      );
  } else {
    return res
      .status(400)
      .json(new ResponseData(false, 400, { message: "malformed query!" }));
  }
}
