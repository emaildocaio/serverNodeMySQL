const sql = require("./db.js");

// constructor
const Pic = function(pic) {
  this.id = pic.id;
  this.title = pic.title;
  this.description = pic.description;
  this.image = pic.image;
  this.idCategoria = pic.idCategoria;
  this.likes = pic.likes;
  this.dataPostagem = pic.dataPostagem;
};

Pic.create = (newPic, response) => {
  sql.query("INSERT INTO pics SET ?", newPic, (err, res) => {
    if (err) {
      console.log("error: ", err);
      // result(err, null);
      return;
    }

    console.log("created pic: ", { id: res.insertId, ...newPic });
    response.send({ id: res.insertId, ...newPic });
    // result(null, { id: res.insertId, ...newPic });
  });
};

Pic.findById = (picId, response) => {
  sql.query(`SELECT * FROM pics WHERE id = ${picId}`, (err, res) => {
    
    let valueReturn = {}
    
    if (err) {
      console.log("error: ", err);
    }

    if (res.length) {
      console.log("found pic: ", res[0]);
      valueReturn = res[0]
    }
    response.send(valueReturn);

    
  });
};

Pic.getAll = (response) => {
  sql.query("SELECT * FROM pics", (err, res) => {
    if (err) {
      console.log("error: ", err);
      // result(null, err);
      return;
    }
    response.send(res);
    // result(null, res);
  });
};

// Pic.update = (response) => {
//   sql.query("SELECT * FROM pics", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       // result(null, err);
//       return;
//     }
//     response.send(res);
//     // result(null, res);
//   });
// };


Pic.remove = (id, response) => {
  sql.query("DELETE FROM pics WHERE id = ?", id, (err, res) => {
    
    let valueReturn = {message: "SUCCESS"}
    let status = 200
    
    if (err) {
      console.log("error: ", err);
      // result(null, err);
      status = 500;
    }

    if (res.affectedRows == 0) {
      // not found Pic with the id
      valueReturn = {message: "Id não encontrado"};
      status = 500;
    }

    console.log("deleted pic with id: ", id);
    response.status(status).send(valueReturn);
    // result(null, res);
  });
};

Pic.removeAll = result => {
  sql.query("DELETE FROM pics", (err, res) => {
    if (err) {
      console.log("error: ", err);
      // result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} pics`);
    // result(null, res);
  });
};

module.exports = Pic;