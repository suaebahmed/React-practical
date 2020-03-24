import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocumentTitleOne() {
    const [count, setCount] = useState(0)
    
    useDocumentTitle(count)

    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>count1 -{count}</button>
        </div>
    )
}

export default DocumentTitleOne
