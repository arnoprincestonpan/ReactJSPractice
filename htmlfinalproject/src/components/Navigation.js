import React from 'react'
import { Outlet, Link, useMatch, useResolvedPath } from 'react-router-dom'
import './Navigation.css'
import Home from '../images/home.png'
import Restaurants from '../images/restaurant.png'
import Groceries from '../images/groceries.png'
import Contact from '../images/contact.png'
import AboutMe from '../images/aboutme.png'
import LoremIpsum from '../images/loremipsum.png'
import Gallery from '../images/gallery.png'

function Navigation() {
  const categories = [
    { id: 1, link: "/", description: "Home Page", image: Home },
    { id: 2, link: "/restaurants", description: "Restaurants", image: Restaurants },
    { id: 3, link: "/cookingathome", description: "Cooking at Home", image: Groceries },
    { id: 4, link: "/contact", description: "Contact", image: Contact },
    { id: 5, link: "/aboutme", description: "About Me", image: AboutMe },
    { id: 6, link: "/loremipsum", description: "Lorem Ipsum", image: LoremIpsum },
    { id: 7, link: "/gallery", description: "Gallery", image: Gallery },
  ]

  const categoriesItems = categories.map((category) =>
    <li key={category.id}>
      <img src={category.image} />
      <Link style={{ marginLeft: "10px" }} to={category.link}>{category.description}</Link>
    </li>
  )

  return (
    <>
      <div className="Nav">
        <h4>Navigation</h4>
        <nav>
          <ul>
            {categoriesItems}
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation