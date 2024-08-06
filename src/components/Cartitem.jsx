
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { remove } from '../redux/slices/CartSlice'
import { FaRupeeSign } from "react-icons/fa";




const Cartitem = ({ item, itemId }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item Removed from Cart")
    }
    return (
        <div className="flex flex-col w-full  gap-2 border border-l-slate-500 rounded-md shadow-sm shadow-slate-400 hover:border-l-slate-600 hover:scale-105 transition duration-200 ease-in hover:shadow-2xl hover:shadow-slate-900">
            <div className="flex justify-center font-bold text-slate-500 mx-2">
                <p>{item.title}</p>
            </div>
            <div className="flex flex-row gap-7 mx-2">
                <img src={item.image} alt="img" width={100} />
                <p className="leading-5">{item.description.slice(0, 150)}...</p>
            </div>


            <div className="flex flex-row justify-between mx-5 mb-2">
                <div className="font-bold flex flex-row items-center mx-2 ">
                    <FaRupeeSign className="text-sm" />
                    <span>{item.price}</span>
                </div>
                <MdOutlineDeleteOutline className="text-xl hover:bg-red-500 rounded-md hover:scale-125 transition duration-200 ease-in" onClick={() => removeFromCart(item.id)} />
            </div>

        </div>
    )
}

export default Cartitem