import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const productSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    price: {
      default: 0,
      type: Number,
    },
    discountPercentage: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      // ref: "Category",
      required: true,
      // type: Schema.Types.ObjectId,
      type: String,
    },
    thumbnail: {
      required: true,
      type:String
    },
    images: {
      type: [
        String
      ],
      default: [],
    },
  },
  { timestamps: true }
);

productSchema.plugin(mongooseAggregatePaginate);

export const Product = mongoose.models?.products ||mongoose.model("products", productSchema);
