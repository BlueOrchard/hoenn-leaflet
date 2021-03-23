import { Marker, Polygon } from "react-leaflet";
import L from 'leaflet'
import { setSidebarState } from "../../store/appData";
import { useDispatch } from "react-redux";

function City(props){
    const coords = props.coords
    const center = L.polygon(coords).getBounds().getCenter()
    const text = L.divIcon({
        html: `<span>${props.name}</span>`,
        className: props.type
    })
    const dispatch = useDispatch()


    function cityLookup(){
        dispatch(setSidebarState(true))
        // dispatch the other stuff here
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