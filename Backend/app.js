const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./util/database");
const homeRoute = require("./routes/homeRoute");

const app = express();

app.use(bodyParser.json({ extended: false }));
app.use(cors());

app.use("/home", homeRoute);

sequelize
  .sync()
  .then((res) => {
    // console.log(res);
    app.listen(3030);
  })
  .catch((err) => console.log(err));
