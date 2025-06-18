// PortfolioPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./PortfolioPage.css";

const projects = [
  {
    id: 1,
    name: "Spida",
    category: "UI/UX",
    description: "AgriTech app",
    image: "/assets/ui1.png"
  },
  {
    id: 2,
    name: "Workorbor",
    category: "UI/UX",
    description: "Ride Hailing app",
    image: "src/assets/ui2.png"
  },
  {
    id: 3,
    name: "Transit",
    category: "UI/UX",
    description: "Ride Hailing app",
    image: "src/assets/ui3.png"
  },
  {
    id: 4,
    name: "Amani",
    category: "UI/UX",
    description: "Real Estate - propTech app",
    image: "src/assets/ui4.png"
  },
  {
    id: 5,
    name: "Acqskills",
    category: "UI/UX",
    description: "EdTech",
    image: "src/assets/ui5.png"
  },
  {
    id: 6,
    name: "Math With Ben",
    category: "UI/UX",
    description: "EdTech",
    image: "src/assets/ui6.png"
  },
  {
    id: 7,
    name: "Smoothiezee",
    category: "Web App",
    description: "Food & Drinks",
    image: "src/assets/ui7.png"
  },
  {
    id: 8,
    name: "Grace Family Foundation",
    category: "Web App",
    description: "Education Foundation",
    image: "src/assets/ui8.png"
  },
  {
    id: 9,
    name: "SpiTractors",
    category: "Web App",
    description: "AgriTech",
    image: "src/assets/ui9.png"
  },
  {
    id: 10,
    name: "Spi-ecommerce",
    category: "Web App",
    description: "AgriTech",
    image: "src/assets/ui10.png"
  },
  {
    id: 11,
    name: "SpiOptima",
    category: "Web App",
    description: "AgriTech",
    image: "src/assets/ui11.png"
  },
  {
    id: 12,
    name: "Tripoint Travels",
    category: "Web App",
    description: "Travel Agency",
    image: "src/assets/ui12.png"
  },
  {
    id: 13,
    name: "Kaya",
    category: "Mobile App",
    description: "Ride Hailing",
    image: "src/assets/ui13.png"
  },
  {
    id: 14,
    name: "Spida",
    category: "Mobile App",
    description: "E-commerce",
    image: "src/assets/ui14.png"
  },
  {
    id: 15,
    name: "Transit",
    category: "Mobile App",
    description: "Ride Hailing",
    image: "src/assets/ui15.png"
  }
];

const categories = ["All", "Mobile App", "Web App", "UI/UX"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="portfolio-page">
      <div className="container">
        <h1 className="section-title">Our Portfolio</h1>

        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="project-card"
            >
              <img src={project.image} alt={project.name} className="project-img" />
              <div className="project-content">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
