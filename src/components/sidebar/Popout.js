import { X } from "react-feather";
import { useDispatch } from "react-redux";
import { setSidebarState } from "../../store/appData";

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
        </div>
    )
}

export default Popout;