'use strict'

app = angular.module 'kuew'
app.directive 'stepInput', ($injector) ->
  require: '^multiStepInput'
  tranclude: true
  replace: true
  template: '<div></div>'
  scope:
    inputType: '@type'
    name: '@'
    options: '='

  link: ($scope, element, attr, controller) ->
    clazz = new $injector.get("Kuew#{attr.type}ActionItem")
    layout =
      inputType: attr.type
      name: attr.name
      model: new clazz($scope, $scope.options)
    controller.pushLayout(layout)

    $scope.$on 'event:itemIsValidChanged', ($event, item, value) ->
      if value == true
        layout.model.finishEdit()
