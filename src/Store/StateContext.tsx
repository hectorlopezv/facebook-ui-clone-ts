import React, 
{
    createContext, 
    useContext, 
    useReducer
} from 'react';

export const StateContext = createContext<any>(null);

interface StateProps {
    initialState: any;
    reducer: any;
}

export const StateProvider:React.FC<StateProps> = ({children, initialState, reducer}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );

}

export const useStateValue = () =>  useContext(StateContext);