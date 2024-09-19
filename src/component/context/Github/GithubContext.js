import {createContext, useReducer} from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext()

export const GithubProvider = ({children})=>{
const initial = {
    users: [],
    user:{},
    repos:[],
    loading: false
}
const [state, dispatch]=useReducer(githubReducer,initial)

    return <GithubContext.Provider value={{
        dispatch,
        ...state,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext