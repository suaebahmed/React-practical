import React, { useEffect, useRef } from 'react'
import img from './design-architecture-unsplash.jpg'
import './app.scss'
import CssRolePlugin from 'gsap/CSSRulePlugin'
import { Power2, TimelineLite } from 'gsap'

function Img() {
    let container = useRef(null)
    let imgContainer = useRef(null)

    let imgReavel = CssRolePlugin.getRule('.container:after');
    let t1 = new TimelineLite()

    useEffect(()=>{
        t1.to(container,1,{visibility:'visible'}).to(imgContainer,2,{scale: 1.1}).to(imgReavel,2,{width: '0%',ease: Power2.easeInOut})
    })
    return (
        <div ref={el=>container=el} className="container">
            <img ref={el=>imgContainer=el} className="img-container" src={img} alt=""/>
        </div>
    )
}

export default Img;