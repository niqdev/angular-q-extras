(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angular-q-extras.config', [])
      .value('angular-q-extras.config', {
          debug: true
      });

  // Modules
  angular.module('angular-q-extras.services', []);
  angular.module('angular-q-extras',
      [
          'angular-q-extras.config',
          'angular-q-extras.services'
      ]);

})(angular);

(function () {
  'use strict';

  angular.module('angular-q-extras.services')
    .config(angularQExtrasConfig);

  angularQExtrasConfig.$inject = ['$provide'];

  function angularQExtrasConfig($provide) {

    $provide.decorator('$q', ['$delegate', function ($delegate) {
      var $q = $delegate;

      var allSettledDecorator = function (promises) {

      };

      /*
      $q.allSettled = $q.allSettled || function allSettled(promises) {

          var wrapped = angular.isArray(promises) ? [] : {};

          angular.forEach(promises, function (promise, key) {
            if (!wrapped.hasOwnProperty(key)) {
              wrapped[key] = wrap(promise);
            }
          });

          return $q.all(wrapped);

          function wrap(promise) {
            return $q.when(promise)
              .then(function (value) {
                return {state: 'fulfilled', value: value};
              }, function (reason) {
                return {state: 'rejected', reason: reason};
              });
          }
        };
        */

      $q.allSettled = $q.allSettled || allSettledDecorator;

      return $q;
    }]);

  }

})();
