chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {

        var emailSaved = "";
        if (request.type == "saveEmail") {
            var opt = {
                type: "basic",
                title: "Email Copied",
                message: "Copied :" + request.msg + " to clipboard",
                iconUrl: '/images/logo32.png'
            };
            chrome.notifications.create(opt);


            saveChanges(request.msg, request.msg);
            sendResponse({
                returnMsg: "Notification Sent"
            }); // optional response
        }
        if (request.type == "sendData") {
            emailSaved = getallKeys();
            sendResponse({
                returnMsg: emailSaved
            }); // optional response
        }


    });



function saveChanges(key, text) {

    var storage = chrome.storage.local;

    var v1 = key;

    var obj = {};

    obj[v1] = text;

    storage.set(obj);

    // storage.get(v1, function (result) {
    //     console.log(v1, result);
    //     //console output = k1 {v1:'s1'}
    // });

    // storage.get('v1', function (result) {
    //     console.log(result);
    //     //console output = {v1:'s1'}
    // });
}


function getallKeys() {
    var a = "";
    chrome.storage.local.get(null, function (items) {
        var allKeys = Object.keys(items);
        a = allKeys;
    });


}