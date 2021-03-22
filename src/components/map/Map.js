import { ImageOverlay, MapContainer, Marker, Polygon, useMapEvents } from 'react-leaflet';
import L from 'leaflet'
import hoenn from './hoenn-map.png'

import '../../util/leaflet/leaflet.css'
import './Map.scss'
import City from './City';

function Events(){
    const map = useMapEvents({
        click(e) {     
            console.log(`Lat: ${e.latlng.lat}, Long: ${e.latlng.lng}`)
        },            
    })

    return null
}

function Map(){
    const bounds = [
        [0, 0],
        [1809, 2560]
    ]

    function getCoords(e){
        console.log(e)
    }

    return(
        <div className="map-container">
            <MapContainer
                crs={L.CRS.Simple}
                center={[520, 508]} 
                zoom={0.5}
                bounds={bounds}
                maxBounds={bounds}
                onClick={getCoords}
            >
                <Events />
                <ImageOverlay 
                    url={hoenn}
                    interactive
                    bounds={bounds}
                    opacity={1}
                    zIndex={10}
                />

                <City />
            </MapContainer>
        </div>
    )
}

export default Map;