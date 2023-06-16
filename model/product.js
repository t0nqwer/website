import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  fabric: { type: Schema.Types.ObjectId, ref: "Fabric" },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: Array, required: true },
  category: {},
  brand: {},
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
