'use strict';

var config = {
  // Constants
  API_URL: ''
};

// Override local config with global config.
var globalConfig = window.config;
if(!!globalConfig) {
  for(var key in globalConfig) {
    config[key] = globalConfig[key];
  }
}

module.exports = config;
