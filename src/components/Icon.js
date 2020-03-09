import React from 'react'
import { IconContext } from 'react-icons'
import { FaCodepen ,FaArrowDown} from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'

function Icon() {
    return (
        <IconContext.Provider value={{color: 'blue',size: '5rem'}}>

        <div style={{textAlign:'center'}}>
            <FaCodepen />{' '}
            <MdShoppingCart />
        </div>

        </IconContext.Provider> 
    )
}

export default Icon
