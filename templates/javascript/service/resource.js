'use strict';

angular.module('<%= _.camelize(appname) %>App')
.factory('<%= _.camelize(name) %>', ['$resource', function(resource) {

  return resource('/api/v1/some_model/:id', {
    // Resource attributes
    id: '@id'
  },{
    // Extra methods here
  });

}]);
