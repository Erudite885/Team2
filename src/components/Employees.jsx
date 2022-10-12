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
        <div className="grid sm:grid-cols-3 sm:gap-5 md:grid-cols-4 md:gap-6 ">
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