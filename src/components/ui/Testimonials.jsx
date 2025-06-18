// components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Jane Doe",
    company: "NaijaShop",
    quote: "JBUIT built our e-commerce platform with precision. Sales went up 40% within 2 months!",
    image: "/testimonials/jane.jpg",
    rating: 5
  },
  {
    name: "Emeka Okafor",
    company: "FarmBridge",
    quote: "Their AI chatbot changed how we reach farmers. Super efficient and affordable.",
    image: "/testimonials/emeka.jpg",
    rating: 4
  },
  {
    name: "Zainab Ahmed",
    company: "SwiftHire",
    quote: "Their mobile app delivery was flawless and on time. Highly recommended.",
    image: "/testimonials/zainab.jpg",
    rating: 5
  }
];

const Star = ({ filled }) => (
  <span className={filled ? "star filled" : "star"}>★</span>
);

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            whileHover={{ scale: 1.03 }}
          >
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <p className="testimonial-quote">“{t.quote}”</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <span className="testimonial-company">{t.company}</span>
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < t.rating} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
