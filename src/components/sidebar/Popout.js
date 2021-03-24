import { X } from "react-feather";
import { useDispatch } from "react-redux";
import { setSidebarState } from "../../store/appData";
import PokemonImage from "../pokemon/PokemonImage";

function Popout(){
    const dispatch = useDispatch()

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
            <PokemonImage ID={1} />
        </div>
    )
}

export default Popout;