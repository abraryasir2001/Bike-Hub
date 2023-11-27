const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const vehicleCollection = client
      .db("rental-service")
      .collection("vehicles");

      const teamCollection = client
      .db("rental-service")
      .collection("team");
    // api for creating a new vehicle post
    app.post("/add-a-vehicle", async (req, res) => {
      const vehicle = req.body;
      //insert to mongoDB
      const result = await vehicleCollection.insertOne(vehicle);
      // console.log(req.body);
      res.send(result);
    });

    //API for fetching all vehicles

    app.get("/all-vehicles", async (req, res) => {
      const result = await vehicleCollection.find().toArray();
      res.send(result);
    });

    //API for fetching single vehicle details
    app.get("/vehicle/:id", async (req, res) => {
      const id = req.params.id;
      //Find a vehicle using the id passed as param
      const result = await vehicleCollection.findOne({ _id: new ObjectId(id) });

      res.send(result);
    });

    //API for updating a single vehicle
    app.put("/update-by-id/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedVehicle = req.body;

      const updates = { $set: updatedVehicle };

      //now call the updateOne method for updated the selected vehicle

      const result = await vehicleCollection.updateOne(filter, updates);
    
      res.send(result);
    });

    //API for deleting a single vehicle
    app.delete("/delete-by-id/:id",async(req,res)=>{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
//now call the deleteOne method for deleted the selected vehicle

    const result=await vehicleCollection.deleteOne(filter);
    res.send(result);
    });

    //post a single teammate
    app.post("/add-teammate",async(req,res)=>{
      const teammate=req.body;
      const result=await teamCollection.insertOne(teammate);
      res.send(result);
    });
//get all the teammates
app.get("/all-teammates",async(req,res)=>{
  const result=await teamCollection.find().toArray();
  res.send(result);
});





    //API for update a teammate
    
    app.get("/teammates/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const teammate = await teamCollection.findOne({ _id: new ObjectId(id) });
        if (!teammate) {
          return res.status(404).send({ error: "Teammate not found" });
        }
        res.send(teammate);
      } catch (error) {
        res.status(500).send({ error: "Internal server error" });
      }
    });

    
    
    app.put("/teammates/:id", async (req, res) => {
      const id = req.params.id;
      const updatedTeammate = req.body;
    
      try {
        const result = await teamCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updatedTeammate }
        );
        
        if (result.modifiedCount === 0) {
          return res.status(404).send({ error: "Teammate not found" });
        }
    
        res.send({ message: "Teammate updated successfully" });
      } catch (error) {
        res.status(500).send({ error: "Internal server error" });
      }
    });

    
    

    //API for delete a teammate
    app.delete("/deleteteammate/:id",async(req,res)=>{
        const id=req.params.id;
        const filter={_id: new ObjectId(id)};

        // now call the deleteOne method for delete the selected teammate

        const result= await teamCollection.deleteOne(filter);
        res.send(result);
    })





  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port $(port)`);
});
