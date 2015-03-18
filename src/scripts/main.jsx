'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App');
var Home = require('./components/Home');
var About = require('./components/About');

var routes = (
  <Route handler={App} ignoreScrollBehavior>
    <DefaultRoute name="home" handler={Home} />
    <Route name="about" handler={About} path="about" />
  </Route>
);

Router.run(routes, function(Handler, state) {
  React.render(<Handler params={state.params} />, document.getElementById('ess-aa-app'));
});

// Eliminate 300ms click delay on mobile.
var FastClick = require('fastclick');
FastClick.attach(document.body);
