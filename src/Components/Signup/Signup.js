import React ,{useState,useContext}from 'react'; //20. import useContext hook to upload datas to firebase


import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/context';
import { useHistory } from 'react-router-dom';//26
import './Signup.css';

export default function Signup() {

  // 5. initialize state
  const history=useHistory();//27
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState(''); //8
  const [phone,setPhone]=useState(''); //9
  const [password,setPassword]=useState(''); //10
  const {firebase}=useContext(FirebaseContext) //21. using FIrebasecontext, destructure object (firebase)

  //11. function to handle submit
  const handleSubmit=(e)=>{
    e.preventDefault() // to prevent reloading
    // 23.setting up authentication( creating user then return result)
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        //25 pushing id username and phone to firebase
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          //28. redirecting to login by using usehistory hook
          history.push('/login')
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
         <form onSubmit={handleSubmit}>  {/*  12. adding submit action*/}
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            // step 6
            value={username}
            // 7. pass values with onchange
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}  //8.
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}  //9.
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}  //10.
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
