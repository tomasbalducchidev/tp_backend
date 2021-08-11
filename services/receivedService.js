const receivedModel = require("../models/receivedModel");
const error = require("../common/error");
const exceptions = require("../common/exceptions");

const getAllService = async () => {
  //   console.log("getAllService - nombre" + nombre + " - estado: " + estado);

  const received = await receivedModel.findAll({
    where: {
      isVisible: 1,
    },
  });
  console.log("received return : " + received);
  return received;
};

const actualizar = async (idreceived) => {
  // const { de, para, message, isVisible } = data;
  // console.log(
  //   "actualizar mensaje:" + JSON.stringify({ de, para, message, isVisible })
  // );
  const received = await receivedModel.update(
    { isVisible: 0 },
    {
      where: {
        idreceived,
      },
    }
  );
  if (!received) {
    return false;
  }
  return true;
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
  actualizar,
};
