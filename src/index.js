import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/context' //17. importing context from context
import Context from './store/context' //47 importing context from firebase config
import firebase from './firebase/config' //19. importing firebase config
ReactDOM.render(
    //18. wrap App with  FirebaseContext (its a provider) then give values and pass firebase in values
    <FirebaseContext.Provider value={{firebase}}>
        <Context>
            {/* 48 now app is the child of context , so we can got app inside children*/}
          <App/>   
        </Context>
       
    </FirebaseContext.Provider>
    ,document.getElementById('root'));

