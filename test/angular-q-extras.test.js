(function () {
  'use strict';

  describe('someService', function () {

    var $q;

    beforeEach(module('angular-q-extras'));

    beforeEach(inject(function (_$q_) {
      $q = _$q_;
    }));

    it('should verify allSettled is defined', function () {
      expect(angular.isFunction($q.allSettled)).toBeTrue();
      $q.allSettled();
    });

  });

})();
