'use strict'

app = angular.module('kuew')
app.factory 'KuewSimpleInputActionItem', (KuewActionItem, templatePath) ->
  class KuewSimpleInputActionItem extends KuewActionItem
    constructor: (scope, options) ->
      super(scope, options)
      @setDefaultOption('inputType', 'text')

    templateUrl: templatePath('components/action-items/simple.html')
    validate: ->
      valid = true
      if angular.isFunction(@options.validate)
        valid = valid && @options.validate(@)

      valid