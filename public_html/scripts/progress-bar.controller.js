'use strict';

(function () {
    let portfolio = angular.module('portfolio');
    let progressBarController = function ($scope, $window) {
        $scope.value = 0;
        angular.element($window).on('scroll', () => {
            let scrolled = $(document).scrollTop();
            let maxScroll = $(document).height() - document.documentElement.clientHeight;
            let percent = 100 * scrolled / maxScroll;
            if (percent > 100) {
                percent = 100;
            }
            $scope.value = percent;
            $scope.$digest();
        });
    }

    progressBarController.$inject = ['$scope', '$window'];
    portfolio.controller('progressBarController', progressBarController);
})();