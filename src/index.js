// # mongodb://127.0.0.1:27017/nazia
// # URL =mongodb://localhost:27017/ProectTesting

require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const cros = require("cors");
const connect = require("./config/db");
const userRoute = require("./features/User/user.route");

const app = express();
app.use(express.json());
app.use(cros());
app.use("/users", userRoute);


app.listen(PORT,  async () =>{
    await connect();
    console.log(`listening to http://localhost:${PORT}`)
})