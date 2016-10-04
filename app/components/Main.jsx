
// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router')

// Create the Main component
var Main = React.createClass {
  render: function() {
    return (
      <div id='Main'>
        Main
        <Saved />
        <Search />
      </div>
    )
  }
}
