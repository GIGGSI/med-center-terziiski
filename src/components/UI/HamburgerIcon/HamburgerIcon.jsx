
import './HamburgerIcon.css'

const HamburgerIcon = ({ open }) => {
    return (
        <div id="nav-icon1" className={open ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default HamburgerIcon