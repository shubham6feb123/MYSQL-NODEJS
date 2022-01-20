const express = require("express")
const {connectToDb} = require("./mysqldb")
const fs = require("fs")
const app = express();

//connecting with database
connectToDb();
//json
app.use(express.json())

//including routes
// app.use("/api",require("./routes"))

fs.readdirSync("./routes").map(r=>{
    app.use("/api",require('./routes/'+r))
    // console.log("file",r)
});

app.listen(1337,()=>{
    console.log("server is listening on 1337")
})