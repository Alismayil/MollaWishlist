import React, { useEffect, useState } from 'react'
import './home.scss'
import { LiaBinocularsSolid } from "react-icons/lia";
import { MdAddShoppingCart } from "react-icons/md";
import { useWishlist } from '../../context/wishlistContext/wishlistContext';

function HomePage() {
  // -------------------card--------------------
  const [cards, setCards] = useState([])
  const [heart, setHeart] = useState([])

  const baseUrl = 'http://localhost:3000/product'

  const {wishlist,setWishlist}=useWishlist()
  
  function handleAddWishlist(x) {
        const WishlistIndex = wishlist.findIndex(item => item.id === x.id)
        if (WishlistIndex === -1) {
          setWishlist([...wishlist, { ...x }])
  const heartIcon=heart.includes(x.id)
          if (heartIcon) {
            setHeart(heart.filter(id=>id!==x.id))
          }
          else{
            setHeart([...heart, x.id])
          }
        }
      }
     
    
   
    

//   // ---------------------wishlist-----------------------
//   const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [])

//   function handleAddWishlist(x) {
//     const WishlistIndex = wishlist.findIndex(item => item.id === x.id)
//     if (WishlistIndex === -1) {
//       setWishlist([...wishlist, { ...x }])
//     }
//   }
//   function handelWishlistClear(x) {
//     setWishlist([])
//   }
//   function handelWishlistRemove(id) {
//     setWishlist(wishlist.filter(x => x.id !== id))

//   }

// useEffect(() => {
//  localStorage.setItem("wishlist",JSON.stringify(wishlist))
// }, [wishlist])



  const fetchData = async () => {
    try {
      const res = await fetch(`${baseUrl}`)
      const jsonData = await res.json()
      setCards(jsonData)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='mainRightBox'>
      <div className='cardsBox' >
        {
          cards && cards.map((item) => (
            <div key={item.id} className='card'>
              <>
                <div className='cardImg'>
                  <div className='cardHover'>
                    <div className='cardHoverUp'>
                      <div className='HoverBtns'>
                        <div className='wishlistBtn' onClick={() => handleAddWishlist(item)}>
                          <div className='wishlistBackBox'  >
                            <p>Add to wishlist</p>
                          </div>
                          <i class={`${heart.includes(item.id) ? "fa-solid" : "fa-regular"} fa-heart`} ></i>
                        </div>
                        <div className='otherBtn'>
                          <LiaBinocularsSolid />
                        </div>
                        <div className='otherBtn'>
                          <i class="fa-solid fa-code-compare"></i>
                        </div>
                      </div>
                    </div>
                    <div className='cardHoverDown'>
                      <MdAddShoppingCart />
                      <p>Add To Card</p>
                    </div>
                  </div>
                  <div className='status'>
                    {item.status && <p className={item.status === 'New' ? 'new' : item.status === 'Top' ? 'top' : 'stock'}>{item.status}</p>}
                  </div>
                  <img src={item.image} alt="" />

                </div>
                <div className='cardText'>
                  <p className='category'>{item.category}</p>
                  <p className='name'>{item.name}</p>
                  <p className='price'>${item.price}</p>
                </div>
              </>


            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomePage