import { MongoClient } from "mongodb";

const { DB_URI } = process.env;

export const client = new MongoClient(DB_URI as string);
export const db = client.db();
