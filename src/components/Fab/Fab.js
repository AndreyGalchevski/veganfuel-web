import React from 'react';
import M from 'materialize-css/dist/js/materialize.js';
import './Fab.css';

class Fab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fabInstance: null,
      clickCounter: 0
    };
  }

  handleClick = () => {
    this.setState(state => state.clickCounter + 1);

    if (this.state.clickCounter >= 2) {
      this.setState({ clickCounter: 0 });
      this.state.fabInstance.close();
    }
  };

  componentDidMount() {
    let fabElelement = document.querySelector('.fixed-action-btn');
    let fabInstance = M.FloatingActionButton.init(fabElelement, {
      hoverEnabled: false
    });
    this.setState({
      fabInstance
    });
  }

  render() {
    return (
      <div className="fixed-action-btn" onClick={this.handleClick}>
        <a className="btn-floating btn-large pink darken-1">
          <i className="fas fa-share-alt" />
        </a>
        <ul>
          <li>
            <a
              className="btn-floating facebook"
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.veganfuel.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              className="btn-floating twitter"
              href="https://twitter.com/intent/tweet?url=https://www.veganfuel.org/&text=Check out this cool vegan nutrition app!&hashtags=vegan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a
              className="btn-floating linkedin"
              href="https://www.linkedin.com/shareArticle?url=https://www.veganfuel.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a
              className="btn-floating google-plus"
              href="https://plus.google.com/share?url=https://www.veganfuel.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google-plus-g" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Fab;
