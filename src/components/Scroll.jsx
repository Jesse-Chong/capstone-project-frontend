import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to check if user has scrolled down enough to show the button
  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
      {isVisible && (
        <div className="scroll-to-top-btn" onClick={scrollToTop}>
          <FaArrowCircleUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
