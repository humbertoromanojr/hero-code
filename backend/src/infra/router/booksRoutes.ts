import { Router } from "express";

import { BooksController } from "../../app/controllers/books.controller";

export const BookRoutes = (router: Router) => {
  const booksController = new BooksController();

  router.post("/books", routerAdapter(booksController, "create"));
};
