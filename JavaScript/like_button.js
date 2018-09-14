'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "Thanks, we won't forget it! (unless you refresh)";
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like Us?'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);