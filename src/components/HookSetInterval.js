import React, { useState, useEffect } from 'react'



function HookSetInterval() {

    const [ count, setCount ] = useState(0)

    useEffect( () => {
        //document.title = `${count}`

        const interval = setInterval(() => {
            setCount( prevCount => prevCount + 1 )
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])


    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default HookSetInterval
