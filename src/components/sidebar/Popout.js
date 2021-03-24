import { useEffect, useState } from "react";
import { X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarState } from "../../store/appData";

function Popout(){
    const [names, setNames] = useState(false)
    const [englishName, setEnglishName] = useState("")
    const [japaneseName, setJapaneseName] = useState("")

    const locationInfo = useSelector(state => state.activeLocation.locationInfo)
    const locationAreas = useSelector(state => state.activeLocation.locationAreas)
    const dispatch = useDispatch()

    useEffect(() => {
        if(locationInfo.names !== undefined){
            locationInfo.names.map(((name) => {
                switch(name.language.name){
                    case "en":
                        setEnglishName(name.name)
                        break
                    case "ja-Hrkt":
                        setJapaneseName(name.name)
                        break
                    default:
                        break
                }
            }))
            setNames(true)
        } else {
            setNames(false)
        }

        console.log(locationAreas)
    }, [locationInfo, locationAreas])

    function closeSidebar(){
        dispatch(setSidebarState(false))
    }

    return(
        <div>
            <div
                onClick={() => {closeSidebar()}}  
                className="close">
                    <X />
            </div>
            <div className="inner-information">
                {names && 
                    <div className="location-name">
                        <h1 className="english-name">{englishName}</h1>
                        <h2 className="japanese-name">{japaneseName}</h2>
                    </div>
                }

                {locationAreas.map((area) => {
                    return area.name
                })}
            </div>
        </div>
    )
}

export default Popout;