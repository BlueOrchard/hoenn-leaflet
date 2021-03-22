import { Marker, Polygon, Popup } from "react-leaflet";
import L from 'leaflet'

function City(props){
    const coords = props.coords
    const center = L.polygon(coords).getBounds().getCenter()
    const text = L.divIcon({
        html: `<span>${props.name}</span>`,
        className: props.type
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