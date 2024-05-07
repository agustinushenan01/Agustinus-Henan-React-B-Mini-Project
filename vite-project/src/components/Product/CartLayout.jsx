import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function CartLayout() {
    const p = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis accusantium, inventore labore distinctio culpa officia soluta corrupti quis architecto aut cupiditate, explicabo consequatur iure veniam incidunt quae totam vero?"
    const text22 = p.slice(0, 22)
    return (
        <main className="px-2 py-6 bg-sky-50 sm:px-4">
            <section>
                <h1 className="mb-4 text-2xl font-semibold md:text-3xl">Shopping Cart</h1>
                <section className="grid gap-4 lg:grid-cols-12 lg:gap-12">
                    <section className="grid gap-4 lg:col-span-8">
                        <div className="flex px-3 bg-white rounded-lg drop-shadow">
                            <input type="checkbox" name="" id="" className="mr-3" />
                            <img className="w-24 h-24 mr-2 rounded-lg" src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." />
                            <div className="flex flex-col">
                                <h3>{text22}</h3>
                                <p>$3</p>
                                <div className="flex flex-row">
                                    <div className='grid mr-2 place-content-start'>
                                        {/* <label htmlFor="Quantity" className="sr-only"> Quantity </label> */}

                                        <div className="flex items-center border border-gray-200 rounded">
                                            <button type="button" className="leading-10 text-gray-600 transition hover:opacity-75">
                                                <MinusIcon className="w-6 h-6" aria-hidden="true" />
                                            </button>

                                            <input type="number" name="" id="Quantity" className="w-16 h-10 text-center border-transparent" />

                                            <button type="button" className="leading-10 text-gray-600 transition hover:opacity-75">
                                                <PlusIcon className="w-6 h-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                    <button type="button">
                                        <TrashIcon className="w-6 h-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-3 bg-white rounded-lg drop-shadow">
                            <input type="checkbox" name="" id="" className="mr-3" />
                            <img className="w-24 h-24 mr-2 rounded-lg" src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." />
                            <div className="flex flex-col">
                                <h3>{text22}</h3>
                                <p>$3</p>
                                <div className="flex flex-row">
                                    <div className='grid mr-2 place-content-start'>
                                        {/* <label htmlFor="Quantity" className="sr-only"> Quantity </label> */}

                                        <div className="flex items-center border border-gray-200 rounded">
                                            <button type="button" className="leading-10 text-gray-600 transition hover:opacity-75">
                                                <MinusIcon className="w-6 h-6" aria-hidden="true" />
                                            </button>

                                            <input type="number" name="" id="Quantity" className="w-16 h-10 text-center border-transparent" />

                                            <button type="button" className="leading-10 text-gray-600 transition hover:opacity-75">
                                                <PlusIcon className="w-6 h-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                    <button type="button">
                                        <TrashIcon className="w-6 h-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-3 bg-white rounded-lg drop-shadow">
                            <input type="checkbox" name="" id="" className="mr-3" />
                            <img className="w-24 h-24 mr-2 rounded-lg" src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." />
                            <div className="flex flex-col">
                                <h3>{text22}</h3>
                                <p>$3</p>
                                <div className="flex flex-row">
                                    <div className='grid mr-2 place-content-start'>
                                        {/* <label htmlFor="Quantity" className="sr-only"> Quantity </label> */}

                                        <div className="flex items-center border border-gray-200 rounded">
                                            <button type="button" className="leading-10 text-gray-600 transition hover:opacity-75">
                                                <MinusIcon className="w-6 h-6" aria-hidden="true" />
                                            </button>

                                            <input type="number" name="" id="Quantity" className="w-16 h-10 text-center border-transparent" />

                                            <button type="button" className="leading-10 text-gray-600 transition hover:opacity-75">
                                                <PlusIcon className="w-6 h-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                    <button type="button">
                                        <TrashIcon className="w-6 h-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="lg:col-span-4">
                        <div className="px-3 py-6 bg-white rounded-lg shadow-lg lg:px-5">
                            <h4 className="pb-4 font-medium">Order summary</h4>
                            <div className="flex justify-between py-4 mb-6 border-gray-200 border-y">
                                <h6>Subtotal</h6>
                                <p>$64.00</p>
                            </div>
                            <button type="button" className='w-full text-white rounded-lg px-1.5 py-2.5 bg-primary fokusStyleButton'>Buy</button>
                        </div>
                    </section>
                </section>
            </section>
        </main>
    )
}