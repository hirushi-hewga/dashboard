import MainPage from './pages/mainPage/MainPage'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/registerPage/RegisterPage'
import AboutPage from './pages/aboutPage/AboutPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import DefaultLayout from './components/layouts/DefaultLayout'
import UsersListPage from './pages/users/UsersListPage'
import EditUserPage from './pages/users/EditUserPage/EditUserPage'
import LoginPage from './pages/loginPage/LoginPage'
import { useState, useEffect } from 'react'

const App = () => {
  const[auth, setAuth] = useState(null)

  useEffect(() => {
    const localData = localStorage.getItem("auth")

    if (localData) {
      setAuth(JSON.parse(localData))
    }
  }, [])











  return (
    <>
      <Routes>
        <Route path="/" element={ <DefaultLayout auth={auth} /> } >
          <Route index element={ <MainPage /> } />
          <Route path="register" element={ <RegisterPage /> } />
          <Route path="login" element={ <LoginPage /> } />
          <Route path="about" element={ <AboutPage /> } />
          <Route path="users">
            <Route index element={ <UsersListPage /> } />
            <Route path="user" element={ <EditUserPage isEdit={false} /> } />
            <Route path="user/:id" element={ <EditUserPage isEdit={true} /> } />
          </Route>
          <Route path="*" element={ <NotFoundPage /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App;
