import express, { Application } from "express";

const app: Application = express();

app.get("/", (req, res) => {
   res.status(200).json({
      message: "Welcome to ebook api Server!",
   });
});

export default app;
