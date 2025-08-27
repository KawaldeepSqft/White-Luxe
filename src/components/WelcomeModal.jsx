import React, { useEffect, useState } from "react";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "0rem",
          borderRadius: "10px",
          maxWidth: "90%",
          width: "900px",
          position: "relative",
        }}
      >
        <img
          src="/img/Banner.png"
          alt="Welcome"
          style={{ width: "100%", borderRadius: "8px" }}
        />

        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "#fff",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "red",
            fontWeight: "600",
            borderRadius: "50%",
            padding: "0 5px",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
