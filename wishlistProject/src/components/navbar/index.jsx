import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to={"/"} className='linkHome'>Home</Link>
        <Link to={"/wishlist"} className='linkWishlist'>Wishlist</Link>
    </div>
  )
}

export default Navbar