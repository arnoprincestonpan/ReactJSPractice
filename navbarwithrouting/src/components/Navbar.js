import React from 'react'
import '../styles.css'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

function Navbar() {

    // const path = window.location.pathname

  return (
    <nav className="nav">
        <Link to="/" className="site-title">
            Site Home
        </Link>
        <ul>
            <CustomLink to="/pricing">Pricing</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}){
    // useResultPath() allows a relative or actual path and combines with the current route
    const resolvedPath = useResolvedPath(to)
    // useMatch() lets us compare whatever path we are on, to the whatever we want "to"
    // end: true means that the entire path must match, or else you'll be directed to the path as long as it includes the String
    const isActive = useMatch({path : resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}

export default Navbar