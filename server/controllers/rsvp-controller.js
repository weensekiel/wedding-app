import Knex from "knex";
import knexfile from "../knexfile.js";

const knex = Knex(knexfile);

async function addGuest(req, res) {
    const { name, email, attending } = req.body;

    try {
        if (!name || !email || attending === undefined) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        await knex("guests").insert({ name, email, attending });
        res.status(201).json({ message: "Post successful" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
}

export { addGuest };
