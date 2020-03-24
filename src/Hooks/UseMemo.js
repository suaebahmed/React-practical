import React, { useState, useMemo } from 'react'

function UseMemo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () =>{
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () =>{
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {       
        let i = 0;
        while(i<1000000000)i++;
        console.log(i)
        return counterOne % 2 === 0;
    },[counterOne])

    console.log('execute all')

    return (
        <div>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            <span>{isEven ? 'even': 'odd'}</span>
            <hr/>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    )
}

export default UseMemo
