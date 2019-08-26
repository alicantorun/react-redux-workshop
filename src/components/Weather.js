import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeather } from "../action/getWeather";

class Weather extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    console.log(this.props.weatherData);
    if (!this.props.weatherData) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>Weather In Berlin</h1>
        <li>Pressure: {this.props.weatherData.pressure}</li>
        <li>Humidity: {this.props.weatherData.humidity}</li>
        <li>Min: {this.props.weatherData.temp_min}</li>
        <li>Max: {this.props.weatherData.temp_max}</li>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weatherData: state.weatherReducer.weather.main
});

export default connect(
  mapStateToProps,
  { getWeather }
)(Weather);
