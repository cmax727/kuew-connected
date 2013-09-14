'use strict'

app = angular.module('kuew')
app.factory 'Action', ($rootScope) ->
  class Action
    constructor: (parentScope) ->
      if angular.isDefined(parentScope)
        @$scope = parentScope.$new()
      else
        @$scope = $rootScope.$new()

      @$scope.steps = {}

    hasStep: (name) ->
      (key for key of @$scope.steps when key == name).length > 0

    addStep: (name) ->
      @$scope.steps[name] = null

    removeStep: (name) ->
      delete @$scope.steps[name] if @hasStep(name)

    addOption: (step, options) ->