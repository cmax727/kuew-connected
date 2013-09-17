'use strict'

app = angular.module 'kuew'
app.filter 'field', (_) ->
  (list, name) ->
    _.map(list, (n) -> n[name])