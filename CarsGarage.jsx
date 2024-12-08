import React, { Component } from 'react';
import Cars from './Cars';

export default class CarsGarage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      car1: { CarName: "Honda Car", EngineCC: "4000CC", color: "Blue" },
      car2: { CarName: "Tesla", EngineCC: "3000CC", color: "White" },
      car3: { CarName: "Ford Mustang", EngineCC: "2000CC", color: "Green" },
      car4: { CarName: "Toyota Fortuner", EngineCC: "4000CC", color: "Orange" },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Dynamic input handler
  handleInputChange(e, carKey, property) {
    const value = e.target.value;

    this.setState((prevState) => ({
      [carKey]: {
        ...prevState[carKey], // Preserve other properties
        [property]: value,   // Update specific property
      },
    }));
  }

  renderCarDetails(carKey, car) {
    return (
      <div key={carKey}>
        <h4>{car.CarName} Details</h4>
        <label>
          Car Name:
          <input
            type="text"
            value={car.CarName}
            onChange={(e) => this.handleInputChange(e, carKey, "CarName")}
          />
        </label>
        <br />
        <label>
          Engine CC:
          <input
            type="text"
            value={car.EngineCC}
            onChange={(e) => this.handleInputChange(e, carKey, "EngineCC")}
          />
        </label>
        <br />
        <label>
          Color:
          <input
            type="text"
            value={car.color}
            onChange={(e) => this.handleInputChange(e, carKey, "color")}
          />
        </label>
        <br />
        <Cars carname={car.CarName} cc={car.EngineCC} color={car.color} />
      </div>
    );
  }

  render() {
    const { car1, car2, car3, car4 } = this.state;

    return (
      <div>
        <h4>List of Cars in My Garage</h4>
        {this.renderCarDetails("car1", car1)}
        {this.renderCarDetails("car2", car2)}
        {this.renderCarDetails("car3", car3)}
        {this.renderCarDetails("car4", car4)}
      </div>
    );
  }
}
