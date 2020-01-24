import {CONSTANTS} from '../constants/constants'

const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CONSTANTS.DESCRIPTION_CHANGED:
            return { ...state, description: action.payload}
        case CONSTANTS.TODO_SEARCHED:
            return { ...state, list: action.payload.data}
        case CONSTANTS.TODO_CLEAR:
            return{...state, description: ''}
        default: 
            return state
    }
}