import type { InsertManyResult } from "mongodb";
import type { Book } from "./books.model";
import { Books } from "./books.model";

export const insertBooks = async (books: Book[]): Promise<number> => {
  try {
    const result: InsertManyResult<Book> = await Books.insertMany(books);
    return result.insertedCount;
  } catch (error) {
    // Handle the error here
    console.error(error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
