import React from "react";
import { MessageCircle } from "lucide-react";
import "./WhatsAppChatWidget.css"; // import the CSS

const WhatsAppChatWidget = () => {
  const phoneNumber = "2348123888508"; // Replace with your WhatsApp number
  const welcomeMessage = "Hello, I'm interested in your services at JBUIT!";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(welcomeMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-widget"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="whatsapp-icon" />
    </button>
  );
};

export default WhatsAppChatWidget;
