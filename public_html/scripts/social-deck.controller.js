'use strict';

(function () {
    let portfolio = angular.module('portfolio');
    let socialDeckController = function ($scope) {
		$scope.socialCards = [
			{
				name: 'LinkedIn',
				href: "linkedin.com/in/parloti/",
				iconClass: 'fa fa-linkedin',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Xing',
				href: "xing.com/profile/Alex_Parloti",
				iconClass: 'fa fa-xing',
				isVisible: false,
				isActive: true
			},
			{
				name: 'GitHub Profile',
				href: "github.com/parloti",
				iconClass: 'fa fa-github',
				isVisible: true,
				isActive: true
			},
			{
				name: 'GitHub Portfolio',
				href: "parloti.github.io",
				iconClass: 'fa fa-github-alt',
				isVisible: false,
				isActive: true
			},
			{
				name: 'Free Code Camp',
				href: "freecodecamp.com/parloti",
				iconClass: 'fa fa-free-code-camp',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Meetup',
				href: "meetup.com/members/212267196/",
				iconClass: 'fa fa-meetup',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Twitter',
				href: "twitter.com/parloti",
				iconClass: 'fa fa-twitter',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Google+',
				href: "plus.google.com/+AlexdaSilvaParloti",
				iconClass: 'fa fa-google-plus-circle',
				isVisible: false,
				isActive: true
			},
			{
				name: 'Facebook',
				href: "facebook.com/parloti",
				iconClass: 'fa fa-facebook',
				isVisible: false,
				isActive: true
			},
			{
				name: 'Instagram',
				href: "instagram.com/alex.parloti/",
				iconClass: 'fa fa-instagram',
				isVisible: false,
				isActive: true
			},
			{
				name: 'YouTube',
				href: "youtube.com/user/parloti",
				iconClass: 'fa fa-youtube-play',
				isVisible: false,
				isActive: true
			}
		];
	}

    socialDeckController.$inject = ['$scope'];
    portfolio.controller('socialDeckController', socialDeckController);
})();