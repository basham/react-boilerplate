'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  //
  // Render methods
  //
  render: function() {
    return (
      <section className="qn-App">
        <header className="qn-Header">
          <h1 className="qn-Header-heading">
            Superhero Directory
          </h1>
        </header>
        <nav>
          <Link
            to="home"
            className="qn-Button"
            activeClassName="qn-Button--active">
            Home
          </Link>
          <Link
            to="about"
            className="qn-Button"
            activeClassName="qn-Button--active">
            About
          </Link>
        </nav>
        <div className="qn-App-content">
          <RouteHandler {...this.props} />
        </div>
      </section>
    );
  }
});

module.exports = App;
