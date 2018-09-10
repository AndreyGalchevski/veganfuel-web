import React from 'react';
import M from 'materialize-css/dist/js/materialize.js';
import './Fab.css';

class Fab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fabInstance: null
    };
  }

  componentDidMount() {
    let fabElelement = document.querySelector('.fixed-action-btn');
    let fabInstance = M.FloatingActionButton.init(fabElelement, {});
    this.setState({
      fabInstance
    });
  }

  render() {
    return (
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large pink darken-1">
          <i className="fas fa-share-alt" />
        </a>
        <ul>
          <li>
            <a
              className="btn-floating facebook"
              href="https://www.facebook.com/sharer/sharer.php?u=https://veganfuel.herokuapp.com"
              target="_blank"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              className="btn-floating twitter"
              href="https://twitter.com/intent/tweet?url=https://veganfuel.herokuapp.com/&text=Check out this cool vegan nutrition app!&hashtags=vegan"
              target="_blank"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a
              className="btn-floating linkedin"
              href="https://www.linkedin.com/shareArticle?url=https://veganfuel.herokuapp.com"
              target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a
              className="btn-floating google-plus"
              href="https://plus.google.com/share?url=https://veganfuel.herokuapp.com"
              target="_blank"
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
