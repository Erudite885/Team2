import React from "react";

const TeamMemberCard = ({ employee, handleCardClick, selectedTeam }) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      onClick={handleCardClick}
      className={`${
        employee.teamName === selectedTeam
          ? "border-2 border-sky-600/80"
          : "shadow-lg shadow-stone-400/80"
      } p-5 cursor-pointer bg-sky-300 mb-5 rounded-[6px]`}
    >
      {/* logic for gender can be omitted, the images are in constant folder */}
      {employee.gender === "male" ? (
        <img src={employee.img} className="img-responsive" />
      ) : (
        <img src={employee.img} className="img-responsive" />
      )}
      <div className="card-body">
        <h5 className="card-title mt-5">
          <b>Full Name:</b> {employee.fullName}
        </h5>
        <p className="card-text">
          <b>Designation:</b> {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
