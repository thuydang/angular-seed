'use strict';

angular.module('myApp', ['ngResource'])
.factory('TopologyService', ['$resource', 
		function ($resource) {
	return $resource('/app/data/flow-1.json', {}, {
		query: {method:'GET', isArray:false}
	});
}]);

