const express = require("express");
const mongodb = require("mongodb");

// Crear el servidor
const app = express();

// Conectar a MongoDB
const MongoClient = mongodb.MongoClient;
const uri = "mongodb://localhost/veterinaria";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

// Puerto y arrancar el servidor
app.listen(4000, () => {
    console.log("Servidor funcionando");
})
