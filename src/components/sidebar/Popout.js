import { useEffect, useState } from "react";
import { X } from "react-feather";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarState } from "../../store/appData";
import Area from './Area'

function Popout(){
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
        } else {
            setEnglishName("")
            setJapaneseName("")
        }
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
                <SkeletonTheme color="#d7d7d7" highlightColor="#c6c6c6">
                    <div className="location-name">
                        <h1 className="english-name">{englishName || <Skeleton />}</h1>
                        <h2 className="japanese-name">{japaneseName || <Skeleton />}</h2>
                    </div>

                    {locationAreas.map((area) => (
                        <Area key={area.id} areaName={englishName} areaData={area}/>
                    ))}
                </SkeletonTheme>
            </div>
        </div>
    )
}

export default Popout;