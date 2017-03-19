/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../ui-components/General';
import WidgetHeader from '../widgets/WidgetHeader';

const CalculatorWrapper = styled(Card)`
  height: 375px;
`;

const StyledNumView = styled.div`
  height: 48px;
  background-color: #495057;
  color: #fff;
  font-size: 25px;
  margin: 10px 12px 17px 12px;
  padding: 2px 10px;
  text-align: right;
  border-radius: 7px;
  border-style: ridge;
`;

const StyledBtn = styled.button`
  background-color: #cdc7b9;
  margin: 7px 10px;
  font-size: 15px;
  border-radius: 12px;
  outline: none;
  width: ${props => props.name === "zero" ? "120px" : "50px" };
  height: ${props => props.name === "equal" ? "95px" : "40px" };
  bottom: ${props => props.name === "equal" ? "108px" : null };
  left: ${props => props.name === "equal" ? "210px" : null };
  position: ${props => props.name === "equal" ? 'relative' : null };

  &:hover {
    border-color: #cdc7b9;
    cursor: pointer;
  }
`;


function Btn(props){
  const {
    type,
    children,
    handleNum,
    handleEqual,
    handleOperation,
    handleDot,
    handleAC,
    handleCE
  } = props;
  switch(type){
    case "num":
      return(
       <StyledBtn
          value={children}
          onClickCapture={handleNum}
       >
         {children}
       </StyledBtn>
      );

    case "operation":
      return(
       <StyledBtn
          value={children}
          onClick={handleOperation}
       >
         {children}
       </StyledBtn>
      );

    case "equal":
      return(
       <StyledBtn
          name="equal"
          value={children}
          onClick={handleEqual}
       >
         {children}
       </StyledBtn>
      );

    case "dot":
      return(
       <StyledBtn
          value={children}
          onClick={handleDot}
       >
         {children}
       </StyledBtn>
      );

    case "ac":
      return(
       <StyledBtn
          value={children}
          onClick={handleAC}
       >
         {children}
       </StyledBtn>
      );

    case "ce":
      return(
       <StyledBtn
          value={children}
          onClick={handleCE}
       >
         {children}
       </StyledBtn>
      );

    case "zero":
      return(
        <StyledBtn
          name="zero"
          value={children}
          onClick={handleNum}
          >
         {children}
        </StyledBtn>
      );
  }
}

const NumController = props => {
  return (
    <div>
      <Btn type="ac" {...props}>AC</Btn>
      <Btn type="ce" {...props}>CE</Btn>
      <Btn type="operation" {...props}>÷</Btn>
      <Btn type="operation" {...props}>x</Btn>
      <Btn type="num" {...props}>7</Btn>
      <Btn type="num" {...props}>8</Btn>
      <Btn type="num" {...props}>9</Btn>
      <Btn type="operation" {...props}>-</Btn>
      <Btn type="num" {...props}>4</Btn>
      <Btn type="num" {...props}>5</Btn>
      <Btn type="num" {...props}>6</Btn>
      <Btn type="operation" {...props} >+</Btn>
      <Btn type="num" {...props}>1</Btn>
      <Btn type="num" {...props}>2</Btn>
      <Btn type="num" {...props}>3</Btn>
      <div>
        <Btn type="zero" {...props} >0</Btn>
        <Btn type="dot" {...props} >.</Btn>
      </div>

      <Btn type="equal" {...props} >=</Btn>

    </div>
  );
}

function NumView({ entry }){
  return(
    <StyledNumView>
      <p>{entry}</p>
    </StyledNumView>
  );
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      entry: '0',
      value: '0',
      start: true,
      onOperation: false,
      shouldEval: false,
    }
  }

  handleNum = e => {
    const val = e.target.value;
    const { start, entry, value, onOperation, shouldEval, finished } = this.state;

    if(start){
      this.setState({
        entry: val,
        value: val,
        start: false
      })
    } else if(onOperation && shouldEval){
      this.setState({
        entry: val,
        value: value + val,
        shouldEval: false
      });
    }  else {
      this.setState({
        entry: entry + val,
        value: value + val,
      });
    }

  }

  handleOperation = e => {
    const val = e.target.value;
    if(this.state.onOperation){
      const mulDivide = {'x' : '*', '÷' : '/'};
      const retStr = value.split('').map(c => {
        return (c === 'x' || c === '/') ? mulDivide[c] : c
      }).join('');

      this.setState({
        entry: eval(retVal).toString(),
        value: eval(retVal).toString() + val,
        shouldEval: true
      })
    } else {
      this.setState({
        value: this.state.value + val,
        entry: this.state.value,
        onOperation: true,
        shouldEval: true,
        start: false
      });
    }

  }

  handleDot = e => {
    const { entry, value } = this.state;
    if(entry.indexOf('.') == -1){
      this.setState({
        entry: entry + '.',
        value: value + '.',
        start: false
      });
    }
  }

  handleEqual = () => {
    const mulDivide = {'x' : '*', '÷' : '/'};
    const retStr =  this.state.value.toString().split('').map(c => {
      return (c === 'x' || c === '/') ? mulDivide[c] : c
    }).join('');

    const retVal =  eval(retStr);

    this.setState({
      entry: retVal,
      value: retVal,
      onOperation: false,
      shouldEval: false,
      start: true
    });
  }

  handleAC = e => {
    this.setState({
      entry: "0",
      value: "0",
      start: true,
      onOperation: false,
      shouldEval: false,
    })
  }

  handleCE = e => {
    const { onOperation, value, entry } = this.state;
    if(onOperation){
      if('+-x÷'.indexOf(value.slice(-1)) > -1){
        this.setState({
          value: value.slice(0, -1),
          start: true,
          onOperation: false
        });
      } else if('0123456789'.indexOf(value.slice(-1)) > -1){
        this.setState({
          value: value.slice(0, -entry.length),
          entry: 0,
          onOperation: true,
          shouldEval: true
        });
      }
    } else {
      this.setState({
        entry: '0',
        value: '0',
        start: true
      });
    }
  }

  render(){
    const { value, entry } = this.state;
    return(
      <div>
        <WidgetHeader
          name="Calculator"
          type="antd"
          icon="calculator"
        />
        <CalculatorWrapper>
          <NumView
            value={value}
            entry={entry}
          />
          <NumController
            handleNum={this.handleNum}
            handleOperation={this.handleOperation}
            handleAC={this.handleAC}
            handleCE={this.handleCE}
            handleEqual={this.handleEqual}
            handleDot={this.handleDot}
          />
        </CalculatorWrapper>
      </div>
    )
  }
};

export default App;
