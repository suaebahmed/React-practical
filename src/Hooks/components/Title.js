import React from 'react'

function Title() {
    console.log('redering title component')
    return (
        <h1>
            useCallback Hook
        </h1>
    )
}

export default React.memo(Title)
