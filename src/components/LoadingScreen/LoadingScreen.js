import React from 'react';
import './LoadingScreen.css'

import Lottie from 'react-lottie';

import animationData from '../../static/astronaut.json';

function LoadingScreen(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
  };

  return (
    <div className="loading-overlay">
      <div className="loader">
        <Lottie options={defaultOptions}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        />
        <h1 className="loaderTitle">Matt Wong</h1>
      </div>
    </div>
  );
}

export default LoadingScreen;