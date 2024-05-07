export default function CheckoutLayout() {

    return (
        <main className="px-2 py-6 bg-sky-50">
            <h1 className="py-3 text-2xl font-semibold lg:text-3xl">Checkout</h1>
            <section className="grid gap-4 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-8 grid gap-5">
                    <section>
                        <div className="flex flex-col gap-4 px-4 py-5 bg-white rounded-lg">
                            <h3 className="text-lg font-medium">Delivery Address</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore esse reiciendis corrupti. Maxime inventore velit aut nemo repudiandae harum animi?</p>
                            <button className="px-2 py-2 text-white rounded-lg fokusStyleButton max-w-40 bg-primary hover:bg-darkprimary">Change address</button>
                        </div>
                    </section>
                    <section className="flex flex-col gap-5">
                        <div className="bg-white rounded-lg py-2 px-3 flex flex-col gap-2">
                            <div className="flex w-full gap-2">
                                <img className="w-24 h-24 rounded-lg" src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="image" />
                                <div className="flex w-full justify-between">
                                    <h5>Name product</h5>
                                    <div>
                                        <p>1 X Price</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full gap-2 flex-col">
                                <h5 className="font-medium">Delivery method</h5>
                                <div>
                                    <fieldset className="grid sm:grid-cols-2 gap-4">
                                        <legend className="sr-only">Delivery</legend>

                                        <div>
                                            <label
                                                htmlFor="DeliveryStandard"
                                                className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                            >
                                                <div>
                                                    <p className="text-gray-700">Standard</p>

                                                    <p className="mt-1 text-gray-900">Free</p>
                                                </div>

                                                <input
                                                    type="radio"
                                                    name="DeliveryOption"
                                                    value="DeliveryStandard"
                                                    id="DeliveryStandard"
                                                    className="size-5 border-gray-300 text-blue-500"
                                                    checked
                                                />
                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="DeliveryPriority"
                                                className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                            >
                                                <div>
                                                    <p className="text-gray-700">Next Day</p>

                                                    <p className="mt-1 text-gray-900">£9.99</p>
                                                </div>

                                                <input
                                                    type="radio"
                                                    name="DeliveryOption"
                                                    value="DeliveryPriority"
                                                    id="DeliveryPriority"
                                                    className="size-5 border-gray-300 text-blue-500"
                                                />
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="lg:col-span-4">
                    <div className="py-6 bg-white rounded-lg shadow-lg  61`1    1   1211``">
                        <h4 className="pb-4 font-medium lg:px-5">Order summary</h4>
                        <div className="px-5">
                            <div className="flex justify-between px-3 py-4">
                                <h6>Subtotal</h6>
                                <p>$64.00</p>
                            </div>
                            <div className="flex justify-between px-3 py-4">
                                <h6>Shipping</h6>
                                <p>$15.00</p>
                            </div>
                        </div>
                        <div className="px-5 border-t border-gray-100">
                            <div className="flex justify-between px-3 py-3">
                                <h6 className="font-medium">Total</h6>
                                <p>$79.00</p>
                            </div>
                        </div>
                        <div className="pt-4 px-5 border-t lg:px-5">
                            <button type="button" className='w-full text-white rounded-lg px-1.5 py-2.5 bg-primary fokusStyleButton'>Buy</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}