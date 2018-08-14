import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-video">
          <ReactPlayer url='http://lyc-img.oss-cn-hangzhou.aliyuncs.com/71466441.mp4'
            width='100%'
            height='100%'
            playing="false"
            playbackRate="1.0"
            volume="0.8"
          />
        </div>
      </div>
    );
  }
}

export default App;
