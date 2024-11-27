import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error("DATABASE_URL is not defined");
    }
    await mongoose.connect(dbUrl, {});
    console.log("Connected to MongoDB Successfully");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
