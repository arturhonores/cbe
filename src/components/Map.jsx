import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import pin from "../assets/images/map-pin-cbe.svg"

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div className="animate-spin h-5 w-5"></div>;
    const center = { lat: 40.45700734005109, lng: -3.7834404125036043 };
    return (
        <GoogleMap
            zoom={15}
            center={center}
            mapContainerClassName="w-full h-full"
            options={{ mapId: "e712f1db1f65e86a" }}
        >
            <MarkerF icon={{ url: pin, scaledSize: new window.google.maps.Size(50, 50) }} position={center} />
        </GoogleMap>
    );
};
export default Map;
