import { BookDto } from "../dto/bookDto";
import { BooksRepository } from "../repository/books.repository";

class BooksUseCase {
  private booksRepository: BooksRepository;

  constructor(booksRepository: BooksRepository) {
    this.booksRepository = booksRepository;
  }

  async createBook(dto: BookDto) {
    this.booksRepository.create(dto);
  }
}

export { BooksUseCase };
