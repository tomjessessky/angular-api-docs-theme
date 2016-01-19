(function() {
  'use strict';

  angular
    .module('sampleApi', ['ui.router', 'ui.bootstrap', 'duScroll', 'Prism'])
    .config(config)
    .config(routerConfig)
    .run();

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
