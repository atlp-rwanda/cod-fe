import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor, resetColor } from '../redux/features/dummy.feature';
import Button from './buttons/Button';

function ChangeColor() {
  // local state
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <Button
        label="Change Color"
        size="small"
        primary
        onClick={() => dispatch(changeColor(color))}
      />
      <Button label="Reset Color" size="small" onClick={() => dispatch(resetColor())} />
    </div>
  );
}

export default ChangeColor;
