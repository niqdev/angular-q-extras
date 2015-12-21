(function () {
  'use strict';

  angular.module('angular-q-extras.services')
    .config(angularQExtrasConfig);

  angularQExtrasConfig.$inject = ['$provide'];

  function angularQExtrasConfig($provide) {

    $provide.decorator('$q', ['$delegate', function ($delegate) {
      var $q = $delegate;

      var allSettledDecorator = function (promises) {
        console.log('invoke allSettledDecorator');
      };

      $q.allSettled = $q.allSettled || allSettledDecorator;

      return $q;
    }]);

  }

})();
