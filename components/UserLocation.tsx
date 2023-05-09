import { useState, useEffect } from 'react';

function UserLocation() {
  const [latitude, setLatitude] = useState<null | number>(null);
  const [longitude, setLongitude] = useState<null | number>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {latitude && longitude ? (
              <p>Your location: Latitude{`=>`} {latitude},  Longitude{`=>`} {longitude}</p>
      ) : (
        <p>{error ? error : "Loading..."}</p>
      )}
    </div>
  );
}

export default UserLocation;