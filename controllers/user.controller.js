const userService = require("../services/UserService");
const error = require("../common/error");
const exceptions = require("../common/exceptions");

const getAll = async (req, res) => {
  const query = req.query;
  console.log("INIT GET USERs");
  const users = await userService.getAll(query);
  console.log("response controller " + JSON.stringify(users));
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  console.log(req.params);
  const params = req.params;
  const userId = params.id;
  const user = await userService.getById(userId);
  console.log("response controller " + JSON.stringify(user));
  return res.status(200).json(user);
};

//----------------pruebo el crear usuario
const createUser = async (req, res) => {
  const data = req.body;
  console.log("INIT CREATE USER  data:" + JSON.stringify(data));
  if (!data.userName) {
    console.log("no name in  CREATE USER  data:" + JSON.stringify(data));
    throw new error.AppError(exceptions.exceptionType.badRequest);
  }
  if (!data.password) {
    console.log("no pass in  CREATE USER  data:" + JSON.stringify(data));
    throw new error.AppError(exceptions.exceptionType.badRequest);
  }
  const newUser = await userService.createUser(data);
  console.log(JSON.stringify(newUser));
  return res.status(201).json(newUser);
};

//----------------------------

/*
const createUser = async (req, res) => {
  const data = req.body;
  console.log("INIT CREATE USER  data:" + JSON.stringify(data));
  if (!data.userName) {
    console.log("no name in  CREATE USER  data:" + JSON.stringify(data));
    throw new error.AppError(exceptions.exceptionType.badRequest);
  }
  if (!data.password) {
    console.log("no pass in  CREATE USER  data:" + JSON.stringify(data));
    throw new error.AppError(exceptions.exceptionType.badRequest);
  }
  const newUser = await userService.createUser(data);
  console.log(JSON.stringify(newUser));
  return res.status(201).json(newUser);
};

const login = async (req, res) => {
  const data = req.body;
  console.log("login - data:" + JSON.stringify(data));
  const userInfo = await userService.login(data);
  res.json(userInfo);
};
*/
module.exports = {
  createUser, //pruebo el crear usuario
  getAll,
  getById,
  //   login,
};
