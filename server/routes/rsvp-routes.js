import express from "express"
import { addGuest } from "../controllers/rsvp-controller.js";

const rsvpRouter = express.Router();

rsvpRouter.route("/addGuest").post(addGuest);

export { rsvpRouter };
