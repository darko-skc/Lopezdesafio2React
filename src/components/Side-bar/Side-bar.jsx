import './Side-bar.css'
import SideBarLogo from './Side-bar__logo/Side-bar__logo'
import SideBarOptions from './Side-bar__options/Side-bar__options'
import SideBarConfiguration from './Side-bar__configuration/Side-bar__configuration'

const SideBar = () =>{
    return (
        <div className='Side-bar'>
            <SideBarLogo />
            <SideBarOptions />            
            <SideBarConfiguration />
        </div>
        
    )
}

export default SideBar