import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="w-full bg-stone-200 text-[16px] text-sky-900 text-center font-bold">
      <ul className="flex flex-row justify-center m-5 p-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="ml-5">
          <Link to="/GroupedTeamMembers">Team Members</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
