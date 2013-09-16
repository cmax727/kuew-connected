'use strict'
app = angular.module('kuew')

app.controller 'NewActionController', ($scope, $) ->
  $scope.actionValues = {}
  $scope.inputConfig = {}

  $scope.options =
    will:
      before: 'I want to'
      typeahead: [
        'create an action',
        'modify an action',
        'remove an action'
      ]

    kuew:
      before: 'for my'
      typeahead: [
        'Kuew1', 'Kuew1 -> SubKuew2',
        'Kuew2', 'Kuew3', 'Kuew3 -> SubKuew'
      ]

    trigger:
      options:['when', 'if']

    triggerParam:
      after: 'person'
      min: 0

  $scope.actions =
    will: [
      'createAction', 'modifyAction', 'removeAction'
    ]
    target: ['kuew', 'subkuew']
    trigger: ['when', 'if']
    triggerParam: '*'
    type: [
      'person', 'sms', 'tweet', 'fbMessage',
      'fbLike', 'fbPost', 'message', 'email', 'mention',
      'retweet', 'share', 'comment'
    ]

    source: [
      'kuew', 'landingPage', 'widget',
      'blog', 'twitter', 'facebook',
      'linkedIn', 'angelList', 'github',
      'email', 'sms'
    ]

    inFrom: '*'

    internalSource: ['kuew', 'subkuew', 'filter']
    internalSourceParam: '*'

    externalSource1: []

    externalSource2: []

    action: ['send', 'retweet', 'tweet', 'like', 'add', 'remove']
    selector: ['them', 'each one', 'all', 'all that are']
    match: '*'

    feedbackRange: ['personalized', 'group', 'all', 'general']
    feedbackType: ['message', 'email', 'sms', 'tweet', 'fbMessage']
    feedbackSubject: '*'
    feedbackMessage: ['sms', 'tweet', 'email', 'fbMessage']
    feedbackWhen: [
      'now', 'onDate', 'atTime', 'onDateAtTime',
      'whenJoined', 'whenAction'
    ]
    feedbackWhenParams: []

    notify: ['no', 'send']
    notifyParam: ['alert', 'SMS', 'email']
    notifyWhen: [
      'immediately', 'endOfDaySingle', 'endOfDayDigest',
      'nextLogin', 'onDate'
    ]