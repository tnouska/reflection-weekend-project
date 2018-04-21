import { combineReducers } from "redux";

//reflectionsList reducer
export const reflectionsList = (state = [], action) => {
    switch (action.type) {
        case 'SET_REFLECTIONS':
            return action.payload
        default:
            return state;
    }//end switch looking for 'SET_REFLECTIONS'
};//end reflectionsList reducer

export default combineReducers({ reflectionsList }) 