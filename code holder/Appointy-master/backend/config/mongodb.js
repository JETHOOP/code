import mongoose from "mongoose";
console.log("MONGO_URI VALUE:", process.env.MONGO_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/appointy`);
    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
