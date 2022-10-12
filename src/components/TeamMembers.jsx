import React from 'react';
import {TeamMemberCard} from "./index";


const TeamsMembers = ({employees, selectedTeam, handleCardClick}) => {
    return employees.map((employee) => (
        <TeamMemberCard
        employee={employee}
        selectedTeam={selectedTeam}
        handleCardClick={handleCardClick}
        />
        ));
    };
    
export default TeamsMembers;
