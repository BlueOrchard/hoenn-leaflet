import { useEffect } from "react";

function Area(props){
    const areaData = props.areaData

    useEffect(() => {
        console.log(areaData)
    }, [areaData])

    return(
        <div className="area">
            {areaData.name}
        </div>
    )
}

export default Area;