const sentModel = require("../models/sentModel");
const error = require("../common/error");
const exceptions = require("../common/exceptions");

const getAllService = async () => {
  //   console.log("getAllService - nombre" + nombre + " - estado: " + estado);

  const sent = await sentModel.findAll({
    where: {
      isVisible: 1,
    },
  });
  console.log("sent return : " + sent);

  return sent;
};

const create = async (data) => {
  const { de, para, message } = data;
  console.log("Crear mensaje:" + JSON.stringify({ de, para, message }));
  const sent = await sentModel.create({
    de,
    para,
    message,
  });

  return sent.id;
};

/*
await User.update({ lastName: "Doe" }, {
  where: {
    lastName: null
  }
});
*/

const actualizar = async (idsent) => {
  // const { de, para, message, isVisible } = data;
  // console.log(
  //   "actualizar mensaje:" + JSON.stringify({ de, para, message, isVisible })
  // );
  const sent = await sentModel.update(
    { isVisible: 0 },
    {
      where: {
        idsent,
      },
    }
  );
  if (!sent) {
    return false;
  }
  return true;
};

module.exports = {
  getAllService,
  create,
  actualizar,
};
