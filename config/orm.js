const connection = require("./connection");

function printQuestionMarks(num){
    let array = [];
    
    for(let i = 0; i < num; i++){
        array.push("?");
    }
    return array.toString();
}
function objectToSql(ob){
    let array = [];

    for(let key in ob){
        let value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }
    return array.toString();
}

let orm = {
   selectAll: function(table, cb){
       let selectAllQuery = "SELECT * FROM ??";
       connection.query(selectAllQuery, [table],function(err,res){
           if(err) throw err;
        //    console.log(res);
           cb(res);
       });
   },
   addBurger: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
   updateOne: function(table, objColValues, condition, cb){
       let updateQuery = "UPDATE ?? "
       console.log(updateQuery);
       connection.query(updateQuery,function(err,res){
           if(err) throw err;
           console.log(res);
            cb(res)
       });
   }
};

module.exports = orm;