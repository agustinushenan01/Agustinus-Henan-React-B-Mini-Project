import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import '../../assets/css/inputFileUpload.css'

export default function AddProductForm() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productDetails, setProductDetails] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productStock, setProductStock] = useState(0);
    const [productPrice, setProductPrice] = useState(0);
    const [productImage, setProductImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProductImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = '';
        let uuid = uuidv4()
        if (productImage) {
            const imageName = `${uuid}.jpg`;
            const { data: file, error } = await supabase.storage.from('Productimage').upload(imageName, productImage)

            if (error) {
                console.error('Error uploading image:', error);
            } else {
                // Bangun URL berdasarkan URL penyimpanan Supabase dan nama file
                imageUrl = `${supabase.storageUrl}/object/public/Productimage/${imageName}`;
                console.log(file);
                console.log('Image URL:', imageUrl);

                // Buat objek produk yang akan disimpan ke basis data
                const productData = {
                    productName,
                    productDescription,
                    productDetails,
                    productSize,
                    productStock,
                    productPrice,
                    productImage: imageUrl // Pastikan URL gambar disertakan di sini
                };

                // Simpan produk ke dalam basis data
                const { data, error } = await supabase.from('Products').insert([productData]);

                if (error) {
                    console.error('Error adding product:', error);
                } else {
                    console.log('Product added successfully:', data);
                    // Reset form fields after successful submission
                    setProductName('');
                    setProductDescription('');
                    setProductDetails('');
                    setProductSize('');
                    setProductStock(''); // Reset ke nilai awal
                    setProductPrice(''); // Reset ke nilai awal
                    setProductImage(null);
                }
            }
        }
    };



    return (
        <main className="py-5 px-2 flex flex-col mx-auto w-full sm:w-4/5 lg:w-3/4">
            <div className="bg-white drop-shadow rounded-lg px-3 py-4">
                <h1 className="text-center font-bold text-2xl lg:text-3xl mb-5">Create Product</h1>
                <form className="flex flex-col gap-5 mt-10" onSubmit={handleSubmit}>
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
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="Product Name"
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
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
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
                                value={productDetails}
                                onChange={(e) => setProductDetails(e.target.value)}
                                required
                                className="mt-2 px-2 py-2 w-full rounded-lg border-gray-200 align-top drop-shadow sm:text-sm focus:outline-none focus:ring focus:ring-primary"
                                rows="4"
                                placeholder="Input your product Details here..."
                            ></textarea>
                        </div>
                    </div>
                    {/* End Product Details */}

                    {/* Product image */}
                    <div>
                        <input type="file" accept='' onChange={handleImageChange} className="imageofproduct rounded-lg border border-primary w-full sm:max-w-52 text-primary focus:outline-none focus:ring focus:ring-primary" />
                    </div>
                    {/* End Product image */}

                    {/* Product Size */}
                    <div className="flex w-full flex-col gap-1.5 sm:w-56">
                        <label
                            htmlFor="productSize"
                            className="relative block rounded-lg border cursor-pointer border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="number"
                                id="productSize"
                                value={productSize}
                                onChange={(e) => setProductSize(e.target.value)}
                                required
                                className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="Product Size"
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
                                value={productStock}
                                onChange={(e) => setProductStock(e.target.value)}
                                required
                                className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="Product Stock"
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
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                                required
                                className="peer px-2 py-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="Product Price"
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
                    <div className="w-full px-3 pb-3">
                        <button type="submit" className="bg-primary hover:bg-darkprimary rounded-lg text-white font-medium focusStyleButton w-full px-3 py-2 fokusStyleButton">Submit</button>
                    </div>
                    {/* End button */}

                </form>
            </div>
        </main>
    )
}
