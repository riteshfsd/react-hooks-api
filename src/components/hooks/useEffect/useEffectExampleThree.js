import React, {useState, useEffect} from 'react';

function UseEffectExampleThree() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log("test");
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect (() =>{
        console.log("Mouse clicked")
        window.addEventListener('mousemove', logMousePosition)
    },[])

    return (
        <div>
            X - {x}  - AND - Y - {y}
        </div>
    )
}

export default UseEffectExampleThree;
