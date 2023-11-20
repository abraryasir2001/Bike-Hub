const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri =
"mongodb+srv://BikeRoadsters:tsXWzdN86vo0uRvk@cluster0.cftvcr7.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
},
});

async function run() {
try {
    const vehicleCollection = client.db("rental-service").collection("vehicles")
    // api for creating a new vehicle post
    app.post("/add-a-vehicle", async(req, res) => {
        const vehicle = req.body;
        //insert to mongoDB
       const result = await vehicleCollection.insertOne(vehicle)
    // console.log(req.body);
    res.send(result);
    });
} finally {
}
}
run().catch(console.dir);
app.use(cors());
app.get("/", (req, res) => {
res.send("Hello World!");
});

app.listen(port, () => {
console.log(`Example app listening on port $(port)`);
});