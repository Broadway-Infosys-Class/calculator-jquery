$(function(){

    var operator = 0;
    var result = $("#display");
    $(".my-btn").click(function(){
        if ($(this).hasClass("operator")){
             operator++;
             if (operator == 1) {
                result.val(result.val() + $(this).text() );
             } else {
                 result.val(eval(result.val()) + $(this).text());
             }
        } else if ($(this).hasClass('number')) {
            //number
            result.val(result.val() + $(this).text() );
        }
        else if ($(this).hasClass("clear")){
            result.val("");
        }
        

        
       else if ($(this).hasClass("equals")) {
            result.val(eval(result.val()));
        }
        else {
            alert("wrong input");
        }

    })
})