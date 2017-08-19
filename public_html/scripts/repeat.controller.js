'use strict';

(function () {
    let portfolio = angular.module('portfolio');
    let repeatController = function ($scope, deviceDetector) {
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
    }

    repeatController.$inject = ['$scope', 'deviceDetector'];
    portfolio.controller('repeatController', repeatController);
})();
