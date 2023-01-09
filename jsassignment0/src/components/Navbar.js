import React from 'react'
import {Link, useMatch, useResolvedPath} from "react-router-dom"

function Navbar() {
  return (
    <div className = "Nav">
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/aboutme">About Me</CustomLink>
            <CustomLink to="/education">Education</CustomLink>
            <CustomLink to="/interests">Interests</CustomLink>
            <CustomLink to="/programming">Programming</CustomLink>
            <CustomLink to="/hobbies">Hobbies</CustomLink>
        </ul>
    </div>
  )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}

export default Navbar