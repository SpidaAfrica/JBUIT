import React, { useState } from "react";
import "./Accordion.css"; // Make sure to import the CSS file

export const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item">
      <button className="accordion-trigger" onClick={toggleAccordion}>
        <span>{question}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

export const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <AccordionItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};


