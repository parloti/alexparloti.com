'use strict';

(function () {
    let portfolio = angular.module('portfolio');
    let onFinishRender = function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit(attr.onFinishRender);
                    });
                }
            }
        }
    }

    onFinishRender.$inject = ['$timeout'];
    portfolio.directive('onFinishRender', onFinishRender);
})();
