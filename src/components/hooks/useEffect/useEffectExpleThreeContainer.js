import React, {useState} from 'react'
import UseEffectExampleThree from './useEffectExampleThree'

function UseEffectExpleThreeContainer(props) {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display </button>
            {display && <UseEffectExampleThree />}
        </div>
    )
}
export default UseEffectExpleThreeContainer
