const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Box',
        href: '#',
        price: '$55',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
        imageAlt: 'Box',
    },
    {
        id: 6,
        name: 'Cutter',
        href: '#',
        price: '$15',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
        imageAlt: 'Cutter',
    },
    {
        id: 7,
        name: 'Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-07.jpg',
        imageAlt: 'Bottle',
    },
    {
        id: 8,
        name: 'Book',
        href: '#',
        price: '$3',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-08.jpg',
        imageAlt: 'Book',
    },
    {
        id: 9,
        name: 'Key chain',
        href: '#',
        price: '$9',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-09.jpg',
        imageAlt: 'Key chain',
    },
    // More products...
]

export default function LandingPage() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">
                    {products.map((products) => (
                        <a key={products.id} href={products.href} className="group bg-white drop-shadow rounded-lg pb-2 hover:drop-shadow-lg">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={products.imageSrc}
                                    alt={products.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <div className="px-2">
                                <h3 className="mt-4 text-sm text-gray-700">{products.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{products.price}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}