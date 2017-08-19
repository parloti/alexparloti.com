'use strict';

(function () {
    let portfolio = angular.module('portfolio');
    let myConfig = function ($compileProvider) {
        $compileProvider.debugInfoEnabled(true);
    }

    myConfig.$inject = ['$compileProvider'];
    portfolio.config(myConfig);
})();