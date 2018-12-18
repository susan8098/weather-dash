import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherIcon from './WeatherIcon';

class WeekWeather extends Component {
  render() {
    const forecastWeather = this.props.forecastWeather;

    return (
      <StyledWeekWeather>
        {forecastWeather.slice(1, 7).map((forecastDay, i) => {
          return(
            <ForecastDay key={i}>
              <Day>{forecastDay.date.weekday}</Day>
              <WeatherIconWrap>
                <WeatherIcon weather={forecastDay.conditions} />
              </WeatherIconWrap>
              <Temp>{forecastDay.low.celsius} / {forecastDay.high.celsius}</Temp>
            </ForecastDay>
          )
        })}
      </StyledWeekWeather>
    );
  }
}

const StyledWeekWeather = styled.div`
  display: flex;
`;
const ForecastDay = styled.div`
  margin: 0 10px;
`;
const Day = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
`;
const WeatherIconWrap = styled.div`
  width: 80px;
  height: 80px;
`;
const Temp = styled.p`
  font-size: 12px;
  letter-spacing: 2px;
`;


export default WeekWeather;
