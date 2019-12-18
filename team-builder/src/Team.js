import React from "react";

const Team = props => {
    return (
      <div className="team-list">
        {props.teamMember.map(form => (
          <div className="form" key={form.id}>
            <h2>{form.name}</h2>
            <h2>{form.email}</h2>
            <h2>{form.role}</h2>
          </div>
        ))}
      </div>
    );
  };
export default Team;