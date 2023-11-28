import React from 'react'
import { useWishlist } from '../../context/wishlistContext/wishlistContext'
import './wishlist.scss'
import { FaHeartBroken } from "react-icons/fa";

function WishlistPage() {
  const {wishlist,setWishlist}=useWishlist()
  
  function handelWishlistClear(x) {
    setWishlist([])
  }
  function handelWishlistRemove(id) {
    setWishlist(wishlist.filter(x => x.id !== id))

  }
  return (
   <div className='wishlist'>
     {wishlist.length===0 ? <div className='EmptyClass'><FaHeartBroken className='EmptyIcon' />
     <p>Empty</p></div> : ''}
          {
            wishlist && wishlist.map((item) => (
           
              <div className='wishlistBox' key={item.id}>
                <div className='wishlistImg'>
                  <img src={item.image} alt="" />
                </div>
                <div className='wishlistTextBox'>
                  <p className='category'>{item.category}</p>
                  <p className='name'>{item.name}</p>
                  <p className='price'>${item.price}</p>
                  <button onClick={() => handelWishlistRemove(item.id)}>
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
              
            ))
          }
        <button onClick={() => handelWishlistClear()} className='clearBtn'>
          <i class="fa-solid fa-trash"></i>
        </button>
        

        </div>
        
  )
}

export default WishlistPage