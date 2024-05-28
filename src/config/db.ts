import mongoose from "mongoose";
import { config } from ".";

const connectDB = async () => {
   try {
      mongoose.connection.on("connected", () => {
         console.log(`Database connected successful!`);
      });
      mongoose.connection.on("error", (err) => {
         console.log("Error on connecting uri", err);
      });
      await mongoose.connect(config.mongo_uri as string);
   } catch (error) {
      console.log("Failed to connect DB", error);
      process.exit(1);
   }
};

export default connectDB;
