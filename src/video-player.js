'use strict';

const React = require('react');
const mui = require('material-ui');
const { Card, CardMedia, CardTitle, CardActions, Styles, FloatingActionButton, Slider } = mui;
const { ThemeManager } = Styles;
const { ActionPlay, ActionPause } = require('./icons');

let themeManagerInstance = new ThemeManager();

let VideoPlayer = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState() {
    return {
      playing: false
    }
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

  _onClick() {
    const mediaNode = this.refs.video.getDOMNode();
    let action = !!mediaNode.paused ? 'play' : 'pause';

    this.setState({playing: !this.state.playing})

    mediaNode[action]();
  },

  render() {
    const {title, desc, poster, src} = this.props;
    let icon = this.state.playing ? <ActionPause /> : <ActionPlay />;

    return (
      <Card>
        <CardMedia overlay={<CardTitle title={title} subtitle={desc} />}>
          <video src={src} poster={poster} ref="video" />
        </CardMedia>
        <CardActions>
          <FloatingActionButton onClick={this._onClick}>
            {icon}
          </FloatingActionButton>
        </CardActions>
      </Card>
    );
  }
})

module.exports = VideoPlayer;
