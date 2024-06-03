import React from 'react';
import Lottie from "lottie-react";
import animationData from '../../assets/Loading.json'; // Replace with your Lottie JSON file path
import { Player } from '@lottiefiles/react-lottie-player';
import './Loading.css';
const Loading = () => {

  return (
    <div className="loading-overlay">
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: '200px', width: '200px' }}
    />
  </div>
  );
};

export default Loading;
