import React, {useState} from 'react';
import ComponentA from '../useContext/componentA';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function UseContextMain() {
    return(
        <div>
            <UserContext.Provider value={'Ritesh'}>
                <ChannelContext.Provider value={'Channel'}>
                    <ComponentA />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}
export default UseContextMain;
