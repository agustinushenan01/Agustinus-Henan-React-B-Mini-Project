import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function ProductListAdmin() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleEdit = async (id) => {
        // Fetch the specific product data for editing
        const { data, error } = await supabase.from('Products').select().eq('id', id);
        if (error) {
            console.error('Error fetching product for editing:', error.message);
        } else {
            // Set editing product data to state
            setEditingProduct(data[0]);
        }
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        // Update the product data in the database
        const { data, error } = await supabase.from('Products').update(editingProduct).eq('id', editingProduct.id);
        if (error) {
            console.error('Error updating product:', error.message);
        } else {
            console.log('Product updated successfully:', data);
            // Reset editing product state after successful update
            setEditingProduct(null);
            // Refresh the product list to reflect the changes
            getProducts();
        }
    }

    const handleImageChange = async (id, e) => {
        const file = e.target.files[0];
        const imageName = `${id}.jpg`;

        // Upload gambar baru
        const { data, error } = await supabase.storage.from('Productimage').upload(imageName, file);

        if (error) {
            console.error('Error uploading image:', error);
        } else {
            // Bangun URL berdasarkan URL penyimpanan Supabase dan nama file
            const imageUrl = `${supabase.storageUrl}/object/public/Productimage/${imageName}`;
            console.log('Image URL:', imageUrl);

            // Update URL gambar di basis data
            const { data: updatedData, error: updateError } = await supabase.from('Products').update({ productImage: imageUrl }).eq('id', id);

            if (updateError) {
                console.error('Error updating image URL:', updateError);
            } else {
                console.log('Image URL updated successfully:', updatedData);
                console.table(data);
                // Perbarui daftar produk setelah berhasil mengubah URL gambar
                getProducts();
            }
        }
    };


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

            {/* Edit Product Form */}
            {editingProduct && (
                <div className="bg-white drop-shadow rounded-lg px-3 py-4">
                    <h1 className="text-center font-bold text-2xl lg:text-3xl mb-5">Edit Product</h1>
                    <form className="flex flex-col gap-5 mt-10" onSubmit={handleEditSubmit}>
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
                                    value={editingProduct.productName}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, productName: e.target.value })}
                                    className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Product Name"
                                />
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
                                    value={editingProduct.productDescription}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, productDescription: e.target.value })}
                                    className="mt-2 px-2 py-2 w-full rounded-lg border-gray-200 align-top drop-shadow sm:text-sm focus:outline-none focus:ring focus:ring-primary"
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
                                    value={editingProduct.productDetails}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, productDetails: e.target.value })}
                                    required
                                    className="mt-2 px-2 py-2 w-full rounded-lg border-gray-200 align-top drop-shadow sm:text-sm focus:outline-none focus:ring focus:ring-primary"
                                    rows="4"
                                    placeholder="Input your product Details here..."
                                ></textarea>
                            </div>
                        </div>
                        {/* End Product Details */}

                        {/* Product Image */}
                        <div>
                            <input type="file" accept='' onChange={handleImageChange} className="imageofproduct rounded-lg border border-primary w-full sm:max-w-52 text-primary focus:outline-none focus:ring focus:ring-primary" />
                        </div>
                        {/* End Product Image */}

                        {/* Product Size */}
                        <div className="flex w-full flex-col gap-1.5 sm:w-56">
                            <label
                                htmlFor="productSize"
                                className="relative block rounded-lg border cursor-pointer border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="number"
                                    id="productSize"
                                    value={editingProduct.productSize}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, productSize: e.target.value })}
                                    required
                                    className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Product Size"
                                />
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
                                    value={editingProduct.productStock}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, productStock: e.target.value })}
                                    required
                                    className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Product Stock"
                                />
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
                                    value={editingProduct.productPrice}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, productPrice: e.target.value })}
                                    required
                                    className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Product Price"
                                />
                            </label>
                        </div>
                        {/* End Product Price */}

                        {/* Button */}
                        <div className="w-full px-3 pb-3">
                            <button type="submit" className="bg-primary hover:bg-darkprimary rounded-lg text-white font-medium focusStyleButton w-full px-3 py-2 fokusStyleButton">Update</button>
                        </div>
                        {/* End button */}
                    </form>
                </div>
            )}
            {/* End Edit Product Form */}
        </div>
    );
}

