import { Request, Response } from "express";
import express from "express";

import "reflect-metadata";

const app = express();
const port = 3200;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
