(function() {
  'use strict';

  angular
    .module('sampleApi')
    .filter('codeTags', codeTags);

  /**
   * Replace words that are in single quotes with original word in <code> tags
   */

  /** @ngInject */
  function codeTags() {
    return function(str) {
      return str.replace(/('.*?')/g, function(word, index) {
        word = word.replace(/\'/g, '');
        return '<code>' + word + '</code>';
      });
    }
  }
})();
