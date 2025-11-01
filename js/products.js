document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products_dev");
    const categoryFilters = document.querySelectorAll(".filter input[type='checkbox']");
    const searchInput = document.getElementById("searchInput");


    const products = [
        { id: 1, name: "iPhone 14", category: "Phones", price: 999, image: "img/product/iphone14.jpg" },
        { id: 2, name: "Samsung Galaxy S22", category: "Phones", price: 899, image: "img/product/samsung galaxy.jpg" },
        { id: 3, name: "iPad Pro", category: "Tablets", price: 1099, image: "img/product/ipad.jpeg" },
        { id: 4, name: "Smart TV", category: "TV", price: 799, image: "img/product/smarttv.jpg" },
        { id: 5, name: "Men's Jacket", category: "Fashion", price: 59, image: "img/product/jacket.jpeg" },
        { id: 6, name: "Apple Watch", category: "Watches", price: 399, image: "img/product/applewatch.jpeg" },
        { id: 7, name: "Dell Laptop", category: "Electronics", price: 1200, image: "img/product/dell.jpg" },
        { id: 8, name: "Sony Headphones", category: "Electronics", price: 250, image: "img/product/headphones.jpeg" },
        { id: 9, name: "Samsung Tablet", category: "Tablets", price: 600, image: "img/product/samsungtablet.jpeg" },
        { id: 10, name: "Nike Sneakers", category: "Fashion", price: 120, image: "img/product/nike.webp" },
        { id: 11, name: "Rolex Watch", category: "Watches", price: 5000, image: "img/product/rolex.jpeg" },
        { id: 12, name: "LG 4K TV", category: "TV", price: 950, image: "img/product/lg4k.jpeg" },
    ];

    function displayProducts(filteredProducts) {
        productsContainer.innerHTML = ""; 

        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = "<p>No products found.</p>";
            return;
        }

        filteredProducts.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p class="price">$${product.price}</p>
                <button class="add_to_cart">Add to Cart</button>
            `;

            productDiv.addEventListener("click", function () {
                window.location.href = `product_details.html?id=${product.id}`;
            });

            productsContainer.appendChild(productDiv);
        });
    }

    function filterProducts() {
        let selectedCategories = Array.from(categoryFilters)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.parentElement.textContent.trim());


            

        let searchText = searchInput.value.trim().toLowerCase();

        let filteredProducts = products.filter((product) => {
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const matchesSearch = product.name.toLowerCase().includes(searchText) || product.category.toLowerCase().includes(searchText);
            return matchesCategory && matchesSearch;
        });

        displayProducts(filteredProducts);
    }

    categoryFilters.forEach((checkbox) => {
        checkbox.addEventListener("change", filterProducts);
    });

    searchInput.addEventListener("input", filterProducts);

    displayProducts(products); 
});



