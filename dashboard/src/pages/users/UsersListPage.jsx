import { Table, Avatar, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import usersJson from './users.json'
import EditIcon from '@mui/icons-material/Edit';
import { defaultAvatarUrl } from '../../settings/urls';

const UsersListPage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
      const json = localStorage.getItem("users")

      if (!json) {
        localStorage.setItem("users", JSON.stringify(usersJson))
        setUsers(usersJson)
      } else {
        const data = JSON.parse(json)
        setUsers(data)
      }
    }, [])

    return (
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="center">First name</TableCell>
                <TableCell align="center">Last name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Password</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {users.map(user => (
                  <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">{user.id}</TableCell>
                    <TableCell align="center">{
                        <Avatar sx={{margin: "auto"}} alt="Remy Sharp" src={user.image ? user.image : defaultAvatarUrl} /> 
                    }</TableCell>
                    <TableCell align="center">{user.firstName}</TableCell>
                    <TableCell align="center">{user.lastName}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.password}</TableCell>
                    <TableCell align="center">
                      <Link to={`user/${user.id}`}>
                        <EditIcon></EditIcon>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box style={{"width": "50%", "margin": "auto"}}>
          <Link to="user">
            <Button style={{"margin": "10px"}} variant='contained' fullWidth>Create</Button>
          </Link>
        </Box>
      </Box>
    )
}

export default UsersListPage