import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root');

function ModalReact() {
    const [ModalIsOpen, setisOpen] = useState(false);

    const toggle=()=>{
        setisOpen(!ModalIsOpen)
    }
    return (
        <div>
            <button onClick={toggle}>modal toggle</button>
            <Modal
                isOpen={ModalIsOpen}
                onRequestClose={toggle}
                style={{
                    overlay: {
                        background: 'gray'
                    },
                    content: {
                        color: 'orange',
                        background: '#63ea58 '
                    }
                }}
            >

                <h1>hello title</h1>
                <form action="/">
                    <input type="text" style={{width: '10rem',border: '2px solid #333'}}/>
                    <input type="submit"/>
                </form>
                <h3>modal text</h3>
                <button onClick={toggle}>close</button>


            </Modal>
        </div>
    )
}

export default ModalReact;
