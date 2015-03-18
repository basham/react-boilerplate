'use strict';

var Reflux = require('reflux');

var actions = require('../actions');

var dataStore = Reflux.createStore({
  listenables: actions,
  //
  // Action methods
  //
  onGetData: function() {
    var data = require('./data.json');
    this.trigger(data);
  }
});

module.exports = dataStore;
