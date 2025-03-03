import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from "formik";
import * as Yup from 'yup'
import './style.css'
import { FormError } from '../../components/errors/Errors';
import { useNavigate, Link } from 'react-router-dom';


const RegisterPage= () => {
    const navigate = useNavigate()
    
    const formHandler = (values) => {
        const users = localStorage.getItem("users")
        if (!users) {
            localStorage.setItem("users", JSON.stringify([{...values, id: 1}]))
        } else {
            const array = JSON.parse(users)
            values.id = array[array.length - 1].id + 1
            array.push(values)
            localStorage.setItem("users", JSON.stringify(array))
        }
        navigate("/")
    }
    

    // init values
    const initValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    // validation yup scheme
    const yupValidationScheme = Yup.object({
        firstName: Yup.string().max(50, "Максимум 50 символів"),
        lastName: Yup.string().max(50, "Максимум 50 символів"),
        email: Yup.string().required("Пошта обов'язкова").email("Невірний формат пошти"),
        password: Yup.string().required("Пароль обов'язковий").min(8, "Пароль повинен містити не менше 8 символів"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Паролі не збігаються")
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
                <h1>Register</h1>
            </Box>
            <Box className="form-control">
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                />
            </Box>
            {formik.touched.firstName && formik.errors.firstName ? (
                <FormError text={formik.errors.firstName} />
            ) : null}
            <Box className="form-control">
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
            </Box>
            {formik.touched.lastName && formik.errors.lastName ? (
                <FormError text={formik.errors.lastName} />
            ) : null}
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
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  label="ConfirmPassword"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                />
            </Box>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <FormError text={formik.errors.confirmPassword} />
            ) : null}
            <Box className="form-control">
                <Button type='submit' variant="contained" fullWidth>Register</Button>
            </Box>
            <Box>
                <Typography>Вже зареєстровані? <Link to="/login">Увійти</Link></Typography>
            </Box>
        </Box>
    )
}

export default RegisterPage
