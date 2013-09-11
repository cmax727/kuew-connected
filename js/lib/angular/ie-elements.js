"use strict";
(function(){
    var elements = ["wizard", "step", "branch"];

    for (var i = 0; i < elements.length; i++) {
        document.createElement(elements[i]);
    }
}).call(this);