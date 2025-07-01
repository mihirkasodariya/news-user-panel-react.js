import React, { useEffect, useRef, useState } from 'react';

const AdSenseAd = () => {
  const adRef = useRef(null);
  const pushedRef = useRef(false); // <-- track if already pushed
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 300 && adRef.current && !pushedRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true; // mark as pushed
      } catch (e) {
        console.error("Adsense error", e);
      }
    }
  }, [width]);

  if (width < 300) return null;

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: 'block', minWidth: '300px', width: '100%' }}
      data-ad-client="ca-google"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdSenseAd;
