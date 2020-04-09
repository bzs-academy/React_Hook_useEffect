import React from 'react';
import './App.css';
import Class001 from './components/Class001';
import Hook001 from './components/Hook001';
import Class002 from './components/Class002';
import Hook002 from './components/Hook002';
import Class003 from './components/Class003';
import MouseContainer from './components/MouseContainer';
import HookSetInterval from './components/HookSetInterval';
import HookDataFetch from './components/HookDataFetch';





function App() {
  return (
    <div className="App">
      {/*<Class001 />
      <hr/>
      <Hook001 />
      <hr/>
      <Class002 />
      <hr/>
      <Hook002 /> 
      <Class003 /> 
      <MouseContainer /> 
      <HookSetInterval /> */}
      <HookDataFetch />
      
    </div>
  );
}

export default App;
