import { Book } from "../schemas/Book";
import * as mongoose from "mongoose";

export const insertBooks = async (dbUri: string, booksJsonArray: any[]) => {
  try {
    await mongoose.connect(dbUri);
    await Book.insertMany(booksJsonArray);
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error inserting books:", error);
  }
};
