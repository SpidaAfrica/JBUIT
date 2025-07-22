import React from "react";
import { ArrowRight } from "lucide-react";
import {Accordion, AccordionItem} from "@/components/ui/Accordion";
//import { Button } from "@/components/ui/button";
import PortfolioPage from "../components/ui/Portfolio";
import "./HomePage.css";
//import Testimonials from "../components/ui/Testimonials";
import Header from "../components/ui/Header";
import SocialIcons from "../components/ui/SocialIcons";
//import TeamSection from "../components/ui/TeamSection";


export default function HomePage() {
  return (
  <>
  <Header/>
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Building Digital Experiences That Drive <span className="highlight">Growth</span>
        </h1>
        <p>
          At JBUIT, we craft stunning websites, intuitive mobile apps, world-class UI/UX designs and smart SEO strategies that convert.
        </p>        
        <a href="https://wa.me/+2348122975970" style={{color: "white", textDecoration: "none"}}>
          <button className="cta-btn">
          Get Started <ArrowRight size={18} />
          </button>
        </a>
      </section>

       {/* What We Offer */}
       <section className="services">
        <h2>What We Offer</h2>
        <div className="service-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>Why Choose JBUIT?</h2>
        <p>
          We bring passion, precision, and creativity to every project. Our focus is results—delivering fast, modern, and responsive solutions.
        </p>
        <div className="about-grid">
          <div>
            <h4>Expert Team</h4>
            <p>Experienced developers and designers at your service.</p>
          </div>
          <div>
            <h4>Client-Focused</h4>
            <p>We build with your goals and growth in mind.</p>
          </div>
          <div>
            <h4>On-Time Delivery</h4>
            <p>We meet deadlines and exceed expectations.</p>
          </div>
        </div>
      </section>
      <PortfolioPage/>
      {/*<Testimonials/>*/}


      {/* Pricing 
      <section className="pricing">
        <h2>Our Pricing</h2>
        <div className="pricing-grid">
          {pricing.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            >
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p>{plan.description}</p>
              <button className={`get-started ${plan.highlight ? "highlight-btn" : ""}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
        <div className="custom-quote">
          <button className="quote-btn">Request a Custom Quote</button>
        </div>
      </section>
      */}

    <section className="pricing-section">
      <div className="container">
        <h2 className="section-title">Our Pricing</h2>
        <p className="section-subtext">
          Transparent. Scalable. Tailored to your growth. Whether you're a startup or a large enterprise, we offer
          packages that suit your goals and budget.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`plan-card ${plan.highlight ? "highlight" : ""}`}>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p className="audience">{plan.audience}</p>
              <ul className="features">
                {plan.features.map((feat, idx) => (
                  <li key={idx}>✅ {feat}</li>
                ))}
              </ul>
              <p className="meta">
                <strong>Timeline:</strong> {plan.timeline}
              </p>
              <a href="https://wa.me/+2348122975970">
              <button className="btn-primary">Get Started</button>
              </a>
            </div>
          ))}
        </div>

        <div className="custom-quote">
          <p>💬 Need something specific? We’ll tailor a plan based on your needs and budget.</p>
          <a href="https://wa.me/+2348122975970">
          <button className="quote-btn">Request a Custom Quote</button>
          </a>
        </div>
      </div>
    </section>
    {/*<TeamSection/>*/}

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <Accordion items={faqs} />
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to build something exceptional?</h2>
        <p>
          Let’s collaborate and turn your idea into a winning digital product.
        </p>
        <a href="https://wa.me/+2348123888508">
        <button className="cta-secondary">Contact Us</button>
        </a>
      </section>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>JBUIT</h3>
            <p>We build digital solutions that scale.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Phone: +234 812 297 5970</p>
            <p>Email: hello@jbuit.org, hello@jbuit.com, jbuittechservices@gmail.com</p>
            <p>WhatsApp: +234 812 297 5970</p>
          </div>
          <div>
            <h3>Connect with Us</h3>
            <SocialIcons/>
          </div>
        </div>
      </footer>
    </div>
  </>
  );
}

/*const services = [
  {
    title: "Web Development",
    description: "Custom websites that are fast, scalable and secure."
  },
  {
    title: "Mobile App Development",
    description: "Native & cross-platform apps with beautiful UI and seamless UX."
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that enhances engagement and usability."
  },
  {
    title: "SEO Services",
    description: "Optimization strategies to rank higher and gain visibility."
  }
];
*/

const services = [
  { title: "UI/UX Design", description: "Beautiful, user-friendly designs for web and mobile." },
  { title: "Mobile App Development", description: "Cross-platform Android and iOS apps." },
  { title: "Website Development", description: "Business websites, stores, and dashboards." },
  { title: "AI Models Integration", description: "Chatbots, automation, and AI features." },
  { title: "SEO & Visibility", description: "Increase your search engine ranking." },
  { title: "Academy (Training)", description: "Learn UI/UX, mobile dev, and AI hands-on." }
];

/*const pricing = [
  { name: "Starter Package", price: "₦250K+", description: "For small businesses and startups." },
  { name: "Growth Package", price: "₦1M+", description: "Development with integrations.", highlight: true },
  { name: "Pro Package", price: "₦10M+", description: "Full custom app, AI + support." }
];
*/

const faqs = [
  { question: "How long does it take to build a mobile app?", answer: "Typical projects take 4–12 weeks." },
  { question: "Can you build something like Uber or Bolt?", answer: "Yes, we’ve built similar platforms." },
  { question: "Do you offer payment integration?", answer: "Yes, including Paystack, Flutterwave, Stripe, etc." },
  { question: "Can I pay in milestones?", answer: "Yes, we allow flexible payment plans." },
  { question: "How experienced is your team?", answer: "50+ products shipped across industries." },
  { question: "Can you handle WhatsApp or AI chatbots?", answer: "Absolutely. We support multiple tools." }
];

const plans = [
  {
    name: "Starter Package",
    price: "₦150K – ₦950K",
    audience: "For small businesses, startups, and individuals.",
    features: [
      "Responsive Website (2–10 pages)",
      "Basic SEO setup",
      "1 Contact Form or Chat Integration",
      "Blog or Portfolio Section (optional)",
      "Google Analytics integration",
    ],
    timeline: "1 – 4 weeks"
  },
  {
    name: "Growth Package",
    price: "₦1M – ₦10M",
    audience: "For growing businesses that need mobile apps or custom dashboards.",
    highlight: true,
    features: [
      "Custom Website or Mobile App Development",
      "Android/iOS Cross-platform Mobile App",
      "Payment Integration (Paystack, Flutterwave, Stripe)",
      "Admin Dashboard with analytics & control",
      "WhatsApp Chatbot (optional)",
      "Basic AI integration (e.g., chatbot, recommender)",
    ],
    timeline: "4 – 12 weeks"
  },
  {
    name: "Pro & Enterprise Plan",
    price: "₦10M – ₦25M+",
    audience: "For large organizations or ambitious startups building complex platforms.",
    features: [
      "Everything in Growth Plan",
      "AI model development & training",
      "Custom Backend with APIs",
      "Internal staff/admin dashboards",
      "Role-based access control (multi-user system)",
      "Real-time Notifications (SMS, Email, Push)",
      "DevOps setup + scalable cloud hosting"
    ],
    timeline: "8 – 16+ weeks"
  }
];
