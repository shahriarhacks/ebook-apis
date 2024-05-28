import app from "./src/app";
import { config } from "./src/config";

const startServer = () => {
   const port = config.port || 4000;

   app.listen(port, () => {
      console.log(`Server running on port ${port}`);
   });
};

startServer();
