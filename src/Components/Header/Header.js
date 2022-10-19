import React,{useContext} from 'react'; //55 import usecontext
import { useHistory } from 'react-router-dom'; //61

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/context';
function Header() {
  const history=useHistory() //61
  const{user} =useContext(AuthContext)  //56 taking user from authcontext
  const {firebase} =useContext(FirebaseContext) //59 initialize firebaseCOntext to add logout
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
           <span>{user? `Welcome ${user.displayName}` :<a href="./login">Login</a>}</span> {/* 57. add an condition to show user name if logged in*/}
          <hr />
          
        </div>
          {user && <span onClick={()=>{ //60 adding signout function
            firebase.auth().signOut(); 
            history.push ("./login") //62 to push login
          }}>LogOut</span>}  {/*58 adding logout button if user logged in  */}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
