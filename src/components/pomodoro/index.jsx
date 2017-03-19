/*eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { Card } from '../ui-components/General';
import WidgetHeader from '../widgets/WidgetHeader';

const PomodoroContainer = styled(Card)`
  position: relative;
  bottom: 4px;
`;

const Span = styled.span`
  position: absolute;
  left: ${(props)=>props.right? '105px' : props.center ? '76px' : '-3px'};
`;

const TimeNumView = styled.div`
  position: absolute;
  top: 10px;
  left: 29px;
  font-size: 57px;
  text-align: center;
  color: #484848;
`;

const TimeViewContainer = styled.div`
  position: relative;
  background: #fff;
  top: 15px;
  margin: auto;
  width: 225px;
  height: 106px;
  border-radius: 32px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
`;

const TimeControlContainer = styled.div`
  text-align: center;
  padding-top: 29px;
`;

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 155px;
  left: 98px;
`;

const Button = styled.div`
  display: inline-block;
  background: #fff;
  text-align: center;
  width: ${(props)=> props.control ? '22px' : '50px'};
  height: 23px;
  margin: 3px 5px;
  cursor: pointer;
  border-radius: 2px;
  color: #484848;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
`;


class Pomodoro extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      onPlay: false,
      onBreak: false,
      onPause: false,
      defaultTime: '25',
      defaultBreak: '03',
      minutes: '25',
      seconds: '00',
    };
  }

  componentWillMount(){
     let soundLink = 'https://dl.dropbox.com/s/wx5svhu8i6aq6y7/alarm.mp3?dl=0';
     this.audio = new Audio(soundLink);
  }


  initiateSession = () => {
    const {minutes, seconds, defaultTime, onPause} = this.state;
    let minutesToString = ('0' + (defaultTime-1)).slice(-2),
        secondsToString = ('0' + (seconds-1).toString()).slice(-2);
    if(onPause){
      this.setState({
        minutes: minutesToString,
        seconds: secondsToString,
        onPlay: true,
        onPause: false
      });
    } else {
      this.setState({
        minutes: minutesToString,
        seconds: 59,
        onPlay: true,
        onPause: false
      });
    }
    this.timerID = setInterval(() => this.tick(), 1000);


  }

  pauseSession = () => {
    clearInterval(this.timerID);
    if(this.state.onPlay){
      this.setState({
        onPause: true
      });
    }

  }

  stopSession = () => {
    const { defaultTime } = this.state;
    clearInterval(this.timerID);
    this.setState({
      minutes : ('0' + this.state.defaultTime).slice(-2),
      seconds : '00',
      onPlay : false,
      onBreak: false,
      onPause: false
    });
  }

  increaseTime = () => {
    const {defaultTime, minutes, onPlay} = this.state,
          minuteToString = ('0' + (Number(minutes) + 5).toString()).slice(-2);
    if(!onPlay){
      this.setState({
        defaultTime: (Number(defaultTime) + 5).toString(),
        minutes: minuteToString
      });
    }
  }

  decreaseTime = () => {
    const {defaultTime, minutes, onPlay} = this.state,
          minuteToString = ('0' + (Number(minutes) - 5).toString()).slice(-2);
    if(!onPlay && defaultTime >= 10 && minutes >= 10){
      this.setState({
        defaultTime: (Number(defaultTime) - 5).toString(),
        minutes: minuteToString
      });
    }
  }

  tick = () => {
    const { seconds, minutes, onBreak, defaultTime, defaultBreak } = this.state;
    let secondsToString = '0' + (seconds-1).toString(),
        defaultTimeToString = '0' + (minutes-1).toString(),
        minutesToString = '0' + minutes.toString();


     if (seconds > 0){
      this.setState({
        seconds: secondsToString.slice(-2),
        minutes: minutesToString.slice(-2),
      });
     } else {
      if (minutes <= 0){
        this.audio.play();
        clearInterval(this.timerID);
        if(onBreak){
          this.setState({
            minutes : defaultTime,
            seconds : '00',
            onBreak : false
          });
        } else {
          this.setState({
            minutes : defaultBreak,
            seconds : '00',
            onBreak : true
          })
        }
      } else {
        this.setState({
          minutes : defaultTimeToString.slice(-2),
          seconds : 59
        });
      }

     }
  }

  render(){
    const { minutes, seconds } = this.state;
    return(
      <div>
        <WidgetHeader name="Pomodoro Timer" type="fontawesome" icon="hourglass-o"/>
        <PomodoroContainer>
          <TimeView
            minutes={minutes}
            seconds={seconds}
          >
          </TimeView>
          <TimeControl
            initiateSession={this.initiateSession}
            pauseSession={this.pauseSession}
            stopSession={this.stopSession}
          />
        </PomodoroContainer>
      </div>
    );
  }
}

function TimeControl({initiateSession, pauseSession, stopSession}){
  return (
    <TimeControlContainer>
      <Button onClick={initiateSession}>></Button>
      <Button onClick={pauseSession}>||</Button>
      <Button onClick={stopSession}>x</Button>
    </TimeControlContainer>
  );
}

function TimeView({ minutes, seconds, ...props }){
  return (
    <TimeViewContainer>
      <TimeNumView>
        <Span left>{minutes}</Span>
        <Span center>:</Span>
        <Span right>{seconds}</Span>
      </TimeNumView>
      {props.children}
    </TimeViewContainer>
  );
}

export default Pomodoro;
