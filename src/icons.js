const React = require('react');
const { SvgIcon } = require('material-ui');

let ActionPlay = React.createClass({
  render() {
    return (
      <SvgIcon {...this.props}>
        <path fill="#FFFFF" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
      </SvgIcon>
    );
  }
});

let ActionPause = React.createClass({
  render() {
    return (
      <SvgIcon {...this.props}>
        <path fill="#FFFFF" d="M14,19.14H18V5.14H14M6,19.14H10V5.14H6V19.14Z" />
      </SvgIcon>
    )
  }
})

module.exports = { ActionPlay, ActionPause }
