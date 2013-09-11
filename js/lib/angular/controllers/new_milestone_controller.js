"use strict";
(function(){
    angular.module('kuew').
    controller('NewMilestoneController', ['$scope', function ($scope) {
        $scope.milestone = {
            name: null,
            type: 'chron',
            purpose: ''
        };

        $scope.transitions = {
            'milestone-type': function($step, action) {
                return $scope.milestone.type;
            },

            'milestone-purpose': function($step, action) {
                return "milestone-purpose-" + $scope.milestone.purpose;
            },

            'milestone-responsive-type': function($step, action) {
                return "milestone-responsive-type-" + $scope.milestone.based_on;
            }
        };

        $scope.allTasks = [
            {name: "Task 1", id: 1},
            {name: "Task 2", id: 2},
            {name: "Task 3", id: 3},
            {name: "Task 4", id: 4},
            {name: "Task 5", id: 5},
            {name: "Task 6", id: 6}
        ];

        $scope.allMilestones = [
            {name: "Milestone 1", id: 1},
            {name: "Milestone 2", id: 2},
            {name: "Milestone 3", id: 3},
            {name: "Milestone 4", id: 4},
            {name: "Milestone 5", id: 5},
            {name: "Milestone 6", id: 6}
        ];

        $scope.minDate = new Date();
    }]);
}).call(this);