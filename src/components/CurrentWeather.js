import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherIcon from './WeatherIcon';

class CurrentWeather extends Component {

  render() {
    return (
      <StyledCurrentWeather>
        <p>TODAY</p>
        <WeatherWrap>
          <WeatherIconWrap>
            <WeatherIcon weather={this.props.currentWeather.weather} />
          </WeatherIconWrap>
          <Temp>{this.props.currentWeather.temp_c}</Temp>
        </WeatherWrap>
        <p>FEELS LIKE: {this.props.currentWeather.feelslike_c}</p>
      </ StyledCurrentWeather>
    );
  }
}

const StyledCurrentWeather = styled.div`
  text-align: left;
  p {
    font-size: 12px;
    letter-spacing: 2px;
  }
`;

const WeatherIconWrap = styled.div`
  width: 100px;
  height: 100px;
`;

const WeatherWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Temp = styled.span`
  font-size: 28px;
`;

export default CurrentWeather;
