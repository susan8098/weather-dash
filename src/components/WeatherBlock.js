import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import CurrentWeather from './CurrentWeather';
import WeekWeather from './WeekWeather';
import styled from 'styled-components';

import { API_KEY, TO_LOCATION } from '../constants';

import { getDataAction } from '../actions';
import mapStateToProps from '../selectors';


const mapDispatchToProps = {
  getForecast: getDataAction
};

class WeatherBlock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentWeather: {},
      forecastWeather: []
    }
  }
  
  componentDidMount() {
    fetch(`https://api.wunderground.com/api/${API_KEY}/geolocation/conditions/q/${TO_LOCATION}.json`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.current_observation);
          this.setState({ currentWeather: result.current_observation });
        },
        (error) => {
          console.log('error');
        }
      );

    this.props.getForecast();

    // fetch(`https://api.wunderground.com/api/${API_KEY}/forecast10day/q/${TO_LOCATION}.json`)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result.forecast.simpleforecast.forecastday);
    //       this.setState({ forecastWeather: result.forecast.simpleforecast.forecastday });
    //     },
    //     (error) => {
    //       console.log('error');
    //     }
    //   );
  }

  render() {
    console.log(this.props.forecast.forecastData);
    return (
      <StyledWeatherBlock>
        <CurrentWeather currentWeather={this.state.currentWeather} />
        <WeekWeather forecastWeather={this.props.forecast.forecastData} />
      </StyledWeatherBlock>
    );
  }
}

const StyledWeatherBlock = styled.div`
  width: 100%;
  width: 80%;
  max-width: 870px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBlock);
