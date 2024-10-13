// src/components/ComingSoon.js
import React from 'react';
import CountdownTimer from './CountdownTimer'; // Import the CountdownTimer component

const ComingSoon = () => {
  return (
    <div 
      className="position-relative vh-100 bg-cover bg-center" 
      style={{ 
        background: 'linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%)',
        animation: 'gradient 15s ease infinite',
        backgroundSize: '400% 400%',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Adding the wave effect */}
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      {/* Background overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      {/* Main content */}
      <div className="position-relative z-10 d-flex flex-column align-items-center justify-content-center h-100 text-center">
        {/* Countdown */}
        <CountdownTimer />

        {/* Logo */}
        <img 
          src="https://i.transtechvietnam.com/uploads/block_images/c2a1c0f9a0b317eb048d581b7e2797c5.png" 
          alt="Logo" 
          className="my-4" 
          style={{ width: '16rem' }} 
        />

        {/* Text */}
        <p className="text-white fs-4">
          Chúng tôi đang tiến hành những bước cuối cùng để hoàn thiện website.
        </p>

        {/* Notification Button */}
        <button className="btn btn-outline-light px-4 py-2 mt-3">
          Nhận thông báo
        </button>
      </div>

      {/* Footer */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x text-white text-center mb-3">
        <small>© 2024 DOANS TECH — 01234567889 — MST: 0123456789</small>
      </div>
    </div>
  );
};

export default ComingSoon;
