import express from "express";
import axios from "axios";

const app = express();
const port = 4000;
const API_URL = "https://v2.jokeapi.dev/joke/";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "Programming?type=twopart");
    res.render("index.ejs", {
        jokeSetup: result.data.setup,
        jokeDelivery: result.data.delivery 
    })
    } catch (error) {
       console.log(error.response.data);
       console.log(error.response.status);
    }
  });

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });