(function(){
    var app = angular.module('kuew', []);
    app.factory('_', function() { return window._; });

    app.directive('filteredList', ['_', function(_){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: '/html-templates/components/filtered-list.html',
            transclude: false,
            scope: {
                filteredList: '@',
                heading: '@'
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
            }
        };
    }]);
}).call(this);