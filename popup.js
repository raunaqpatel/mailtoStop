$('a[href^="mailto:"]').click(function (e) {

    e.preventDefault();
    var a = $(this).attr('href');

    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
    var email = a.match(re);

    console.log(email[0]);

    copyToClipboard(email[0]);
});


function copyToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // in your contentscript.js
    chrome.runtime.sendMessage({
        msg: str
    }, function (response) {
        console.log(response);
    });
}