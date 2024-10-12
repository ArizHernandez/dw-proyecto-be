import { Request, Response } from "express";

const express = require("express");
const app = express();
const port = 3200;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
