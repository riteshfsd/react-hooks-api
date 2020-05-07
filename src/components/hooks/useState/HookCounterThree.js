import React, { useState } from 'react'

function HookCounterThree() {
    const [Name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <form>
            <input type="text"
                value={Name.firstName}
                onChange={e => setName({ ...Name, firstName: e.target.value })}//doubt here ...name
            />
            <input type="text"
                value={Name.lastName}
                onChange={e => setName({ ...Name,lastName: e.target.value })}
            />
            <span>Your first name : {Name.firstName},  </span>
            <span>Your last name : {Name.lastName}</span>
        </form>
    )
}

export default HookCounterThree
