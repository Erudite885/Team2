import React from 'react';
import {Teams, TeamMembers} from "./index";

const Employees = ({employees, selectedTeam, handleCardClick, handleTeamChange}) => {

  return (
    <main className="container px-4 py-6 mx-auto">
      <div className="flex flex-row justify-center mb-7 my-3">
        <div className="col-span-8">
          <Teams
            selectedTeam={selectedTeam}
            handleTeamChange={handleTeamChange}
          />
        </div>
      </div>

      <div className="flex flex-row justify-center items-center">
        <div className=" columns-1 ss:columns-2 md:columns-3">
            <TeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              handleCardClick={handleCardClick}
            />
        </div>
      </div>
    </main>
  );
}

export default Employees