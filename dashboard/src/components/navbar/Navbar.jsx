import { SolidButton } from '../../Buttons'
import * as style from './style'
// import darkThemeIcon from './images/dark_theme_icon.svg'
// import lightThemeIcon from './images/light_theme_icon.svg'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import './style.css'

const Navbar = ({ isDark = false, themeCallBack }) => {
    const navLinkStyle = isDark ? style.navLinkDark : style.navLinkLight
    // const theme = isDark ? darkThemeIcon : lightThemeIcon

    return (
        <div className='navbar' style={isDark ? style.navbarDark : style.navbarLight}>
            <a className='navLink' style={navLinkStyle} href="#">Main page</a>
            <a className='navLink' style={navLinkStyle} href="#">About</a>
            <a className='navLink' style={navLinkStyle} href="#">Page 3</a>
            <a className='navLink' style={navLinkStyle} href="#">Page 4</a>

            {/* <div onClick={themeCallBack}>
                <img src={theme}></img>
            </div> */}

            <div onClick={themeCallBack}>
                { 
                    isDark ? 
                    <IconButton sx={{ color: "white" }}><LightModeIcon /></IconButton> : 
                    <IconButton><DarkModeIcon /></IconButton> }
            </div>

        </div>
    )
}

export default Navbar
