import React from 'react'
import Navbar from '../components/navbar'
import HTMLHead from "../components/htmlHead"

export default function Home() {
  return (
    <>
      <HTMLHead title="Home" />
      <Navbar />
      <div className="container mt-3">
        <div className='row'>
          <div className='col'>   
            <h3>VJT Build Tools</h3>
          </div>
        </div>
      </div>
    </>
  )
}
