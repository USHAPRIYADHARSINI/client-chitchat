import React from 'react'
import { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

function Login({onIdSubmit}) {
    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }

    function createNewId(){
        onIdSubmit(uuidV4())
    }

  return (
    <Container className='align-items-center d-flex' style={{height: '100vh'}}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group className='my-2'>
                <Form.Label>Enter your id</Form.Label>
                <Form.Control type="text" ref={idRef} required/>
            </Form.Group>
                <Button type='submit'>Login</Button>
                <Button onClick={createNewId} variant='secondary' className='mx-2'>Create a new Id</Button>
        </Form>
    </Container>
  )
}

export default Login