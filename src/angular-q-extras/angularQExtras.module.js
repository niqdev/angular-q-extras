(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularQExtras.config', [])
      .value('angularQExtras.config', {
          debug: true
      });

  // Modules
  angular.module('angularQExtras.services', []);
  angular.module('angularQExtras',
      [
          'angularQExtras.config',
          'angularQExtras.services'
      ]);

})(angular);
