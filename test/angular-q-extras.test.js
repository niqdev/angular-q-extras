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

    function mockedPromises() {
      return [
        resolvePromise('PROMISE_1_FULFILLED'),
        resolvePromise('PROMISE_2_FULFILLED'),
        rejectPromise('PROMISE_3_REJECT'),
        resolvePromise('PROMISE_4_FULFILLED')
      ];
    }

    it('should verify defined methods', function () {
      expect(angular.isFunction($q.isFulfilledState)).toBeTrue();
      expect(angular.isFunction($q.isRejectedState)).toBeTrue();
      expect(angular.isFunction($q.allSettled)).toBeTrue();
    });

    it('should verify constant', function () {
      expect(angularPromiseConstant.FULFILLED).toBeDefined();
      expect(angularPromiseConstant.FULFILLED).toBe('fulfilled');
      expect(angularPromiseConstant.REJECTED).toBeDefined();
      expect(angularPromiseConstant.REJECTED).toBe('rejected');
    });

    it('should verify isFulfilledState', function () {
      expect($q.isFulfilledState({state: angularPromiseConstant.FULFILLED})).toBeTrue();
      expect($q.isFulfilledState({state: 'invalidState'})).toBeFalse();
    });

    it('should verify isRejectedState', function () {
      expect($q.isRejectedState({state: angularPromiseConstant.REJECTED})).toBeTrue();
      expect($q.isRejectedState({state: 'invalidState'})).toBeFalse();
    });

    it('should verify allSettled with array parameter', function () {

      $q.allSettled(mockedPromises())
        .then(function(data) {
          expect(data).toBeArrayOfSize(4);

          expect($q.isFulfilledState(data[0])).toBeTrue();
          expect($q.isRejectedState(data[0])).toBeFalse();

          expect($q.isFulfilledState(data[1])).toBeTrue();
          expect($q.isRejectedState(data[1])).toBeFalse();

          expect($q.isFulfilledState(data[2])).toBeFalse();
          expect($q.isRejectedState(data[2])).toBeTrue();

          expect($q.isFulfilledState(data[3])).toBeTrue();
          expect($q.isRejectedState(data[3])).toBeFalse();
        });

      $scope.$apply();
    });

    it('should verify allSettled with object parameter', function () {

      $q.allSettled(resolvePromise('PROMISE_FULFILLED'))
        .then(function(data) {
          expect(data).not.toBeArray();

          expect($q.isFulfilledState(data)).toBeTrue();
          expect($q.isRejectedState(data)).toBeFalse();
        });

      $scope.$apply();
    });

  });

})();
