// import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Form from "./Form";
import Team from "./Team";
function App() {
  const [teamMember, setTeamMember] = useState([
{
  id: 1,
  name:"Maggie Price",
  email:"maggieprice2016@gmail.com",
  role:"student"
}
  ]);

  const addNewMember= member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
    };
    setTeamMember([...teamMember, newMember]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder App</h1>
      </header>
      <Form addNewMember={addNewMember}/>
      <Team teamMember={teamMember}/>
    </div>
  );
}

export default App;
