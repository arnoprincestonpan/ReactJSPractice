import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <nav>
            <h4>Website Navigation</h4>
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/favoriteartistsandsongs">Favourite Artists & Songs</Link>
                </li>
                <li>
                    <Link to="/favouritemovies">Favourite Movies</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default Layout