import { useEffect, useRef } from "react";

const AdSenseAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      console.log('window.adsbygoogle',window.adsbygoogle)
      if (entry.contentRect.width > 0) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          observer.disconnect();
        } catch (e) {
          console.error("AdSense push error:", e);
        }
      }
    });

    if (adRef.current) observer.observe(adRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      // style={{ display: "block", width: "100%", height: "100px" }}
      data-ad-client="ca-google"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={adRef}
    ></ins>
  );
};

export default AdSenseAd;
