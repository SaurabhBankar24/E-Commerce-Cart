import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cartitem from '../components/Cartitem'
import { useEffect, useState } from 'react'
import { FaRupeeSign } from "react-icons/fa";


const Cart = () => {

    const { cart } = useSelector((state) => state)
    const[totalAmount,setTotalAmount]=useState(0)

    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart])
    return (
        <div>
            {
                cart.length > 0 ?
                    (
                        <div className="w-8/12 flex flex-row justify-between mx-auto  gap-1 my-[100px]">

                            <div className='flex flex-col w-6/12 gap-4 '>
                                {
                                    cart.map((item) => {
                                        return (
                                            <Cartitem item={item} itemId={item.id}/>
                                        )
                                    })
                                }
                            </div>

                            <div className=' w-5/12 min-h-[30vh] flex flex-col place-content-between gap-6 items-left px-2 my-5'>
                                <div className=''>
                                    <p className='text-green-700 text-xs font-bold'>YOUR CART</p>
                                    <p className='text-green-700 text-xl font-bold'>SUMMARY</p>
                                </div>


                                <div className='flex flex-col gap-1'>
                                    <p className='text-slate-500 font-bold'>Toatal Items :
                                    <span>{cart.length}</span></p>
                                    <div className='flex flex-row w-full justify-start items-center'>
                                    <p className='text-slate-500 font-bold'>Toatal Amount :</p>
                                    <FaRupeeSign className="text-sm text-slate-500"/>
                                    <p className='font-bold text-slate-500'>{totalAmount}</p>
                                    </div>
                                    
                                    <Link to="/">
                                        <button className='bg-green-700 text-white w-full rounded-lg font-semibold py-1'>Checkout Now</button>
                                    </Link>
                                </div>

                            </div>

                        </div>) :
                    (
                        <div className='flex flex-col justify-center items-center h-screen gap-2'>
                            <p className='text-xl'>No Item Added</p>
                            <Link to="/">
                                <button className='bg-green-600 px-3 py-1 rounded-md text-white text-xl border border-black'>Shop Now</button>
                            </Link>
                        </div>
                    )
            }
        </div>

    )
}

export default Cart