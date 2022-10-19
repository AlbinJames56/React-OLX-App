import React,{useEffect,useContext} from 'react'; //49 importing useeffect anf usecontext
import './App.css';
// 1.importing browser router
import {BrowserRouter as Router,Route} from 'react-router-dom'
// 3. import SignUp
import Signup from './Pages/Signup'
import Login from './Pages/Login' //30
import { AuthContext, FirebaseContext } from './store/context';//51
/**
 * ?  =====Import Components===== 
 */
import Home from './Pages/Home';


function App() {
  //50 using useContext and useEffect
  const{setUser}=useContext(AuthContext) //52
  const {firebase}= useContext(FirebaseContext) //53
     useEffect(()=>{
       //54
       firebase.auth().onAuthStateChanged((user)=>{   //this function returns user
        setUser(user)
       })
  })
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
          
        {/* 29 login path */}
        <Route path='/login'>
          <Login/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
