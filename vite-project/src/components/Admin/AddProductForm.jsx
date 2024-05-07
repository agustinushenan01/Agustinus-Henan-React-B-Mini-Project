import "../../assets/css/inputFileUpload.css"

export default function AddProductForm() {
    return (
        <main className="py-5 px-2 flex flex-col mx-auto w-full sm:w-4/5 lg:w-3/4">
            <div className="bg-white drop-shadow rounded-lg px-3 py-4">
                <h1 className="text-center font-bold text-2xl lg:text-3xl mb-5">Create Product</h1>
                <form action="" method="post" className="flex flex-col gap-5 mt-10">
                    {/* Product Name */}
                    <div className="flex w-full flex-col gap-1.5 sm:w-56">
                        <label
                            htmlFor="productName"
                            className="relative block rounded-lg border cursor-pointer border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="text"
                                id="productName"
                                required
                                className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="productName"
                            />

                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Product Name
                            </span>
                        </label>
                    </div>
                    {/* End Product Name */}

                    {/* Product Description */}
                    <div className="flex flex-col gap-1.5">
                        <div>
                            <label htmlFor="productDescription" className="block cursor-pointer text-sm font-medium text-gray-700"> Product Description </label>

                            <textarea
                                required
                                id="productDescription"
                                className="mt-2 px-2 py-2 w-full rounded-lg border-gray-200 align-top drop-shadow sm:text-sm"
                                rows="4"
                                placeholder="Input your product description here..."
                            ></textarea>
                        </div>
                    </div>
                    {/* End Product Description */}

                    {/* Product Details */}
                    <div className="flex flex-col gap-1.5">
                        <div>
                            <label htmlFor="productDetails" className="block cursor-pointer text-sm font-medium text-gray-700"> Product Details </label>

                            <textarea
                                id="productDetails"
                                required
                                className="mt-2 px-2 py-2 w-full rounded-lg border-gray-200 align-top drop-shadow sm:text-sm"
                                rows="4"
                                placeholder="Input your product Details here..."
                            ></textarea>
                        </div>
                    </div>
                    {/* End Product Details */}

                    {/* Product image */}
                    <div>
                        <input type="file" className="imageofproduct rounded-lg border border-primary w-full sm:max-w-52 text-primary focus:outline-none focus:ring focus:ring-primary" />
                    </div>
                    {/* End Product image */}

                    {/* Product Size */}
                    <div className="flex w-full flex-col gap-1.5 sm:w-56">
                        <label
                            htmlFor="productName"
                            className="relative block rounded-lg border cursor-pointer border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="text"
                                id="productSize"
                                required
                                className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="productSize"
                            />

                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Product Size
                            </span>
                        </label>
                    </div>
                    {/* End product size */}

                    {/* Product stock */}
                    <div className="flex w-full flex-col gap-1.5 sm:w-56">
                        <label
                            htmlFor="productStock"
                            className="relative block rounded-lg border cursor-pointer border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="number"
                                id="productStock"
                                required
                                className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="productStock"
                            />

                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Product Stock
                            </span>
                        </label>
                    </div>
                    {/* End product stock */}

                    {/* Product Price */}
                    <div className="flex w-full flex-col gap-1.5 sm:w-56">
                        <label
                            htmlFor="productPrice"
                            className="relative block rounded-lg border cursor-pointer border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="number"
                                id="productPrice"
                                required
                                className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="productPrice"
                            />

                            <span
                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                            >
                                Product Price
                            </span>
                        </label>
                    </div>
                    {/* End Product Price */}

                    {/* Button */}
                    <div className="w-full px-3">
                        <button type="submit" className="bg-primary rounded-lg text-white font-medium fokusStyleButton w-full px-3 py-2">Submit</button>
                    </div>
                    {/* End button */}

                </form>
            </div>
        </main>
    )
}