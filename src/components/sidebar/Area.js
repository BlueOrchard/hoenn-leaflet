import { useEffect, useState } from "react";
import { fetchIDFromURL } from "../../util/fetchIDFromURL";
import { removeDashes } from "../../util/removeDashes";
import PokemonImage from "../pokemon/PokemonImage";

function Area(props){
    const [areaName, setAreaName] = useState(props.areaName)
    const areaData = props.areaData

    useEffect(() => {
        console.log(areaData)

        let name = areaData.names[0].name
        if(name !== undefined && name.length > 0){
            setAreaName(name)
        }
    }, [areaData])

    return(
        <div className="area">
            <span className="area-name-small">Encounter Area</span>
            <h2 className="area-name">{areaName}</h2>

            {areaData.pokemon_encounters.map((pokemon_encounter) => (
                <div className="single-pokemon">
                    <div className="image">
                        <PokemonImage ID={fetchIDFromURL(pokemon_encounter.pokemon.url)} />
                    </div>
                    <div className="information">
                        <h3 className="pokemon-name">{pokemon_encounter.pokemon.name}</h3>
                        {pokemon_encounter.version_details[0].encounter_details.map((encounter_detail) =>(
                            <div className="encounter-stats">
                                <p className="method">Method: <span>{removeDashes(encounter_detail.method.name)}</span></p>
                                <p className="chance">Chance: {encounter_detail.chance}%</p>
                                <p className="level">Level: {encounter_detail.min_level} - {encounter_detail.max_level}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Area;