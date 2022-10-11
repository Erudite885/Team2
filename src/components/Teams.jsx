import React from "react";

const Teams = ({selectedTeam, handleTeamChange}) => {
  return (
    <select
      value={selectedTeam}
      onChange={handleTeamChange}
      className="w-[240px] outline-none md:max-w-[360px] p-2 border-y-2 border-sky-400"
    >
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
    </select>
  );
};

export default Teams;


