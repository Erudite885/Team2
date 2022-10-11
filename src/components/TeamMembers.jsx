import React from 'react';
import {TeamMemberCard} from "./index";


const TeamsMembers = ({employees, selectedTeam, handleEmployeeCardClick}) => {
  return employees.map((employee) => (
    <TeamMemberCard
      employee={employee}
      selectedTeam={selectedTeam}
      handleEmployeeCardClick={handleEmployeeCardClick}
    />
  ));
};

export default TeamsMembers;
