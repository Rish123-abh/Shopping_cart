import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { add, remove } from "../redux/slice/Cartslice";
function Product({ post }) {

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    function AddtoCart() {
        dispatch(add(post));
        toast.success("Added to Cart!");
    }
    function removefromcart() {
        dispatch(remove(post.id));
        toast.error("Removed from  Cart!");
    }
    return (
        <div className="flex flex-col items-center justify-between w-[250px]
        hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl background ">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
            </div>
            <div>
                {/* Only 10 words description me dikhane hai  to split karenge " " space ke basis pe then usme se phele 10 word nikalenge and unko join karenge beech me space deke  */}
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className="h-[180px]">
                <img src={post.image} className="h-full w-full " />
            </div>
        <div className="flex justify-center  ">

            <div className="flex justify-between gap-12 items-center w-full mt-5">
                <div>
                    <p className="text-green-600 font-semibold">${post.price}</p>
                </div>
            </div>
            <div>
                {
                    cart.some((p) => p.id === post.id) ? <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                 text-[12px] p-1 px-3 uppercase 
                 hover:bg-gray-700
                 hover:text-white transition duration-300 ease-in" onClick={removefromcart}>Remove Item</button>
                        : <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                 text-[12px] p-1 px-3 uppercase 
                 hover:bg-gray-700
                 hover:text-white transition duration-300 ease-in" onClick={AddtoCart}>Add to Cart</button>
                }
            </div>
        </div>
        </div>
    )
}
export default Product;