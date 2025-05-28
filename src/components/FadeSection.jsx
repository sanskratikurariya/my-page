import React, { useState, useEffect, useRef } from "react";

export default function FadeSection({ children, delay = 0 }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      {children}
    </div>
  );
}
