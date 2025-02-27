import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
 <>
 
 </>
  );
};

export default Page;
