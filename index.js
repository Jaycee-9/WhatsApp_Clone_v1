import express from "express";
import connectToDb from "./db/index.js";
import Route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);
Promise.all([connectToDb()])
  .then(() => {
    app.listen(PORT, () =>
      console.log(`server is running on PORT http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
