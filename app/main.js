require.config({

	//By default load any module IDs from bower_components/lib
	baseUrl: './bower_components',
	// alias libraries paths
	// paths config is relative to the baseUrl, and
	// never includes a ".js" extension since
	// the paths config could be for a directory.
	// **put all paths for everything here, relative to baseUrl**
	paths: {
		'jquery': './jquery/dist/jquery.min',
		'metisMenu': './metisMenu/dist/metisMenu.min',
		'domReady': './requirejs-domready/domReady',
		'uiRouter': './angular-ui-router/release/angular-ui-router.min',
		'angular-bootstrap': './angular-bootstrap/ui-bootstrap-tpls.min',
		'angular-loading-bar': './angular-loading-bar/build/loading-bar.min',
		'angular': './angular/angular',
		'angular-route': './angular-route/angular-route',
		'ocLazyLoad': './oclazyload/dist/ocLazyLoad.min',
		//'chart': './Chart.js/Chart.min',
		// not under baseUrl
		'app': '../app',
		'routes': '../routes',
		'components': '../components', // dir
		'sb-admin-2': '../components/sb-admin-2', // dir
	},

	// angular does not support AMD out of the box, put it in a shim
	shim: {
		'jquery': {
			exports: '$'
		},
		'angular': {
			exports: 'angular'
		},
		'angular-route': {
			deps: ['angular']
		},
		'angular-bootstrap': {
			deps: ['angular']
		},
		'ocLazyLoad': {
			deps: ['angular']
		},
		// not export anything, just array of dependencies
		metisMenu: [
			'jquery'
		],
	},
	// kick start application
	// path relative to baseUrl
	deps: ['../bootstrap']
});
