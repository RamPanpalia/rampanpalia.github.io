import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ComponentTemplate from './ComponentTemplate';
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

const ContactMe = () => {

  const date = new Date()

  const [Name, setName] = useState('')
  const [Phone, setPhone] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')

  const collRef = collection(db, 'collect')

  const handleSubmit = (e) => {
    e.preventDefault();

    // db.collection('contacts')
    addDoc(collRef, {
      Name: Name,
      Phone: Phone,
      Email: Email,
      Message: Message,
      time: date.toString(),
    })
      .then(() => {
        alert('Message recieved')
      })
      .catch((err) => {
        alert(err)
      })
  }
  const _setName = event => setName(event.target.value)
  const _setPhone = event => setPhone(event.target.value)
  const _setEmail = event => setEmail(event.target.value)
  const _setMessage = event => setMessage(event.target.value)

  const matter = <>
    <p>Have something great to work on together or something interesting to share!</p>
    <p>Fill it here!</p>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, minWidth: '25ch' },
      }}
      noValidate
      autoComplete="on"
      className='formBox'
      onSubmit={handleSubmit}
    >
      <TextField id="standard-basic" label="Name" variant="filled" onChange={_setName} />
      <TextField id="standard-basic" label="Phone number" variant="filled" onChange={_setPhone} />
      <TextField id="standard-basic" label="Email-ID" variant="filled" onChange={_setEmail} />
      <TextField id="standard-basic" label="Message" variant="filled" multiline minRows={2} onChange={_setMessage} />
      <Button variant="contained" className="msg-button" type="submit">Submit</Button>
    </Box>
    <br /><br />
    <p>Or share it here!</p>
    <br />
    <b>Personal E-mail ID:</b> panpaliaram@gmail.com <br />
    <b>College E-mail ID:</b> f20211363@pilani.bits-pilani.ac.in <br />
    <b>Phone number:</b> 9834088596 <br />

  </>

  return (
    <ComponentTemplate
      title={'ContactMe'}
      matter={matter}
    />
  )
}

export default ContactMe