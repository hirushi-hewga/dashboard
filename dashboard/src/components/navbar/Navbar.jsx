// import darkThemeIcon from './images/dark_theme_icon.svg'
// import lightThemeIcon from './images/light_theme_icon.svg'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'
import * as style from './style'
import './style.css'

const Navbar = ({ logout, auth, isDark = false, themeCallBack }) => {

    const logoutHandler = () => {
        logout()
    }

    const navLinkStyle = isDark ? style.navLinkDark : style.navLinkLight
    // const theme = isDark ? darkThemeIcon : lightThemeIcon

    return (
        <div className='navbar' style={isDark ? style.navbarDark : style.navbarLight}>
            <div className='navlinks'>
                <Link style={navLinkStyle} to="/">Main page</Link>
                <Link style={navLinkStyle} to="/about">About</Link>
                <Link style={navLinkStyle} to="/users">Users</Link>
                <Link style={navLinkStyle} to="/">Page 4</Link>
            </div>

            {/* <div onClick={themeCallBack}>
                <img src={theme}></img>
            </div> */}

            <div className='navtheme' onClick={themeCallBack}>
                { 
                    isDark ? 
                    <IconButton sx={{ color: "white" }}><LightModeIcon /></IconButton> : 
                    <IconButton><DarkModeIcon /></IconButton> }
            </div>
            
            { !auth ? <div className='navauth'>
                <Link to="login">
                    <Button style={{margin: "0 5px 0 0"}} variant='contained'>Login</Button>
                </Link>
                <Link to="register">
                    <Button style={{margin: "0 10px 0 5px"}} variant='contained'>Register</Button>
                </Link>
            </div> : <div className='navauth'>
                <Button onClick={logoutHandler} style={{margin: "0 10px 0 5px"}} variant='contained'>Logout</Button>
            </div> }

        </div>
    )
}

export default Navbar
