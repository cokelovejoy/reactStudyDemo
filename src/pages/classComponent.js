import React from 'react'

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    componentDidUpdate() {
        console.log("component did update")
    }
    render() {
        return <div>{this.state.date.toLocaleTimeString()}</div>
    }
}
