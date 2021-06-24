module.exports = app => {
    const pics = require("../controllers/pic.controller.js");
  
    // Create a new Customer
    app.post("/pics", pics.create);
  
    // Retrieve all Customers
    app.get("/pics", pics.findAll);

    // // Update Customers
    // app.put("/pics/:picId", pics.update)
  
    // Retrieve a single Customer with picId
    app.get("/pics/:picId", pics.findById);
  
    // Delete a Customer with picId
    app.delete("/pics/:picId", pics.delete);
  
    // // Create a new Customer
    // app.delete("/pics", pics.deleteAll);
  };