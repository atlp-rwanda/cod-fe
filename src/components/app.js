import React from 'react';
import { useSelector } from 'react-redux';

const App = () =>{ 
    const barefootColor = useSelector(state => state.dummy.color);
return (
<div className="root" style={{color:barefootColor}}>Barefoot</div>
)};

export default App;
