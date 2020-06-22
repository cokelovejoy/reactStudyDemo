import React, { useState, useMemo } from 'react'

export default function useMemoPage(props) {
    const [count, setCount] = useState(0)
    const expensive = useMemo(() => {
        console.log("compute")
        let sum = 0
        for (let i=0; i<count; i++) {
            sum += i
        }
        return sum
    }, [count])

    // const expensive = function () {
    //     console.log("compute")
    //     let sum = 0
    //     for (let i = 0; i < count; i++) {
    //         sum += i
    //     }
    //     return sum
    // }
    const [value, setValue] = useState("")
    return (
        <div>
            <h3>
                Use Memo Page
            </h3>
            <p>expensive: {expensive}</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>add</button>
            <input value={value} onChange={event => setValue(event.target.value)} />
        </div>
    )
}