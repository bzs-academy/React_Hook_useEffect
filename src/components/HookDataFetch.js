import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


function HookDataFetch() {

    //const [ post, setPost ] = useState([])
    const [ post, setPost ] = useState({})
    const [ id, setId ] = useState(1)
    const [ idFromButtonClick, setIdFromButtonClick ] = useState(1)
    const [ count, setCount ] = useState(0);


    useEffect( () => {
        console.log('useEffect - updating document title')
        document.title = `Clicked ${count} times`
    }, [count])

    useEffect( () => {
        console.log('useEffect - fetching data');
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then( res => setPost(res.data))
            .catch( err => console.log(err))
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
        setId('')
    }

    return (
        <div>
            {/*<ul>
                {
                    post.map( item => <li key={item.id}>{item.id} {'. '} {item.title}</li>  )
                }
            </ul>*/}
            <button onClick = { () => setCount(prevCount => prevCount + 1)}>
                Clicked {count} times
            </button>
            <hr/>
            <input type="text" value={id} onChange= { e => setId(e.target.value)} onFocus = { e => setId('')} />
            <button onClick= {handleClick} >Fetch Post</button>
            <p>{post.id}{'. '} {post.title}</p>
        </div>
    )
}

export default HookDataFetch

