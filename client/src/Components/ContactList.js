import React, { useEffect } from 'react'
import { getContacts } from '../redux/actions/contact'
import {useSelector,useDispatch} from 'react-redux'
import Contact from "./Contact"
import ReactLoading from "react-loading";

const ContactList = () => {
    const dispatch = useDispatch()
    const contacts= useSelector(state => state.contactReducer.contacts);
    const loadContact= useSelector(state => state.contactReducer.loadContact);
    console.log(contacts,loadContact)
    useEffect(()=>{
        dispatch(getContacts())},[]
    )
    


    return (
        <div>
         <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", margin:20}}>
            {loadContact? <h2>  <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /> </h2> : contacts.map(el=> <Contact key={el._id} contact={el}/>)}
        </div>
        </div>
    )
}

export default ContactList
