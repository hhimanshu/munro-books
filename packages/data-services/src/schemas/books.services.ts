import type { InsertManyResult } from "mongodb";
import type { Book } from "./books.model";
import { Books } from "./books.model";
import { db } from "../db";

export const insertBooks = async (books: Book[]): Promise<number> => {
  try {
    const result: InsertManyResult<Book> = await Books.insertMany(books);
    const index = await db
      .collection("books")
      .createIndex({ title: "text", description: "text" });
    console.log(`Index created: ${index}`);
    return result.insertedCount;
  } catch (error) {
    // Handle the error here
    console.error(error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
