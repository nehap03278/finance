import React from "react";
import { useLeadModal } from "../context/leadModal.jsx";

const Button = ({ styles = "", onClick, opensModal = true }) => {
  const { open } = useLeadModal();

  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        if (opensModal) open();
      }}
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] hover:opacity-90`}
    >
      Get Started
    </button>
  );
};

export default Button;
