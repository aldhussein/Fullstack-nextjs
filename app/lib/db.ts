import { error } from "console";
import mongoose from "mongoose";

let connection: typeof mongoose;

const url = process.env.MONGO_URL as string;


const connectToTheDatabase = async () => {

    try {
        if (!connection) {
            connection = await mongoose.connect(url)
        }

        return connection;

    }
    catch (e) {

        throw new Error(e as any).message
    }
}


export default connectToTheDatabase;