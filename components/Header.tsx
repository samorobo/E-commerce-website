
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
        <div className="relative group">
        <button
          className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent"
        >
          <svg
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
          </svg>
        </button>
        {cartItems.length > 0 && ( // Check if cart has items
          <span className="font-semibold ml-4">
            Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
          </span>
        )}
      </div>
      </div>
    </header>
  );
}

export default Header;