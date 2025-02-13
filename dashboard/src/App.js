import MainPage from './pages/mainPage/MainPage'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/registerPage/RegisterPage'
import AboutPage from './pages/aboutPage/AboutPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import DefaultLayout from './components/layouts/DefaultLayout'

const App = () => {
    


  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />} >
          <Route index element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
