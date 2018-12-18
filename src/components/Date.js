import React, { Component } from 'react';
import styled from 'styled-components';

class DateComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      date: '',
      month: '',
      year: ''
    }
  }

  getTodayDate() {
    const current = new Date();
    const day = current.getDay();
    const dd = current.getDate();
    const mm = current.getMonth();
    const yy = current.getFullYear();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.setState({
      day: days[day],
      date: dd,
      month: months[mm],
      year: yy
    })
  }

  componentDidMount() {
    this.getTodayDate();
  }

  render() {
    return (
      <StyledDate>
        <h1>{this.state.day}<br/>{this.state.month} {this.state.date} {this.state.year}</h1>
      </StyledDate>
    );
  }
}

const StyledDate = styled.div`
  margin: 30px 0;
  opacity: .85;
  h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 500;
    margin: 10px 0;
  }
`;

export default DateComponent;
