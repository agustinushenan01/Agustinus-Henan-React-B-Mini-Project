import { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { Link } from "react-router-dom";

export default function LandingPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        const { data } = await supabase.from("Products").select();
        setProducts(data);
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 z-0">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">
                    {products.map((product) => (
                        <Link key={product.id} to={`product-detail/${product.id}`} className="group bg-white drop-shadow rounded-lg pb-2 hover:drop-shadow-lg z-0">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-1 xl:aspect-w-1">
                                <img
                                    src={product.productImage}
                                    alt={product.productName}
                                    className="h-48 w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <div className="px-2">
                                <h3 className="mt-4 text-sm text-gray-700">{product.productName}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">${product.productPrice}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
