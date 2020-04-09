import React, { Component } from 'react'



class Class003 extends Component {
    constructor(props) {
        super(props)
        this.state = {
             x: 0,
             y: 0
        }
    }


    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }


    logMousePosition = (e) => {
        this.setState({ x: e.clientX, y: e.clientY })
    }
    

    render() {
        return (
            <div>
                <p> Class --> X: {this.state.x} - Y: {this.state.y}  </p>
            </div>
        )
    }
}

export default Class003
