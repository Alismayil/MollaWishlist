import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import HomePage from './page/homePage';
import WishlistPage from './page/wishlistPage';
import { WishlistProvider } from './context/wishlistContext/wishlistContext';
function App() {

  return (
    <>
      <BrowserRouter>
      <WishlistProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/wishlist' element={<WishlistPage/>} />
        </Routes>
      </WishlistProvider>
        
      </BrowserRouter>
    </>
  )
}

export default App
