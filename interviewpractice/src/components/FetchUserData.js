import React from 'react'
import {useState, useEffect} from 'react'

function FetchUserData() {

    const url = "https://jsonplaceholder.typicode.com/users/1"
    const [userData, setUserData] = useState([])

    const getUserData = async() =>
    {
        const response = await fetch(url)
        const jsonData = await response.json()
        setUserData(jsonData)
    }

    React.useEffect(() =>{
        getUserData()
    }, [])

  return (
    <>
        <div>
            <h1>Fetch User Data using RESTAPI</h1>
            <p>Given an url, that has an array of information "keys and values". Retrieve it and display it.</p>
            <h2>User Data</h2>
            <p><strong>Name: </strong>{userData.name || "Need to Populate Here"}</p>
            <p><strong>Username: </strong>{userData.username || "Need to Populate Here"}</p>
            <p><strong>E-mail: </strong>{userData.email || "Need to Populate Here"}</p>
            <p><strong>Phone: </strong>{userData.phone || "Need to Populate Here"}</p>
            <p><strong>Website: </strong>{userData.website || "Need to Populate Here"}</p>
        </div>
    </>
  )
}

export default FetchUserData