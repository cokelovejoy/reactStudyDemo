import React, { Component } from 'react'

export default class Child extends Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('component will receive props')
    }
    componentWillUnmount() {
        console.log('component will Unmount')
    }
    render() {
        return (
            <div style={{ border: 'solid 1px black', margin: '10px', padding: '10px' }}>
                <h3>我是子组件</h3>
                <div> 子组件的count: { this.props.count } </div>
            </div>
        )
    }
}

