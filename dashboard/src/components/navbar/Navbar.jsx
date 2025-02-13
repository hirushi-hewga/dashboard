// import darkThemeIcon from './images/dark_theme_icon.svg'
// import lightThemeIcon from './images/light_theme_icon.svg'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import { SolidButton } from '../../Buttons'
import { Link } from 'react-router-dom'
import * as style from './style'
import './style.css'

const Navbar = ({ isDark = false, themeCallBack }) => {
    const navLinkStyle = isDark ? style.navLinkDark : style.navLinkLight
    // const theme = isDark ? darkThemeIcon : lightThemeIcon

    return (
        <div className='navbar' style={isDark ? style.navbarDark : style.navbarLight}>
            <Link style={navLinkStyle} to="/">Main page</Link>
            <Link style={navLinkStyle} to="/about">About</Link>
            <Link style={navLinkStyle} to="/register">Register</Link>
            <Link style={navLinkStyle} to="/">Page 4</Link>

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
