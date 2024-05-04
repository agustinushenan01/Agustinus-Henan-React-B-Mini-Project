// import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <main className="grid selection:bg-gray-700 selection:text-white px-3 sm:grid-cols-6 lg:grid-cols-12 w-full py-4 sm:py-6 md:py-7 lg:py-10 bg-darkprimary h-[70dvh]">
            <aside className=" sm:col-span-1 lg:col-span-3"></aside>
            <article className="sm:col-span-4 lg:col-span-6 text-center flex flex-col items-center justify-center">
                <h1 className="text-white mb-4 font-medium text-2xl lg:text-3xl">Page not found</h1>
                <p className="text-xl lg:text-2xl text-gray-400 mb-3">We couldn&apos;t find the page you are looking for. You can return to our homepage.</p>
                <button className="text-white bg-lightprimary focus:outline-none active:shadow-[5px_5px_0px_1px_rgba(0,0,0,0.3)] shadow-[10px_10px_0px_1px_rgba(0,0,0,0.3)] hover:bg-primary px-4 py-3 rounded-lg flex items-center justify-center">
                    <i className="fi fi-rr-paper-plane-top w-4 h-4 m-0 mr-3"></i>
                    <span>Go Back Home</span>
                </button>
            </article>
            <aside className=" sm::col-span-1 lg:col-span-3"></aside>
        </main>
    )
}