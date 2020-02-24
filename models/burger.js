const orm = require("../config/orm");

orm.selectAll("burgers");

orm.insertOne("burgers","burger_name","devoured");

//confused on how to write update COME BACK TO ME!
// orm.updateOne("burgers","burger_name",)