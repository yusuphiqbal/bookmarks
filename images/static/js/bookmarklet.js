(function() {
    let jqueryVersion = '3.4.1';
    let siteUrl = 'https:127.0.0.1:8000/';
    let staticUrl = siteUrl + 'static/';
    let minWidth = 100;
    let minHeight = 100;

    function bookmarklet(msg) {
        // Here goes the bookmarlet code.
    }

    // Check if jquery is loaded.
    if (typeof window.JQuery != 'undefined') {
        bookmarklet();
    } else {
        // Check for conflicts.
        let conflict = typeof window.$ != 'undefined';
        let script = document.createElement('script');
        script.src = '//ajax.googleapis.com/ajax/libs/jquery/' + jqueryVersion + '/jquery.min.js';
        document.head.appendChild(script);
        let attempts = 15;

        (function() {
            if (typeof window.JQuery == 'undefined') {
                if (--attempts == 0) {
                    window.setTimeout(arguments.callee, 250);
                } else {
                    alert('An error occured while loading JQuery.');
                }
            } else {
                bookmarklet();
            }
        })();
    }
})()
