'use strict'

app = angular.module('kuew')
app.controller 'NewMilestoneController', ($scope) ->
  $scope.milestone =
    name: null
    type: 'chron'
    purpose: ''

  $scope.transitions =
    'milestone-type': ->
      "milestone-type-#{$scope.milestone.type}"

    'milestone-purpose': ->
      "milestone-purpose-#{$scope.milestone.purpose}"

    'milestone-responsive-type': ->
      "milestone-responsive-type-#{$scope.milestone.based_on}"

  $scope.allTasks = [
    {name: "Task 1", id: 1},
    {name: "Task 2", id: 2},
    {name: "Task 3", id: 3},
    {name: "Task 4", id: 4},
    {name: "Task 5", id: 5},
    {name: "Task 6", id: 6}
  ]

  $scope.allMilestones = [
    {name: "Milestone 1", id: 1},
    {name: "Milestone 2", id: 2},
    {name: "Milestone 3", id: 3},
    {name: "Milestone 4", id: 4},
    {name: "Milestone 5", id: 5},
    {name: "Milestone 6", id: 6}
  ]

  $scope.minDate = new Date()