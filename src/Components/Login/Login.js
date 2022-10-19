import React,{useState,useContext} from 'react'; //35. import usecontext
import {FirebaseContext} from '../../store/context' //36
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom' //40

function Login() {
  //31. initialize states
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const {firebase} =useContext(FirebaseContext) //37
  const history=useHistory()

  //34. 
  const handleLogin=(e)=>{
      e.preventDefault()
      //38. 
      firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        //39
        history.push('/'); //41 pushing to home page
      }).catch((error)=>{ 
        alert(error.message)  //38. writing error block using catch block
      })

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
         <form onSubmit={handleLogin}> {/*32 */}
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}//32
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password} //33
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='Signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
