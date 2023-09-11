import logger from "../../utils/helpers";
import mongoose from "mongoose";

async function connectDB() {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(process.env.MONGO_URI!)
        logger.success("Connected to database")
    } catch (error) {
        logger.error("Unable to connect to database")
    }
}

export default connectDB;