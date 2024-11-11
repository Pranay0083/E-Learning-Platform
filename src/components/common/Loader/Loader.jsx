import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="preloader">
      <div className="preloader-box">
        {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, index) => (
          <div key={letter} style={{ animationDelay: `${index * 75}ms` }}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;