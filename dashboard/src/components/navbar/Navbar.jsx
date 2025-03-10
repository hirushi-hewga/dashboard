// import darkThemeIcon from './images/dark_theme_icon.svg'
// import lightThemeIcon from './images/light_theme_icon.svg'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button, IconButton, Box, Avatar, Tooltip, Menu, MenuItem, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import * as style from './style'
import './style.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../poviders/AuthProvider';
import { defaultAvatarUrl } from '../../settings/urls';

const Navbar = ({ isDark = false, themeCallBack }) => {
    const [anchorElUser, setAnchorElUser] = useState(null)
    const navigate = useNavigate()

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    };

    const { auth, logout } = useContext(AuthContext)

    const settings = [
        {name: 'Profile', action: () => {navigate("/profile")}}, 
        {name: 'Logout', action: logout}
    ];

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    };


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
            
            { !auth ? <Box className='navauth'>
                <Link to="login">
                    <Button style={{margin: "0 5px 0 0"}} variant='contained'>Login</Button>
                </Link>
                <Link to="register">
                    <Button style={{margin: "0 10px 0 5px"}} variant='contained'>Register</Button>
                </Link>
            </Box> : <>
                <Box style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src={defaultAvatarUrl} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting.name} onClick={() => {
                            handleCloseUserMenu()
                            if (setting.action) {
                                setting.action()
                            }
                        }}>
                            <Typography sx={{ textAlign: 'center' }}>{setting.name}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </> }
        </div>
    )
}

export default Navbar
