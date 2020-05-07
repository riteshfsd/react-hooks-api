import React, {useState, useEffect} from 'react'

function UseEffectExampleFour(props) {

    const [count, setCount] = useState(0)
    const test = () => {
        setCount(count+1);
    };
    useEffect(() => {
        const interval = setInterval(test, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count, test])
    return (
        <div>
        setInterval examples:
            {count}
        </div>
    )
}
export default UseEffectExampleFour
