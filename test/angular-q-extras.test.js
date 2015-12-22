(function () {
  'use strict';

  describe('angular-q-extras test', function () {

    var $q;
    var angularPromiseConstant;

    beforeEach(module('angular-q-extras'));

    beforeEach(inject(function (_$q_, _angularPromiseConstant_) {
      $q = _$q_;
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

    it('should verify allSettled is defined', function () {
      expect(angular.isFunction($q.allSettled)).toBeTrue();
    });

    it('should verify constant', function () {
      expect(angularPromiseConstant.FULFILLED).toBeDefined();
      expect(angularPromiseConstant.FULFILLED).toBe('fulfilled');
      expect(angularPromiseConstant.REJECTED).toBeDefined();
      expect(angularPromiseConstant.REJECTED).toBe('rejected');
    });

    // TODO
    it('should verify isFulfilledStatus', function () {
      expect(angular.isFunction($q.isFulfilledStatus)).toBeTrue();

      expect($q.isFulfilledStatus(resolvePromise({state: angularPromiseConstant.FULFILLED}))).toBeTrue();
      expect($q.isFulfilledStatus(resolvePromise({state: 'myState'}))).toBeTrue();
    });

    it('should verify isRejectedStatus', function () {
      throw Error('not implemented yet');
    });

    it('should handle array', function () {
      var promises = [
        resolvePromise('PROMISE_1_FULFILLED'),
        resolvePromise('PROMISE_2_FULFILLED'),
        rejectPromise('PROMISE_3_REJECT'),
        resolvePromise('PROMISE_4_FULFILLED')
      ];

      $q.allSettled(promises)
        .then(function(data) {
          // TODO
          console.log(JSON.stringify(data));
          expect($q.isFulfilledStatus(data[0])).toBeTrue();
          expect($q.isRejectedStatus(data[0])).toBeFalse();

          expect($q.isFulfilledStatus(data[1])).toBeTrue();
          expect($q.isRejectedStatus(data[1])).toBeFalse();

          expect($q.isFulfilledStatus(data[2])).toBeFalse();
          expect($q.isRejectedStatus(data[2])).toBeTrue();

          expect($q.isFulfilledStatus(data[3])).toBeTrue();
          expect($q.isRejectedStatus(data[3])).toBeFalse();
        });
    });

    it('should handle object', function () {
      throw Error('not implemented yet');
    });

  });

})();
