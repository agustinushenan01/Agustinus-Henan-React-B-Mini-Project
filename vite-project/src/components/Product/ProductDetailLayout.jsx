import { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../services/cartActions'

export default function ProductDetailLayout() {
    const [productData, setProductData] = useState(null)
    const { id } = useParams();

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); // Dispatch action to add product to Redux store
    };


    useEffect(() => {
        async function fetchProductData() {
            const { data, error } = await supabase.from('Products').select().eq('id', id).single();
            if (error) {
                console.error('Error fetching product data:', error);
            } else {
                setProductData(data);
            }
        }
        fetchProductData();
    }, [id])


    return (
        <main className='w-full px-2 py-4'>
            {productData && (
                <div className="bg-white drop-shadow rounded-lg">
                    <div className="lg:pt-6 flex flex-col lg:flex-row">
                        {/* Image gallery */}
                        <div className=" sm:px-6">
                            <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
                                <img
                                    src={productData.productImage}
                                    alt={productData.productName}
                                    className="max-h-72 max-w-72 rounded-lg object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Product info */}
                        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productData.productName}</h1>
                            </div>

                            {/* Options */}
                            <div className="mt-4 lg:row-span-3 lg:mt-0">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl tracking-tight text-gray-900">${productData.productPrice}</p>

                                <aside className="mt-10">
                                    {/* Sizes */}
                                    <div className="mt-10">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                        </div>
                                        <p className="mt-3">{productData.productSize}</p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => handleAddToCart(productData)}
                                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-darkprimary focus:outline-none active:shadow-[1px_1px_0px_1px_rgba(0,0,0,0.3)] shadow-[5px_5px_0px_1px_rgba(0,0,0,0.3)] selection:bg-gray-700 selection:text-white"
                                    >
                                        Add to cart
                                    </button>
                                </aside>
                            </div>

                            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                {/* Description and details */}
                                <div>
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900">{productData.productDescription}</p>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                    <div className="mt-4 space-y-6">
                                        <p className="text-sm text-gray-600">{productData.productDetails}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
