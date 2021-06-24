const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')


const app = express();
app.use(cors())


// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bem vindo ao servidor NÃO PRECISO DE API!" });
});

// set port, listen for requests
require("./routes/pic.routes")(app);

app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});