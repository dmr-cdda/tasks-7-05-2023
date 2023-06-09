"use client";
import { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import Storage from "@/components/new-user/Storage";
import LocalSessionStorage from "@/components/new-user/LocalSessionStorage";
 
export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [visitorId, setVisitorId] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [browserName, setBrowserName] = useState("");
    const [browserVersion, setBrowserVersion] = useState("");
    const [deviceType, setDeviceType] = useState("");
    const [osName, setOsName] = useState("");
    const [href, setHref] = useState("");
    const [pathname, setPathname] = useState("");
    const [timezone, setTimezone] = useState();
 
    useEffect(() => {
        // FingerPrint
        const fpPromise = FingerprintJS.load();
        (async () => {
            const fp = await fpPromise;
            const result = await fp.get();
            const visitorId = result.visitorId;
            setVisitorId(visitorId);
        })();
 
        setHref(window.location.hostname);
        setPathname(window.location.href);
 
        // Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setLatitude(latitude);
                setLongitude(longitude);
                console.log(navigator.geolocation);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
 
        // Device type
        const isMobile = /Mobile/i.test(navigator.userAgent);
        const isTablet = /Tablet/i.test(navigator.userAgent);
        const isDesktop = !isMobile && !isTablet;
 
        // Browser information
        setBrowserName(navigator.userAgent.toLowerCase().split(" ")[0].split("/")[0]);
        setBrowserVersion(navigator.userAgent.toLowerCase().split(" ")[0].split("/")[1]);
        setDeviceType(isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop");
        setOsName(navigator.platform);
    }, []);
  
  
    return (
        <html lang="en">
            <body>
          <main className="bg-green-800 w-full">
            <div className="grid h-auto min-h-screen place-items-center">
                    <div className="bg-green-50 w-[600px] p-4">
                        <div className="text-sm">
                            <div className="">Time: {timezone}</div>
                            <div className="">Visitor Id: {visitorId}</div>
                            <div className="font-bold">Location</div>
                            <div className="">Lat : {latitude}</div>
                            <div className="">Long : {longitude}</div>
                            <div className="">Browser Name : {browserName}</div>
                            <div className="">Browser Version : {browserVersion}</div>
                            <div className="">Device Type : {deviceType}</div>
                            <div className="">OS : {osName}</div>
                            <div className="">Qualified Name : {href}</div>
                            <div className="">Current Path : {pathname}</div>
                        </div>
              </div>
              
                        <Storage />
                        <LocalSessionStorage/>
                </div>
                </main>
            </body>
        </html>
    );
}