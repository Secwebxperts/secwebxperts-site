import { useEffect, useRef, useState } from "react";
import "./Cve.css";

const CVESlideIn = () => {
  const [visibleItems, setVisibleItems] = useState(0);
  const cveRef = useRef(null); // Create a reference for the CVE section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let count = 0;
            const interval = setInterval(() => {
              if (count < 4) {
                setVisibleItems((prev) => prev + 1);
                count++;
              } else {
                clearInterval(interval);
              }
            }, 1000); // Adjust timing for staggered effect
          }
        });
      },
      { threshold: 0.1 } // Trigger animation when 10% of the component is visible
    );

    if (cveRef.current) {
      observer.observe(cveRef.current);
    }

    return () => {
      if (cveRef.current) {
        observer.unobserve(cveRef.current);
      }
    };
  }, []);

  return (
    <div ref={cveRef} className="lg:w-1/2 w-full">
      {/* CVE List */}
      <ul className="list-disc list-inside py-8 px-2 font-bold text-gray-600">
        <li
          className={`${visibleItems >= 1 ? "animate-slideIn" : "opacity-0"}`}
        >
          CVE-2023-2594 CVE-2023-3605
        </li>
        <li
          className={`${visibleItems >= 2 ? "animate-slideIn" : "opacity-0"}`}
        >
          CVE-2023-1024 CVE-2023-1028
        </li>
        <li
          className={`${visibleItems >= 3 ? "animate-slideIn" : "opacity-0"}`}
        >
          CVE-2022-3546 CVE-2022-3548
        </li>
        <li
          className={`${visibleItems >= 4 ? "animate-slideIn" : "opacity-0"}`}
        >
          CVE-2022-3549 CVE-2022-4281
        </li>
      </ul>
    </div>
  );
};

export default CVESlideIn;
