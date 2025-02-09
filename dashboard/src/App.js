import { useEffect, useState } from 'react'
import MainPage from './pages/mainPage/MainPage'
import Footer from './components/footer'
import Navbar from './components/navbar/Navbar'
import './App.css'

const App = () => {
    // state
    const [theme, setTheme] = useState("light")


    const ChangeThemeHandler = () => {
        const currentTheme = theme === "dark" ? "light" : "dark"
        setTheme(currentTheme)
        localStorage.setItem("theme", currentTheme)
        console.log("event theme", currentTheme)
    }


    function getThemeCallBack() {
        const currentTheme = localStorage.getItem("theme")
        if (currentTheme) {
            setTheme(currentTheme)
        }
    }
  

    useEffect(getThemeCallBack, [])


  return (
    <>
      <Navbar isDark={theme === "dark"} />
      <div>
        <button onClick={ChangeThemeHandler} style={{margin: "10px 5px"}}>Change theme</button>
      </div>
      <MainPage />
      <Footer />
    </>
  )
}

export default App;
