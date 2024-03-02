import React, { useEffect, useRef } from "react";

function Apple() {
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        footerRef.current.classList.add("hide");
      } else {
        footerRef.current.classList.remove("hide");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ...existing code... */}
      <div className="footer" ref={footerRef}>
        Copyright &copy; {new Date().getFullYear()}
      </div>
    </>
  );
}

export default Apple;
