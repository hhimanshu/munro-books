import { client } from "./src/db";
import type { Book } from "./src/schemas/books.model";
import { insertBooks } from "./src/schemas/books.services";

const fetchBooks = async () => {
  const books = await fetch(
    "https://raw.githubusercontent.com/luminati-io/Amazon-popular-books-dataset/main/Amazon_popular_books_dataset.json"
  );
  const result = await books.json();
  //console.log(result);
  return result;
};

const saveBooks = async (books: Book[]) => {
  try {
    const totalInserted: number = await insertBooks(books);
    console.log(`Inserted ${totalInserted} books`);
  } catch (error) {
    console.error("Error inserting books:", error);
  }
};

const importBooks = async () => {
  console.log(`fetching books...`);
  const books = await fetchBooks();
  console.log(`books fetched, saving...`);
  await saveBooks(books as Book[]);
  console.log(`books saved`);
};

const dbUri = process.env.DB_URI;

if (!dbUri) {
  console.error("DB_URI not set in .env file. Exiting...");
  process.exit(1);
}

console.log(`importing books to ${dbUri}, this may take a while...`);
await importBooks();
await client.close();
console.log(`books imported`);
