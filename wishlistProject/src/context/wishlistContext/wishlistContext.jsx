import { createContext, useContext, useEffect, useState } from "react";



const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [])

useEffect(() => {
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
   }, [wishlist])

    const data = {
        wishlist,
        setWishlist
    }
    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>

    )

}
export const useWishlist = () => useContext(WishlistContext)