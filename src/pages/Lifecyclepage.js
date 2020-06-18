import React, { Component } from 'react'
import PropTypes from 'prop-types' // react内置库，用于对props做类型检查
import Child from './Child'

export default class Lifecyclepage extends Component {
    // 设置静态属性defaultProps 作为 props的默认值
    static defaultProps = {
        msg: 'omg'
    }
    // 设置静态属性propTypes，规定props的值的类型。
    static propTypes = {
        msg: PropTypes.string.isRequired
    }
    /**
     * 
     * @constructor 构造函数
     * 如果构造React.Component的子组件，则必须使用super(props)
     * 在构造函数中，只做两件事:
     *      1. state初始化
     *      2. 给事件处理函数帮定当前实例：this.handleClick = this.handleClick.bind(this);
     * 如果不做上述的事情，constructor函数是不需要声明的，super默认会去执行。
     */
    constructor(props) {
        super(props) 
        this.state = {
            count: 0
        }
        console.log('constructor', this.state.count)
    }
    /**
     * 
     * @getDerivedStateFromProps 
     * 作用： 更新state
     * 时机： 在调用render方法之前调用，在第一次挂载和后续更新都会被调用。（每次渲染前触发此方法）
     * 用法： 返回一个对象来更新state，如果返回null，不更新任何内容。
     */
    static getDerivedStateFromProps(props, state) {
        const { count } = state
        console.log('getDerivedStateFromProps', count)
        return count < 5 ? null : { count: 0 }
    }
    /*
      
    UNSAFE_componentWillReceiveProps(nextProps) {
        // 不推荐，将会被废弃
        // UNSAFE_componentWillReceiveProps() 会在已挂载的组件接收新的 props 之前被调用
        console.log("Foo componentWillReceiveProps");
    }
    */
    
    /**
     * @getSnapshotBeforeUpdate
     * 作用：   它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）
     * 时机：   在render之后，在componentDidUpdate之前。
     * 用法：   此生命周期的任何返回值将作为参数传递给 componentDidUpdate(prevProps, prevState, snapshot)。应返回 snapshot 的值（或 null）。
     */
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        const { count } = prevState
        console.log('getSnapshotBeforeUpdate', count)
        return null
    }
    /* 
    UNSAFE_componentWillMount() {    
        //不推荐，将会被废弃    
        console.log("componentWillMount", this.state.count);  
    } 
    */

    /**
     * @componentDidMount
     * 作用：   发起网络请求获取数据，添加订阅。 
     * 时机：   会在组件挂载后（插入DOM树中，也就是render执行后）立即调用。
     * 用法：   在此函数里可以直接调用setState，会触发额外的渲染，此渲染会发生在浏览器更新屏幕之前。
     * 注意：   谨慎使用，会导致性能问题。
     */
    componentDidMount() {
        console.log('componentDidMount', this.state.count)
    }
    /**
     * @componentWillUnmount
     * 作用:    执行清理操作，如timer，取消网络请求，取消订阅
     * 时机：   在组件卸载及销毁之前直接调用。
     * 用法：   不能使用setState,组件实例卸载后，将不会再挂载它。
     */
    componentWillUnmount() {
        console.log('componentWillUnmount', this.state.count)
    }
    /* 
    UNSAFE_componentWillUpdate() {    
        // 不推荐，将会被废弃    
        console.log("componentWillUpdate", this.state.count);
      }
    */

    /**
     * @componentDidUpdate
     * 作用：   当组件更新后，可以在此处对DOM进行操作
     * 时机：   在更新后会被立即调用，首次渲染不会执行此方法。
     * 用法：   对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。
     * 注意1：  可以使用setState,它必须被包裹在一个条件语句里,否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。
     * 注意2：  shouldComponentUpdate返回值为false，则不会调用该方法。
     * 注意3：  getSnapshotBeforeUpdate的返回值将作为该方法的第三个参数snapshot。  
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', this.state.count)
    }
    /**
     * 
     * @shouldComponentUpdate
     * 作用：   默认行为state每次发生变化，组件都会重新渲染，根据该函数的返回值，判断组件的输出是否受当前state或props更改的影响。
     * 时机：   首次渲染或使用 forceUpdate() 时不会调用该方法。当props和state变化时，在render前被调用。
     * 用法：   返回值默认为true，返回false则不会调用 UNSAFE_componentWillUpdate()，render() 和 componentDidUpdate()。
     * 注意：   返回 false 并不会阻止子组件在 state 更改时重新渲染。
     */
    shouldComponentUpdate(nextProps, nextState) {
        const { count } = nextState
        console.log('shouldCOmponentUpdate', count, nextState.count)
        return count !== 3
    }

    setCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    /**
     * @render
     * 作用：   返回由JSX创建的React元素
     * 时机：   constructor执行之后
     * 用法：   保持render函数为纯函数，不与浏览器交互。与浏览器进行交互，请在 componentDidMount
     * 注意：   如果 shouldComponentUpdate() 返回 false，则不会调用 render()
     */
    render() {
        const { count } = this.state
        console.log('render', this.state)
        return (
            <div>
                <h1>Life cycle page</h1>
                <p>{ count }</p>
                <button onClick={this.setCount}>改变count</button>
                <Child count={ count }></Child>
            </div>
        )
    }
}
