import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import usersJson from './users.json'

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
                <TableCell align="center">FirstName</TableCell>
                <TableCell align="center">LastName</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {users.map(user => (
                  <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">{user.id}</TableCell>
                    <TableCell align="center">{user.firstName}</TableCell>
                    <TableCell align="center">{user.lastName}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.password}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box style={{"width": "50%", "margin": "auto"}}>
          <Link to="create">
            <Button style={{"margin": "10px"}} variant='contained' fullWidth>Create</Button>
          </Link>
        </Box>
      </Box>
    )
}

export default UsersListPage