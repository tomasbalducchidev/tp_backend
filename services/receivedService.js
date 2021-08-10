const receivedModel = require("../models/receivedModel");
const error = require("../common/error");
const exceptions = require("../common/exceptions");

const getAllService = async () => {
  //   console.log("getAllService - nombre" + nombre + " - estado: " + estado);

  const received = await receivedModel.findAll();
  console.log("received return : " + received);
  return received;
};

// const create = async (data) => {
//     const {nombre,precio,categoria,estado } = data
//     console.log("Crear producto:"+ JSON.stringify({nombre,precio,categoria,estado }));
//     const producto = await productosModel.create({
//         nombre,
//         precio,
//         categoria,
//         estado
//     })

//     return producto.id;
// }

// const actualizar = async (id,data) => {
//     const {nombre,precio,categoria,estado } = data
//     console.log("actualizar producto:"+ JSON.stringify({nombre,precio,categoria,estado }));
//     const producto = await productosModel.update({ estado}, {
//         where: {
//           id
//         }
//       });
//       if(!producto){
//           return false
//       }
//       return true
// }

module.exports = {
  getAllService,
  // create,
  // actualizar
};
