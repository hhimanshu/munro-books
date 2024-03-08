import mongoose from "mongoose";

const FormatSchema = new mongoose.Schema({
  name: String,
  price: String,
  url: String,
});

const BestSellersRankSchema = new mongoose.Schema({
  category: String,
  rank: Number,
});

const BookSchema = new mongoose.Schema({
  asin: String,
  ISBN10: String,
  answered_questions: Number,
  availability: String,
  brand: String,
  currency: String,
  date_first_available: Date,
  delivery: [String],
  department: String,
  description: String,
  discount: String,
  domain: String,
  features: [String],
  final_price: Number,
  format: [FormatSchema],
  image_url: String,
  images_count: String,
  initial_price: Number,
  item_weight: String,
  manufacturer: String,
  model_number: String,
  plus_content: Boolean,
  product_dimensions: String,
  rating: String,
  reviews_count: Number,
  root_bs_rank: Number,
  seller_id: String,
  seller_name: String,
  timestamp: Date,
  title: String,
  upc: String,
  url: String,
  video: Boolean,
  video_count: Number,
  categories: [String],
  best_sellers_rank: [BestSellersRankSchema],
});

export type Book = mongoose.InferSchemaType<typeof BookSchema>;
export const Book = mongoose.model("Book", BookSchema);
