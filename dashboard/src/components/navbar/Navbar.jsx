import { SolidButton } from '../../Buttons'
import * as style from './style'
import darkThemeIcon from './images/dark_theme_icon.svg'
import lightThemeIcon from './images/light_theme_icon.svg'
import './style.css'

const Navbar = ({ isDark = false, themeCallBack }) => {
    const navLinkStyle = isDark ? style.navLinkDark : style.navLinkLight
    const theme = isDark ? darkThemeIcon : lightThemeIcon

    return (
        <div className='navbar' style={isDark ? style.navbarDark : style.navbarLight}>
            <a className='navLink' style={navLinkStyle} href="#">Main page</a>
            <a className='navLink' style={navLinkStyle} href="#">About</a>
            <a className='navLink' style={navLinkStyle} href="#">Page 3</a>
            <a className='navLink' style={navLinkStyle} href="#">Page 4</a>
            <SolidButton text="Page 5" color="green" />

            <div onClick={themeCallBack}>
                <img src={theme}></img>
            </div>

        </div>
    )
}

export default Navbar
