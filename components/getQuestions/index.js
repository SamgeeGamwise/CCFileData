import React, { useRef, useState } from "react";
import styles from "../../styles/getQuestions.module.css";
import Navbar from "../../components/navbar";
import HTMLHead from "../../components/htmlHead"

export default function GetQuestions(props) {
  const [questions, setQuestions] = useState("");
  const codeRef = useRef(null)

  const getQuestions = () => {
    fetch(`/api/${props.abbr}`, {
      method: "POST",
      body: "questions"
    })
      .then((res) => res.json())
      .then((data) => setQuestions({ questions: { question: data } }))
      .catch(() => setQuestions(""));
  };

  const getMainJson = () => {
    fetch(`/api/${props.abbr}`, {
      method: "POST",
      body: "main"
    })
      .then((res) => res.json())
      .then((data) => setQuestions({ questions: { question: data } }))
      .catch(() => setQuestions(""));
  }

  const displayJson = (json) => {
    return json
      ? JSON.stringify(JSON.parse(JSON.stringify(json)), null, 2)
      : "";
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeRef.current.innerText);
    alert("Copied to clipboard!")
  }

  return (
    <>
      <HTMLHead title={props.title} />
      <Navbar />
      <div className="container mt-3">
      <div className="row ">
          <div className="col">
            <h4 className="mb-5">{props.title}</h4>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary mb-4"
              onClick={getQuestions}
            >
              Generate {props.abbr.toUpperCase()} JSON
            </button>
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary mb-4"
              onClick={getMainJson}
            >
              Generate {props.abbr.toUpperCase()} Main JSON
            </button>
          </div>
          <div className="col-auto">                
            {questions ? (<button type="button" className={`${styles.tooltip} btn btn-outline-primary`} onClick={copyToClipboard}>Copy to clipboard</button>) : null }
          </div>
        </div>
        {questions ? (
          <div className="row">
            <div className="col">
              <pre className={`${styles.displayJson} ${styles.shadow} p-3`}>
                <code ref={codeRef}>{displayJson(questions)}</code>
              </pre>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
