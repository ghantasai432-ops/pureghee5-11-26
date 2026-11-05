// Product data for the Vijayawada Pure Ghee Store
// Automatically updated by Amrutha Ghee Store Server
const products = [
    {
        "id": "amrutha-cow-ghee",
        "name": "AMRUTHA COW GHEE",
        "subtitle": "Pure Tradition. Rich Taste. Natural Goodness.",
        "description": "Traditionally crafted from pure cow milk with rich aroma and authentic golden texture.",
        "benefits": [],
        "image": "amrutha-cow-ghee.jpg",
        "features": [
            "100% Pure Cow Ghee",
            "Traditional Preparation",
            "Rich Aroma & Taste",
            "No Added Preservatives",
            "Natural Goodness",
            "Premium Quality"
        ],
        "sizes": [
            {
                "size": "250ml",
                "price": 180
            },
            {
                "size": "500ml",
                "price": 340
            },
            {
                "size": "1 Litre",
                "price": 650
            },
            {
                "size": "2 Litre",
                "price": 1250
            }
        ],
        "defaultSizeIndex": 1
    },
    {
        "id": "amrutha-buffalo-ghee",
        "name": "AMRUTHA BUFFALO GHEE",
        "subtitle": "Pure & Natural — Rich Taste, Traditional Goodness",
        "description": "Traditionally prepared from rich buffalo milk using traditional methods for authentic flavor.",
        "benefits": [],
        "image": "amrutha-buffalo-ghee.jpg",
        "features": [
            "100% Pure & Natural",
            "Traditional Bilona Method",
            "Rich Aroma",
            "Great Taste",
            "Premium Quality",
            "Traditionally Crafted"
        ],
        "sizes": [
            {
                "size": "250ml",
                "price": 180
            },
            {
                "size": "500ml",
                "price": 340
            },
            {
                "size": "1 Litre",
                "price": 650
            },
            {
                "size": "2 Litre",
                "price": 1250
            }
        ],
        "defaultSizeIndex": 1
    }
];

// Export to window object for browser access
if (typeof window !== 'undefined') {
    window.gheeProducts = products;
}
if (typeof module !== 'undefined') {
    module.exports = products;
}
