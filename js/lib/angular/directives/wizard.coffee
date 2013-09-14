'use strict'

app = angular.module('kuew')

app.controller 'WizardController', ($scope) ->
  $scope.steps = []
  $scope.currentStep = 0
  @pushStep = (element) ->
    $scope.steps.push element
    $scope.steps.length - 1

  @getCurrentStep = -> $scope.currentStep

  @getSteps = -> $scope.steps


app.controller 'WizardStepController', ($scope) ->

app.directive 'wizard', (templatePath) ->
  transclude: true
  replace: true
  templateUrl: templatePath('components/wizard/container.html')
  restrict: 'EA'
  controller: 'WizardController'
  scope:
    wizardId: '@id'
    transitions: '='
  link: ($scope, element, attrs) ->
    element.wizard
      afterBackward: -> $scope.currentStep--
      afterForward: -> $scope.currentStep++
      transitions: $scope.transitions


app.directive 'step',
(templatePath, $log, $timeout) ->
  require: '^wizard'
  restrict: 'EA'
  transclude: true
  replace: true
  templateUrl: templatePath('components/wizard/step.html')
  controller: 'WizardStepController'
  scope: {heading: '@'}
  link: ($scope, element, attrs, controller) ->
    $scope.stepIndex = controller.pushStep(element)
    $scope.showNavigation = $scope.$eval(attrs.showNavigation) != false

    $scope.isCurrent = ->
      controller.getCurrentStep() == $scope.stepIndex

    $scope.isLast = ->
      $scope.stepIndex == controller.getSteps().length - 1

    $scope.isFirst = ->
      $scope.stepIndex == 0

    $timeout(->
      element.find('.livicon').each ->
        angular.element(@).addLivicon()
    , 100) if $scope.showNavigation


app.directive 'branch', ->
  restrict: 'EA'
  require: '^wizard'
  transclude: true
  replace: true
  template: '<div class="branch" ng-transclude></div>'
  link: ($scope, element, attrs) ->