import React from "react";
import "./TeamSection.css"; // Make sure to create this file

const teamMembers = [
  {
    name: "Uwa Benjamin",
    role: "Founder, Software Developer",
    image: "/images/uwa-benjamin.jpg", // Replace with real image paths
  },
  {
    name: "Kingsley Bright",
    role: "Software Developer",
    image: "/images/uwa-benjamin.jpg", // Replace with real image paths
  },
  {
    name: "Olamide Sanusi",
    role: "Product Designer",
    image: "/images/uwa-benjamin.jpg", // Replace with real image paths
  },
  {
    name: "Uwa Damilola",
    role: "Social Media Manager",
    image: "/images/uwa-damilola.jpg",
  },
  // You can add more members here later
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="container">
        <h2 className="team-heading">Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
