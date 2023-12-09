import React, { useState } from 'react'
const [eth,setEth]=useState("")
const Owner = () => {
  let value={eth};
  console.log(value);
  return (
    <>
   <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter ETH Id</Form.Label>
          <Form.Control  placeholder="Enter ETH ID" value={eth}  onChange={(e) => setEth(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your ETH Id with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Owner