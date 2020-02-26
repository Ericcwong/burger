const orm = require("../config/orm");

let burger = {
    selectAll: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    addBurger: function(cols, vals, cb){
        orm.create("burgers",cols,vals, function(res){
            cb(res);
        });
    },
    eatenBurger: function(objColValue, condition, cb){
        orm.updateOne("burgers", objColValue, condition, function(res){
            cb(res);
        });
    }

}


//confused on how to write update COME BACK TO ME!
// orm.updateOne("burgers","burger_name",)
module.exports = burger;
