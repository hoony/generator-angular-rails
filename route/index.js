'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var angularUtils = require('../util.js');


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);
  this.hookFor('angular-rails:controller');
  this.hookFor('angular-rails:view');
}
util.inherits(Generator, ScriptBase);

Generator.prototype.rewriteAppJs = function () {
  if (this.env.options.coffee) {
    angularUtils.rewriteFile({
      file: path.join(this.env.options.appPath, 'scripts/config/routes.coffee'),
      needle: 'ROUTER.otherwise',
      splicable: [
        'ROUTER.when \'' + this.name + '\', \'/' + this.name + '\',',
        '  templateUrl: \'views/' + this.name + '.html\',',
        '  controller: \'' + this._.classify(this.name) + 'Ctrl\''
      ]
    });
  }
  else {
    angularUtils.rewriteFile({
      file: path.join(this.env.options.appPath, 'scripts/config/routes.js'),
      needle: 'ROUTER.otherwise',
      splicable: [
        'ROUTER.when(\'' + this.name + '_path\', \'/' + this.name + '\', {',
        '  templateUrl: \'views/' + this.name + '.html\',',
        '  controller: \'' + this._.classify(this.name) + 'Ctrl\'',
        '});'
      ]
    });
  }
};
