import { z } from "zod";
import { db } from "../db";

export const modelName = "books";

const Format = z.object({
  name: z.string(),
  price: z.string(),
  url: z.string(),
});

const BestSellersRank = z.object({
  category: z.string(),
  rank: z.number(),
});

const Book = z.object({
  asin: z.string(),
  ISBN10: z.string(),
  answered_questions: z.number(),
  availability: z.string(),
  brand: z.string(),
  currency: z.string(),
  date_first_available: z.union([z.string().nullable(), z.date().nullable()]),
  delivery: z.array(z.string()),
  department: z.string().nullable(),
  description: z.string().nullable(),
  discount: z.string().nullable(),
  domain: z.string(),
  features: z.array(z.string()),
  final_price: z.number(),
  format: z.array(Format),
  image_url: z.string(),
  images_count: z.string(),
  initial_price: z.number().nullable(),
  item_weight: z.string(),
  manufacturer: z.string().nullable(),
  model_number: z.string().nullable(),
  plus_content: z.boolean(),
  product_dimensions: z.string(),
  rating: z.string(),
  reviews_count: z.number(),
  root_bs_rank: z.number(),
  seller_id: z.string(),
  seller_name: z.string(),
  timestamp: z.string(),
  title: z.string(),
  upc: z.string().nullable(),
  url: z.string(),
  video: z.boolean(),
  video_count: z.number(),
  categories: z.array(z.string()),
  best_sellers_rank: z.array(BestSellersRank),
});

export type Book = z.infer<typeof Book>;
export const Books = db.collection<Book>(modelName);