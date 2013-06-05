'use strict';

angular.module('<%= _.camelize(appname) %>App')
.controller('<%= _.classify(name) %>Ctrl',
  ['$scope',
  function ($scope) {

    // Private
    var privateFunction = function() {
      return true;
    };

    // Scope

    angular.extend($scope, {

      awesomeThings: [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ],

      scopeFunction: function() {
        return privateFunction();
      }

    });

  }]);
