import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        num: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch({type: 'ADD'}),
        minus: () => dispatch({type: 'MINUS'})
    }
}

class ReactReduxPage extends Component {
    render() {
        const { num, add, minus } = this.props
        return (
            <div>
                <h1>React Redux Page</h1>
                <p>{num}</p>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
            </div>
        )
    }
}
// 状态映射 mapStateToProps
// 派发事件映射 mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage)