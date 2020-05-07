import React, {useState, useEffect} from 'react';

function UseEffectExampleTwo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(()=> {
        console.log("useeffect - updating calling here")
        document.title = `you clicked ${count} times`
    },[count]) // here without any condition, it will rerender every time. so if you want to put condition, please specify the state or props here

    return (
        <div>
        <input type="text" value={name} onChange = {e => setName(e.target.value)} />
        <button onClick={()=> setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default UseEffectExampleTwo;
