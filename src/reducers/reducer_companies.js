import {GET_LIST} from '../actions';

export default function(state=[],action){
    switch(action.type){
        case GET_LIST:
                console.log("this is a payload:",action.payload);
            return action.payload;
        default:
            return state;
    }
}