import React, { useEffect , useReducer} from 'react'
import axios from 'axios'

const initialState = {
    isLoading: true,
    post: {},
    error: null
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'FETCH_SUCCESS':
        return {
            isLoading: false,
            post: payload,
            error: null
            }
    case 'FETCH_ERROR':
        return {
            isLoading: false,
            post: {},
            error:  payload
       }
    default:
        return state
    }
}


function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicod.com/todos/1')
             .then(res=>{
                dispatch({type: 'FETCH_SUCCESS',payload: res.data})
             })
             .catch(err=>{
                dispatch({type: 'FETCH_ERROR',payload: 'somthing went worng!'})
             })
    },[])

    return (
        <div>
            {state.isLoading ? 'loading...': JSON.stringify(state.post)}
            {state.error ? state.error: null}
        </div>
    )
}

export default UseReducer
