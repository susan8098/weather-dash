import React, { Component } from 'react';
import styled from 'styled-components';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mins: '',
      hours: '',
    }
  }

  getTime() {
    // get the current time
    const now = new Date();
    // get mintues, transform that into degrees
    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    // do the same for hour
    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    
    this.setState({
      mins: minsDegree,
      hours: hoursDegree,
    });
  }
  
  componentDidMount() {
    this.getTime();
    setInterval(this.getTime(), 1000);
  }
  
  render() {
    return (
      <StyledClock>
        <HourHand hoursDegree={this.state.hours} />
        <MinHand minsDegree={this.state.mins} />
        <Center />
      </StyledClock>
    );
  }
}

const StyledClock = styled.div`
  opacity: .85;
  margin: 3% auto 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid white;
  position: relative;
`;

const MinHand = styled.div`
  width: 45%;
  height: 3px;
  background: white;
  transform-origin: 100%;
  transform: rotate(90deg);
  transform: rotate(${props => props.minsDegree ? props.minsDegree : '90' }deg);
  position: absolute;
  top: 50%;
  left: 5%;
`;

const HourHand = styled.div`
  width: 35%;
  height: 3px;
  background: white;
  transform-origin: 100%;
  transform: rotate(90deg);
  transform: rotate(${props => props.hoursDegree ? props.hoursDegree : '90' }deg);
  position: absolute;
  top: 50%;
  left: 15%;
`;

const Center = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default Clock;
