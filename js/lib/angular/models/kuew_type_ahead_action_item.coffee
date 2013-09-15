'use strict'

app = angular.module('kuew')
app.factory 'KuewTypeAheadActionItem', (KuewActionItem, templatePath) ->
  class KuewTypeAheadActionItem extends KuewActionItem
    constructor: (scope, options) ->
      super(scope, options)

    templateUrl: templatePath('components/action-items/typeahead.html')
    validate: ->
      angular.isArray(@options.typeahead) and
      @options.typeahead.indexOf(@value) >= 0