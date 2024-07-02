import mongoose from "mongoose";
import { BookDto } from "../../app/dto/bookDto";
import { BooksRepository } from "../../app/repository/books.repository";

const booksSchema = new mongoose.Schema({
  title: String,
  isbn: String,
  pageCount: Number,
  publishedDate: { $date: Date },
  thumbnailUrl: String,
  shortDescription: String,
  longDescription: String,
  status: String,
  authors: [String],
  categories: [String],
});

const Books = mongoose.model("books", booksSchema);

class BooksRepositoryMongoose implements BooksRepository {
  create(dto: BookDto) {
    const books = new Books(dto);

    return books.save();
  }

  async find(dto: BookDto) {
    const response = await books.findOne({ title: dto.title });

    return response;
  }

  async update(dto: BookDto, id: string) {
    const response = await Books.findByIdAndUpdate(id, dto);

    return response;
  }
}
export { BooksRepositoryMongoose };
