import React, { useEffect, useRef } from 'react';

const AdSenseAd = ({ width = '100%', height, onLoad }) => {
  const adRef = useRef(null);
  const pushedRef = useRef(false);
  const maxRetries = 10;
  let attempts = 0;

  useEffect(() => {
    const tryLoadAd = () => {
      if (pushedRef.current) return;

      const w = adRef.current?.offsetWidth || 0;
      const h = adRef.current?.offsetHeight || 0;

      console.log(`⏳ Attempt ${attempts + 1} - width: ${w}, height: ${h}`);

      if (adRef.current && w > 0 && h > 0) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
          console.log("✅ AdSense ad pushed");
          onLoad?.(true); // notify parent ad loaded
        } catch (err) {
          console.error("❌ AdSense error:", err);
          onLoad?.(false); // error occurred
        }
      } else if (attempts < maxRetries) {
        attempts++;
        setTimeout(tryLoadAd, 300);
      } else {
        console.warn("⚠️ AdSense ad failed to load after retries");
        onLoad?.(false);
      }
    };

    tryLoadAd();
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{
        display: 'block',
        width,
        height,
        backgroundColor: '#f8f8f8',
      }}
      data-ad-client="ca-google"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdSenseAd;
