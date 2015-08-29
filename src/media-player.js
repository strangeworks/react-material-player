const React = require('react');
const mui = require('material-ui');
const VideoPlayer = require('./video-player');
const AudioPlayer = require('./audio-player');

let MediaPlayer = React.createClass({
  render() {
    const { mediaType } = this.props;
    const Component = mediaType == 'video' ? VideoPlayer : AudioPlayer;

    return (
      <div>
        <Component {...this.props} />
      </div>
    )
  }
})

module.exports = MediaPlayer
