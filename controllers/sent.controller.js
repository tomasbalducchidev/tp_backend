const SentService = require("../services/sentService");
// const exceptions = require("../common/exceptions");
// const error = require("../common/error");

const getAll = async (req, res) => {
  const query = req.query;
  console.log("get all controller - query : " + JSON.stringify(query));

  //llamar al servicio de productos
  const sent = await SentService.getAllService();
  res.status(200).json(sent);
};

// const create = async (req,res)=>{
//     const data = req.body
//     console.log("create controller - body : "+JSON.stringify(data))
//     const productoId = await ProductService.create(data)
//     res.status(201).json({productoId})
// }

// const actualizar = async (req,res)=>{
//     const data = req.body
//     const params = req.params
//     console.log("actualizar controller - params : "+JSON.stringify(params))
//     const id = params.id
//     console.log("actualizar controller - body : "+JSON.stringify(data))
//     const actualizado = await ProductService.actualizar(id,data)
//     res.status(200).json({actualizado})
// }

module.exports = {
  getAll,
  // create,
  // actualizar
};
