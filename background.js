chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request); //this is getting invoked
        // type, iconUrl, title and message.
        var opt = {
            type: "basic",
            title: "Email Copied",
            message: "Copied :" + request.msg + " to clipboard",
            iconUrl: '/images/img32.png'
        };
        chrome.notifications.create(opt, function (rs) {
            console.log(rs);
        });


        sendResponse({
            returnMsg: "All good!"
        }); // optional response
    });