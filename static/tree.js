"use strict";

var on = true;
var selector = ".bulb";
setInterval(function() {
    if(on) { 
        $(".bulb").addClass('dim');
        on = false;
    }
    else {
        $(".bulb").removeClass('dim');
        on = true;
    }
}, 1000);