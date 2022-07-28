import Head from "next/head";
import React, { useState, useEffect } from "react";
import Client from "../../components/client";
import Navbar from "../../components/navbar";

export default function Home() {
  const [clients, setClients] = useState([]);

  const getData = () => {
    fetch("/api/clients", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setClients(data));
  };

  const renderClients = () =>
    clients.map((client, index) => (
      <Client
        key={index}
        clientId={client.clientId}
        assessments={client.assessments}
      />
    ));

  return (
    <>
      <Head>
        <title>Client Content</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <h3>Client Content</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-primary" onClick={getData}>
              Get Client Content
            </button>
            <div className="my-4">{renderClients()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
