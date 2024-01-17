export const PRODUCT_CATEGORIES = [
    {
        label: 'UI Kits',
        value: 'ui_kits',
        // TODO add image alt property
        featured: [
            {
                name: 'Editor picks',
                href: `/products?category=ui_kits`,
                imageSrc: '/nav/ui-kits/mixed.jpg',
                description: 'lorem ipsum .... '
            },
            {
                name: 'New Arrivals',
                href: '/products?category=ui_kits&sort=desc',
                imageSrc: '/nav/ui-kits/blue.jpg',
                description: 'lorem ipsum .... '
            },
            {
                name: 'Bestsellers',
                href: '/products?category=ui_kits',
                imageSrc: '/nav/ui-kits/purple.jpg',
                description: 'lorem ipsum .... '
            },
        ],
    },
    {
        label: 'Icons',
        value: 'icons',
        featured: [
            {
                name: 'Favorite Icon Picks',
                href: `/products?category=icons`,
                imageSrc: '/nav/icons/picks.jpg',
                description: 'lorem ipsum .... '
            },
            {
                name: 'New Arrivals',
                href: '/products?category=icons&sort=desc',
                imageSrc: '/nav/icons/new.jpg',
                description: 'lorem ipsum .... '
            },
            {
                name: 'Bestselling Icons',
                href: '/products?category=icons',
                imageSrc: '/nav/icons/bestsellers.jpg',
                description: 'lorem ipsum .... '
            },
        ],
    },
]
