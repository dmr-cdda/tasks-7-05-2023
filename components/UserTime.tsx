"use client";
import React, { useEffect, useState } from 'react'

const UserTime = () => {
  const currentDate = new Date();
  const timeZoneOffset = currentDate.getTimezoneOffset() / 60;
  const [userTime, setUserTime] = useState({
    timeZone: "Please wait...",
    localTime : "Please wait..."
  });

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = currentDate.toLocaleTimeString();
    
    setUserTime(prev => ({ ...prev, timeZone, localTime }))
  }, []);
  

  return (
    <div>
      <p>Time zone offset : {timeZoneOffset}</p>
      <p>Time zone : {userTime.timeZone}</p>
      <p>Local Time : {userTime.localTime}</p>
    </div>
  )
}

export default UserTime