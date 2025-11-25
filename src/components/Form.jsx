//import { useState } from 'react'
import { React, useState } from "react";
import '../styles/form.css'
function GeneralForm() {
  const [name, setName] = useState("");
  function handleSumbit(e) {
    e.preventDefault()
    console.log(name);
  }
  return (
    <div className="general_info">
      <form action="#" method="get">
        <h1>general info</h1>
        <div>
          <label >First Name: </label>
          <input
            type="text"
            placeholder="Enter First Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <button type="submit" value="Submit" onClick={(e) => handleSumbit(e)}>
          Submit
        </button>
        <button>edit</button>
      </form>
    </div>
  );
}

export default function Form() {
  return (
    <>
      <GeneralForm />
    </>
  );
}
