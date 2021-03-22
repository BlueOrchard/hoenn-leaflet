import { ImageOverlay, MapContainer, Marker, Polygon, useMapEvents } from 'react-leaflet';
import L from 'leaflet'
import hoenn from './hoenn-map.png'

import '../../util/leaflet/leaflet.css'
import './Map.scss'

import cities from '../../util/json/cities.json'
import City from './City';

function Events(){
    const map = useMapEvents({
        click(e) {     
            console.log(`[${e.latlng.lat}, ${e.latlng.lng}]`)
        },            
    })

    return null
}

function Map(){
    const bounds = [
        [0, 0],
        [1809, 2560]
    ]

    return(
        <div className="map-container">
            <MapContainer
                crs={L.CRS.Simple}
                center={[520, 508]} 
                zoom={0.5}
                maxZoom={1.5}
                bounds={bounds}
                maxBounds={bounds}
            >
                <Events />
                <ImageOverlay 
                    url={hoenn}
                    interactive
                    bounds={bounds}
                    opacity={1}
                    zIndex={10}
                />

                {cities.map((city) => {
                    if(city.coords.length > 0){
                        return <City 
                            coords={city.coords}
                            name={city.name}
                            id={city.id}
                            type={city.type}
                            key={city.id} 
                        />
                    }
                })}
            </MapContainer>
        </div>
    )
}

export default Map;