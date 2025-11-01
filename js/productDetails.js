document.addEventListener("DOMContentLoaded", function () {
    const productDetailsContainer = document.querySelector(".item_detail");


    const products = [
        { 
            id: 1, 
            name: "iPhone 14", 
            category: "Phones", 
            price: 999, 
            oldPrice: 1099, 
            image: ["img/product/iphone14.jpg", "img/product/iphone14.jpg", "img/product/iphone14.jpg"], 
            description: "Latest Apple iPhone with A15 Bionic chip and stunning design.", 
            stock: 15, 
            sku: "IPH14-256GB"
        },
        { 
            id: 2, 
            name: "Samsung Galaxy S22", 
            category: "Phones", 
            price: 899, 
            oldPrice: 999, 
            image: ["img/product/samsung galaxy.jpg", "img/product/samsung galaxy.jpg"], 
            description: "Powerful Samsung phone with AMOLED display and high-end performance.", 
            stock: 20, 
            sku: "SGS22-128GB"
        },
        { 
            id: 3, 
            name: "iPad Pro", 
            category: "Tablets", 
            price: 1099, 
            oldPrice: 1200, 
            image: ["img/product/ipad.jpeg", "img/product/ipad.jpeg"], 
            description: "Apple's most powerful iPad with M1 chip and Liquid Retina display.", 
            stock: 10, 
            sku: "IPDPRO-M1"
        },       
        { 
            id: 4, 
            name: "Smart TV", 
            category: "TV", 
            price: 799, 
            oldPrice: 899, 
            image: ["img/product/smarttv.jpg", "img/product/smarttv.jpg"], 
            description: "Smart TV with 4K resolution and built-in streaming apps.", 
            stock: 8, 
            sku: "SMTV-4K65"
        },
        { 
            id: 5, 
            name: "Men's Jacket", 
            category: "Fashion", 
            price: 59, 
            oldPrice: 79, 
            image: ["img/product/jacket.jpeg", "img/product/jacket.jpeg"], 
            description: "Stylish men's jacket made from high-quality materials.", 
            stock: 30, 
            sku: "MJKT-BLK-L"
        },
        { 
            id: 6, 
            name: "Apple Watch", 
            category: "Watches", 
            price: 399, 
            oldPrice: 449, 
            image: ["img/product/applewatch.jpeg", "img/product/applewatch.jpeg"], 
            description: "Apple Watch with fitness tracking and seamless iPhone integration.", 
            stock: 25, 
            sku: "AW-7GPS"
        },
        { 
            id: 7, 
            name: "Dell Laptop", 
            category: "Electronics", 
            price: 1200, 
            oldPrice: 1300, 
            image: ["img/product/dell.jpg", "img/product/dell.jpg"], 
            description: "Powerful Dell laptop with high-speed performance and FHD display.", 
            stock: 12, 
            sku: "DL-LT15-I7"
        },
        { 
            id: 8, 
            name: "Sony Headphones", 
            category: "Electronics", 
            price: 250, 
            oldPrice: 300, 
            image: ["img/product/headphones.jpeg", "img/product/headphones.jpeg"], 
            description: "Noise-canceling Sony headphones with immersive sound quality.", 
            stock: 50, 
            sku: "SONY-H1000XM4"
        },
        { 
            id: 9, 
            name: "Samsung Tablet", 
            category: "Tablets", 
            price: 600, 
            oldPrice: 700, 
            image: ["img/product/samsungtablet.jpeg", "img/product/samsungtablet.jpeg"], 
            description: "Samsung tablet with high-resolution display and powerful processor.", 
            stock: 18, 
            sku: "SAMS-TAB-S7"
        },
        { 
            id: 10, 
            name: "Nike Sneakers", 
            category: "Fashion", 
            price: 120, 
            oldPrice: 150, 
            image: ["img/product/nike.webp", "img/product/nike.webp"], 
            description: "Comfortable Nike sneakers for sports and casual wear.", 
            stock: 40, 
            sku: "NIKE-RUN-42"
        },
        { 
            id: 11, 
            name: "Rolex Watch", 
            category: "Watches", 
            price: 5000, 
            oldPrice: 5500, 
            image: ["img/product/rolex.jpeg", "img/product/rolex.jpeg"], 
            description: "Luxury Rolex watch with elegant design and premium materials.", 
            stock: 5, 
            sku: "RLX-DAYT-SS"
        },
        { 
            id: 12, 
            name: "LG 4K TV", 
            category: "TV", 
            price: 950, 
            oldPrice: 1100, 
            image: ["img/product/lg4k.jpeg", "img/product/lg4k.jpeg"], 
            description: "LG 4K Smart TV with OLED display and stunning picture quality.", 
            stock: 7, 
            sku: "LGTV-4K65"
        }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
        const product = products.find((p) => p.id == productId);

        if (product) {
            document.getElementById("productName").textContent = product.name;
            document.getElementById("productPrice").textContent = `$${product.price}`;
            document.getElementById("oldPrice").textContent = `$${product.oldPrice}`;
            document.getElementById("productDescription").textContent = product.description;
            document.getElementById("sku").textContent = product.sku;
            document.getElementById("stockQuantity").textContent = product.stock;

            document.getElementById("bigImg").src = product.image[0];

            const smallImagesContainer = document.getElementById("smallImages");
            smallImagesContainer.innerHTML = ""; 

            product.image.forEach((imgSrc) => {
                const imgElement = document.createElement("img");
                imgElement.src = imgSrc;
                imgElement.alt = product.name;
                imgElement.onclick = function () {
                    document.getElementById("bigImg").src = imgSrc;
                };
                smallImagesContainer.appendChild(imgElement);
            });
        } else {
            productDetailsContainer.innerHTML = "<p>Product not found.</p>";
        }
    } else {
        productDetailsContainer.innerHTML = "<p>No product selected.</p>";
    }
});
