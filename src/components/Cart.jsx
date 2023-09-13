import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div>
            <h1 className="font-bold text-4xl"> Cart Items - {cartItems.length}</h1>
            <FoodItem {...cartItems[0]} />
        </div>
    )
}

export default Cart;