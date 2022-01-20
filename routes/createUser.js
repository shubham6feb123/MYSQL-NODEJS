const express = require("express");

const route = express.Router();

//middleware
const {createUser,getAllStudent} = require("../controller/createUser");

route.post("/create-user",createUser);
route.get("/get-students",getAllStudent);

module.exports = route;