export default function ProductListAdmin() {
    return (
        <div className="flex flex-col py-10 overflow-x-auto">
            <h1 className="font-medium text-2xl sm:text-3xl mx-auto mb-6">List Products</h1>
            <div className="overflow-x-auto mx-auto">
                <div className="overflow-x-auto mx-auto text-center">
                <table className="table-auto border-collapse border">
                    <thead>
                        <tr>
                            <th className="px-3">No</th>
                            <th className="px-3">Product Name</th>
                            <th className="px-3">Product Description</th>
                            <th className="px-3">Product Details</th>
                            <th className="px-3">Product Image</th>
                            <th className="px-3">Product Sizey</th>
                            <th className="px-3">Product Stock</th>
                            <th className="px-3">Product Price</th>
                            <th className="px-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            
        </div>
    )
}