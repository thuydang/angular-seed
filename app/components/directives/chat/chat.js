'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('myApp')
	.directive('chat',function(){
		return {
        templateUrl:'components/directives/chat/chat.html',
        restrict: 'E',
        replace: true,
    	}
	});


