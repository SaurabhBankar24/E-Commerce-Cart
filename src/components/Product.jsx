import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {add,remove} from '../redux/slices/CartSlice'


const Product = ({ item }) => {

    const {cart} = useSelector((state)=>state);
    const dispatch=useDispatch();

    const addToCart=()=>{
        dispatch(add(item));
        toast.success("Item Added To Cart");
    }
 
    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.error("Item Removed From Cart");
    }


    return (
        <div className="flex flex-col items-center justify-between p-3 border-2 rounded-md my-1 gap-5 hover:scale-110 hover:shadow-slate-800 hover:shadow-xl transition duration-200 ease-in">

            <div>
            <p className=" text-gray-700 font-medium leading-4 text-sm">{item.title.slice(0, 17)}...</p>
            </div>

            <div>
            <img src={item.image} alt="img" width={80} />
            </div>
            
            <div>
            <p className="text-black leading-3 text-xs">{item.description.slice(0, 100)}...</p>
            </div>

            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row w-5/12 items-center">
                    <FaRupeeSign className="text-sm"/>
                    <span className="text-sm font-semibold">{item.price}</span>
                </div>
                <div>{
                    cart.some((i)=> i.id===item.id)?(
                    <button className="text-black text-xs font-semibold border-2 px-2 py-1 hover:bg-slate-800 hover:text-white transition duration-200 ease-in rounded-md" onClick={()=>removeFromCart(item.id)}>Remove From Cart</button>)
                    :(<button className="text-black text-xs border-2 px-2 py-1 hover:bg-slate-800 hover:text-white transition duration-200 ease-in rounded-md font-semibold" onClick={()=>addToCart(item)}>Add To Cart</button>)
                }
                </div>
                
                
            </div>

            {/* <p>
            {item.title}
            </p> */}

        </div>
    )
}

export default Product