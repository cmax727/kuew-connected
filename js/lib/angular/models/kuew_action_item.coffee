'use strict'

app = angular.module('kuew')
app.factory 'KuewActionItem', ($rootScope) ->
  class KuewActionItem
    constructor: (scope, options) ->
      s = if angular.isDefined(scope) then scope else $rootScope
      @scope = s.$new()
      @scope.editing = true
      @scope.value = null
      @scope.options = options
      @scope.beginEdit = => @beginEdit()
      @scope.finishEdit = => @finishEdit()

      Object.defineProperty @, 'editing', get: -> @scope.editing
      Object.defineProperty @, 'value', get: -> @scope.value
      Object.defineProperty @, 'options', get: -> @scope.options

    beginEdit: -> @scope.edit = true
    finishEdit: -> @scope.edit = false

    isValid: -> throw new Error("Not Implemented")
    tamplateUrl: undefined
