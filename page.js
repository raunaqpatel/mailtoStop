$(document).ready(function () {
    //send message to background to get all the data
    // in your contentscript.js


    chrome.storage.local.get(null, function (items) {
        var allKeys = Object.keys(items);

        if (allKeys.length == 0) {
            $('#linksList').append("<li class=\"noClick\">Please save some email Ids first</li>");
        } else {
            allKeys.forEach(email => {
                var string = "<li>" + email + "</li>";
                $('#linksList').append(string);
            });
        }

        $('ul li').click(function (e) {
            if ($(this).hasClass('noClick')) {
                e.preventDefault();
            } else {
                var address = $(this).text();
                var el = document.createElement('textarea');
                el.value = address;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                $(".text>p").text("Copied");
                setTimeout(() => {
                    $(".text>p").text("Click the links to copy them to clipboard again");
                }, 500);
            }
        });
    });

});