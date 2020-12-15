import React, {createContext} from 'react';
import Child1 from './Child1';
export const NameContext = createContext();
function Main({name}) {
    return(
        <div>
            <NameContext.Provider value ="{name}">
                <Child1 />
            </NameContext.Provider>
        </div>
    )
}
Main.defaultProps = {
    name:"Richa"
}
export default Main;
