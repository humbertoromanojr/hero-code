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

  async find(httpRequest: HttpRequest): Promise<HttpResponse> {
    const dto: BookDto = httpRequest.query;

    try {
      if (!dto) {
        return {
          status: 400,
          message: "Missing Book finding",
        };
      }

      const response = await this.booksUseCase.findBook(dto);

      return {
        status: 200,
        message: "Book finding",
        data: response,
      };
    } catch (error: any) {
      return {
        status: 400,
        message: error.message,
      };
    }
  }

  async update(httpRequest: HttpRequest): Promise<HttpResponse> {
    const dto: BookDto = httpRequest.query;
    const id: string = httpRequest.params.id;

    try {
      if (!dto) {
        return {
          status: 400,
          message: "Missing book",
        };
      }

      const response = await this.booksUseCase.updateBook(dto, id);

      return {
        status: 201,
        message: "Book updated",
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
