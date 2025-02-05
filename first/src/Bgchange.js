import React, { useState } from 'react';
import './Bgchng.css';

function BgChange() {
  const [color, setColor] = useState('yellow');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="bod" style={{ backgroundColor: color }}>
      <div className='navbar'>
        <button className='btn' onClick={() => changeColor('red')}>RED</button>
        <button className='btn' onClick={() => changeColor('yellow')}>YELLOW</button>
        <button className='btn' onClick={() => changeColor('purple')}>PURPLE</button>
        <button className='btn' onClick={() => changeColor('green')}>GREEN</button>
        <button className='btn' onClick={() => changeColor('black')}>BLACK</button>
      </div>
    </div>
  );
}

export default BgChange;
