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

    function resolvePromise() {
      var deferred = $q.defer();
      deferred.resolve();
      return deferred.promise;
    }

    function rejectPromise() {
      var deferred = $q.defer();
      deferred.reject();
      return deferred.promise;
    }

    it('should verify allSettled is defined', function () {
      expect(angular.isFunction($q.allSettled)).toBeTrue();
    });

    it('should verify constant', function () {
      expect(angularPromiseConstant.RESOLVE).toBeDefined();
      expect(angularPromiseConstant.RESOLVE).toBe('fulfilled');
      expect(angularPromiseConstant.REJECT).toBeDefined();
      expect(angularPromiseConstant.REJECT).toBe('rejected');
    });

    it('should ', function () {

    });

  });

})();
