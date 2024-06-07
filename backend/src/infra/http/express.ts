import express, { Application } from "express";
import cors from "cors";

class Express {
  app: Application;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.errorMiddlewares();
  }

  private initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private errorMiddlewares() {}

  listen() {
    this.app.listen(3333, () => {
      console.log("Server is running on port 3333");
    });
  }
}

export default Express;
