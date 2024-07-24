import React from "react";

function Students() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Springdale School</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Life at Springdale</h2>
          <p>
            Extracurricular Activities: Music, Dance, Drama, Art, Sports,
            Robotics, Debate Club, Science Club
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Clubs and Societies</h2>
          <p>
            Literary Society, Environmental Club, Astronomy Club, Coding Club
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
          <ul className="list-disc list-inside">
            <li>John Smith - National Level Math Olympiad Winner</li>
            <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
            <li>
              Tech Innovators Club - Winners of Inter-School Robotics
              Competition
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Student Council</h2>
          <ul className="list-disc list-inside">
            <li>President: Amy Parker, Grade 12</li>
            <li>Vice President: Rajiv Mehta, Grade 11</li>
            <li>Secretary: Lisa Wong, Grade 10</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Students;
