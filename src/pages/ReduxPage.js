import React, { Component } from 'react'
import store from '../store/ReduxStore'

export default class ReduxPage extends Component {
    componentDidMount() {
        // 订阅，当state改变就会执行函数
        store.subscribe(() => {
            console.log("subscribe")
            // 强制更新
            this.forceUpdate()
        })
    }
    add = () => {
        store.dispatch({type: "ADD"})
    }
    minus = () => {
        store.dispatch({type: "MINUS"})
    }
    render() {
        console.log("store", store)
        return (
            <div>
                <h3>Redux Page</h3>
                {/** 获取state */}
                <p>{store.getState()}</p>
                <button onClick={ this.add }>add</button>
                <button onClick={ this.minus }>minus</button>
            </div>
        )
    }
}