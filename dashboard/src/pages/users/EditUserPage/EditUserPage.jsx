import { useParams } from "react-router-dom"
import { Box, Button, TextField } from '@mui/material'
import { useFormik } from "formik";
import * as Yup from 'yup'
import './style.css'
import { FormError } from "../../../components/errors/Errors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const EditUserPage = () => {
    const navigate = useNavigate()
    const params = useParams()
        
    const formEditHandler = (values) => {
        const localData = localStorage.getItem("users")
        if(!localData) {
            navigate("/users")
        }

        const users = JSON.parse(localData)
        const userIndex = users.findIndex(u => u.id = values.id)
        users[userIndex] = {...values}
        localStorage.setItem("users", JSON.stringify(users))

        navigate("/users")
    }

    useEffect(() => {
        const localData = localStorage.getItem("users")
        if (!localData) {
            navigate("/users")
        }
        
        const id = params.id
        const users = JSON.parse(localData)
        const user = users.find(u => u.id == id)

        if (!user) {
            navigate("/users")
        }

        formik.setValues(user)

    }, [])

    // init values
    const initValues = {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    // validation yup scheme
    const yupValidationScheme = Yup.object({
        firstName: Yup.string().max(50, "Максимум 50 символів"),
        lastName: Yup.string().max(50, "Максимум 50 символів"),
        email: Yup.string().required("Пошта обов'язкова").email("Невірний формат пошти"),
        password: Yup.string().required("Пароль обов'язковий").min(8, "Пароль повинен містити не менше 8 символів")
    })

    // formik
    const formik = useFormik({
        initialValues: initValues,
        onSubmit: formEditHandler,
        validationSchema: yupValidationScheme
    })


    return (
        <Box component="form" onSubmit={formik.handleSubmit} className="form-container">
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
                <Button type='submit' variant="contained" fullWidth>Register</Button>
            </Box>
        </Box>
    )
}

export default EditUserPage