const Pic = require("../models/pic.model.js");

// Create and Save a new Pic
exports.create = (req, res) => {
  const { title, description, image, idCategoriaa} = req.body
  const newPic = {title, description, image, idCategoriaa, likes:0, dataPostagem: new Date().getTime().toString()}
  Pic.create(newPic, res);
};

// Retrieve all Pics from the database.
exports.findAll = (req, res) => {
    Pic.getAll(res);
};

// Find a single Pic with a picId
exports.findById = (req, res) => {
  const {picId} = req.params
  Pic.findById(picId, res)
};

// Update a Pic identified by the picId in the request
// exports.update = (req, res) => {
//   const { title, description, image, idCategoriaa, likes} = req.body
//   const newPic = {title, description, image, idCategoriaa, likes}
//   const {picId} = req.params
//   Pic.update(picId, newPic, res);
// };

// Delete a Pic with the specified picId in the request
exports.delete = (req, res) => {
  const {picId} = req.params
  Pic.remove(picId, res)
};
