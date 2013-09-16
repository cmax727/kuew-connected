'use strict'
app = angular.module('kuew')

app.controller 'NewActionController', ($scope, $) ->
  $scope.actionValues = {}
  $scope.inputConfig = {}

  $scope.options =
    will:
      before: 'I want to'
      placeholder: 'Start typing...'
      typeahead: [
        'create an action',
        'modify an action',
        'remove an action'
      ]

    kuew:
      before: 'for my'
      placeholder: 'e.g. Kuew Name'
      typeahead: [
        'Kuew1', 'Kuew1 -> SubKuew2',
        'Kuew2', 'Kuew3', 'Kuew3 -> SubKuew'
      ]

    trigger:
      options:['when', 'if']

    triggerParam:
      placeholder: 'number'
      freezeIfValid: false
      validate: (item) ->
        i = parseInt(item.value)
        !isNaN(i) and i > 0

    triggerParamKind:
      options: ['person', 'sms', 'tweet', 'facebook message',
                'facebook like', 'facebook post', 'message', 'email', 'mention',
                'retweet', 'share', 'comment']

  $scope.actions =
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