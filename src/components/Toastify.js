import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomToast=(props)=>{
    console.log(props)
    return (
        <div>
            Something went wrang!
            <button >close</button>
            <h1>hello world</h1>
        </div>
    )
}


toast.configure()
function Toastify() {

    const notify = () =>{

        toast('Basic notification!',{position: toast.POSITION.TOP_CENTER,
            autoClose: 8000,
        })
        toast.success('Basic notification!',{position: toast.POSITION.TOP_LEFT,
        autoClose: false
        })
        toast.info(<CustomToast/>,{position: toast.POSITION.TOP_RIGHT})


        toast.warn('Basic notification!',{position: toast.POSITION.BOTTOM_CENTER})
        toast.error('Basic notification!',{position: toast.POSITION.BOTTOM_LEFT})
        toast('Basic notification!',{position: toast.POSITION.BOTTOM_RIGHT})
    }

    return (
        <div>
            <button onClick={notify}>notify!</button>
        </div>
    )
}

export default Toastify;
