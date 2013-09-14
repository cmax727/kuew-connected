'use strict'

elements = ["wizard", "step", "branch"]

for e in elements
  document.createElement(e)

app = angular.module 'kuew', ['ui.bootstrap', 'ngDragDrop']

app.factory '_', => @_
app.factory '$', => @jQuery

app.factory 'templatePath', ->
  path = location.pathname
  if path.substr(path.length-1) != '/'
    path = path.replace /\/[^\/]+$/, '/'
  path += 'html-templates/'

  (partial) -> path + partial

@angularScript = (path, useMinified) ->
  extension = ".js"
  extension = ".min.js" if useMinified
  tag = "<script type=\"text/javascript\" " +
        "src=\"js/lib/angular/#{path}#{extension}\"></" +
        "script>"
  document.write(tag)

