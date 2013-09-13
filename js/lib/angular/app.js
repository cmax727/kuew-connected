(function(){
    var app = angular.module('kuew', ['ui.bootstrap', 'ngDragDrop']);
    app.factory('_', function() { return window._; });

    app.factory('templatePath', function() {
        var path = location.pathname;
        if (path.substr(path.length-1) != '/') {
            path = path.replace(/\/[^\/]+$/, '/');
        }

        path += "html-templates/";

        return function(partial) {
            return path + partial;
        }
    });
}).call(this);