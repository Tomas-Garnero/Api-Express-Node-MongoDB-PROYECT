const express = require("express");

// Crear el servidor
const app = express();

// Puerto y arrancar el servidor
app.listen(4000, () => {
    console.log("Servidor funcionando");
})