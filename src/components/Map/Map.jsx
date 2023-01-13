import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "50vh",
  marginBottom: "1rem",
};

export default function MapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAp49qIJ5OsAAMK83iyP31AWwKdFbBLhd0",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  useEffect(() => setIsMounted(true), []);
  const [isMounted, setIsMounted] = useState(false);
  const center = useMemo(() => ({ lat: 43.36429, lng: -8.40948 }), []);

  return (
    <section className="c-map">
      <div className="c-map__googleMaps"></div>
      <GoogleMap zoom={16} center={center} mapContainerStyle={containerStyle}>
        {isMounted && (
          <Marker
            position={center}
            icon={
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            }
          />
        )}
      </GoogleMap>
    </section>
  );
}
