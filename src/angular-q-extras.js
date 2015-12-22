(function () {
  'use strict';

  angular.module('angular-q-extras', [])
    .constant('angularPromiseConstant', {
      RESOLVE: 'fulfilled',
      REJECT: 'rejected'
    })
    .config(angularPromiseDecorator);

  angularPromiseDecorator.$inject = ['$provide', 'angularPromiseConstant'];

  /**
   * See also:
   * https://github.com/kriskowal/q/wiki/API-Reference#promiseallsettled
   */
  function angularPromiseDecorator($provide, PROMISE) {

    $provide.decorator('$q', ['$delegate', function ($delegate) {
      var $q = $delegate;

      /**
       * @name $q#allSettled
       * @kind function
       *
       * @description
       * TODO
       *
       * @param {Array.<Promise>|Object.<Promise>} promises An array or hash of promises.
       * @returns {Promise} TODO
       */
      var allSettledDecorator = function (promises) {
        console.log('invoke allSettledDecorator');
      };

      $q.allSettled = $q.allSettled || allSettledDecorator;

      return $q;
    }]);

  }

})();
