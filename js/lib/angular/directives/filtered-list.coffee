'use strict'

app = angular.module('kuew')
$a = angular.element

app.directive 'filteredList',
(_, $timeout, templatePath) ->
  restrict: 'EA'
  replace: true
  templateUrl: templatePath('components/filtered-list.html')
  transclude: false
  scope:
    filteredList: '@'
    heading: '@'
    filterId: '@'
    filterScope: '@'

  link: ($scope, element, attrs) ->
    selector = _.map attrs.filteredList.split(' '), (c) ->
      "#{attrs.filterScope}.#{c}"
    selector = selector.join ', '

    elements = $a(selector)

    $scope.teamMembers = _.map elements, (el) ->
      e = $a(el)

      name: e.data 'name'
      email: e.data 'email'
      profileImage: e.data 'profileimg'
      role: e.data 'role'
      social:
        twitter: e.data 'twitter'
        fb: e.data 'fb'

    $timeout ->
      element.find('.livicon').each ->
        $a(@).addLivicon().hide()

        element.find('ul.deptList li').hover ->
          $a(@).find(".livicon").fadeIn('fast')
        , ->
          $a(@).find(".livicon").fadeOut('fast')
    , 100