'use strict'

app = angular.module('kuew')
app.factory 'KuewActionItem', ($rootScope) ->
  class KuewActionItem
    constructor: (scope, options) ->
      s = if angular.isDefined(scope) then scope else $rootScope
      @scope = s.$new()
      @scope.editing = true
      @scope.value = null
      @scope.options = options || {}
      @scope.beginEdit = => @beginEdit()
      @scope.finishEdit = => @finishEdit()
      @scope.isValid = false

      @scope.$watch 'isValid', =>
        @scope.$emit 'event:itemIsValidChanged',
                     @, @scope.isValid,
                     freeze: @options.freezeIfValid != false

      @scope.$watch 'value', => @isValid

      Object.defineProperty @, 'editing', get: -> @scope.editing
      Object.defineProperty @, 'value',
        get: -> @scope.value
        set: (v) -> @scope.value = v
      Object.defineProperty @, 'isValid', get: -> @scope.isValid = @validate()

      Object.defineProperty @, 'options', get: -> @scope.options

    beginEdit: -> @scope.editing = true
    finishEdit: -> @scope.editing = false
    reset: ->
      @scope.value = null
      @scope.editing = true

    validate: -> false

    tamplateUrl: undefined

    setDefaultOption: (key, value) ->
      @options[key] = value unless angular.isDefined(@options[key])
