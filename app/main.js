require.config({

	//By default load any module IDs from bower_components/lib
	baseUrl: './bower_components',
	// alias libraries paths
	// paths config is relative to the baseUrl, and
	// never includes a ".js" extension since
	// the paths config could be for a directory.
	// **put all paths for everything here, relative to baseUrl**
	paths: {
		'app': '../app',
		'routes': '../routes',
		'components': '../components', // dir
		'domReady': './requirejs-domready/domReady',
		'angular': './angular/angular',
		'angular-route': './angular-route/angular-route'
	},

	// angular does not support AMD out of the box, put it in a shim
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-route': {
			deps: ['angular']
		}
	},
	// kick start application
	// path relative to baseUrl
	deps: ['../bootstrap']
});
