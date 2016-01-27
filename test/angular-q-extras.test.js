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
      return $q.when(value);
    }

    function rejectPromise(value) {
      return $q.reject(value);
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

    function expectState(method, stateValue) {
      expect($q[method]({state: stateValue})).toBeTrue();

      expect($q[method](null)).toBeFalse();
      expect($q[method](undefined)).toBeFalse();
      expect($q[method]({})).toBeFalse();
      expect($q[method]([])).toBeFalse();
      expect($q[method]({state: null})).toBeFalse();
      expect($q[method]({state: undefined})).toBeFalse();
      expect($q[method]({state: ''})).toBeFalse();
      expect($q[method]({state: 'invalidState'})).toBeFalse();
    }

    it('should verify isFulfilledState', function () {
      expectState('isFulfilledState', angularPromiseConstant.FULFILLED);
    });

    it('should verify isRejectedState', function () {
      expectState('isRejectedState', angularPromiseConstant.REJECTED);
    });

    it('should verify allSettled with array parameter', function () {
      var mockedPromises = [
        resolvePromise('PROMISE_0_FULFILLED'),
        resolvePromise('PROMISE_1_FULFILLED'),
        rejectPromise('PROMISE_2_REJECT'),
        resolvePromise('PROMISE_3_FULFILLED')
      ];

      $q.allSettled(mockedPromises)
        .then(function (data) {
          expect(data).toBeArrayOfSize(4);

          expect($q.isFulfilledState(data[0])).toBeTrue();
          expect($q.isRejectedState(data[0])).toBeFalse();
          expect(data[0].value).toBe('PROMISE_0_FULFILLED');
          expect(data[0].reason).toBeUndefined();

          expect($q.isFulfilledState(data[1])).toBeTrue();
          expect($q.isRejectedState(data[1])).toBeFalse();
          expect(data[1].value).toBe('PROMISE_1_FULFILLED');
          expect(data[1].reason).toBeUndefined();

          expect($q.isFulfilledState(data[2])).toBeFalse();
          expect($q.isRejectedState(data[2])).toBeTrue();
          expect(data[2].reason).toBe('PROMISE_2_REJECT');
          expect(data[2].value).toBeUndefined();

          expect($q.isFulfilledState(data[3])).toBeTrue();
          expect($q.isRejectedState(data[3])).toBeFalse();
          expect(data[3].value).toBe('PROMISE_3_FULFILLED');
          expect(data[3].reason).toBeUndefined();
        });

      $scope.$apply();
    });

    it('should verify allSettled with object parameter', function () {

      $q.allSettled(resolvePromise('PROMISE_FULFILLED'))
        .then(function (data) {
          expect(data).not.toBeArray();

          expect($q.isFulfilledState(data)).toBeTrue();
          expect($q.isRejectedState(data)).toBeFalse();
          expect(data.value).toBe('PROMISE_FULFILLED');
          expect(data.reason).toBeUndefined();
        });

      $scope.$apply();
    });

  });

})();
