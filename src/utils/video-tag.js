const Video = React.createClass({
  updateCurrentTime(times) {
    this.props.currentTimeChanged(times);
  },

  updateDuration(duration) {
    this.props.durationChanged(duration);
  },

  playbackChanged(shouldPause) {
    this.props.updatePlaybackStatus(shouldPause);
  },

  updateBuffer(buffered) {
    this.props.bufferChanged(buffered);
  },

  componentDidMount() {
    const video = this.getDOMNode();
    const self = this;

    // Sent when playback completes
    video.addEventListener('ended', function(e){
      self.playbackChanged(e.target.ended);
    }, false);

    var bufferCheck = setInterval(() => {
        try {
          var percent = (video.buffered.end(0) / video.duration * 100)
        } catch(ex){
          percent = 0;
        }
        self.updateBuffer(percent);
        if (percent == 100) { clearInterval(bufferCheck); }
    }, 500);

    video.addEventListener('durationchange', function(e){
      self.updateDuration(e.target.duration);
    }, false);

    video.addEventListener('timeupdate', function(e){
      self.updateCurrentTime({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    }, false)
  },

  render() {
    return (
      <video src={this.props.url} poster={this.props.poster}></video>
    );
  }
});
