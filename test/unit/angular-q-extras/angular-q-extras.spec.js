(function () {
  'use strict';

  describe('', function () {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function (module) {
      return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function () {
      module = angular.module('angular-q-extras');
      dependencies = module.requires;
    });

    it('should load config module', function () {
      expect(hasModule('angular-q-extras.config')).to.be.ok;
    });

    it('should load services module', function () {
      expect(hasModule('angular-q-extras.services')).to.be.ok;
    });

  });

})();

