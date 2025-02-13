import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom"
import { Container } from "@mui/material"
import Navbar from "../navbar/Navbar"
import Footer from "../footer"

const DefaultLayout = () => {





    // state
    const [theme, setTheme] = useState("light")


    const changeThemeHandler = () => {
        const currentTheme = theme === "dark" ? "light" : "dark"
        setTheme(currentTheme)
        localStorage.setItem("theme", currentTheme)
        console.log("event theme", currentTheme)
    }
  

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme")
        if (currentTheme) {
            setTheme(currentTheme)
        }
    }, [])





    return (
        <>
            <Navbar isDark={theme === "dark"} themeCallBack={changeThemeHandler} />
            <Container maxWidth="lg">
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default DefaultLayout