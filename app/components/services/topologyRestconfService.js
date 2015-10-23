'use strict';

angular.module('myApp', ['ngResource'])
.service('TopologyResource', ['$resource', 
		function ($resource) {
	//return $resource('/app/data/flow-1.json', {}, {
	//	query: {method:'GET', isArray:false}
	//});
			return $resource('/app/data/flow-1.json');
		}]);

angular.module('myApp')
.service('TopologyService', ['TopologyResource', 
		function (TopologyResource) {
			this.get = function() {
				return TopologyResource.get().$promise;
			}
		}]);

