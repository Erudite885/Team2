import React from 'react'

const Footer = () => {

  let today = new Date();


  return <footer className="text-center text-[14px] font-semibold mt-8">
    <h5>Team Member Allocation App - {today.getFullYear()} </h5>
  </footer>;
}

export default Footer