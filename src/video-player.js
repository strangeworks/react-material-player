'use strict';

const React = require('react');
const mui = require('material-ui');
const { Card, CardMedia, CardTitle, CardActions, Styles } = mui;
const { ThemeManager } = Styles;

let themeManagerInstance = new ThemeManager();

let VideoPlayer = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: themeManagerInstance.getCurrentTheme()
    };
  },

  propTypes: {
    label: React.PropTypes.node,
    style: React.PropTypes.object,
    poster: React.PropTypes.string,
    src: React.PropTypes.string
  },

  render() {
    const {title, desc, poster, src} = this.props

    return (
      <Card>
        <CardMedia overlay={<CardTitle title={title} subtitle={desc} />}>
          <video src={src} poster={poster} />
        </CardMedia>
      </Card>
    );
  }
})

module.exports = VideoPlayer;
