import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_STRING;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

if (!uri) {
  throw new Error(
    "Please define the MONGODB_CONNECTION_STRING environment variable inside .env.local"
  );
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const Client = new MongoClient(uri!, options);
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await Client.connect();
    // Send a ping to confirm a successful connection
    await Client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await Client.close();
  }
}
run().catch(console.dir);

export default Client;
