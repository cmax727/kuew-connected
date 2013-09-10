"use strict";

(function(){
    var app = angular.module('kuew');
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

    app.directive('userSkills', ['templatePath', function (templatePath) {
        return {
            restrict: 'EA',
            templateUrl: templatePath('components/user-skills.html'),
            transclude: false,
            replace: true,
            link: function($scope, element, attrs) {
                $scope.skills = [];
                
                $scope.skillNames = ['HTML5', 'PHP', 'JQuery', 'Graphic Design', 'UI', 'Marketing', 'Market Research', 'Social Media', 'Social Media Marketing', 'Facebook Marketing', 'LinkedIn', 'Email Marketing', 'MySql', 'Kuew', 'Human Resources', 'Management '];
                
                $scope.removeSkill = function(skill) {
                    var idx = $scope.skills.indexOf(skill);
                    if (idx < 0) return;
                    
                    $scope.skills.splice(idx, 1);
                };
                
                $scope.addSkill = function() {
                    $scope.skills.push({name: $scope.newSkill, level: 50});
                    $scope.newSkill = '';
                };
            }
        };
    }]);
}).call(this);