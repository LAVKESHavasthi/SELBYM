const products = [
    {
        id: "Laxmi_Bhog_Atta_10Kg",
        name: "Laxmi Bhog Atta 10Kg",
        mrp: 740,
        price: 9,
        image: "Laxmi Bhog Atta 10Kg.jpg",
        verified: true
    },
    {
        id: "Vicks_BabyRub_10ml",
        name: "Vicks BabyRub 10ml",
        mrp: 85,
        price: 39,
        image: "Vicks BabyRub 10ml.jpg",
        verified: true
    },
    {
        id: 3,
        name: "Product 3",
        mrp: 300,
        price: 80,
        image: "product3.jpg",
        verified: true
    },
    {
        id: 4,
        name: "Product 4",
        mrp: 150,
        price: 140,
        image: "product4.jpg",
        verified: false
    },
    {
        id: 5,
        name: "Product 5",
        mrp: 1200,
        price: 1100,
        image: "product5.jpg",
        verified: true
    }
];

/**
 * Function to get product details by ID
 * @param {string} productId
 * @returns {object | null} Product details or null if not found
 */
function getProductDetails(productId) {
    return products.find(product => product.id === productId) || null;
}