
import {useState} from 'react';
import { data } from '../../data';
import { BiMinus } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import {FaChevronLeft} from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa';
import cart from '../../assets/icon-cart.svg';

const Display = () => {
const [product] = useState(data);
const [value, setValue] = useState(0);
const {mainImage} = product[value];
const [slide, setSlide] = useState(1);
const [amount, setAmount] = useState(0);


const nextSlide = () => {
  if (slide !== product.length) {
    setSlide(slide + 1);
  }else if (slide === product.length) {
    setSlide(1);
  }
}
const preSlide = () => {
  if (slide !== 1) {
    setSlide(slide - 1);
  }else if (slide === 1) {
    setSlide(product.length)
  }
}

const handleMinus = () => {
  setAmount (amount - 1);
  if (amount <= 0) {
    setAmount(0);
  }
}



  return (
      <section className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:pb-4 lg:mt-4 lg:items-center' >
        <article>
          <div className='lg:hidden'>
          {product.map((item, index) => (
            <div key={item.id} className={slide === index + 1 ? "relative" : "hidden" }>
            <img src={item.mainImage} alt="" className=' w-84 lg:rounded-2xl '></img>
            <ul>  
              <li><button onClick={preSlide} className='bg-white mx-2 rounded-full p-5 shadow absolute left-0 top-1/2  m-auto lg:hidden'><FaChevronLeft /></button></li>
              <li><button onClick={nextSlide} className='bg-white mx-2 rounded-full p-5 shadow absolute right-0 top-1/2 m-auto lg:hidden'><FaChevronRight /></button></li>
            </ul>
            </div>
            ))}
          </div>
          <div  className='hidden lg:block '>
          <img src={mainImage} alt="" className='lg:w-full lg:rounded-2xl '></img>
          </div>
          <ul className=' hidden lg:flex items-center flex-wrap justify-start gap-2'>
            {product.map((item, index) => (
              <li key={index} onClick={()=> {setValue(index)}} className={`${index === value && "border-2 border-orange-400 rounded-xl opacity-80" } border-2 mt-3 cursor-pointer overflow-hidden rounded-xl`}>
                <img src={item.thumbnail} alt="" className='w-20 rounded-xl'></img>
                </li> 
            ))}
             </ul>
        </article>
        <article className='flex flex-col mx-6 m-auto'>
          <h2 className='bg-slate-100 inline-block rounded w-1/2 mb-3 tracking-wide text-orange-400 px-2 font-bold md:text-lg lg:text-xs text-sm' >SNEAKER COMPANY</h2>
          <h1 className='text-3xl text-slate-800 font-bold mt-2 mb-3'>Fall Limited Sneaker</h1>
          <p className='text-slate-600 leading-relaxed mb-2 text-sm md:text-lg lg:text-xs font-thin'>This low profile sneakers are your perfect casual wear companion. Featuring a durable rubber 
            outer sole, they will withstand everything the weather can offer.
          </p>
          <div className='flex items-center justify-start gap-4 mt-2'>
          <p className='text-slate-800 font-bold text-lg'>$125.00</p>
          <p className='bg-orange-100 text-orange-400 text-xs font-light'>50%</p>
          </div>
          <p className='text-slate-400 text-xs md:text-sm '><s>$250.00</s></p>
          
          <div className='lg:flex flex-row gap-4'>
            <div className='flex w-full my-7 justify-between items-center gap-6 bg-slate-100 rounded-xl p-2 '>
            <BiMinus className='cursor-pointer' onClick={handleMinus} />
            <p className='text-slate-900 text-sm md:text-lg'>{amount}</p>
            <BiPlus className='cursor-pointer' onClick={() => {
              setAmount(amount + 1)
            }} />
            </div>
            <div className='flex p-2  md:text-lg my-7 w-full m-auto justify-center items-center gap-3  bg-orange-400 text-white  rounded-xl cursor-pointer hover:bg-orange-600 transition-all duration-200'>
              <img className='w-4 h-4 text-center text-white' src={cart} alt="cart-icon"></img>
            <button className=''>Add to cart</button>
            </div>
            </div>
        </article>
       
      </section>
  );
}

export default Display
