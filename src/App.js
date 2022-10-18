import React from 'react';
import './App.css';
// 1.importing browser router
import {BrowserRouter as Router,Route} from 'react-router-dom'
// 3. import SignUp
import Signup from './Pages/Signup'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      {/* 2 wrapping router */}
      <Router>
        {/* home path */}
        <Route exact path='/'>
          <Home />
        </Route>

        {/* 4 SignUp path */}
        <Route path='/signup'>
          <Signup/>
        </Route>
          
      </Router>
    </div>
  );
}

export default App;
