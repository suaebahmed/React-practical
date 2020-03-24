import React, { useRef, useEffect, useState } from 'react'
import {TweenMax,Power3} from 'gsap'
// import './App2.css'

function App2() {
    let p = useRef(null)
    let circle = useRef(null)
    let circleRed = useRef(null)
    let circleBlue = useRef(null)
    const [toggle, setToggle] = useState(false)
    useEffect(()=>{
        TweenMax.to(p,0,{visibility: 'visible'})
        TweenMax.to(circle,.8,{opacity: 1,x: -40,ease: Power3.easeOut})
        TweenMax.to(circleRed,.8,{opacity: 1,x: -40,ease: Power3.easeOut,delay: .4})
        TweenMax.to(circleBlue,.8,{opacity: 1,x: -40,ease: Power3.easeOut,delay: .8})
        // TweenMax.staggerTo([circle,circleRed,circleBlue],{opacity: 1,x: -40,ease: Power3.easeOut},{delay:.2} )
    })
    const handleExpand=()=>{
        TweenMax.to(circleRed,.5,{height: 200,width: 200,x: 10,ease: Power3.easeOut})
        setToggle(true)

    }
    const handleShink=()=>{
    TweenMax.to(circleRed,.5,{height: 25,width: 25,ease: Power3.easeOut})
    setToggle(false)
    }
    return (
        <div>
            <div ref={el=>p=el} id="circle">
                <div ref={el=>circle = el} className="circle-yellow"></div>
                <div onClick={toggle !== false ? handleShink : handleExpand} ref={el=>circleRed = el} className="circle-red"></div>
                <div ref={el=>circleBlue = el} className="circle-blue"></div>
            </div>
        </div>
    )
}

export default App2
