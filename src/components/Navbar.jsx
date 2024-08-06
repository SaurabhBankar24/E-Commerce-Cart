
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../assets/shopLogo.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Navbar = () => {

    const { cart } = useSelector((state) => state)

    return (
        <div className="bg-slate-900 fixed top-0 w-full">
            <div className="w-8/12 flex mx-auto justify-between items-center py-2 ">
                {/* image logo */}
                <div>
                    <Link to="/" className="flex flex-row gap-1 justify-between items-center">
                        <img src={logo} alt="logo" width={50} className="rounded-lg" />
                        <p className="text-white text-2xl">Shopify</p>
                    </Link>
                </div>

                {/* Home and Cart */}
                <div className="text-white text-2xl flex gap-4 items-center relative justify-center group">
                    <div>
                        <Link to="/">
                            <p >Home</p>
                            <div className="w-full h-1 group-hover:bg-green-600 transition duration-200 ease-in rounded-md"></div>
                        </Link>
                    </div>

                    <div className="flex absolute -top-1 -right-1 bg-green-500 rounded-full text-sm w-5  justify-center items-center  animate-bounce transition duration-200 ease-in">
                        {cart.length}
                    </div>
                    <div className="">
                        <Link to="/cart">
                            <AiOutlineShoppingCart className="text-3xl" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Navbar