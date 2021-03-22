import './Sidebar.scss'
import pokeball from './icons8-pokeball-64.png'

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="visible-sidebar">
                <img src={pokeball} />
            </div>
            <div className="popout-sidebar">

            </div>
        </div>
    )
}

export default Sidebar;