'use strict';

(function () {
    let portfolio = angular.module('portfolio');
    let projectsController = function ($scope) {
        $scope.projects = [
            {
                isVisible: true,
                isActive: true,
                image: "ponggame.png",
                title: "PongGame",
                description: "A pong game for browser with HTML5 and AngularJS.",
                links: {
                    github: "https://github.com/parloti/PongGame/",
                    project: "https://parloti.github.io/PongGame/"
                }
            },
            {
                isVisible: true,
                isActive: true,
                image: "tribute-page.png",
                title: "Tribute-Page",
                description: "A tribute page to Juan Manuel Santos.",
                links: {
                    github: "https://github.com/parloti/Tribute-Page",
                    project: "https://parloti.github.io/Tribute-Page/"
                }
            },
            {
                isVisible: true,
                isActive: true,
                image: "alexparloti.com.png",
                title: "alexparloti.com",
                description: "My personal website.",
                links: {
                    github: "https://github.com/parloti/alexparloti.com/",
                    project: "https://alexparloti.com/"
                }
            },
            {
                isVisible: true,
                isActive: true,
                image: "ponggame2.png",
                title: "PongGame2",
                description: "A improved pong game for browser with HTML5.",
                links: {
                    github: "https://github.com/parloti/PongGame2/",
                    project: "https://parloti.github.io/PongGame2/"
                }
            },
            {
                isVisible: true,
                isActive: true,
                image: "subsync.png",
                title: "SubSync",
                description: "A browser-based app for syncing subtitles in srt format.",
                links: {
                    github: "https://github.com/parloti/SubSync/",
                    project: "https://parloti.github.io/SubSync/"
                }
            }
        ].reverse();
    }

    projectsController.$inject = ['$scope'];
    portfolio.controller('projectsController', projectsController);
})();