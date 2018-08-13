import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    nutrients: [
      { id: "301", name: "Calcium" },
      { id: "303", name: "Iron" },
      { id: "304", name: "Magnesium" },
      { id: "851", name: "Omega-3" },
      { id: "305", name: "Phosphorus" },
      { id: "306", name: "Potassium" },
      { id: "203", name: "Protein" },
      { id: "309", name: "Zinc" }
    ]
  };

  render() {
    return (
      <div>
        {this.state.nutrients.map(nutrient => {
          return (
            <button key={nutrient.id}>
              <Link to={`nutrients/${nutrient.id}`}>{nutrient.name}</Link>
            </button>
          );
        })}
      </div>
    );
  }
}

export default Home;
