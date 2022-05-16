import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor, resetColor } from '../redux/features/dummy.feature';

function ChangeColor() {
  // local state
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => dispatch(changeColor(color))}>Change Barefoot Color</button>
      <button onClick={() => dispatch(resetColor())}>Reset Barefoot Color</button>
    </div>
  );
}

export default ChangeColor;
