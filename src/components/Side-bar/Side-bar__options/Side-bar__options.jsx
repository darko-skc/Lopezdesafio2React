import './Side-bar__options.css'
import SideBarButton from '../Side-bar__button/Side-bar__button'

const SideBarOptions = () =>{
    return (
        <div className="Side-bar__options">
                <SideBarButton icon='fa-brands fa-xbox' link='#'/>
                <SideBarButton icon='fa-solid fa-gamepad' link='#'/>
                <SideBarButton icon='fa-solid fa-trophy' link='#'/>
                <SideBarButton icon='fa-solid fa-gift' link='#'/>
                <SideBarButton icon='fa-solid fa-cube' link='#'/>
                <SideBarButton icon='fa-regular fa-folder-open' link='#'/>
        </div>
    )
}

export default SideBarOptions