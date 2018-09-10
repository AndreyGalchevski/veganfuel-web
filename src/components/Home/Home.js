import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nutrients: [
        {
          id: '301',
          name: 'Calcium',
          image:
            'https://res.cloudinary.com/dqvimfd8b/image/upload/v1534237226/veganfuel-web/home/1.png'
        },
        {
          id: '303',
          name: 'Iron',
          image:
            'https://res.cloudinary.com/dqvimfd8b/image/upload/v1534237226/veganfuel-web/home/2.png'
        },
        {
          id: '304',
          name: 'Magnesium',
          image:
            'https://res.cloudinary.com/dqvimfd8b/image/upload/v1534237226/veganfuel-web/home/3.png'
        },
        {
          id: '851',
          name: 'Omega-3',
          image:
            'https://res.cloudinary.com/dqvimfd8b/image/upload/v1535206231/veganfuel-web/home/4a.png'
        },
        {
          id: '305',
          name: 'Phosphorus',
          image:
            'https://res.cloudinary.com/dqvimfd8b/image/upload/v1534237226/veganfuel-web/home/5.png'
        },
        {
          id: '306',
          name: 'Potassium',
          image:
            'https://res.cloudinary.com/dqvimfd8b/image/upload/v1534237226/veganfuel-web/home/6.png'
        },
        {
          id: '203',
          name: 'Protein',
          image:
            'https://res.cloudinary.com/dqvimfd8b/image/upload/v1534622070/veganfuel-web/home/7.png'
        },
        {
          id: '309',
          name: 'Zinc',
          image:
            'https://res.cloudinary.com/dqvimfd8b/image/upload/v1534621985/veganfuel-web/home/8.png'
        }
      ]
    };
  }

  addEvenPaddingToCards() {
    let cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
      if (i % 2 === 0) {
        cards[i].classList.add('offset-m2');
        cards[i].style.paddingRight = '2px';
      } else {
        cards[i].style.paddingLeft = '2px';
      }
    }
  }

  componentDidMount() {
    this.addEvenPaddingToCards();
  }

  render() {
    const nutrients = this.state.nutrients;

    return (
      <div className="home container">
        <div className="row">
          {nutrients.map(nutrient => (
            <Link to={{ pathname: `/foods/${nutrient.id}` }} key={nutrient.id}>
              <div className="home-card card col s6 m4" key={nutrient.id}>
                <div className="card-image">
                  <img src={nutrient.image} />
                  <span className="card-title">{nutrient.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
