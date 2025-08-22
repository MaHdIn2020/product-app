import { MongoClient, ServerApiVersion } from "mongodb";


export default function dbConnect(collectionName){

    const uri = process.env.MONGO_URL
    console.log("Mongo URI:", process.env.MONGO_URL);

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
});
    return client.db(process.env.DB_NAME).collection(collectionName)
}