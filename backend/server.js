const express = require("express");
const app = express();
const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

let db;

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    if (err !== null) {
        console.log(err);
    } else {
        db = client.db("Marea");
    }
});

app.get("/api/cita", function (req, res) {
    db.collection("cita")
      .find()
      .toArray(function (err, datos) {
        if (err !== null) {
          res.send(err);
        } else {
          res.send(datos);
        }
      });
  });

app.post("/api/cita", function (req, res) {
    let cita = {
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        precio: req.body.precio,
    };

    db.collection("cita").insertOne(cita, function (err, datos) {
        if (err !== null) {
            res.send(err);
        } else {
            db.collection("cita")
                .find()
                .toArray(function (err, data) {
                    if (err !== null) {
                        res.send(err);
                    } else {
                        res.send(data);
                    }
                });
        }
    });
});


app.listen(3000);