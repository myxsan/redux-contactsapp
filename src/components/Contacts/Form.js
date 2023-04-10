import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact, addContacts } from "../../redux/contactSlice";

function Form() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const names = name.split(",");
    const data = names.map((name) => ({ id: nanoid(), name }));

    dispatch(addContacts(data));
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
