import { useReducer } from 'react';
import { createContext, useContext } from 'react';
import reducer from './reducer';

const initialState = {
    currentUser: null,
    openLogin: false,
    loading: false,
    alert: {open: false, severity: 'info', message: ''}
}

const Context = createContext(initialState);

//custom hook
export const useValue = () => {
    return useContext(Context);
}

const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

