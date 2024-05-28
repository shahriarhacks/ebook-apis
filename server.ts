import app from "./src/app";
import { config } from "./src/config";
import connectDB from "./src/config/db";

const startServer = async () => {
   // Connecting DN
   await connectDB();

   const port = config.port || 4000;

   app.listen(port, () => {
      console.log(`Server running on port ${port}`);
   });
};

startServer();
