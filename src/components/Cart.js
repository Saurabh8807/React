import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../redux/cartSlice"
import Options from "./Options";
const Cart = () => {
  const dispatch = useDispatch()
    const cartItems = useSelector((store)=>store.cart.items)
    const clearCart2 =()=>{
      dispatch(clearCart())
    }
    // console.log(cartItems)
  return <>
    <div className="w-1/2 mx-auto">
    <button onClick={clearCart2} className="bg-cyan-400 p-4 m-4"> Clear Cart </button>
    {cartItems.length==0 && <> Cart is Empty</>}
    <Options resto={cartItems}/>
    
    </div>
  </>;
};

export default Cart;
