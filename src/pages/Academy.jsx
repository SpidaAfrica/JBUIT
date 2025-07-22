import React from "react";
import "./Academy.css";
import { ArrowRight } from "lucide-react";
import Header from "../components/ui/Header";
import SocialIcons from "../components/ui/SocialIcons";

export default function TrainingLandingPage() {
  return (
    <>
    <Header/>
    <div className="t-training-page">
      {/* Hero Section */}
      <section className="t-hero">
        <div className="t-hero-content">
          <h1>Learn Mobile App Development in<br/> 3 Months</h1>
          <p>
            Join JBUIT’s intensive tech training program and gain real-world skills in Web and Mobile App Development — even if you're starting from scratch.
          </p>
          <a href="https://chat.whatsapp.com/KX3YLlnXPwh7N3j70aNlJf">
          <button className="t-btn t-primary">
            Enroll Now <ArrowRight size={18} />
          </button>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="t-benefits">
        <h2>What You’ll Gain</h2>
        <div className="t-benefit-grid">
          {benefits.map((item, i) => (
            <div className="t-benefit-card" key={i}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="t-pricing">
        <h2>Pricing Plans</h2>
        <div className="t-pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`t-pricing-card ${plan.highlight ? "t-highlight" : ""}`}
            >
              <h3>{plan.name}</h3>
              <p className="t-price">{plan.price}</p>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>
              <a href="https://chat.whatsapp.com/KX3YLlnXPwh7N3j70aNlJf">
              <button className={`t-btn ${plan.highlight ? "t-light" : "t-primary"}`}>
                Join Now
              </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="t-faqs">
        <h2>FAQs</h2>
        <div className="t-faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="t-faq-item">
              <h4>{faq.q}</h4>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
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
            <p>Email: hello@jbuit.org, hello@jbuit.com, jbuittechservices.com</p>
            <p>WhatsApp: +234 812 297 5970</p>
          </div>
          <div>
            <h3>Connect with Us</h3>
            <SocialIcons/>
          </div>
        </div>
      </footer>
    </>
  );
}

const benefits = [
  { title: "Learn from Experts", description: "Get trained by professionals actively working in tech." },
  { title: "Real Projects", description: "Build and launch real-world apps and websites." },
  { title: "Job Opportunities", description: "Top trainees get access to jobs or internships." },
];

const plans = [
  {
    name: "Regular Plan",
    price: "₦10,000",
    description: "Full 3-month training access",
    features: ["Live classes", "Assignments", "Certificate"],
    highlight: false,
  },
  {
    name: "Pro Plan",
    price: "₦20,000",
    description: "With portfolio review and mentorship",
    features: ["All Regular features", "1-on-1 portfolio help", "Mock interview"],
    highlight: true,
  },
  {
    name: "Scholarship",
    price: "Free",
    description: "For selected top 2% will have their money back",
    features: ["All Pro features", "Only 2% of the class"],
    highlight: false,
  },
];

const faqs = [
  { q: "Do I need a laptop?", a: "Yes. A basic laptop is required for participation." },
  { q: "Is it beginner-friendly?", a: "Absolutely. You’ll learn from scratch." },
  { q: "What happens after training?", a: "We help you build your portfolio, and guide you on getting jobs or building products." },
];
