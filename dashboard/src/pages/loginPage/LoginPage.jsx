import { FormError } from '../../components/errors/Errors';
import { Box, Button, TextField, Typography } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup'
import '../registerPage/style.css'
import { useState } from 'react';

const LoginPage = () => {
    const [loginError, setLoginError] = useState(null)
    const navigate = useNavigate()
    
    const formHandler = (values) => {
        const localData = localStorage.getItem("users")

        if (!localData) {
            navigate("/register")
        }

        const users = JSON.parse(localData)
        const user = users.find(u => u.email === values.email)

        if (user) {
            if (user.password === values.password) {
                localStorage.setItem("auth", JSON.stringify(user))
                navigate("/")
            } else {
                setLoginError("Не вірно вказано пароль")
            }
        } else {
            setLoginError(`Не знайдено користувача з поштою ${values.email}`)
        }
    }
    

    // init values
    const initValues = {
        email: "",
        password: ""
    }

    // validation yup scheme
    const yupValidationScheme = Yup.object({
        email: Yup.string()
            .required("Пошта обов'язкова")
            .email("Невірний формат пошти"),
        password: Yup.string()
            .required("Пароль обов'язковий")
            .min(8, "Пароль повинен містити не менше 8 символів")
    })

    // formik
    const formik = useFormik({
        initialValues: initValues,
        onSubmit: formHandler,
        validationSchema: yupValidationScheme
    })


    return (
        <Box component="form" onSubmit={formik.handleSubmit} className="form-container">
            <Box>
                <h1>Login</h1>
            </Box>
            <Box className="form-control">
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  label="Email"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
            </Box>
            {formik.touched.email && formik.errors.email ? (
                <FormError text={formik.errors.email} />
            ) : null}
            <Box className="form-control">
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
            </Box>
            {formik.touched.password && formik.errors.password ? (
                <FormError text={formik.errors.password} />
            ) : null}
            <Box className="form-control">
                <Button type='submit' variant="contained" fullWidth>Login</Button>
            </Box>
            <Box>
                <Typography>Ще не зареєстровані? <Link to="/register">Зареєструватися</Link></Typography>
            </Box>
            <Box>
                <FormError text={loginError} ></FormError>
            </Box>
        </Box>
    )
}
export default LoginPage