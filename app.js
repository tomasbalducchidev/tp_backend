/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/

const express = require("express");
const router = express.Router();
const app = express();
const config = require("config");
const apiPrefix = config.get("apiPrefix");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// estas son las rutas, que estan en la carpeta routes creada a mano:
app.use(apiPrefix + "/users", require("./routes/user.route"));
app.use(apiPrefix + "/seguridad", require("./routes/seguridad.route"));
app.use(apiPrefix + "/sent", require("./routes/sent.route"));
app.use(apiPrefix + "/received", require("./routes/received.route"));

//en la carpeta routes, en sus archivos declaro los metodos http.

// add router in the Express app.
app.use("/", router);

app.listen(3000, () => {
  console.log("Started on PORT 3000");
  console.log("Test ok");
});
