import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/670dfe644304e3196ad1a85c/1ia7ajf22";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.head.appendChild(s1);

    return () => {
      document.head.removeChild(s1); // Cleanup the script when the component unmounts
    };
  }, []);

  return null;
};

export default TawkTo;
