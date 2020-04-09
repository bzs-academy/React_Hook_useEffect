import React, { useState } from 'react'
import Hook003 from './Hook003'



function MouseContainer() {

    const [ display, setDisplay ] = useState(true)

    return (
        <div>
            <button onClick= { () => setDisplay(!display)}>Toggle Display</button>
            {
                display && <Hook003 />
            }
        </div>
    )
}

export default MouseContainer

