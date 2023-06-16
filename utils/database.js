import mongoose from "mongoose";
let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongoose already connected");
    return;
  }
  try {
    console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "KhwantaWebsite",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Mongoose connected");
  } catch (error) {
    console.log(error);
  }
};
connectToDatabase();
