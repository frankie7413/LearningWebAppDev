var main = function() {
    var $result,
        url,
        link,
        index,
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
                link = checkinput(data.url);
                $("#result").append("<a href = "+ link + ">" + data.url + "</a>");  
            })
            .fail(function (data, status){
                console.log("Call is fail");
            });
        }

    });

    //parse the json string to be able to get or to link to long url 
    function checkinput (link) {
        index = link.indexOf("localhost:3000");

        if(index > -1) {
            //posturl = posturl.replace("http://localhost:3000/", "");
            link = link.replace("localhost:3000", "");
        }

        return link;
    }

    setInterval(function() {
        $.getJSON("/zapp.json", function(elements) {
            $('#visit').hmtl("");
            //process the array i guess 
        });
    }, 5000);

};

$(document).ready(main);