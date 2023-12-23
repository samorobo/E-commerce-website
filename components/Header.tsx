
 "use client"
 import { useAuth } from '@/contexts/AuthContext';
import Image from "next/image";
import Link from "next/link";
import Login from './Login'
import { useState, useEffect } from 'react'

import { useCart, CartItem} from "./CartContext"; // Import useCart hoo


function Header() {

  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  // const [clientCartItems, setClientCartItems] = useState<CartItem[]>([]);
  
  // useEffect(() => {
  //   setClientCartItems(cartItems);
  // }, [cartItems]);


  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <Image
          src="https://i.ibb.co/McdzmYG/logo-removebg-preview-new.png"
          width={70}
          height={70}
          alt="Logo"
        />
      </Link>

      <div className="flex items-center space-x-2.5 text-sm">
        <Link href="/Login">
        <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Log in
        </button>
        </Link>
        <button className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent">
        Sign up
        </button>
        <div className=" flex items-center space-x-2.5 text-sm relative group ">
        <button
          className="button border-0 bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4h16M4 10h16M4 16h16M8 4v16M12 4v16M16 4v16"
            />
          </svg> */}
          
           {cartItems.length > 0 && ( // Check if cart has items
          <span className="font-semibold ml-4">



<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>


           ({cartItems.reduce((total, item) => total + item.quantity, 0)})
        </span>
      )}



        </button>
        {/* {cartItems.length > 0 && ( // Check if cart has items
          <span className="font-semibold ml-4">
            Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
          </span>
        )} */}
      </div>
      </div>
    </header>
  );
}

export default Header;