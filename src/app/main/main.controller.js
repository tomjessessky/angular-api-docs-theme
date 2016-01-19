(function() {
  'use strict';

  angular
    .module('sampleApi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $log, $scope, $document, $filter, $sce) {
    var vm = this; // view model, similar to $scope
    vm.createNewAPIKey = createNewAPIKey; //make method available

    // initialization sequence
    activate();

    function activate() {
      createNewAPIKey();
      // watchScroll();

      // load the api schema data
      $http.get("assets/api_schema.json").success(function(data) {
        data = data.map(function(api) {
          // apply filters to example and params
          api.example = $filter('curlCommand')(api.example);
          angular.forEach(api.request, function(value, key){
            value.descriptionSafe = $sce.trustAsHtml($filter('codeTags')(value.description));
          });
          angular.forEach(api.response, function(value, key){
            value.descriptionSafe = $sce.trustAsHtml($filter('codeTags')(value.description));
          });
          return api;
        });
        // make data accessible in view
        vm.apiData = data;
      });

      // setup $scope vars for code example's bindings
      $scope.id = "1234"; // vehicle id
    }

    // generate 9 character alphanumeric string 
    function createNewAPIKey() {
      var text, length, possible, i;
      text = "";
      length = 9;
      possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for (i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      $scope.apiKey = text;
    }
  }
})();
