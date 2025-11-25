import { useState } from "react";
import InputField from "./InputField";

export default function Experience({ experience, setExperience }) {
  const [editMode, setEditMode] = useState(true);

  function handleChange(e) {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(false);
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px" }}>
      <h2>Practical Experience</h2>

      {editMode ? (
        <form onSubmit={handleSubmit}>
          <InputField label="Company Name" name="company" value={experience.company} onChange={handleChange} />
          <InputField label="Position Title" name="title" value={experience.title} onChange={handleChange} />
          <InputField label="Responsibilities" name="responsibilities" value={experience.responsibilities} onChange={handleChange} />
          <InputField label="Date From" name="dateFrom" value={experience.dateFrom} onChange={handleChange} />
          <InputField label="Date To" name="dateTo" value={experience.dateTo} onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company:</strong> {experience.company}</p>
          <p><strong>Title:</strong> {experience.title}</p>
          <p><strong>Responsibilities:</strong> {experience.responsibilities}</p>
          <p><strong>From:</strong> {experience.dateFrom}</p>
          <p><strong>To:</strong> {experience.dateTo}</p>

          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
