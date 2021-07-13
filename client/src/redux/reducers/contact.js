import { GET_CONTACT_FAIL, GET_CONTACT_LOAD, GET_CONTACT_SUCCESS,GET_CONTACT } from "../constants/contact";
//initial state

const initialstate={
    contacts:[],
    loadContact:false,
    errors:null,
    user:{}
};

export const contactReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case GET_CONTACT_LOAD: 
        return {...state,loadContact:true}
        case GET_CONTACT_SUCCESS:
            return {...state,contacts:payload,loadContact:false}
        case GET_CONTACT_FAIL:
            return {...state,errors:payload,loadContact:false}

        case GET_CONTACT:
            return {...state,user:payload}

        default: return state
    }
    
}

