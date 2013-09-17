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
    isValid: '='

  link: ($scope, element, attrs) ->
    $scope.el = -> element


app.controller 'MultiStepInputController', ($scope, _, $timeout) ->
  $scope.layout = []
  $scope.maxShown = 1

  indexForModel = (model) -> _.findIndex($scope.layout, (l) -> l.model == model)
  focusElement = (i) -> $timeout ->
    return unless angular.isDefined($scope.el)
    $scope.el().find('ul li:nth-child(' + i + ') .focusable').focus()
  , 200

  $scope.allValid = () ->
    _.reduceRight $scope.layout, (a, b) ->
      a && b.model.isValid
    , true

  @getValues = ->
    values = {}
    for item in $scope.layout
      if item.model.isValid
        values[item.name] = item.model.value
      else
        values[item.name] = null
    values

  @updateList = ->
    i = _.findIndex($scope.layout, (l) -> !l.model.isValid)
    if i < 0
      $scope.maxShown = $scope.layout.length
    else
      $scope.maxShown = i + 1

  @pushLayout = (layoutItem) ->
    if $scope.layout.indexOf(layoutItem) == -1
      $scope.layout.push(layoutItem)

  @showAtLeast = (model) ->
    @updateList()

  @hideUpTo = (model) ->
    i = indexForModel(model)
    for j in [i..($scope.layout.length-1)]
      $scope.layout[j].model.reset()

    @updateList()

  $scope.$watch 'allValid()', (newValue) ->
    $scope.isValid = !!newValue

  $scope.$watch 'maxShown', =>
    focusElement($scope.maxShown - 1)

  $scope.$watch 'layout|field:"model"|field:"value"', =>
    $scope.ngModel = @getValues()
  , true
