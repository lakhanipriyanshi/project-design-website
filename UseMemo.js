import React, { useState, useMemo } from 'react'

export default function UseMemo() {
    const [count, setCount] = useState(0)
    const [first, setfirst] = useState(0)

    // const getConsole = () => {
    //     console.log('hii')
    //     return 2
    // }
    const getConsole = useMemo(() => {
        console.log('hii');

    }, [first])
    return (
        <div>

            <h1>{count}</h1>
            <h1>{first}</h1>
            {getConsole}
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setfirst(first + 1) }}>first</button>
        </div>
    )
}
