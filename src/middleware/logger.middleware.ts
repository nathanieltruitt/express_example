import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
  // header info and information on who is making this request
  console.log(new Date().toString(), req.method, req.url);
  next();
}
