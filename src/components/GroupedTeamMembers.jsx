import React, {useState} from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {

    
    const groupTeamMembers = () => {
        let teams = [];
        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = {team:'TeamA', members:teamAMembers, collapsed: selectedTeam === 'TeamA'?false:true}
        teams.push(teamA);
        
        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = {team:'TeamB', members:teamBMembers, collapsed: selectedTeam === 'TeamB'?false:true}
        teams.push(teamB);
        
        let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        let teamC = {team:'TeamC', members:teamCMembers, collapsed: selectedTeam === 'TeamC'?false:true}
        teams.push(teamC);
        
        let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        let teamD = {team:'TeamD', members:teamDMembers, collapsed: selectedTeam === 'TeamD'?false:true}
        teams.push(teamD);
        
        return teams;
    }

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
    
    const handleTeamClick = () => {
        let transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === e.currentTarget.id ? {...groupedData,collapsed:!groupedData.collapsed} : groupedData);
        setGroupedData(transformedGroupData);
        setSelectedTeam(e.currentTarget.id);
    }


  return (
    <main>
      {
        groupedEmployees.map((item) => {
            return (
              <div key={item.team} className="mt-3 cursor-pointer">
                <hr className="border-1 border-sky-600 w-[240px] mx-auto" />
                <h4
                  id={item.team}
                  className="font-semibold text-center text-[20px]"
                  onClick={handleTeamClick}
                >
                  Team Name: {item.team}
                </h4>
                <div
                  id={"collapse_" + item.team}
                  className={`${
                    item.collapsed === true ? "collapse" : ""
                  } mb-4 text-[16px]`}
                >
                  <hr className="border-1 border-sky-600 w-[240px] mx-auto" />
                  {item.members.map((member) => (
                    <div className="text-center mt-3">
                      <h5>
                        <span>Full Name: {member.fullName}</span>
                      </h5>
                      <p>Designation: {member.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
        })
      }
    </main>
  );
};

export default GroupedTeamMembers;
