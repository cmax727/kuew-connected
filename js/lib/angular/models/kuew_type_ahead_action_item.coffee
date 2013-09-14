'use strict'

app = angular.module('kuew')
app.factory 'KuewTypeAheadActionItem', (KuewActionItem, templatePath) ->
  class KuewTypeAheadActionItem extends KuewActionItem
    constructor: (scope, options) ->
      super(scope, options)

    templateUrl: templatePath('components/action-items/typeahead.html')
    isValid: -> true