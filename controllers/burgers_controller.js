const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/",function(req,res){
    burger.selectAll(function(data){
        //setting burgers in index.handlebars to display data.
        let hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

router.post("/api/burger",function(req, res){
    console.log(req.body)

    burger.addBurger(["burger_name"],[req.body.burger_name],function(results){
        res.json({ id: results.insertId });
    });
});


router.put("/api/burger/:id", function(req, res){
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.eatenBurger(
        {
            devoured: req.body.devoured
        },
        condition,
        function(results){
            if(results.changedRows === 0){
                return res.status(404).end();
            }
            res.status(200).end()
        }
    );
});

module.exports = router;