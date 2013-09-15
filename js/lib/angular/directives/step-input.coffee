'use strict'

app = angular.module 'kuew'
app.directive 'stepInput', ($injector, $timeout) ->
  require: '^multiStepInput'
  tranclude: true
  replace: true
  template: '<div></div>'
  scope:
    inputType: '@type'
    name: '@'
    options: '='

  link: ($scope, element, attr, controller) ->
    clazz = $injector.get("Kuew#{attr.type}ActionItem")
    model = new clazz($scope, $scope.options)
    el = angular.element(element)
    layout =
      inputType: attr.type
      name: attr.name
      model: model
    controller.pushLayout(layout)

    $scope.$on 'event:itemIsValidChanged', ($event, item, value) ->
      if value == true
        layout.model.finishEdit()
        controller.showAtLeast(model)
      else
        controller.hideUpTo(model)
