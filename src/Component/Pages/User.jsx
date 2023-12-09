// import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const User = () => {
  const [user, setUser] = useState("")
  const [transfer, setTransfer] = useState(0);
  const [bridgenfet, setBridgenft] = useState(0);
  const buttonStyle = {
    backgroundColor: '#000'
  };
  let value = { user, transfer, bridgenfet };
  console.log(value)
  return (
    <>
      <Form>
        <Button onclick={() => setTransfer(1)} style={{ ...buttonStyle }} >Transfer</Button>
        <Button onclick={() => setBridgenft(1)} style={{ ...buttonStyle }} >bridgenfet</Button>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Token Id</Form.Label>
          <Form.Control value={user} placeholder="Enter email" onChange={(e) => setUser(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your Token Id with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  )
}

export default User