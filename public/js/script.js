$(function(){
    $(".devourBurger").on("click",function(){
        let burger_id = $(this).data("burger_id");
        console.log(burger_id);
        let devoured = $(this).data("devoured");
        console.log(devoured)
        let eatBurgerState = {
            devoured: true
        };
        console.log(eatBurgerState)
        $.ajax("/api/burger/" + burger_id, {
            type: "PUT",
            data: eatBurgerState
        }).then(function(){
            console.log(devoured + " has been eaten!")
            location.reload();
        });
    });


    $(".addBurger").on("submit", function(event){
        event.preventDefault();
        let newBurger = {
            burger_name: $("#burger").val().trim()
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("New burger added!");
                location.reload();
            }
        );
    });
});