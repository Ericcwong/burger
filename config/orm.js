const connection = require("./connection");

let orm = {
   selectAll: function(whatToSelect, table){
       let selectAllQuery = "SELECT * FROM ??";
       connection.query(selectAllQuery, [table],function(err,res){
           if(err) throw err;
           console.log(res);
       });
   },
   insertOne: function(whatTable,value0,value1){
       let insertQuery = "INSERT INTO ?? (??, ??) VALUES (??, ??)";
       connection.query(insertQuery, [whatTable, value0, value1, value0, value1],function(err,res){
           if(err) throw err;
           console.log(res);
       });
   },
   updateOne: function(whatTable, oldName, updatedName,oldBoolean,updateBoolean, id ){
       let updateQuery = "UPDATE ?? SET ?? = ??, ?? = ?? WHERE ?? = ?";
       connection.query(updateQuery,[whatTable,oldName,updatedName,oldBoolean,updateBoolean,id,id],function(err,res){
           if(err) throw err;
           console.log(res);
       });
   }
};

module.exports = orm;