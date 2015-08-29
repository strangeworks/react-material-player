const React = require('react');
const mui = require('material-ui');
const VideoPlayer = require('./video-player');
const AudioPlayer = require('./audio-player');

let MediaPlayer = React.createClass({
  render() {
    return (
      const { mediaType } = this.props;

      Component = mediaType == 'video' ? VideoPlayer : AudioPlayer;

      <div>
        <Component {...this.props} />
      </div>
    )
  }
})

module.exports = MediaPlayer
