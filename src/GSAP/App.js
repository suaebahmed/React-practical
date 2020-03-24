import React, { useEffect ,useRef } from 'react'
import './mysass.scss';
import CssRolePugin from 'gsap/CSSRulePlugin'
import { TimelineLite,Power2} from 'gsap'

function App() {

    let containerRef = useRef(null)
    let imgRef = useRef(null)

    let imgReveal = CssRolePugin.getRule('.img-container:after')

    const t1 = new TimelineLite()

    useEffect(() => {
        t1.to(containerRef,1.3,{css:{visibility: 'visible'}}).to(imgReveal,1.4,{width: '0%',ease: Power2.easeInOut}).from(imgRef,1.2,{scale: 1.1,ease: Power2.easeInOut})

        console.log(imgReveal)
        setTimeout(()=>{
            console.log(imgReveal)
        },2500)
    })

    return (
    <div>
        <h1>hello sass</h1>
        <div ref={el=>containerRef=el} className="container">
            
        <img ref={el=>imgRef=el} className="img-container" src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="science" width="350px" height="300px"/>

        </div>
    </div>
    )
}

export default App
