'use strict';

var CONFIG;

(function() {

  var appPrefix = 'app/',
      templateUrlPrefix = '/assets/',
      appVersion = 1;

  CONFIG = {

    version : appVersion,

    baseDirectory : appPrefix,
    templateDirectory : templateUrlPrefix,
    templateFileQuerystring : '?v=' + appVersion,

    routing : {

      prefix : '',
      html5Mode : false

    },

    templateUrlPrefix: templateUrlPrefix,
    templateFileSuffix : '.html',

    prepareViewTemplateUrl : function(url) {
      return this.templateUrlPrefix + url + this.templateFileSuffix + this.templateFileQuerystring;
    }

  };

})();
