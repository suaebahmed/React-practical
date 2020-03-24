import React, { useRef } from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import { Power2 } from 'gsap'

function Scroll() {
    let containerRef = useRef(null);
    
    var intersection = useIntersection(containerRef,{
        root: null,
        rootMargin: '10px',
        threshold: 0.6
    })

    const FadeIn =(element)=>{
        console.log('fadeIn')
        gsap.from(element,1,{
            opacity: 1,
            y: -60,
            ease: Power2.easeInOut,
            stagger: {
                amount: 0.3
            }
        })
    }
    const FadeOut =(element)=>{
        console.log('fadeOut')
        gsap.to(element,1,{
            opacity: 0,
            y: -20,
            ease: Power2.easeInOut,
            stagger: {
                amount: 0.3
            }
        })
    }

    intersection && intersection.intersectionRatio < 1 ? FadeIn('.fadeIn') : FadeOut('.fadeOut');

    return (
        <div ref={containerRef} id="scrollContainer">

            <h1 className="fadeIn">this is a title which i worte for scolling</h1>
            <p className="fadeOut">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nam assumenda quos autem. Illum aspernatur quisquam dignissimos veritatis, voluptate obcaecati totam, ea a sint voluptatibus animi iure? Laboriosam, accusamus quasi.</p>
        </div>
    )
}

export default Scroll;