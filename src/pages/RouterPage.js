import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


export default class RouterPage extends Component {
    render() {
        return (
            <div>
                <h3>Router Page</h3>
                <Router>
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>
                    {/** Switch 表示仅匹配路由列表中的一个 */}
                    <Switch>
                        {/**exact 表示实现精确匹配 */}
                        <Route exact path="/" component={HomePage}></Route>
                        {/* component,children,render 只有children起作用 */}
                        <Route path="/user" component={UserPage} children={() => <div> children </div>} render={()=> <div> render</div>}></Route>
                        {/* 路由列表最后设置一个path为空的路由，为找不到的资源，匹配404页面 */}
                        <Route component={EmptyPage}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

class HomePage extends Component {
    render() {
        return (
            <div>
                <h3>HomePage</h3>
            </div>
        )
    }
}
class UserPage extends Component {
    render() {
        return (
            <div>
                <h3>UserPage</h3>
            </div>
        )
    }
}
class EmptyPage extends Component {
    render() {
        return (
            <div>
                <h3>Empty page 404</h3>
            </div>
        )
    }
}