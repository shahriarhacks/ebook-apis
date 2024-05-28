import app from "./src/app";

const startServer = () => {
   const port = process.env.PORT || 4000;

   app.listen(port, () => {
      console.log(`Server running on port ${port}`);
   });
};

startServer();
