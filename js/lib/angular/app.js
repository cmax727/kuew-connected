(function(){
    var app = angular.module('kuew', []);
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

    app.directive('filteredList', ['_', '$timeout', 'templatePath', function(_, $timeout, templatePath){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: templatePath('components/filtered-list.html'),
            transclude: false,
            scope: {
                filteredList: '@',
                heading: '@',
                filterId: '@',
                filterScope: '@'
            },
            link: function($scope, element, attrs) {
                var selector = _.map(attrs.filteredList.split(" "), function(c){
                    return attrs.filterScope + "." + c;
                }).join(", ");

                var elements = angular.element(selector);
                $scope.teamMembers = _.map(elements, function(el) {
                    var e = angular.element(el);
                    return {
                        name: e.data('name'),
                        email: e.data('email'),
                        profileImage: e.data('profileimg'),
                        role: e.data('role'),
                        social: {
                            twitter: e.data('twitter'),
                            fb: e.data('fb')
                        }
                    };
                });

                $timeout(function(){
                    element.find(".livicon").each(function(){
                        angular.element(this).addLivicon().hide();
                    });

                    element.find('ul.deptList li').hover(function(){
                        angular.element(this).find(".livicon").fadeIn('fast');
                    },
                    function() {
                        angular.element(this).find(".livicon").fadeOut('fast');
                    });
                }, 100);

                
            }
        };
    }]);
}).call(this);