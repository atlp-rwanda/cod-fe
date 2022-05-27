import React from 'react';
import { useSelector } from 'react-redux';
import DemoSassComponent from './demo/DemoSassComponent';
import '../styles/app.css';

const App = () => {
  const barefootColor = useSelector((state) => state.dummy.color);
  return (
    <>
      <div className="root" style={{ color: barefootColor }}>
        <p className="text-3xl font-bold underline">Barefoot</p>
      </div>
      <DemoSassComponent />
    </>
  );
};

export default App;
