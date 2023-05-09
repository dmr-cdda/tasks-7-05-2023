"use client";
import { useState, useEffect } from 'react';

function UserBrowserRecognition() {
  const [browserDetails, setBrowserDetails] = useState<string | null>(null);
  const [osDetails, setOsDetails] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const browserName = getBrowserName(userAgent);
      const osName = getOsName(userAgent);
      
      console.log("browser name", browserName);
      console.log("os name", osName);
      
    setBrowserDetails(browserName);
    setOsDetails(osName);
  }, []);

  function getBrowserName(userAgent : string) {
    const browserInfo = userAgent.match(
      /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
    );
    if (browserInfo && browserInfo[1]) {
      return browserInfo[1];
    } else {
      return "Unknown Browser";
    }
  }

  function getOsName(userAgent : string) {
    const osInfo = userAgent.match(
      /(android|webos|iphone|ipad|ipod|blackberry|windows phone|windows|mac|linux)/i
    );
    if (osInfo && osInfo[1]) {
      return osInfo[1];
    } else {
      return "Unknown OS";
    }
  }

  return (
    <div>
      <p>Browser: {browserDetails}</p>
      <p>OS: {osDetails}</p>
    </div>
  );
}

export default UserBrowserRecognition;
