import { ImageOverlay, MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet'
import hoenn from './hoenn-map.png'

import '../../util/leaflet/leaflet.css'
import './Map.scss'

function Map(){
    const bounds = [
        [0, 0],
        [1809, 2560]
    ]

    return(
        <div className="map-container">
            <MapContainer
                crs={L.CRS.Simple}
                center={[600, 480]} 
                zoom={1}
                bounds={bounds}
                maxBounds={bounds}
            >
                <ImageOverlay 
                    url={hoenn}
                    interactive
                    bounds={bounds}
                    opacity={1}
                    zIndex={10}
                />
            </MapContainer>
        </div>
    )
}

export default Map;