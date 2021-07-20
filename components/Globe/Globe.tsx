//
// it's **very** heavy component because of three.js in react-globe.gl deps
// please, import it dynamically whenever possible and disable SSR:
//
// import dynamic from "next/dynamic";
// const SSRLessGlob = dynamic(() => import("components/Globe"), {
//   ssr: false,
// });
//
import { useEffect, useRef } from "react";
import ReactGlobe, { GlobeProps } from "react-globe.gl";
import theme from "components/theme";
import getAddressImage from "utils/get-address-image";
import earthUrl from "./assets/globe.png";
import getData, { Place } from "./places";

const USA = { lat: 50, lng: -80 };

interface Props extends GlobeProps {
  viewPoint?: { lat: number; lng: number };
}

export default function Globe({ viewPoint = USA, ...props }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    const globe = ref.current;

    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.3;
      globe.controls().enableZoom = false;
      globe.pointOfView({ ...viewPoint, altitude: 2 });
    }
  }, [viewPoint]);

  return (
    <ReactGlobe
      ref={ref}
      labelsData={getData()}
      labelLat={(d: Place) => d.latitude}
      labelLng={(d: Place) => d.longitude}
      labelText={() => ""}
      labelSize={1}
      labelAltitude={0.01}
      labelDotRadius={(d: Place) => (d.satellite ? 1 : 0.6)}
      labelColor={() => "white"}
      labelResolution={2}
      globeImageUrl={getAddressImage(earthUrl)}
      backgroundColor="rgba(0,0,0,0)"
      atmosphereColor={theme.colors["light-purple"]}
      enablePointerInteraction={false}
      {...props}
    />
  );
}
