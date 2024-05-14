import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function CheckoutLayout() {
    const [deliveryOptions, setDeliveryOptions] = useState({});
    const cartItems = useSelector(state => state.cart?.items) || [];
    const total = useSelector(state => state.cart?.total) || 0;

    // Fungsi untuk menampilkan harga produk dengan format mata uang
    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`;
    };

    // Fungsi untuk menghitung biaya pengiriman total berdasarkan metode pengiriman yang dipilih untuk setiap produk
    const calculateShipping = () => {
        let shippingTotal = 0;
        cartItems.forEach(item => {
            const deliveryOption = deliveryOptions[item.id];
            if (deliveryOption === 'DeliveryPriority') {
                shippingTotal += 9.99;
            } else {
                // Default: free shipping
                shippingTotal += 0;
            }
        });
        return shippingTotal;
    };

    // Fungsi untuk menghitung total biaya, termasuk subtotal dan biaya pengiriman
    const calculateTotal = () => {
        const subtotal = total;
        const shipping = calculateShipping();
        return subtotal + shipping;
    };

    // Fungsi untuk memperbarui metode pengiriman yang dipilih untuk produk tertentu
    const handleDeliveryOptionChange = (productId, option) => {
        setDeliveryOptions(prevOptions => ({
            ...prevOptions,
            [productId]: option,
        }));
    };

    function sendMessageToTelegram() {
        // let message = ""; // Inisialisasi pesan dengan string kosong
        let message = "Halo, saya tertarik dengan product anda yang ini\n";
    
        // Loop through cart items to generate message template
        cartItems.forEach(item => {
            const deliveryOption = deliveryOptions[item.id] === 'DeliveryPriority' ? 'Next Day' : 'Standard';
            message += `Nama product: ${item.productName}\nJumlah product: ${item.quantity} X ${formatPrice(item.productPrice)}\nDelivery method: ${deliveryOption}\n\n`;
        });
        message += `Total harga: ${formatPrice(calculateTotal())}`;
    
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
    
        // Token bot Telegram Anda
        const token = '6990070685:AAG7oLKEGAasyp_VbCr7KGIFUjpFqmqtjjs';
        // ID obrolan Telegram Anda
        const chatId = '1995405819';
    
        // Construct Telegram API URL
        const telegramURL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodedMessage}`;
    
        // Kirim pesan ke Telegram menggunakan HTTP POST request
        fetch(telegramURL, { method: 'POST' })
            .then(response => {
                if (response.ok) {
                    console.log('Pesan berhasil dikirim ke Telegram.');
                } else {
                    console.error('Gagal mengirim pesan ke Telegram.');
                }
            })
            .catch(error => console.error('Terjadi kesalahan:', error));
    }
    
    


    return (
        <main className="px-2 py-6 bg-sky-50">
            <h1 className="py-3 text-2xl font-semibold lg:text-3xl">Checkout</h1>
            <section className="grid gap-4 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-8 grid gap-5">
                    {cartItems.map(item => (
                        <section key={item.id}>
                            <div className="bg-white rounded-lg py-2 px-3 flex flex-col gap-2">
                                <div className="flex w-full gap-2">
                                    <img className="w-24 h-24 rounded-lg" src={item.productImage} alt="Product" />
                                    <div className="flex w-full justify-between">
                                        <h5>{item.productName}</h5>
                                        <div>
                                            <p>{item.quantity} X {formatPrice(item.productPrice)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full gap-2 flex-col">
                                    <h5 className="font-medium">Delivery method</h5>
                                    <div>
                                        <fieldset className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label
                                                    htmlFor={`DeliveryStandard-${item.id}`}
                                                    className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200"
                                                >
                                                    <div>
                                                        <p className="text-gray-700">Standard</p>
                                                        <p className="mt-1 text-gray-900">Free</p>
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        name={`DeliveryOption-${item.id}`}
                                                        value="DeliveryStandard"
                                                        id={`DeliveryStandard-${item.id}`}
                                                        className="size-5 border-gray-300 text-blue-500"
                                                        checked={deliveryOptions[item.id] === 'DeliveryStandard'}
                                                        onChange={() => handleDeliveryOptionChange(item.id, 'DeliveryStandard')}
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor={`DeliveryPriority-${item.id}`}
                                                    className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200"
                                                >
                                                    <div>
                                                        <p className="text-gray-700">Next Day</p>
                                                        <p className="mt-1 text-gray-900">$9.99</p>
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        name={`DeliveryOption-${item.id}`}
                                                        value="DeliveryPriority"
                                                        id={`DeliveryPriority-${item.id}`}
                                                        className="size-5 border-gray-300 text-blue-500"
                                                        checked={deliveryOptions[item.id] === 'DeliveryPriority'}
                                                        onChange={() => handleDeliveryOptionChange(item.id, 'DeliveryPriority')}
                                                    />
                                                </label>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
                <div className="lg:col-span-4">
                    <div className="py-6 bg-white rounded-lg shadow-lg">
                        <h4 className="pb-4 font-medium lg:px-5">Order summary</h4>
                        <div className="px-5">
                            <div className="flex justify-between px-3 py-4">
                                <h6>Subtotal</h6>
                                <p>{formatPrice(total)}</p>
                            </div>
                            <div className="flex justify-between px-3 py-4">
                                <h6>Shipping</h6>
                                <p>{formatPrice(calculateShipping())}</p>
                            </div>
                        </div>
                        <div className="px-5 border-t border-gray-100">
                            <div className="flex justify-between px-3 py-3">
                                <h6 className="font-medium">Total</h6>
                                <p>{formatPrice(calculateTotal())}</p>
                            </div>
                        </div>
                        <div className="pt-4 px-5 border-t">
                            <button onClick={sendMessageToTelegram} type="button" className='w-full fokusStyleButton hover:bg-darkprimary text-white rounded-lg px-1.5 py-2.5 bg-primary focus:outline-none focus:ring-2 focus:ring-primary'>Buy</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}