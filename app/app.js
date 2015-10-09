/**
 * @ngdoc overview
 * @name My sbAdminApp
 * @description 
 * # Network admin based on sbAdminApp
 *
 * Main module of the application.
 */

/*
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
*/

// define angular module named 'app', which depends on requireJS modules in the 
// []. The parameters in function are reference to the requireJS modules in 
// listed order (angular was introduced by shim in the require.config).
define([
    'angular',
		'angular-loading-bar',
    'angular-bootstrap', // ui.bootstrap module
    'uiRouter',
		'ocLazyLoad',
		//'chart',
    //'angular-route', --> disabled for the sake of ui-router
    //'./components/directives/index',
    //'./components/filters/index',
    //'./components/services/index',
    './components/controllers/index'
], function (ng) {
    'use strict';
		// return angular module named 'app' in angular way. The dependency 
		// list is in [].
		return ng.module('myApp', [
				'ui.router',
				'ui.bootstrap',
				'angular-loading-bar',
				'oc.lazyLoad',
				// 'ngRoute' --> disabled for the sake of ui-router
        //'app.services',
        //'app.filters',
        //'app.directives',
        'app.controllers',
    ]);
});
