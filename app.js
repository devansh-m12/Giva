import express  from "express";
import cors from "cors";

const app = new express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));


app.get("/", (req, res) => {
    res.send("Hello world!");
});

import routes from "./routes/index.js";

app.use("/api", routes);

export default app;