import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import Bottom from '../components/BottomBar'

export default class Layout extends Component {
    componentDidMount() {
        const { title="商城" } = this.props
        document.title = title
    }
    render() {
        // children 为插入Layout组件的子组件
        const { children, showTopBar, showBottomBar } = this.props
        console.log("children", children)
        return (
            <div>
                { showTopBar && <TopBar />}
                { children }
                {/* 子组件 */}
                { showBottomBar && <Bottom />}
            </div>
        )
    }

}