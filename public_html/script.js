(function (angular) {
	'use strict';
	angular
		.module('portfolio', ['ngAnimate', 'ngMaterial', 'ng.deviceDetector'])
		.directive('onFinishRender', function ($timeout) {
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
		})
		.controller('repeatController', ['$scope', 'deviceDetector', function ($scope, deviceDetector) {
			$scope.browser = deviceDetector.browser;
			$scope.os = deviceDetector.os;
			$scope.boards = [
				{
					name: 'About',
					iconClass: 'fa fa-info-circle icon-white',
					isVisible: true,
					isActive: true
				},
				{
					name: 'Skills',
					iconClass: 'fa fa-wrench icon-white',
					isVisible: false,
					isActive: true
				},
				{
					name: 'Projects',
					iconClass: 'fa fa-cogs icon-white',
					isVisible: true,
					isActive: true
				},
				{
					name: 'Testimonials',
					iconClass: 'fa fa-comments icon-white',
					isVisible: false,
					isActive: true
				},
				{
					name: 'Articles',
					iconClass: 'fa fa-pencil-square-o icon-white',
					isVisible: false,
					isActive: true
				},
				{
					name: 'Contacts',
					iconClass: 'fa fa-address-book-o icon-white',
					isVisible: true,
					isActive: true,
					navigation: [
						{
							name: 'QR Code',
							href: '#qr-code-panel',
							iconClass: 'fa fa-user-circle-o',
							isVisible: true,
							isActive: true
						},
						{
							name: 'vCard',
							href: '#vcard-panel',
							iconClass: 'fa fa-address-card-o',
							isVisible: true,
							isActive: true
						},
						{
							name: 'Social',
							href: '#social-panel',
							iconClass: 'fa fa-share-alt',
							isVisible: true,
							isActive: true
						},
						{
							name: 'Message',
							href: '#message-panel',
							iconClass: 'fa fa-envelope-o',
							isVisible: true,
							isActive: true
						}
					],
					content: [
						{
							caption: 'Add Me to Your Contacts List'
						},
						{
							caption: 'Add Me to Your Contacts List'
						},
						{
							caption: 'Add Me to Your Contacts List'
						},
						{
							caption: 'Add Me to Your Contacts List'
						},
					]
				},
				{
					name: 'Footer',
					iconClass: 'fa fa-arrow-down',
					isVisible: true,
					isActive: true
				}
			];
			$scope.sections = $scope.boards;
			
			$scope.messengersCards = [
				{
					name: 'Skype',
					links: {
						android: 'play.google.com/store/apps/details?id=com.skype.raider',
						ios: 'itunes.apple.com/app/id304878510',
						browserLink: 'web.skype.com'
					},
					iconClass: 'fa fa-skype',
					isVisible: true,
					isActive: true
				},
				{
					name: 'Telegram',
					links: {
						android: 'play.google.com/store/apps/details?id=org.telegram.messenger',
						ios: 'itunes.apple.com/app/id686449807',
						browserLink: 'web.telegram.org'
					},
					iconClass: 'fa fa-telegram',
					isVisible: true,
					isActive: true
				},
				{
					name: 'WhatsApp',
					links: {
						android: 'play.google.com/store/apps/details?id=com.whatsapp',
						ios: 'itunes.apple.com/app/id310633997',
						browserLink: 'web.whatsapp.com'
					},
					iconClass: 'fa fa-whatsapp',
					isVisible: true,
					isActive: true
				},
				{
					name: 'Facebook Messenger',
					links: {
						android: 'play.google.com/store/apps/details?id=com.facebook.orca',
						ios: 'itunes.apple.com/app/id454638411',
						browserLink: 'messenger.com'
					},
					iconClass: 'fa fa-comments fa-messenger',
					isVisible: true,
					isActive: true
				},
				{
					name: 'Google Allo',
					links: {
						android: 'play.google.com/store/apps/details?id=com.google.android.apps.fireball',
						browserLink: 'allo.google.com'
					},
					iconClass: 'fa fa-comments fa-allo',
					isVisible: true,
					isActive: true
				}
			];
			$scope.open = function (board) {
				console.log(board);
			}
			$scope.$on('renderedModal', function (ngRepeatFinishedEvent) {
				function b(b) {
					return this.each(function () {
						var d = a(this)
							, e = d.data("bs.affix")
							, f = "object" == typeof b && b;
						e || d.data("bs.affix", e = new c(this, f)),
						"string" == typeof b && e[b]()
					})
				}
				
				$(window).on("load", function () {
					return;
					$('[data-spy="affix"]').each(function () {
						var c = $(this)
							, d = c.data();
						d.offset = d.offset || {},
						null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
						null != d.offsetTop && (d.offset.top = d.offsetTop),
							b.call(c, d)
					})
				})
				//$('#AboutModal').modal('show');
				//$('nav a:eq(3)').tab('show');
				$('#form-message').validator();
				$('#form-message').on('submit', function (e) {
					if (!e.isDefaultPrevented()) {
						let url = "index.php";
						let data = $(this).serialize();
						$.ajax({
							type: "POST",
							url: url,
							data: data,
							success: function (data) {
								let messageAlert = 'alert-' + data.type;
								let messageText = data.message;
								let alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
								if (messageAlert && messageText) {
									$('#form-message').find('.messages').html(alertBox);
									$('#form-message')[0].reset();
								}
							}
						});
						return false;
					}
				})
				function adjust_body_offset() {
					$('#about').css('padding-top', $('nav').outerHeight(true) + 'px');
				}
				
				$(window).resize(adjust_body_offset);
				adjust_body_offset();
				function smoothScrolling() {
					$("nav a").on('click', function (e) {
						e.preventDefault();
						$('html, body').animate({
								scrollTop: $($(this).attr("href")).offset().top - $('.navbar').outerHeight(true)
							},
							1500
						)
					});
				}
				
				smoothScrolling();
				$(document).ready(function () {
					"use strict";
					$("nav").affix({
						offset: {
							top: 100
						}
					})
				});
			})
		}])
		.controller('Projects', ['$scope', function ($scope) {
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
		}])
		.controller('ContactForm', ['$scope', function ($scope) {
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
		}])
		.controller('SocialDeck', ['$scope', function ($scope) {
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
		}])
		.controller('ProgressBar', ['$scope', '$window', function ($scope, $window) {
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
		}])
})(window.angular);
