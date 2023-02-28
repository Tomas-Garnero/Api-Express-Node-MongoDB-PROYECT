const mongodb = require("mongodb");
const Schema = mongodb.Schema;

const pacientesSchema = new Schema({
    nombre: {
        type: String,
        trim: true,  // elimina espacios
    },
    propietario: {
        type: String,
        trim: true
    },
    fecha: {
        type: String,
        trim: true
    },
    hora: {
        type: String,
        trim: true
    },
    sintomas: {
        type: String,
        trim: true
    }
});

module.exports = mongodb.model("Paciente", pacientesSchema);