import { createContext, useState } from "react";

const UserContext = createContext();


export function ContexProvider({children}){
    const [details,setDetails] = useState('');
   
    
    return(
        <UserContext.Provider value={{details,setDetails}} >
            {children}
        </UserContext.Provider>
    )
}
export default UserContext;