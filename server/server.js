import "dotenv/config";
import express from "express";
import cors from "cors";
import { rsvpRouter } from "./routes/rsvp-routes.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/rsvp", rsvpRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`running at http://localhost${PORT}`);
});
