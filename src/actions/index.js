import companies from '../data.json';

export const GET_LIST='GET_LIST';
export const GET_COMPANY='GET_COMPANY';

export function getlist(){
    return {
        type:GET_LIST,
        payload:companies
    };
}

export function getcompany(id){
    const company=companies.forEach(element => {
      if(element.id==id) return element  
    });
    return {
        type:GET_COMPANY,
        payload:company
    }
}
