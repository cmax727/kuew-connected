'use strict'

app = angular.module 'kuew'

app.directive 'userSkills', (templatePath) ->
  restrict: 'EA'
  templateUrl: templatePath('components/user-skills.html')
  transclude: false
  replace: true
  link: ($scope, element, attrs) ->
    $scope.skills = []
    $scope.skillNames = [
      'HTML5', 'PHP', 'JQuery', 'Graphic Design', 'UI',
      'Marketing', 'Market Research', 'Social Media',
      'Social Media Marketing', 'Facebook Marketing',
      'LinkedIn', 'Email Marketing', 'MySql', 'Kuew',
      'Human Resources', 'Management '
    ]

    $scope.removeSkill = (skill) ->
      idx = $scope.skills.indexOf(skill)
      return if idx < 0
      $scope.skills.splice(idx, 1)
