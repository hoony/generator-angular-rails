'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');
var yeoman = require('yeoman-generator');


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.createAppFile = function createAppFile() {
  this.appTemplate('../../templates/common/config/config',     'scripts/config/config');
  this.appTemplate('../../templates/common/config/app.router', 'scripts/config/router');
  this.appTemplate('config/_routes', 'scripts/config/routes');
  this.appTemplate('app',            'scripts/app');
  this.addScriptToIndex('config/config');
  this.addScriptToIndex('config/router');
  this.addScriptToIndex('config/routes');
  this.addScriptToIndex('app');
};
