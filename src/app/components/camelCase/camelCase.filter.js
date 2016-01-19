(function() {
  'use strict';

  angular
    .module('sampleApi')
    .filter('camelCase', camelCase);

  /**
   * converts a string into camelCase format, used for html id tags and linking 
   */

  /** @ngInject */
  function camelCase() {
    return function(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
      }).replace(/\s+/g, '');
    }
  }
})();
