const mysql  = require("mysql")

exports.connection = mysql.createConnection({
    host:"localhost",
    user: "shubham",
  password: "bahubali@1",
  database:"StudentManagementSystem"
})

exports.connectToDb = ()=>{
    this.connection.connect((error)=>{
        if(error) throw error;
        console.log("connected to mysql DB!")
    })
}