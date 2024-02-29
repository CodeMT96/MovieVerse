import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Movie Verse</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default App
