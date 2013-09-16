'use strict'

app = angular.module 'kuew'
app.filter 'pluralize', ->
  (value, count) ->
    count = 1 unless angular.isDefined(count)
    return value if count == 1

    if value == 'person'
      'people'
    else if value == 'foot'
      'feet'
    else if value == 'tooth'
      'teeth'
    else if value == 'roof'
      'roofs'
    else if /y$/.test(value)
      value.replace(/y$/, 'ies')
    else if /s$/.test(value)
      value.replace(/s$/, 'ses')
    else if /sh$/.test(value)
      value.replace(/sh$/, 'shes')
    else if /ch$/.test(value)
      value.replace(/ch$/, 'ches')
    else if /ge$/.test(value)
      value.replace(/ge$/, 'ges')
    else if /f[e]?$/.test(value)
      value.replace(/f[e]?$/, 'ves')
    else
      value + 's'
