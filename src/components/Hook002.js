import React, { useState, useEffect } from 'react'



function Hook002() {

    const [ count, setCount ] = useState(0);
    const [ name, setName ] = useState('');

    // componentDidMount + componentDidUpdate
    // sadece count state'i degistiginde tetikleniyor
    useEffect( () => {
        console.log('useEffect - updating document title')
        document.title = `Clicked ${count} times`
    }, [count])

    
    return (
        <div>
            <input  type="text"
            value={name}
            onChange= { e => setName(e.target.value)}
            />

            <button onClick = { () => setCount( prevCount => prevCount + 1)}>
                Clicked {count} times
            </button>
        </div>
    )
}

export default Hook002
