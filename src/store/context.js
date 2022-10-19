import {createContext,useState} from 'react'
// 16. creating an context with initial value null and export it
export const FirebaseContext=createContext(null);


//42 creating another context for display users name if logged in
export const AuthContext=createContext(null);
// 43 creating an state to store user details from firebase(firebase giving an object called user, and an function onAuthChange gives that user details  )
    export default function Context({children }){ //45. props coming to this function bcz its a component, inside props there is a object called children 
         const [user,setUser]=useState(null)
    
    //44.providing [no.42] context inside return
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {/*46,wrapping children with provider */}
            {children}
        </AuthContext.Provider>
    )
}