// returned object from ./module.js is passed as controllers parameter of the call-back function
define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('MyCtrl1', function ($scope) {
		$scope.version = 1;
	});
});
