import express from "express";
import cors from "cors";
import { routes } from "./routes/index.js";
import errorHanlder from "./middleware/errorHandler.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

routes(app);

app.use(errorHanlder);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`APP IS LISTENING ON PORT ${PORT}`));
