'use strict';

var React = require('react');
var Reflux = require('reflux');

var actions = require('../actions');
var dataStore = require('../stores/data');

var Home = React.createClass({
  mixins: [
    Reflux.connect(dataStore, 'dataStore')
  ],
  //
  // Lifecycle methods
  //
  componentDidMount: function() {
    actions.getData();
  },
  //
  // Render methods
  //
  render: function() {
    // Don't render is there's no data.
    if(!this.state.dataStore) {
      return null;
    }

    var list = this.state.dataStore.superheroes.map(function(superhero) {
      return this.renderSuperhero(superhero);
    }.bind(this));

    return (
      <div>
        {list}
      </div>
    );
  },
  renderSuperhero: function(superhero) {
    var abilities = superhero.abilities.map(function(ability) {
      return (
        <dd>{ability}</dd>
      );
    });

    return (
      <div>
        <h2>{superhero.name}</h2>
        <dl>
          <dt>Identity</dt>
          <dd>{superhero.identity}</dd>
          <dt>Location</dt>
          <dd>{superhero.location}</dd>
          <dt>Abilities</dt>
          {abilities}
        </dl>
      </div>
    );
  }
});

module.exports = Home;
