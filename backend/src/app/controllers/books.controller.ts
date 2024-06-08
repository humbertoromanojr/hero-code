import { HttpRequest } from "../../infra/http/httpAdapter";

class BooksController {
  constructor() {}

  show() {
    //return all books
  }

  find() {
    //return one book
  }

  async create(HttpRequest: HttpRequest): Promise<HttpResponse> {
    return new Promise((resolve, reject) => {
      return resolve({ status: 200, message: "Livro criado com sucesso!" });
    });
  }
}
