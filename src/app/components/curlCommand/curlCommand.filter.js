(function() {
  'use strict';

  angular
    .module('sampleApi')
    .filter('curlCommand', curlCommand);

  /**
   * Replace all hyphen characters with a newline, two spaces, and a hyphen 
   * to make curl command parameters look better
   */

  /** @ngInject */
  function curlCommand() {
    return function(str) {
      return str.replace(/\-/g, '\\\n  -');
    }
  }
})();
