import { combineReducers } from "redux";

//pastReflections reducer
export const pastReflections = (state = [], action) => {
    switch (action.type) {
        case 'SET_REFLECTIONS':
            return action.payload
        default:
            return state;
    }//end switch looking for 'SET_REFLECTIONS'
};//end pastReflections reducer

export default combineReducers({ pastReflections }) 