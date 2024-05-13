// CartLayout.js
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { removeFromCart } from '../../services/cartActions';
import "./ProductDetailLayout"
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { increaseQuantity, decreaseQuantity, removeIfZeroQuantity } from '../../services/cartActions';

export default function CartLayout() {
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart?.items) || [];  // Get items from cart slice
    const total = useSelector(state => state.cart?.total) || 0;  // Get total from cart slice
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    // Inside your component
    const handleIncreaseQuantity = (productId) => {
        dispatch(increaseQuantity(productId));
    };

    const handleDecreaseQuantity = (productId, quantity) => {
        if (quantity > 1) {
            dispatch(decreaseQuantity(productId));
        } else {
            dispatch(removeIfZeroQuantity(productId));
        }
    };

    const handleBuy = () => {
        // Check if cart is empty
        if (cartItems.length === 0) {
            alert("Your cart is empty. Please add some products before proceeding to checkout.");
        } else {
            // Redirect user to checkout page
            navigate('/checkout');
        }
    };



    return (
        <main className="px-2 py-6 bg-sky-50 sm:px-4">
            <section>
                <h1 className="mb-4 text-2xl font-semibold md:text-3xl">Shopping Cart</h1>
                <section className="grid gap-4 lg:grid-cols-12 lg:gap-12">
                    <section className="grid gap-4 lg:col-span-8">
                        {cartItems.length === 0 ? (
                            <div className="flex justify-center py-6 text-xl font-semibold text-gray-600">
                                Your cart is empty.
                            </div>
                        ) : (cartItems.map(item => (
                            <div className="flex px-3 bg-white rounded-lg drop-shadow h-auto w-full" key={item.id}>
                                {/* <input type="checkbox" name="" id="" className="mr-3" /> */}
                                <img
                                    className="w-24 h-24 mr-2 rounded-lg"
                                    src={item.productImage}
                                    alt={item.productName}
                                />
                                <div className="flex flex-col">
                                    <h3>{item.productName.slice(0, 22)}</h3>
                                    <p>${item.productPrice}</p>
                                    <div className="flex flex-row">
                                        <div className='grid mr-2 place-content-start'>
                                            {/* <label htmlFor="Quantity" className="sr-only"> Quantity </label> */}

                                            <div className="flex items-center border border-gray-200 rounded">
                                                <button type="button" className="leading-10 text-gray-600 transition hover:opacity-75" onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>
                                                    <MinusIcon className="w-6 h-6" aria-hidden="true" />
                                                </button>
                                                <input type="number" name="" id="Quantity" value={item.quantity} className="w-16 h-10 text-center border-transparent" readOnly />
                                                <button type="button" className="leading-10 text-gray-600 transition hover:opacity-75" onClick={() => handleIncreaseQuantity(item.id)}>
                                                    <PlusIcon className="w-6 h-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                        <button type="button" onClick={() => handleRemoveFromCart(item.id)}>
                                            <TrashIcon className="w-6 h-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )))}

                    </section>
                    <section className="lg:col-span-4">
                        <div className="px-3 py-6 bg-white rounded-lg shadow-lg lg:px-5">
                            <h4 className="pb-4 font-medium">Order summary</h4>
                            <div className="flex justify-between py-4 mb-6 border-gray-200 border-y">
                                <h6>Subtotal</h6>
                                <p>${total.toFixed(2)}</p> {/* Display total price */}
                            </div>
                            <button type="button" className='w-full text-white rounded-lg px-1.5 py-2.5 bg-primary fokusStyleButton' onClick={handleBuy}>Buy</button>
                        </div>
                    </section>
                </section>
            </section>
        </main>
    );
}
