import { BookDto } from "../dto/bookDto";

abstract class BooksRepository {
  abstract create(dto: BookDto): void;
  abstract find(dto: BookDto): Promise<BookDto | null>;
  abstract update(dto: BookDto, id: string): Promise<BookDto | null>;
}

export { BooksRepository };
