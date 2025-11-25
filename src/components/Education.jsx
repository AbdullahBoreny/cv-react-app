import { useState } from "react";
import InputField from "./InputField";

export default function Education({ education, setEducation }) {
  const [editMode, setEditMode] = useState(true);

  function handleChange(e) {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(false);
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px" }}>
      <h2>Educational Experience</h2>

      {editMode ? (
        <form onSubmit={handleSubmit}>
          <InputField label="School Name" name="school" value={education.school} onChange={handleChange} />
          <InputField label="Title of Study" name="study" value={education.study} onChange={handleChange} />
          <InputField label="Date of Study" name="date" value={education.date} onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>School:</strong> {education.school}</p>
          <p><strong>Study:</strong> {education.study}</p>
          <p><strong>Date:</strong> {education.date}</p>

          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
