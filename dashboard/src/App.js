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
import { useContext, useEffect } from 'react'
import { AuthContext } from './components/poviders/AuthProvider'
import ProfilePage from './pages/profilePage/ProfilePage'

const App = () => {

  const { auth, login } = useContext(AuthContext)
  
  useEffect(() => {
    login()
  }, [])





  return (
      <Routes>
        <Route path="/" element={ <DefaultLayout /> } >
          <Route index element={ <MainPage /> } />
          { !auth ? (
              <>
              <Route path="register" element={ <RegisterPage /> } />
              <Route path="login" element={ <LoginPage /> } />
              </>
          ) : (
              <>
              <Route path='profile' element={ <ProfilePage /> } />
              </>
          )}
          <Route path="about" element={ <AboutPage /> } />
          <Route path="users">
            <Route index element={ <UsersListPage /> } />
            <Route path="user" element={ <EditUserPage isEdit={false} /> } />
            <Route path="user/:id" element={ <EditUserPage isEdit={true} /> } />
          </Route>
          <Route path="*" element={ <NotFoundPage /> } />
        </Route>
      </Routes>
  )
}

export default App;
