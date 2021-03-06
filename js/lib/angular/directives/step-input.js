// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  var app;

  app = angular.module('kuew');

  app.directive('stepInput', function($injector, $timeout) {
    return {
      require: '^multiStepInput',
      tranclude: true,
      replace: true,
      template: '<div></div>',
      scope: {
        inputType: '@type',
        name: '@',
        options: '='
      },
      link: function($scope, element, attr, controller) {
        var clazz, el, layout, model;
        clazz = $injector.get("Kuew" + attr.type + "ActionItem");
        model = new clazz($scope, $scope.options);
        el = angular.element(element);
        layout = {
          inputType: attr.type,
          name: attr.name,
          model: model
        };
        controller.pushLayout(layout);
        return $scope.$on('event:itemIsValidChanged', function($event, item, value, options) {
          if (value === true) {
            if (options.freeze) {
              layout.model.finishEdit();
            }
            return controller.showAtLeast(model);
          } else {
            return controller.hideUpTo(model);
          }
        });
      }
    };
  });

}).call(this);
