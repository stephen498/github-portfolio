import React from 'react';
import Port from './components/Port'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound'
// import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Port' element={<Port />}/>
        <Route path='Port/Port'element={<Port/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
