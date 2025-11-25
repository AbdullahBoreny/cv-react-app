import { useState } from "react";
import InputField from "./InputField";

export default function GeneralInfo({ general, setGeneral }) {
  const [editMode, setEditMode] = useState(true);

  function handleChange(e) {
    setGeneral({ ...general, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(false);
  }
  

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px" }}>
      <h2>General Information</h2>

      {editMode ? (
        <form onSubmit={handleSubmit}>
          <InputField label="Name" name="name" value={general.name} onChange={handleChange} />
          <InputField label="Email" name="email" value={general.email} onChange={handleChange} />
          <InputField label="Phone" name="phone" value={general.phone} onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {general.name}</p>
          <p><strong>Email:</strong> {general.email}</p>
          <p><strong>Phone:</strong> {general.phone}</p>

          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
