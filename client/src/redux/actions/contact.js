import { GET_CONTACT_LOAD, GET_CONTACT_SUCCESS, GET_CONTACT_FAIL, DELETE_CONTACT, GET_CONTACT,POST_CONTACT } from "../constants/contact"

import axios from "axios"

//Get all contacts
export const getContacts=()=>async(dispatch)=>{
    dispatch({type:GET_CONTACT_LOAD})
    try {
        let result= await axios.get("/api/contact")
        dispatch({type:GET_CONTACT_SUCCESS,payload:result.data.result})
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL,payload:error})
        
    }
}
//Get one contact
export const getContact=(id)=>async(dispatch)=>{
    
    try {
        let res=await axios.get(`/api/contact/${id}`)
     
        dispatch({type:GET_CONTACT,payload:res.data.result});
     } catch (err) {
        console.log(err)
}}

//Delete Contact
export const deleteContact=(id)=>(dispatch)=>{
    axios.delete(`/api/contact/${id}`)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}
//Add Contact
export const postContact=(user)=>(dispatch)=>{
    axios.post("/api/contact/",user)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}
//Edit Contact
export const editContact=(id,user)=> (dispatch)=>{
    axios.put(`/api/contact/${id}`,user)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}