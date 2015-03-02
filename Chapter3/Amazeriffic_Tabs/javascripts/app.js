var main = function () {
    "use strict";

    var toDos = [
    "Finish writing this book" ,
    "Take Gracie to the park" ,
    "Answer emails" ,
    "Prep for Monday's class" ,
    "Make up some new ToDos" ,
    "Get Groceries"
    ];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element); //store element tab #

        //creates click hander for the element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                $slide,
                $pic1,
                $pic2,
                $pic3,
                $pic4,
                j;

            $(".tabs a span").removeClass("active"); //removes active
            $element.addClass("active"); //sets active to clicked element
            $("main .content").empty();  //empties out prev loaded span

            if($element.parent().is(":nth-child(1)")) {
                //content to store ul of todo array backwards
                //array displayed backwards
                $content = $("<ul>");
                for (j = toDos.length - 1; j >= 0; j--) {
                    $content.append($("<li>").text(toDos[j]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                //list array normal order for each todo element
                $content = $("<ul>");
                toDos.forEach(function (todo)
                {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                //takes user input to add to todo array
                //<input><button>+<button>
                $input = $("<input>"),
                $button = $("<button >").text("+");

                $button.on("click", function () {
                    if($input.val() !== "") { //check if input empty
                        toDos.push($input.val()); //stores value in toDos
                        $input.val("");  //clears value
                    }
                });

                //<div><input><button>+<button></div>
                $content = $("<div>").append($input, $button);
            } else if ($element.parent().is(":nth-child(4)")){
                $slide.text("jQuery('a.gallery').colorbox({ opacity:0.5 , rel:'group1', slideshow:true });");
                $pic1 = $("<a>");
                $pic2 = $("<a>");
                $pic3 = $("<a>");
                $pic4 = $("<a>");

                $pic1.addClass("gallery").attr("heref", "Gallery/home.png").text("Home");

                $(".content").append($pic1);
                $(".content").append($slide);

            }


            $("main .content").append($content);

            return false;
        });

    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);