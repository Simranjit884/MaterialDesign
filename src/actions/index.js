import companies from '../data.json';

export const GET_LIST='GET_LIST';

export function getlist(){
    return (dispatch)=>{
            dispatch({type:GET_LIST,payload:companies})
        };
    }