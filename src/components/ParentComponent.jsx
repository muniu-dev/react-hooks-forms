import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
  const [firstName, setFirstName] = useState("Mugiwara");
  const [lastName, setLastName] = useState("Luffy");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </div>
    );
}

export default ParentComponent;