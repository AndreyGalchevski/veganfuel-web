import React from 'react';
import './Foods.css';
import { Api } from '../../api/Api';

class Foods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectInstance: null,
      baseUrlQuery:
        '?format=json&max=1500&api_key=QQ4HZzADiGZBvTyk5606Fb1axjFItcxuhYfct882&sort=c',
      searchTerm: '',
      foods: [],
      pageTitle: '',
      currentFoodGroup: '2000',
      foodGroups: [
        {
          id: '2000',
          name: 'Grains'
        },
        {
          id: '0900',
          name: 'Fruits'
        },
        {
          id: '1600',
          name: 'Legumes'
        },
        {
          id: '1200',
          name: 'Nuts and Seeds'
        },
        {
          id: '1100',
          name: 'Vegetables'
        }
      ]
    };
  }

  createUrl(foodGroup) {
    let nutrientId = this.props.match.params.nutrientId;
    let url = `${this.state.baseUrlQuery}&nutrients=${nutrientId}`;
    if (foodGroup === '9999') {
      this.state.foodGroups.forEach(foodGroup => {
        url += `&fg=${foodGroup.id}`;
      });
    } else {
      url += `&fg=${foodGroup}`;
    }
    return url;
  }

  fetchData(url) {
    Api.get(url).then(response => {
      this.setState({
        foods: response.data.report.foods
      });

      let nutrientName = response.data.report.foods[0].nutrients[0].nutrient;

      if (nutrientName === '18:3 n-3 c,c,c (ALA)') {
        this.setState({ pageTitle: 'Omega-3' });
      } else {
        this.setState({
          pageTitle: nutrientName
        });
      }
    });
  }

  handleSelect = e => {
    this.setState({ currentFoodGroup: e.target.value }, () => {
      this.displayData();
    });
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  displayData() {
    let url = this.createUrl(this.state.currentFoodGroup);
    this.fetchData(url);
  }

  componentDidMount() {
    let selectElement = document.querySelector('select');
    let selectInstance = M.FormSelect.init(selectElement, {});
    this.setState({ selectInstance });
    this.displayData();
  }

  render() {
    let filteredFoods = this.state.foods.filter(food => {
      return food.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
    return (
      <div>
        <h4>{this.state.pageTitle}</h4>
        <div className="row">
          <div className="input-field col s8 offset-s2 m4 offset-m4">
            <select onChange={this.handleSelect}>
              <option value="" disabled>
                Choose Food Group
              </option>
              <option value="2000">Grains</option>
              <option value="0900">Fruits</option>
              <option value="1600">Legumes</option>
              <option value="1200">Nuts and Seeds</option>
              <option value="1100">Vegetables</option>
              <option value="9999">All</option>
            </select>
          </div>

          <div className="input-field col s8 offset-s2 m4 offset-m4">
            <input
              id="search"
              type="text"
              className="validate"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
            <label htmlFor="search">Search</label>
          </div>

          {filteredFoods.map(food => (
            <div key={food.name} className="col s12 m6 offset-m3">
              <div className="card z-depth-4">
                <div className="card-content blue-text">
                  <div>
                    <i className="small material-icons">short_text</i>
                  </div>
                  <p className="card-title">{food.name}</p>
                  <p>{food.measure}</p>
                </div>
                <div className="card-action grey darken-3">
                  <div className="white-text">
                    <i className="small material-icons">show_chart</i>
                  </div>
                  <span className="white-text">Nutrient Content: </span>
                  <span className="white-text">
                    {food.nutrients[0].value}
                    <small>{food.nutrients[0].unit}</small>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Foods;
