
// Cuando se crea un nuevo cliente
exports.nuevoCliente = (req, res, next) => {

    // TODO: Insertar en la DB
    console.log(req.body);

    res.json({mensaje: "El cliente se agrego correctamente"});


}