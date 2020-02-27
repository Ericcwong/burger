const orm = require("../config/orm");

let burger = {
    selectAll: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    addBurger: function(cols, vals, cb) {
        orm.addBurger("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
    eatenBurger: function(objColValues, condition, cb){
        orm.updateOne("burgers", objColValues, condition, function(res){
            cb(res);
        });
    }

}


//confused on how to write update COME BACK TO ME!
// orm.updateOne("burgers","burger_name",)
module.exports = burger;
