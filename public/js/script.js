$(function(){
    $(".devourBurger").on("click",function(){
        let burger_id = $(this).data("id");
        console.log(burger_id);
        let eatenBurger = $(this).data("eatenBurger");
        let eatenBurgerState = {
            burger: eatenBurger
        };

        $.ajax("/api/burgers/" + burger_id, {
            type: "PUT",
            data: eatenBurgerState
        }).then(function(){
            console.log(eatenBurger + " has been eaten!")
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