'use strict'

app = angular.module('kuew')
app.directive 'multiStepInput', (templatePath) ->
  restrict: 'EA'
  transclude: true
  replace: true
  controller: 'MultiStepInputController'
  templateUrl: templatePath('components/multi-step-input.html')
  require: '^?ngModel'
  scope:
    ngModel: '='


app.controller 'MultiStepInputController', ($scope) ->
  $scope.layout = []

  @pushLayout = (layoutItem) ->
    if $scope.layout.indexOf(layoutItem) == -1
      $scope.layout.push(layoutItem)