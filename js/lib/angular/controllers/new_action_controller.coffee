'use strict'
app = angular.module('kuew')

app.controller 'NewActionController', ($scope, $) ->
  $scope.actionValues = {}
  $scope.isValid = false
  $scope.inputConfig = {}

  $scope.options =
    will:
      before: 'I want to'
      placeholder: 'Start typing...'
      options: [
        'create an action',
        'modify an action',
        'remove an action'
      ]

    kuew:
      before: 'for my'
      placeholder: 'e.g. Kuew Name'
      options: [
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

    source:
      options: [
        'kuew', 'landingPage', 'widget',
        'blog', 'twitter', 'facebook',
        'linkedIn', 'angelList', 'github',
        'email', 'sms'
      ]

    inFrom:
      placeholder: 'In/From'
      freezeIfValid: false
      validate: (item) ->
        !!(angular.isDefined(item.value) &&
           item.value != null && item.value.length)

    internalSource:
      options: ['kuew', 'subkuew', 'filter']

    internalSourceParam:
      options: ['Option1', 'Option2']

    externalSource1:
      options: ['Option 1']

    externalSource2:
      options: ['Option 1']

    action:
      options: ['send', 'retweet', 'tweet', 'like', 'add', 'remove']

    selector:
      options: ['them', 'each one', 'all', 'all that are']

    match:
      before: 'match'
      placeholder: 'Match'
      freezeIfValid: false
      validate: (item) ->
        !!(angular.isDefined(item.value) &&
           item.value != null && item.value.length)

    feedbackRange:
      options: ['personalized', 'group', 'all', 'general']

    feedbackType:
      options: ['message', 'email', 'sms', 'tweet', 'fbMessage']

    feedbackSubject:
      validate: (item) -> true

    feedbackMessage:
      options: ['sms', 'tweet', 'email', 'fbMessage']

    feedbackWhen:
      options: [
        'now', 'onDate', 'atTime', 'onDateAtTime',
        'whenJoined', 'whenAction'
      ]

    feedbackWhenParams:
      options: ['Option 1']

    notify:
      options: ['no', 'send']
    notifyParam:
      options: ['alert', 'SMS', 'email']
    notifyWhen:
      options: [
        'immediately', 'endOfDaySingle', 'endOfDayDigest',
        'nextLogin', 'onDate'
      ]