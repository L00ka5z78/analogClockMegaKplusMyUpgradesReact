import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {

  state = {
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
  }

  componentDidMount() {               // setting clock. it runs setClock function with 1s interval
    setInterval(() => {
      this.setClock()
    }, 1000)
  }

  setClock = () => {
    const currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    this.setState({ secondRatio: secondRatio })
    this.setState({ minuteRatio: minuteRatio })
    this.setState({ hourRatio: hourRatio })

  }

  render() {
    return (
      <Clock />
    );
  }
}

export default App;
