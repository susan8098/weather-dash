import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import styled from 'styled-components';

import { editGoalAction } from '../actions';

import mapStateToProps from '../selectors';

const mapDispatchToProps = {
  editGoal: editGoalAction
};

class GoalInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredValue: '',
      valueSet: false,
    }
    this.textInput = React.createRef();
  }

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      enteredValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      valueSet: true
    })
    this.props.editGoal(this.state.enteredValue);
  }

  render() {
    const { goal } = this.props;
    return (
      <StyledGoalInput>
          
        <form onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleInputChange} 
            ref={this.textInput} 
            onKeyUp={e => {
              if (e.keyCode === 13 || e.keyCode === 27) {
                e.currentTarget.blur();
              }
            }}
            />
          <h2>{goal}</h2>
          {!this.state.valueSet && <span></span>}
        </form>
        
      </StyledGoalInput>
    )
  }

}

const StyledGoalInput = styled.div`
  width: 70%;
  max-width: 870px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  
  form {
    position: relative;
  }

  input {
    display: block;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid white; 
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: white;
    text-align: center;
    font-size: 34px;
    font-weight: 500;
    letter-spacing: .65px;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    opacity: 0;
  }

  input:focus {
    opacity: 1;
  }
 
  h2 {
    font-size: 34px;
    font-weight: 500;
  }

  input:focus + h2 {
    opacity: 0;
  }

  span {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    border-bottom: 2px solid white;
  }
`;



export default connect(mapStateToProps, mapDispatchToProps)(GoalInput);
