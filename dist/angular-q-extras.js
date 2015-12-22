/*! angular-q-extras - v0.1.4 - 2015-12-22 */
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

      var validatePromiseStatus = function (promise, status) {
        return _.has(promise, 'state') && promise.state === status;
      };

      /**
       * @name $q#isFulfilledStatus
       * @kind function
       *
       * @description
       * TODO
       *
       * @param {Object.<Promise>}
       * @returns {Boolean}
       */
      var isFulfilledStatus = function (promise) {
        return validatePromiseStatus(promise, PROMISE.FULFILLED);
      };

      /**
       * @name $q#isRejectedStatus
       * @kind function
       *
       * @description
       * TODO
       *
       * @param {Object.<Promise>}
       * @returns {Boolean}
       */
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

      // TODO filter
      var allSettledFulfilled = function () {
        throw Error('not implemented yet');
      };

      // TODO filter
      var allSettledRejected = function () {
        throw Error('not implemented yet');
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
        //var results = angular.isArray(promises) ? [] : {};

        // TODO handle object!
        var results = [];

        angular.forEach(promises, function (promise, key) {
          results[key] = settle(promise);
        });

        return $q.all(results);
      };

      // don't override if is already defined
      $q.isFulfilledStatus = $q.isFulfilledStatus || isFulfilledStatus;
      $q.isRejectedStatus = $q.isRejectedStatus || isRejectedStatus;
      $q.allSettled = $q.allSettled || allSettledDecorator;
      $q.allSettledFulfilled = $q.allSettledFulfilled || allSettledFulfilled;
      $q.allSettledRejected = $q.allSettledRejected || allSettledRejected;

      return $q;
    }]);

  }

})();
