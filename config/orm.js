const connection = require("./connection");

// function printQuestionMarks(num){
//     let array = [];
    
//     for(let i = 0; i < num; i++){
//         array.push("?");
//     }
//     return array.toString();
// }
// function objectToSql(ob){
//     let array = [];

//     for(let key in ob){
//         let value = ob[key];
//         if(Object.hasOwnProperty.call(ob, key)){
//             if(typeof value === "string" && value.indexOf(" ") >= 0){
//                 value = "'" + value + "'";
//             }
//             array.push(key + "=" + value);
//         }
//     }
//     return array.toString();
// }

let orm = {
   selectAll: function(table, cb){
       let selectAllQuery = "SELECT * FROM ??";
       connection.query(selectAllQuery, [table],function(err,res){
           if(err) throw err;
           console.log(res);
           cb(res);
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