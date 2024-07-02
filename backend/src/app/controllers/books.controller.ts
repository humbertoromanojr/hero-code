import { HttpRequest, HttpResponse } from "../../infra/http/httpAdapter";
import { BookDto } from "../dto/bookDto";
import { BooksUseCase } from "../useCases/books.usecase";

class BooksController {
  constructor(private readonly booksUseCase: BooksUseCase) {}

  async create(httpRequest: HttpRequest): Promise<HttpResponse> {
    const body: BookDto = httpRequest.body;

    try {
      if (!body) {
        return {
          status: 400,
          message: "Missing body",
        };
      }

      const response = await this.booksUseCase.createBook(body);

      return {
        status: 201,
        message: "Book created",
        data: response,
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
