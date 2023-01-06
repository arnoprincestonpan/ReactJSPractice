import React from 'react'

function DisplayArray() {

    const users = [
        {id: 1, name: "John Doe"},
        {id: 2, name: "Jane Doe"},
        {id: 3, name: "James Bond"},
        {id: 4, name: "Mary Jane"}
    ]

    const usersItems = users.map((user) =>
        <li key={user.id}>{user.name}</li>
    )

  return (
    <>
        <div>
            <h1>Display Array</h1>
            <p>An Array with User Data is given. Display them.</p>
            <h3>Usernames below:</h3>
            <ul>
                {usersItems}
            </ul>
        </div>
    </>
  )
}

export default DisplayArray