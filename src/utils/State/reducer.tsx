export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state: any, action: any) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return {}
        default: 
            return state;
    }
};

export default reducer;