'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('myApp')
	.directive('headerNotification',function(){
		return {
        templateUrl:'components/directives/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
    	}
	});


