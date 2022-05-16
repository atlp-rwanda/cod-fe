import React from 'react';
import { useSelector } from 'react-redux';
import DemoSassComponent from './demo/DemoSassComponent';
import '../css/App.css';

const App = () => {
  const barefootColor = useSelector((state) => state.dummy.color);
  return (
    <>
      <div className="root" style={{ color: barefootColor }}>
        Barefoot
      </div>
      <DemoSassComponent />
    </>
  );
};

export default App;
