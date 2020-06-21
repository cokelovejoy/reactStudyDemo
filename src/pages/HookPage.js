import React, { useState, useEffect } from 'react'

export default function HookPage(props) {
    // 使用useState 创建state：count，初始化值为0，改变count的方法
    const [count, setCount] = useState(0)
    // const [date, setDate] = useState(new Date())

    // 与componentDidMount 和componentDidUpdate相似
    // 默认情况下，eﬀect 会在每轮组件渲染完成后执行。这样的话，一旦 eﬀect 的依赖发⽣生变化，它就会被重新创建。
    // useEffect 的第二个参数：表示依赖于这个变量的值，它改变了才会重新执行这个副作用函数里面的代码。
    // 如果这个参数是空数组[]，则useEffect只会执行一次。
    useEffect(() => {
        document.title = `You click ${count} times`
    }, [count])
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setDate(new Date())
    //     }, 1000)
    //     // 组件卸载时需要清楚effect创建的订阅或计时器ID等资源，需要返回一个清除函数，清除函数会在组件卸载前执行。
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])
    return (
        <div>
            <h3>Hook page</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>add</button>
            {/* <p>{date.toLocaleTimeString()}</p> */}
            <p>{useClock().toLocaleTimeString()}</p>
        </div>
    )
}

function useClock() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        console.log("date effect")
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return date
}