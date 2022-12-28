import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div>
        <h4>Navigation Pane</h4>
        <nav>
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/htmlsemantics">HTML Semantics</Link></li>
            <li><Link to="/cssselectors">CSS Selectors</Link></li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default Layout