import { useState } from "react";
import GeneralInfo from "../components/GeneralInfo";
import Education from "../components/Education";
import Experience from "../components/Experience";
export default function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState({
    school: "",
    study: "",
    date: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    title: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });
  return (
    <div>
      <h1>CV Application</h1>
      <GeneralInfo general = {general} setGeneral ={setGeneral}/>
      <Education education ={education} setEducation ={setEducation}/>
      <Experience experience={experience} setExperience={setExperience} />

    </div>
  );
}
