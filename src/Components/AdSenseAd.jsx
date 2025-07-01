import React, { useEffect, useRef, useState } from 'react';

const AdSenseAd = () => {
  const adRef = useRef(null);
  const pushedRef = useRef(false);
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load ad once when width is sufficient
  useEffect(() => {
    if (width > 300 && adRef.current && !pushedRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
        console.log("Ad pushed to Google AdSense");
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, [width]);

  // Avoid rendering if too narrow
  if (width < 300) return null;

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      // style={{
      //   display: 'block',
      //   width: '100%',
      //   minHeight: '100px',
      //   backgroundColor: '#f8f8f8', // Optional: for dev layout
      //   border: '1px dashed #ccc',
      //   textAlign: 'center',
      //   lineHeight: '100px',
      //   color: '#aaa',
      // }}
      data-ad-client="ca-google"           // <-- use ca-pub-xxx on production
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    >
    </ins>
  );
};

export default AdSenseAd;
