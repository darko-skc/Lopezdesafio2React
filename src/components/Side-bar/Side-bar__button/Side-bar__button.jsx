import './Side-bar__button.css'

const SideBarButton = (props)=>{
    return(
        <li className="Side-bar__li"><a href={`${props.link}`} target="_blank"><i className={`Side-bar__i ${props.icon}`}></i></a></li>
    )
}

export default SideBarButton