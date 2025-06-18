// PortfolioPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./PortfolioPage.css";
import ui1 from '@/assets/ui1.png';
import ui2 from '@/assets/ui2.png';
import ui3 from '@/assets/ui3.png';
import ui4 from '@/assets/ui4.png';
import ui5 from '@/assets/ui5.png';
import ui6 from '@/assets/ui6.png';
import ui7 from '@/assets/ui7.png';
import ui8 from '@/assets/ui8.png';
import ui9 from '@/assets/ui9.png';
import ui10 from '@/assets/ui10.png';
import ui11 from '@/assets/ui11.png';
import ui12 from '@/assets/ui12.png';
import ui13 from '@/assets/ui13.png';
import ui14 from '@/assets/ui14.png';
import ui15 from '@/assets/ui15.png';
//import ui16 from '@/assets/ui16.png';

const projects = [
  {
    id: 1,
    name: "Spida",
    category: "UI/UX",
    description: "AgriTech app",
    image: ui1
  },
  {
    id: 2,
    name: "Workorbor",
    category: "UI/UX",
    description: "Ride Hailing app",
    image: ui2
  },
  {
    id: 3,
    name: "Transit",
    category: "UI/UX",
    description: "Ride Hailing app",
    image: ui3
  },
  {
    id: 4,
    name: "Amani",
    category: "UI/UX",
    description: "Real Estate - propTech app",
    image: ui4
  },
  {
    id: 5,
    name: "Acqskills",
    category: "UI/UX",
    description: "EdTech",
    image: ui5
  },
  {
    id: 6,
    name: "Math With Ben",
    category: "UI/UX",
    description: "EdTech",
    image: ui6
  },
  {
    id: 7,
    name: "Smoothiezee",
    category: "Web App",
    description: "Food & Drinks",
    image: ui7
  },
  {
    id: 8,
    name: "Grace Family Foundation",
    category: "Web App",
    description: "Education Foundation",
    image: ui8
  },
  {
    id: 9,
    name: "SpiTractors",
    category: "Web App",
    description: "AgriTech",
    image: ui9
  },
  {
    id: 10,
    name: "Spi-ecommerce",
    category: "Web App",
    description: "AgriTech",
    image: ui10
  },
  {
    id: 11,
    name: "SpiOptima",
    category: "Web App",
    description: "AgriTech",
    image: ui11
  },
  {
    id: 12,
    name: "Tripoint Travels",
    category: "Web App",
    description: "Travel Agency",
    image: ui12
  },
  {
    id: 13,
    name: "Kaya",
    category: "Mobile App",
    description: "Ride Hailing",
    image: ui13
  },
  {
    id: 14,
    name: "Spida",
    category: "Mobile App",
    description: "E-commerce",
    image: ui14
  },
  {
    id: 15,
    name: "Transit",
    category: "Mobile App",
    description: "Ride Hailing",
    image: ui15
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
