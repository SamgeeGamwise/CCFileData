import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Client from '../components/client'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [clients, setClients] = useState([])

  // const getData = () => {
  //   fetch('/api/hello', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify('Hello to you!'),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setClients(data)
  //     })
  // }

  useEffect(() => {
    fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify('Hello to you!'),
    })
      .then(res => res.json())
      .then(data => {
        setClients(data)
      })
  })

  const renderClients = () => {
    return clients.map((client, index) => <Client key={index} clientId={client.clientId} assessments={client.assessments} />)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-3">
        {/* <button type="button" className="btn btn-primary" onClick={getData}>Click me!</button> */}
        <div className='my-4'>{renderClients()}</div>
      </div>
    </div>
  )
}
