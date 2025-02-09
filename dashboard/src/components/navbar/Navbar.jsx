import { SolidButton } from '../../Buttons'
import * as style from './style'
import './style.css'

const Navbar = ({isDark = false}) => {
    const navLinkStyle = isDark ? style.navLinkDark : style.navLinkLight

    return (
        <div className='navbar' style={isDark ? style.navbarDark : style.navbarLight}>
            <a className='navLink' style={navLinkStyle} href="#">Main page</a>
            <a className='navLink' style={navLinkStyle} href="#">About</a>
            <a className='navLink' style={navLinkStyle} href="#">Page 3</a>
            <a className='navLink' style={navLinkStyle} href="#">Page 4</a>
            <SolidButton text="Page 5" color="green" />
        </div>
    )
}

export default Navbar
