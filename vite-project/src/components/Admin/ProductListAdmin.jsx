import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function ProductListAdmin() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const { data, error } = await supabase.from('Products').select();
        if (error) {
            console.error('Error fetching products:', error.message);
        } else {
            setProducts(data);
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
            const { error } = await supabase.from('Products').delete().eq('id', id);
            if (error) {
                console.error('Error deleting product:', error.message);
            } else {
                setProducts(products.filter(product => product.id !== id));
            }
        }
    }

    const handleEdit = async (id) => {
        // Fetch the specific product data for editing
        const { data, error } = await supabase.from('Products').select().eq('id', id);
        if (error) {
            console.error('Error fetching product for editing:', error.message);
        } else {
            // Implement edit functionality here
            // You can set the data to a form for editing
            console.log('Product data for editing:', data);
        }
    }

    return (
        <div className="flex flex-col py-10 overflow-x-auto">
            <h1 className="font-medium text-2xl sm:text-3xl mx-auto mb-6">List Products</h1>
            <div className="overflow-x-auto mx-auto">
                <div className="overflow-x-auto mx-auto text-center">
                    <table className="table-auto border-collapse ">
                        <thead>
                            <tr>
                                <th className="px-3 border">No</th>
                                <th className="px-3 border">Product Name</th>
                                <th className="px-3 border">Product Description</th>
                                <th className="px-3 border">Product Details</th>
                                <th className="px-3 border">Product Image</th>
                                <th className="px-3 border">Product Sizey</th>
                                <th className="px-3 border">Product Stock</th>
                                <th className="px-3 border">Product Price</th>
                                <th className="px-3 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr className="border border-collapse" key={product.id}>
                                    <td className="px-2 py-1 border">{index + 1}</td>
                                    <td className="px-2 py-1 border">{product.productName}</td>
                                    <td className="px-2 py-1 border w-56">{product.productName}</td>
                                    <td className="px-2 py-1 border w-56">{product.productDetails}</td>
                                    <td className="flex px-2 py-1 justify-center">
                                        <img
                                            src={product.productImage}
                                            alt={product.productName}
                                            className="h-28 w-24 object-cover object-center rounded-lg"
                                        />
                                    </td>
                                    <td className="px-2 py-1 border">{product.productSize}</td>
                                    <td className="px-2 py-1 border">{product.productStock}</td>
                                    <td className="px-2 py-1 border">{product.productPrice}</td>
                                    <td className="px-2 py-1 border">
                                        <div className='flex gap-2 justify-between'>
                                            <button type="button" onClick={() => handleEdit(product.id)} className="px-3 py-2 fokusStyleButton rounded-lg bg-blue-500 hover:bg-blue-600">Edit</button>
                                            <button type="button" onClick={() => handleDelete(product.id)} className="px-3 py-2 fokusStyleButton rounded-lg bg-red-500 hover:bg-red-600">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

