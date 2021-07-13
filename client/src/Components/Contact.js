import React from 'react'
import { Button, Card, Form, Image } from 'semantic-ui-react'
import { deleteContact, getContacts,getContact } from '../redux/actions/contact'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {toggleTrue} from '../redux/actions/edit'

const Contact = ({contact}) => {
  const dispatch = useDispatch();
    return (
        <div>
            <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWgg1mjdrrer5asSh0TiJKDkdg40UEHc3uw&usqp=CAU'
        />
        <Card.Header>{contact.name}</Card.Header>
       
        <Card.Meta>{contact.email}</Card.Meta>
        <Card.Description>
          <strong>{contact.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'> <Link to={`/edit/${contact._id}`}> 
          <Button inverted color='green' onClick={()=>{dispatch(getContact(contact._id));dispatch(toggleTrue())}}>
           Edit
         
          </Button></Link>
          <Button inverted color='red' onClick={()=>dispatch(deleteContact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
        </div>
    )
}

export default Contact