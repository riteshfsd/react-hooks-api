import React, {useContext} from 'react';
import {NameContext} from "./Main";
function Child2() {
    const name = useContext(NameContext)
    return(
        <div>
            <hi>From Child 2 - {name}</hi>
        </div>
    )
}
export default Child2;
