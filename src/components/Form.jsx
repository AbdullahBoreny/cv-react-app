import { React, useState, useRef, useEffect } from "react";
import "../styles/form.css";

function GeneralForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isClicked, setisClicked] = useState(false);
  const [info, setinfo] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!isClicked && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isClicked]);

  function handleSumbit(e) {
    e.preventDefault();
    setinfo([{ name, email, phone }]);
    setisClicked(true);
  }

  function handleEdit() {
    setisClicked(false);
  }

  return (
    <div className="general_info">
      <form action="#" method="get">
        <h1>general info</h1>

        <div>
          <label>First Name: </label>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter First Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label>Phone: </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <button
          type="submit"
          disabled={isClicked}
          value="Submit"
          onClick={(e) => handleSumbit(e)}
        >
          Submit
        </button>
        <button onClick={handleEdit}>edit</button>

        <h2>info</h2>
        {info.map((item, i) => (
          <div key={i} className="card">
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
          </div>
        ))}
      </form>
    </div>
  );
}

function EducationalForm() {
  const [school, setSchool] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [date, setDate] = useState("");
  const [edu, setEdu] = useState([]);
  const [isClicked, setisClicked] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!isClicked && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isClicked]);

  function handleSumbit(e) {
    e.preventDefault();
    setEdu([{ school, studyTitle, date }]);
    setisClicked(true);
  }

  function handleEdit() {
    setisClicked(false);
  }

  return (
    <div className="edu_info">
      <form action="#" method="get">
        <h1>edu info</h1>

        <div>
          <label>School Name: </label>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter school Name"
            required
            onChange={(e) => setSchool(e.target.value)}
            value={school}
          />
        </div>

        <div>
          <label>Title of study: </label>
          <input
            type="text"
            placeholder="Enter your email"
            required
            onChange={(e) => setStudyTitle(e.target.value)}
            value={studyTitle}
          />
        </div>

        <div>
          <label>Date: </label>
          <input
            type="date"
            placeholder="Enter your phone number"
            required
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>

        <button
          type="submit"
          disabled={isClicked}
          value="Submit"
          onClick={(e) => handleSumbit(e)}
        >
          Submit
        </button>
        <button onClick={handleEdit}>Edit</button>

        <h2>Edu info</h2>
        {edu.map((item, i) => (
          <div key={i} className="card">
            <p>School Name: {item.school}</p>
            <p>Title of study: {item.studyTitle}</p>
            <p>Date: {item.date}</p>
          </div>
        ))}
      </form>
    </div>
  );
}

export default function Form() {
  return (
    <div className="container">
      <GeneralForm />
      <EducationalForm />
    </div>
  );
}
