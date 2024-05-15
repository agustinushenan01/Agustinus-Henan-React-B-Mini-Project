import { Link, useLocation } from 'react-router-dom';

export default function AdminPanel() {
    const location = useLocation();

    return (
        <main className="mt-4">
            <div>
                <div className="sm:hidden">
                    <label htmlFor="Tab" className="sr-only">Tab</label>

                    <select id="Tab" className="w-full rounded-md border-gray-200">
                        <option>Add Products</option>
                        <option>List Products</option>
                    </select>
                </div>

                <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex gap-6 px-3" aria-label="Tabs">
                            <Link
                                to="/admin-product"
                                className={`${location.pathname === '/admin-product' ?  'border-primary text-primary hover:text-lightprimary hover:border-lightprimary' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'} shrink-0 border-b-2  px-1 pb-4 text-sm font-medium`}
                            >
                                Add Products
                            </Link>

                            <Link
                                to="/list-product"
                                className={`${location.pathname === '/list-product' ?  'border-primary text-primary hover:text-lightprimary hover:border-lightprimary' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'} shrink-0 border-b-2  px-1 pb-4 text-sm font-medium`}
                            >
                                List Products
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </main>
    )
}