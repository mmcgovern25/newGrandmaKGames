import React from 'react'
import Navbar from '../components/Navbar'

const Error = () => {
  return (
    <>
    <Navbar />
    <main>
      <h1 className='text-2xl'>An error occured.</h1>
      <p>You clearly arent a "champeen" as Gramps would say.</p>
      <p>Go back to home page?</p>
    </main>
    </>
  )
}

export default Error
