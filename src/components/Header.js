import React, { useState } from 'react'
import {FaShoppingCart} from "react-icons/fa"
import Order from './Order';

const showOrders=(props) =>{
  let sum =0;
  props.orders.forEach(el => sum+= Number.parseFloat(el.price));
  return(<div>
    {props.orders.map(el=>(
      <Order onDelete={props.onDelete} key={el.id} item={el}/>
    ))} 
    <p className='sum'>Total check: {new Intl.NumberFormat().format(sum)}$</p>
    </div>)
}

const showNothing = () =>{
  return(<div className='empty'>
    <h3>No goods in basket</h3>
  </div>)
}

export default function Header(props) {
  let[cartOpen, setCartOpen] = useState(false);
  return (
    <header>
        <div>
            <span className='logo'>House Stuff</span>
            <ul className='nav'>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Cabinet</li>
            </ul>
            <FaShoppingCart onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            {cartOpen && (<div className='shop-cart-list'>
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>)}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
