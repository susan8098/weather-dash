import React, { Component } from 'react';
import styled from 'styled-components';
import Cloudy from '../assets/cloudy.svg';
import Rain from '../assets/rain.svg';
import Snow from '../assets/snow.svg';
import Sun from '../assets/sun.svg';
import SunnyCloudy from '../assets/sunnyCloudy.svg';
import Thunder from '../assets/thunder.svg';

class WeatherIcon extends Component {

  getPath(weather) {
    switch(weather) {
      case 'Overcast':
        return Cloudy;
      case 'Mostly Cloudy':
        return Cloudy;
      case 'Partly Cloudy':
        return SunnyCloudy;
      case 'Sunny':
        return Sun;
      case 'Clear':
        return Sun;
      case 'Rain':
        return Rain;
      case 'Chance of Rain':
        return Rain;
      case 'Snow Showers':
        return Snow;
      case 'Snow':
        return Snow;
      case 'Thunder':
        return Thunder;
      default:
        break;
    }
  }

  render() {
    const weather = this.props.weather;

    return (
      <StyledWeatherIcon src={this.getPath(weather)}>
      </ StyledWeatherIcon>
    );
  }
}

const StyledWeatherIcon = styled.img`
`;

export default WeatherIcon;
