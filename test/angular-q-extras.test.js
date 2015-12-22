(function () {
  'use strict';

  describe('angular-q-extras test', function () {

    var $q, $scope;
    var angularPromiseConstant;

    beforeEach(module('angular-q-extras'));

    beforeEach(inject(function (_$q_, _$rootScope_, _angularPromiseConstant_) {
      $q = _$q_;
      $scope = _$rootScope_.$new();
      angularPromiseConstant = _angularPromiseConstant_;
    }));

    function resolvePromise(value) {
      var deferred = $q.defer();
      deferred.resolve(value);
      return deferred.promise;
    }

    function rejectPromise(value) {
      var deferred = $q.defer();
      deferred.reject(value);
      return deferred.promise;
    }

    it('should verify defined methods', function () {
      expect(angular.isFunction($q.isFulfilledStatus)).toBeTrue();
      expect(angular.isFunction($q.isRejectedStatus)).toBeTrue();
      expect(angular.isFunction($q.allSettled)).toBeTrue();
      expect(angular.isFunction($q.allSettledFulfilled)).toBeTrue();
      expect(angular.isFunction($q.allSettledRejected)).toBeTrue();
    });

    it('should verify constant', function () {
      expect(angularPromiseConstant.FULFILLED).toBeDefined();
      expect(angularPromiseConstant.FULFILLED).toBe('fulfilled');
      expect(angularPromiseConstant.REJECTED).toBeDefined();
      expect(angularPromiseConstant.REJECTED).toBe('rejected');
    });

    it('should verify isFulfilledStatus', function () {
      expect($q.isFulfilledStatus({state: angularPromiseConstant.FULFILLED})).toBeTrue();
      expect($q.isFulfilledStatus({state: 'invalidState'})).toBeFalse();
    });

    it('should verify isRejectedStatus', function () {
      expect($q.isRejectedStatus({state: angularPromiseConstant.REJECTED})).toBeTrue();
      expect($q.isRejectedStatus({state: 'invalidState'})).toBeFalse();
    });

    it('should verify allSettled with array parameter', function () {
      var promises = [
        resolvePromise('PROMISE_1_FULFILLED'),
        resolvePromise('PROMISE_2_FULFILLED'),
        rejectPromise('PROMISE_3_REJECT'),
        resolvePromise('PROMISE_4_FULFILLED')
      ];

      $q.allSettled(promises)
        .then(function(data) {
          expect($q.isFulfilledStatus(data[0])).toBeTrue();
          expect($q.isRejectedStatus(data[0])).toBeFalse();

          expect($q.isFulfilledStatus(data[1])).toBeTrue();
          expect($q.isRejectedStatus(data[1])).toBeFalse();

          expect($q.isFulfilledStatus(data[2])).toBeFalse();
          expect($q.isRejectedStatus(data[2])).toBeTrue();

          expect($q.isFulfilledStatus(data[3])).toBeTrue();
          expect($q.isRejectedStatus(data[3])).toBeFalse();
        });

      $scope.$apply();
    });

    it('should verify allSettled with object parameter', function () {
      throw Error('not implemented yet');

      /*
      $q.allSettled(resolvePromise('PROMISE_FULFILLED'))
        .then(function(data) {
          console.log(JSON.stringify(data));
          expect($q.isFulfilledStatus(data)).toBeTrue();
          expect($q.isRejectedStatus(data)).toBeFalse();
        });

      $scope.$apply();
      */
    });

    it('should verify allSettledFulfilled', function () {
      throw Error('not implemented yet');
    });

    it('should verify allSettledRejected', function () {
      throw Error('not implemented yet');
    });

  });

})();
