import { insertBooks } from "./src/lib/db/services/insert-books";

const fetchBooks = async () => {
  const books = await fetch(
    "https://raw.githubusercontent.com/luminati-io/Amazon-popular-books-dataset/main/Amazon_popular_books_dataset.json"
  );
  const result = await books.json();
  //console.log(result);
  return result;
};

const saveBooks = async (dbUri: string, books: any[]) => {
  try {
    await insertBooks(dbUri, books);
  } catch (error) {
    console.error("Error inserting books:", error);
  }
};

const importBooks = async (dbUri: string) => {
  console.log(`fetching books...`);
  const books = await fetchBooks();
  console.log(`books fetched, saving...`);
  await saveBooks(dbUri, books as any[]);
  console.log(`books saved`);
};

const dbUri = process.env.DB_URI;

if (!dbUri) {
  console.error("DB_URI not set in .env file. Exiting...");
  process.exit(1);
}

console.log(`importing books to ${dbUri}, this may take a while...`);
await importBooks(dbUri);
console.log(`books imported`);

