define(['./app'], function (app) {
	'use strict';
	return app.config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

		$ocLazyLoadProvider.config({
			debug:true,
			events:true,
		});

		$urlRouterProvider.otherwise('/dashboard/home');

		$stateProvider
			.state('dashboard', {
				url:'/dashboard',
				templateUrl: 'views/dashboard/main.html',
				resolve: {
					// load all libs used by this domain ( also in child pages)
					loadMyDirectives:['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load(
								{
									name:'myApp',
									files:[
										'components/directives/header/header.js',
										'components/directives/header/header-notification/header-notification.js',
										'components/directives/sidebar/sidebar.js',
										'components/directives/sidebar/sidebar-search/sidebar-search.js'
									]
								}),
						$ocLazyLoad.load(
								{
									name:'toggle-switch',
									files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
									"bower_components/angular-toggle-switch/angular-toggle-switch.css"
									]
								}),
						$ocLazyLoad.load(
								{
									name:'ngAnimate',
									files:['bower_components/angular-animate/angular-animate.js']
								}),
						$ocLazyLoad.load(
								{
									name:'ngCookies',
									files:['bower_components/angular-cookies/angular-cookies.js']
								}),
						$ocLazyLoad.load(
								{
									name:'ngResource',
									files:['bower_components/angular-resource/angular-resource.js']
								}),
						$ocLazyLoad.load(
								{
									name:'ngSanitize',
									files:['bower_components/angular-sanitize/angular-sanitize.js']
								}),
						$ocLazyLoad.load(
								{
									name:'ngTouch',
									files:['bower_components/angular-touch/angular-touch.js']
								})
					}]
				}
			})
		.state('dashboard.home',{
			url:'/home',
			controller: 'MainCtrl',
			templateUrl:'views/dashboard/home.html',
			resolve: {
				loadMyFiles:function($ocLazyLoad) {
					return $ocLazyLoad.load({
						name:'myApp',
						files:[
							'components/controllers/main.js',
							'components/directives/timeline/timeline.js',
							'components/directives/notifications/notifications.js',
							'components/directives/chat/chat.js',
							'components/directives/dashboard/stats/stats.js'
						]
					})
				}
			}
		})
		.state('dashboard.form',{
			templateUrl:'views/form.html',
			url:'/form'
		})
		.state('dashboard.blank',{
			templateUrl:'views/pages/blank.html',
			url:'/blank'
		})
		.state('login',{
			templateUrl:'views/pages/login.html',
			url:'/login'
		})
		.state('dashboard.chart',{
			templateUrl:'views/chart.html',
			url:'/chart',
			controller:'ChartCtrl',
			resolve: {
				loadMyFile:function($ocLazyLoad) {
					return $ocLazyLoad.load({
						name:'chart.js',
						files:[
							'bower_components/angular-chart.js/dist/angular-chart.min.js',
							'bower_components/angular-chart.js/dist/angular-chart.css',
						]
					}),
					$ocLazyLoad.load({
						name:'myApp',
						files:['components/controllers/chartContoller.js']
					})
				}
			}
		})
		.state('dashboard.topology',{
			templateUrl:'views/topology.html',
			url:'/topology',
			controller:'TopologyCtrl',
			resolve: {
				loadMyFile:['$ocLazyLoad', 'loadMyDirectives', function( $ocLazyLoad, loadMyDirectives ) {
					return $ocLazyLoad.load({
						name:'topology_chart.js',
						files:[
							'bower_components/angular-chart.js/dist/angular-chart.min.js',
							'bower_components/angular-chart.js/dist/angular-chart.css',
							'bower_components/next-ui/js/next.js',
							'bower_components/next-ui/css/next.css',
						]
					}).then(function success(args) {
						  console.log('success');
							  return args;
					}, function error(err) {
						  console.log(err);
							return err;
					});
				}],
				loadNextUI:['$ocLazyLoad', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						name:'nextUI',
						files:[
							'bower_components/next-ui/js/next.js',
							'bower_components/next-ui/css/next.css',
						]
					}).then(function success(args) {
						  console.log('success');
							  return args;
					}, function error(err) {
						  console.log(err);
							return err;
					});
				}],
				loadTopologyModule: ['$ocLazyLoad', 'loadNextUI', function( $ocLazyLoad ) {
					return $ocLazyLoad.load({
						name:'myApp',
						files:[
							'components/services/topologyRestconfService.js',
							'components/controllers/topologyController.js',
							'components/next-modules/data.js',
							'components/next-modules/topology.js',
							'components/next-modules/shell.js',
						]
					});
				}]
			}
		})
		.state('dashboard.table',{
			templateUrl:'views/table.html',
			url:'/table'
		})
		.state('dashboard.panels-wells',{
			templateUrl:'views/ui-elements/panels-wells.html',
			url:'/panels-wells'
		})
		.state('dashboard.buttons',{
			templateUrl:'views/ui-elements/buttons.html',
			url:'/buttons'
		})
		.state('dashboard.notifications',{
			templateUrl:'views/ui-elements/notifications.html',
			url:'/notifications'
		})
		.state('dashboard.typography',{
			templateUrl:'views/ui-elements/typography.html',
			url:'/typography'
		})
		.state('dashboard.icons',{
			templateUrl:'views/ui-elements/icons.html',
			url:'/icons'
		})
		.state('dashboard.grid',{
			templateUrl:'views/ui-elements/grid.html',
			url:'/grid'
		})
	}]);
});
