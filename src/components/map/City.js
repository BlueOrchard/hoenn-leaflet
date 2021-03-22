import { Marker, Polygon, Popup } from "react-leaflet";
import L from 'leaflet'

function City(){
    const coords = [
        [546.5, 487.5],
        [546.5, 536],
        [503, 540.5],
        [502.5, 485.5]
    ]
    const center = L.polygon(coords).getBounds().getCenter()
    const text = L.divIcon({
        html: `<span>Littleroot Town</span>`,
        className: 'city'
    })


    function cityLookup(){
        console.log("CLICKED")
    }

    return(
        <Polygon
            positions={coords}
            pathOptions={{
                weight: 0,
                fillOpacity: 0
            }}
            eventHandlers={{
                click: () => {
                    cityLookup()
                }
            }}
        >
            <Marker 
                position={center}
                icon={text}
                eventHandlers={{
                    click: () => {
                        cityLookup()
                    }
                }}
            >
            </Marker>
        </Polygon>
    )
}

export default City;