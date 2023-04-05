import React from 'react';
import { useState } from 'react';
import logo from '../../assets/logo.svg';
import cart from '../../assets/icon-cart.svg';
import avatar from '../../assets/image-avatar.png';
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'



const Navigation = () => {
const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <header  className='flex items-center justify-between p-4 border-b text-slate-600 border-slate-400 max-w-5xl m-auto' >
   <div className='flex items-center justify-start gap-6'>
    <ul className='flex justify-center gap-6'>
  {!toggleMenu && <li  className='lg:hidden cursor-pointer'> <button onClick={() => setToggleMenu(true)}><AiOutlineMenu/></button></li>}
{toggleMenu && <li  className='lg:hidden cursor-pointer close'> <button onClick={() => setToggleMenu(false)}><AiOutlineClose /></button></li>}
<li><img  className='w-22 h-4 text-center' src = {logo} alt="logo"></img></li>
    </ul>
   
   
    <nav className={toggleMenu && "drop" }>
     
      <ul className=''>
        <li><a>Collection</a></li>
        <li><a>Men</a></li>
        <li><a>Women</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </nav>
   </div>
   <div className='flex items-center justify-end gap-4'>
    <button>
    <img className='w-4' src= {cart} alt="cart" />
    </button>
    <img  className='w-10 border-2 border-orange-400 rounded-full'src= {avatar} alt="avatar" />
    </div>
    </header>
    
   
  );
}

export default Navigation
