(function () {
  'use strict';

  angular.module('angular-q-extras', ['ngLodash'])
    .constant('angularPromiseConstant', {
      FULFILLED: 'fulfilled',
      REJECTED: 'rejected'
    })
    .config(angularPromiseDecorator);

  angularPromiseDecorator.$inject = ['$provide', 'angularPromiseConstant', 'lodash'];

  /**
   * See also:
   * https://github.com/kriskowal/q/wiki/API-Reference#promiseallsettled
   */
  function angularPromiseDecorator($provide, PROMISE, _) {

    $provide.decorator('$q', ['$delegate', function ($delegate) {
      var $q = $delegate;

      var validatePromiseStatus = function(promise, status) {
        return _.has(promise, state) && promise.state === status;
      };

      var isFulfilledStatus = function (promise) {
        return validatePromiseStatus(promise, PROMISE.FULFILLED);
      };

      var isRejectedStatus = function (promise) {
        return validatePromiseStatus(promise, PROMISE.REJECTED);
      };

      // TODO
      var settle = function (promise) {
        return $q.when(promise).then(
          function (value) {
            return {state: PROMISE.FULFILLED, value: value};
          },
          function (reason) {
            return {state: PROMISE.REJECTED, reason: reason};
          }
        );
      };

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

      // don't override if is already defined
      $q.isFulfilledStatus = $q.isFulfilledStatus || isFulfilledStatus;
      $q.isRejectedStatus = $q.isRejectedStatus || isRejectedStatus;
      $q.allSettled = $q.allSettled || allSettledDecorator;

      return $q;
    }]);

  }

})();
