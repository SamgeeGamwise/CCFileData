import HTMLHead from "../../components/htmlHead"
import React, { useState } from "react";
import Assessments from "../../components/assessments";
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
      <Assessments
        key={index}
        clientId={client.clientId}
        assessments={client.assessments}
      />
    ));

  return (
    <>
      <HTMLHead title="Client Content" />
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
