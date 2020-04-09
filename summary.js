
/**
1. componentDidMount
2. componentDidUpdate
3. componentWillUnmount

useEffect( () => {
    // code here
    return () => {
        // componentWillUnmount
    }
}, [])

// 1. componentDidMount
useEffect( () => {
    // code here
}, [])


// componentDidUpdate
// conditional 
useEffect( () => {
    // code here
}, [ props / state ])


// componentDidUpdate
// after every render
useEffect( () => {
    // code here
    // state degisimi olmayacagi icin sonsuz dönguye girmeyecek
})

// componentWillUnmount
useEffect(()=> {
    // code

    return () => {
        //  componentWillUnmount
    }
})


*/