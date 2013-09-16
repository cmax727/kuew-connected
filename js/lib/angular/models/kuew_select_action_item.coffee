'use strict'

app = angular.module('kuew')
app.factory 'KuewSelectActionItem', (KuewActionItem, templatePath) ->
  class KuewSelectActionItem extends KuewActionItem
    constructor: (scope, options) ->
      super(scope, options)

    templateUrl: templatePath('components/action-items/select.html')
    validate: ->
      angular.isArray(@options.options) and
      @options.options.indexOf(@value) >= 0