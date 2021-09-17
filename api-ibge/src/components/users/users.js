import React, { useState, useEffect } from "react";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(async () => {
        const response = await fetch('http://localhost:4000/users');
        const data = await response.json();

        setUsers(data);
    }, [])

    var name = users.map(user => {
        return user.name
    })
    console.log(name);
    return (
        <>
            <center>
                {users.map(user => (
                    <ul key={user.id}>
                        <li >{user.name}</li>
                        <li >{user.surname}</li>
                        <li >{user.birthdate}</li>
                        <li >{user.city}</li>
                        <li >{user.state}</li>
                    </ul>
                ))}
                {/* <button onClick={getUsers}>Listar Todos</button> */}
            </center>
        </>
    )
}

export default Users;