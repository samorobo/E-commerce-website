"use client"

import {createContext, useContext, useState} from 'react'

export type CartItem = {
    product: Product;
    quantity: number;
};

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
} 

// | undefined>(undefined);

const CartContext = createContext<CartContextType| undefined>(undefined);

export function CartProvider({ children }: {children: React.ReactNode }){
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) =>{

const existingItem = cartItems.find(item => item.product.id === product.id);
if (existingItem) {
    setCartItems(prevCart => prevCart.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
} else {
    setCartItems(prevCart => [...prevCart, {product, quantity: 1}])
}
 }

 return (
    <CartContext.Provider value={{ cartItems, addToCart}}>
        {children}
    </CartContext.Provider>
 )
}


// export function useCart(){
//     const context = useContext(CartContext);
//     if (context === undefined){
//         throw new Error('useCart must be within a CartProvider')
//     }}


export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be within a CartProvider');
    }
    return context;
  }
