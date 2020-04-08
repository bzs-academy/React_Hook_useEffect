import React, { useState, useEffect } from 'react'


function Hook001() {

    const [ count, setCount ] = useState(0);

    // componnetDidMount
    // dependency array ( ici bos olmak sartiyla ) sebebiyle componentDidMount görevi görmekte
    // useEffect(() => {
    //     document.title = `Clicked ${count} times`
    // }, [])


    // componentDidMount + componentDidUpdate
    // componentDidUpdate : dependency array olmadan ve render her calistiginda useEffect tetiklenmekte ve componentDidUpdate görevi görmektedir
    useEffect(() => {
        document.title = `Clicked ${count} times`
    })


    return (
        <div>
            <button onClick = { () => setCount(prevCount => prevCount + 1)}>
                Clicked {count} times
            </button>
        </div>
    )
}


export default Hook001



