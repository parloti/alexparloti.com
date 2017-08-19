'use strict';

(function () {
    let portfolio = angular.module('portfolio');
    let contactFormController = function ($scope) {
		$scope.fields = [
			{
				id: 'name',
				label: 'Name',
				type: 'text',
				required: true,
				dataError: 'Please fill out this field.',
				isVisible: true,
				isActive: true
			},
			{
				id: 'email',
				label: 'E-Mail',
				type: 'email',
				required: true,
				dataError: 'That email address is invalid.',
				isVisible: true,
				isActive: true
			},
			{
				id: 'phone',
				label: 'Phone',
				type: 'tel',
				required: false,
				dataError: '',
				isVisible: true,
				isActive: true
			},
			{
				id: 'subject',
				label: 'Subject',
				type: 'text',
				required: true,
				dataError: 'Please fill out this field.',
				isVisible: true,
				isActive: true
			}
		]
	}

    contactFormController.$inject = ['$scope'];
    portfolio.controller('contactFormController', contactFormController);
})();