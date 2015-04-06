var main = function() {
    var $result;

    $('#button').click( function(){
        //get the url from the input
        var url = $("url").val();
            if(url === undefined)
            {
                alert("Please enter a url into the text box");
            }
            else
            {
                $.getJson("/getURL", function(reduceURL) {
                    $("main .result").empty(); //clears previous html code
                    $("main .result").append("<a href="+data.url+">"+data.url+"</a>");

                });

            }
    });

};

$(document).ready(main);