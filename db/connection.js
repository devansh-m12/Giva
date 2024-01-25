import mongoose from "mongoose";

const DB_NAME = 'todo-list';

const connectDB = async () => {
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('Database is connected to:', db.connection.host);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB