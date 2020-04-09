import React, { useState, useEffect } from 'react'


function Hook003() {

    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    useEffect( () => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // componentWillUnmount görevi görmektedir
        return () => {
            console.log('componentWillUmount triggered')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div>
            <p> Hook --> X: {x} - Y: {y}  </p>
        </div>
    )
}

export default Hook003
