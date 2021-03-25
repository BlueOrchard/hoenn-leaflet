import { useEffect, useState } from 'react'
import './PokemonImage.scss'

function PokemonImage(props){
    const propID = props.ID
    const [ID, setID] = useState(0)

    useEffect(() => {
        // Makes sure ID will always have 3 digits
        if(propID !== undefined){
            setID(('000' + propID).substr(-3))
        }
    }, [ID])

    return(
        <div className="pokemon-image">
            {ID > 0 &&
                <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${ID}.png`} alt="" />
            }
        </div>
    )
}

export default PokemonImage;