import React, { Component } from 'react';
import styled from 'styled-components';
import Clock from './components/Clock';
import GoalInput from './components/GoalInput';
import DateComponent from './components/Date';
import WeatherBlock from './components/WeatherBlock';
import BgImg from './assets/bg-image.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppShell>
        <AppContainer>
          <Clock />
          <DateComponent />
          <GoalInput />
          <WeatherBlock />
        </AppContainer>
      </AppShell>
    );
  }
}

const AppShell = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${BgImg});
  background-size: cover;
  background-position: center;
`;
  
const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr 2fr;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, rgba(72, 1, 189, 0.8) 20%, rgba(2, 0, 124, 0.8) 100%);
  text-align: center;
  color: white;
  position: relative;
`;

export default App;
