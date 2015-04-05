var main = function() {
    $('#button').click( function(){
        //get the url from the input
        var url = $("url").val();
            if(url === undefined)
            {
                alert("Please enter a url into the text box");
            }
    });

};

$(document).ready(main);