import React from 'react'
import Table from 'react-bootstrap/Table';

export const Users = ({users}) => {
    const UserRow = (user,index) =>{
    return (
        <tr key = {index}>
            <td>{index+1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.zipcode}</td>
        </tr>
    )
    }

const UserTable = users.map((users,index)=>UserRow(users,index))
const tableHeader = <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Zipcode</th>
                            </tr>
                        </thead>
    
    return (
        <Table>
            <tbody>
                {UserTable}
            </tbody>
        </Table>
    )
}
