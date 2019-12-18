import React, { useState } from "react";

const Form = props => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role:""
  });

  const handleChanges = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(form);
    setForm({ name: "", email: "", role:"" });
  };

  return (
      
    <form onSubmit={submitForm}>
        <div className="form1">
        <div className="form-fields">
      <label htmlFor="name">Name</label>
      <input className="input-field"
        id="name"
        type="text"
        placeholder="Name"
        onChange={handleChanges}
        name="name"
        value={form.name}
      />
      </div>
      <div className="form-fields">
      <label htmlFor="email">Email</label>
      <input className="input-field"
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChanges}
        value={form.email}
      />
      </div>
      <div className="form-fields">
      <label htmlFor="role">Role</label>
      <input className="input-field"
        id="role"
        type="text"
        name="role"
        placeholder="Role"
        onChange={handleChanges}
        value={form.role}
      />
      </div>
      <div className="button-class"><button className="button" type="submit">Add Member</button></div>
      </div>
    </form>
   
  );
};


export default Form;
