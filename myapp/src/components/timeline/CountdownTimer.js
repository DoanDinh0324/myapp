import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const CountdownTimer = () => {
  return (
    <FlipClockCountdown
    to={new Date().getTime() + 5000000000}  // Countdown target
    labels={['tuần', 'ngày', 'giờ', 'phút', 'giây']}  // Custom labels for weeks, days, hours, minutes, seconds
    duration={0.5}  // Speed of the flip animation
    className="flip-clock"  // Optional class to apply additional styles
  />
  );
};

export default CountdownTimer;
