import { Marker, Polygon } from "react-leaflet";
import L from 'leaflet'
import { setSidebarState } from "../../store/appData";
import { useDispatch } from "react-redux";
import { fetchLocationInfo } from "../../store/activeLocation";

function City(props){
    const ID = props.id
    const coords = props.coords
    const center = L.polygon(coords).getBounds().getCenter()
    const text = L.divIcon({
        html: `<span>${props.name}</span>`,
        className: props.type
    })
    const dispatch = useDispatch()


    function cityLookup(){
        dispatch(setSidebarState(true))
        dispatch(fetchLocationInfo(ID))
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