import React, {useState} from 'react'
import PropTypes from 'prop-types'

function HookCounterTwo(props) {
    const initialCount = 0;
    const [Count, setCount] = useState(initialCount);
    return (
        <div>
            count: {Count}
            <button onClick={()=> setCount(initialCount)}>Reset</button>
            <button onClick={()=> setCount(Count+1)}>Increment</button>
            <button onClick={()=> setCount(Count-1)}>Decrement</button>
        </div>
    )
}

HookCounterTwo.propTypes = {

}

export default HookCounterTwo
