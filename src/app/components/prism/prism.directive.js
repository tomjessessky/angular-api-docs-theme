(function() {
  'use strict';

  angular
    .module('Prism', [])
    .directive('prism', prism);

  /**
   * this directive allows code highlighting in a compiled string where scope vars are bound to string
   */

  /** @ngInject */
  function prism($compile) {
    return {
      restrict: 'A',
      template: '<code class="language-bash"></code>',
      replace:true,
      transclude:true,
       link: function (scope, element, attrs) {
        /* watch for changes to scope */
        scope.$watch(function() {
          return scope.$eval(attrs.bindHtmlCompile);
        }, function (value) {
          /* get and render the highlighted HTML */ 
          value = scope.$eval(attrs.bindHtmlCompile);
          if (value !== undefined) {
            element.html(Prism.highlight(value, Prism.languages.bash));
            $compile(element.contents())(scope);
          }
        });
      }
    };
  }
})();