$(function(){
    $(".devourBurger").on("click",function(event){
        let id = $(this).data("id");
        let eatenBurger = $(this).data("eatenBurger");
        let eatenBurgerState = {
            burger: eatenBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenBurgerState
        }).then(function(){
            console.log(eatenBurger + " has been eaten!")
            location.reload();
        });
    });
})