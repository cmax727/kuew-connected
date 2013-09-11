"use strict";
(function(){
    var app = angular.module('kuew');

    app.controller('WizardController', ['$scope', function ($scope) {
        $scope.steps = [];
        $scope.currentStep = 0;
        this.pushStep = function(element) {
            $scope.steps.push(element);
            return $scope.steps.length - 1; // the current index of the pushed element
        };

        this.getCurrentStep = function() {
            return $scope.currentStep;
        }

        this.getSteps = function() {
            return $scope.steps;
        }
    }]);

    app.controller('WizardStepController', ['$scope', function ($scope) {
        
    }])

    app.directive('wizard', ['templatePath', function (templatePath) {
        return {
            transclude: true,
            replace: true,
            templateUrl: templatePath('components/wizard/container.html'),
            restrict: 'EA',
            controller: 'WizardController',
            scope: {
                wizardId: '@id',
                transitions: '='
            },
            link: function (scope, iElement, iAttrs) {
                iElement.wizard({
                    afterBackward: function() {
                        scope.currentStep--;
                    },
                    afterForward: function() {
                        scope.currentStep++;
                    },
                    transitions: scope.transitions
                });
            }
        };
    }]);

    app.directive('step', ['templatePath', '$log', '$timeout', function (templatePath, $log, $timeout) {
        return {
            require: '^wizard',
            restrict: 'EA',
            transclude: true,
            replace: true,
            templateUrl: templatePath('components/wizard/step.html'),
            controller: 'WizardStepController',
            scope: {
                heading: '@'
            },
            link: function (scope, iElement, iAttrs, controller) {
                scope.stepIndex = controller.pushStep(iElement);
                scope.showNavigation = scope.$eval(iAttrs.showNavigation) !== false;

                scope.isCurrent = function() {
                    return controller.getCurrentStep() == scope.stepIndex;
                }

                scope.isLast = function () {
                    return scope.stepIndex == controller.getSteps().length - 1;
                }

                scope.isFirst = function() {
                    return scope.stepIndex == 0;
                }

                if (scope.showNavigation) {
                    $timeout(function() {
                        iElement.find(".livicon").each(function(){
                            angular.element(this).addLivicon();
                        });
                    }, 100);
                }
            }
        };
    }]);

    app.directive('branch', [function () {
        return {
            require: '^wizard',
            transclude: true,
            replace: true,
            template: '<div class="branch" ng-transclude></div>',
            restrict: 'EA',
            link: function (scope, iElement, iAttrs) {
                
            }
        };
    }]);
}).call(this);