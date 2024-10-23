// StickyCtaButton.js
import React from "react";

const StickyCtaButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
    >
      {label}
    </button>
  );
};

export default StickyCtaButton;
