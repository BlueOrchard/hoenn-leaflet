import { useEffect, useState } from 'react'
import './PokemonImage.scss'

function PokemonImage(props){
    const [ID, setID] = useState(props.ID)

    useEffect(() => {
        // Makes sure ID will always have 3 digits
        setID(('000' + ID).substr(-3))
    }, [ID])

    return(
        <div className="pokemon-image">
            <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${ID}.png`} alt="" />
        </div>
    )
}

export default PokemonImage;