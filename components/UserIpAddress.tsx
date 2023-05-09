import React, { useEffect, useState } from 'react'

const UserIpAddress = () => {
  const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
      setIpAddress("Please wait...")
    fetch('https://api.ipify.org')
      .then((response) => response.text())
      .then((data) => setIpAddress(data));
  }, []);
    
  return (
      <div>UserIpAddress : {ipAddress}</div>
  )
}

export default UserIpAddress