var main = function() {
    var $result,
        url,
        userUrl;

    $("#button").click(function() {
        url = $("#url").val();
        if (url === '') {
            alert("Empty url, please enter url.");
        }
        else {
            userUrl = JSON.stringify({url0:url});
            $.ajax({
                type: "POST",  //post to server.js
                url: "/geturl",    //route
                contentType: "application/json; charset=utf-8",
                dataType: "json",  //json type
                data: userUrl
            })
            .done(function (data, status) {
                $("#result").html(""); //html added
                //inserts link into dom
                $("#result").append("<a href="+data.url+">"+data.url+"</a>");  
            })
            .fail(function (data, status){
                console.log("Call is fail");
            });
        }

    });
};

$(document).ready(main);