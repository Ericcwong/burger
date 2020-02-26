const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/",function(req,res){
    burger.selectAll(function(data){
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});
router.put("/api/burgers/:id", function(req, res){
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