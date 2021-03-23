import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../store/appData';
import { pageSlide, pageTransition } from '../../util/animations';
import pokeball from './icons8-pokeball-64.png';
import Popout from './Popout';
import './Sidebar.scss';

function Sidebar(){
    const sidebarState = useSelector(state => state.appData.sidebarState)
    const dispatch = useDispatch()

    return(
        <div className="sidebar">
            <div className="visible-sidebar">
                <img 
                    onClick={() => dispatch(toggleSidebar())}
                    src={pokeball} alt="pokeball"/>
            </div>
            <AnimatePresence>
                {sidebarState &&
                    <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageSlide}
                    transition={pageTransition}
                    className="popout-sidebar">
                            <Popout/>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default Sidebar;