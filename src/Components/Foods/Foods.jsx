import React, { Component } from "react";
import axios from "axios";

import "./Foods.css";

class Foods extends Component {
  state = {
    isLoading: false,
    searchTerm: "",
    foods: [],
    pageTitle: "",
    foodGroups: [
      {
        id: "2000",
        name: "Grains"
      },
      {
        id: "0900",
        name: "Fruits"
      },
      {
        id: "1600",
        name: "Legumes"
      },
      {
        id: "1200",
        name: "Nuts and Seeds"
      },
      {
        id: "1100",
        name: "Vegetables"
      }
    ]
  };

  baseUrl =
    "http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=QQ4HZzADiGZBvTyk5606Fb1axjFItcxuhYfct882&sort=c";

  componentDidMount() {
    this.createUrl();
    this.fetchData(this.baseUrl);
  }

  createUrl() {
    this.state.foodGroups.forEach(foodGroup => {
      this.baseUrl += `&fg=${foodGroup.id}`;
    });

    const {
      match: { params }
    } = this.props;

    this.baseUrl += `&nutrients=${params.nutrientId}`;
  }

  async fetchData(url) {
    try {
      this.setState({ isLoading: true });
      const response = await axios.get(url);
      this.setState({ foods: response.data.report.foods });
      this.setState({
        pageTitle: response.data.report.foods[0].nutrients[0].nutrient
      });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  onChangeHandler = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    const filteredFoods = this.state.foods.filter(
      food =>
        this.state.searchTerm === "" ||
        food.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    if (this.state.isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h4>{this.state.pageTitle}</h4>
          <div className="row">
            <div className="input-field col s8 offset-s2 m4 offset-m4">
              <input
                id="search"
                type="text"
                className="validate"
                value={this.state.searchTerm}
                onChange={this.onChangeHandler}
              />
              <label htmlFor="search">Search</label>
            </div>
            {filteredFoods.map(food => (
              <div key={food.name} className="col s12 m6 offset-m3">
                <div className="card z-depth-3">
                  <div className="card-content blue-text">
                    <div>
                      <i className="small material-icons">short_text</i>
                    </div>
                    <p className="card-title">{food.name}</p>
                    <p>100 grams</p>
                  </div>
                  <div className="card-action">
                    <div>
                      <i className="small material-icons">show_chart</i>
                    </div>
                    <span>Nutrient Content: </span>
                    <span>
                      {food.nutrients[0].gm}{" "}
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
}

export default Foods;
