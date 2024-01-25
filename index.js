import connectDB from "./db/connection.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 8000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
    app.on("error", (err) => {
        console.log("Server error: ", err);
    });
})
.catch((err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
});