
const {connection} = require("../mysqldb");

exports.createUser = (req,res)=>{
    // console.log("data",req.body);
    const {Name,EnrollmentNum,Branch,DateOfBirth,Age,Address,City,State,Email} = req.body;
let sqlQuery = 'INSERT INTO Students SET ?';    
try {
  connection.query(sqlQuery,req.body,(error,result)=>{
    if(result){  
    // console.log("student created",result)
    res.json(result)
}else{
    // throw error;
    res.status(400).json(error)
    // console.log("failed to create student",error)
}
  });
   
} catch (error) {
    // console.log("failed to create student",error)
    res.status(400).json(error)
}
}

exports.getAllStudent = (req,res)=>{
    const sqlQuery = 'SELECT * FROM Students';
try {
    connection.query(sqlQuery,(error,result)=>{
        if(result){  
        // console.log("students list",result)
        res.json(result)
    }else{
        // throw error;
        res.status(400).json(error)
        // console.log("failed to get students",error)
    }
      });
} catch (error) {
    res.status(400).json(error)
    // console.log("failed to get students",error)
}
}