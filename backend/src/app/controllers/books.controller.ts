import { HttpRequest, HttpResponse } from "../../infra/http/httpAdapter";
import { BookDto } from "../dto/bookDto";

class BooksController {
  constructor() {}

  show() {
    //return all books
  }

  find() {
    //return one book
  }

  async create(HttpRequest: HttpRequest): Promise<HttpResponse> {
    const body: BookDto = HttpRequest.body;

    try {
      if (!body) {
        return {
          status: 400,
          message: "Missing body",
        };
      }

      return {
        status: 201,
        message: "Book created",
      };
    } catch (error: any) {
      return {
        status: 400,
        message: error.message,
      };
    }
  }
}

export { BooksController };
