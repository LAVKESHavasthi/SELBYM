document.addEventListener("DOMContentLoaded", () => {

    const allProducts = [
       { 
        "title": "Laxmi Bhog Atta 10Kg", 
        "originalPrice": 440, 
        "discountedPrice": 409,
        "image": "Laxmi Bhog Atta 10Kg.jpg", 
        "category": "Groceries & Staples" 
      },
         { 
        "title": "Saras Ghee 1L", 
        "originalPrice": 548, 
        "discountedPrice": 515,
        "image": "Saras Ghee 1L.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Chambal Fresh Refined Soyabean Oil 1L", 
        "originalPrice": 180, 
        "discountedPrice": 139,
        "image": "Chambal Fresh Refined Soyabean Oil 1L.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Fortune Refined Soyabean Oil 1L", 
        "originalPrice": 165, 
        "discountedPrice": 151,
        "image": "Fortune Refined Soyabean Oil 1L.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "India Gate Tibar Basmati Rice 1Kg", 
        "originalPrice": 177, 
        "discountedPrice": 141,
        "image": "India Gate Tibar Basmati Rice 1Kg.jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "India Gate Feast Rozzana Basmati Rice 5Kg", 
        "originalPrice": 605, 
        "discountedPrice": 565,
        "image": "India Gate Feast Rozzana Basmati Rice 5Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Quality Fresh Jaggery (Natural Gud) 500g", 
        "originalPrice": 65, 
        "discountedPrice": 45,
        "image": "Quality Fresh Jaggery (Natural Gud) 500g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Dabur Honey Jar 500gm", 
        "originalPrice": 250, 
        "discountedPrice": 219,
        "image": "Dabur Honey Jar 500gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Engine Brand Kachi Ghani Mustard Oil 1L", 
        "originalPrice": 210, 
        "discountedPrice": 189,
        "image": "Engine Brand Kachi Ghani Mustard Oil 1L.jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "Fortune Kachi Ghani Mustard Oil 1L", 
        "originalPrice": 170, 
        "discountedPrice": 165,
        "image": "Fortune Kachi Ghani Mustard Oil 1L.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Parampara Refined Soyabean Oil 1L (900g)", 
        "originalPrice": 135, 
        "discountedPrice": 133,
        "image": "Parampara Refined Soyabean Oil 1L (900g).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Saras Ghee 500ml", 
        "originalPrice": 275, 
        "discountedPrice": 269,
        "image": "Saras Ghee 500ml.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Lal Qilla Basmati Rice 1Kg", 
        "originalPrice": 280, 
        "discountedPrice": 159,
        "image": "Lal Qilla Basmati Rice 1Kg.jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "Laxmi Bhog Atta 5Kg", 
        "originalPrice": 255, 
        "discountedPrice": 209,
        "image": "Laxmi Bhog Atta 5Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Laxmi Bhog Sooji 1Kg", 
        "originalPrice": 66, 
        "discountedPrice": 53,
        "image": "Laxmi Bhog Sooji 1Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Laxmi Bhog Besan 1Kg", 
        "originalPrice": 165, 
        "discountedPrice": 119,
        "image": "Laxmi Bhog Besan 1Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Laxmi Bhog Maida 1Kg", 
        "originalPrice": 66, 
        "discountedPrice": 51,
        "image": "Laxmi Bhog Maida 1Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Laxmi Bhog Dalia 1Kg", 
        "originalPrice": 74, 
        "discountedPrice": 49,
        "image": "Laxmi Bhog Dalia 1Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      
      
      
      { 
        "title": "MamyPoko Pants Standard Crisscross Sheet (L) 4pc", 
        "originalPrice": 56, 
        "discountedPrice": 52,
        "image": "MamyPoko Pants Standard Crisscross Sheet (L) 4pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Pampers Baby Pants With Aloe Vera Small (S) 4-8kg 40 Pants", 
        "originalPrice": 399, 
        "discountedPrice": 379,
        "image": "Pampers Baby Pants With Aloe Vera Small (S) 4-8kg 40 Pants.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Pampers Baby Pants New Baby (NB) Upto 5kg 10 Pants", 
        "originalPrice": 99, 
        "discountedPrice": 99,
        "image": "Pampers Baby Pants New Baby (NB) Upto 5kg 10 Pants.jpg", 
        "category": "Baby Care" 
      },
      
      { 
        "title": "Pampers Baby Pants With Aloe Vera Medium (M) 7-12kg 8 Pants", 
        "originalPrice": 99, 
        "discountedPrice": 94,
        "image": "Pampers Baby Pants With Aloe Vera Medium (M) 7-12kg 8 Pants.jpg", 
        "category": "Baby Care" 
      },
       
      { 
        "title": "MamyPoko Pants Extra Absorb Large (L) 4 pc", 
        "originalPrice": 79, 
        "discountedPrice": 67,
        "image": "MamyPoko Pants Extra Absorb Large (L) 4 pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Pampers New Xtra Large - 6 Diaper Pants", 
        "originalPrice": 210, 
        "discountedPrice": 189,
        "image": "Pampers New Xtra Large - 6 Diaper Pants.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Extra Absorb Extra Large (XL) 5pc", 
        "originalPrice": 110, 
        "discountedPrice": 105,
        "image": "MamyPoko Pants Extra Absorb Extra Large (XL) 5pc.jpg", 
        "category": "Baby Care" 
      },
       { 
        "title": "Pampers Baby Pants With Aloe Vera Small (S) 4-8kg 10 Pants", 
        "originalPrice": 99, 
        "discountedPrice": 94,
        "image": "Pampers Baby Pants With Aloe Vera Small (S) 4-8kg 10 Pants.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Standard Crisscross Sheet (S) 4pc", 
        "originalPrice": 40, 
        "discountedPrice": 37,
        "image": "MamyPoko Pants Standard Crisscross Sheet (S) 4pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Standard Crisscross Sheet (M) 4pc", 
        "originalPrice": 48, 
        "discountedPrice": 43,
        "image": "MamyPoko Pants Standard Crisscross Sheet (M) 4pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Extra Absorb Small (S) 4 pc", 
        "originalPrice": 57, 
        "discountedPrice": 47,
        "image": "MamyPoko Pants Extra Absorb Small (S) 4 pc.jpg", 
        "category": "Baby Care" 
      },
       { 
        "title": "MamyPoko Pants Extra Absorb New Born(NB) 4 pc", 
        "originalPrice": 45, 
        "discountedPrice": 41,
        "image": "MamyPoko Pants Extra Absorb New Born(NB) 4 pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Extra Absorb Medium (M) 6pc", 
        "originalPrice": 99, 
        "discountedPrice": 94,
        "image": "MamyPoko Pants Extra Absorb Medium (M) 6pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Extra Absorb Medium (M) 4pc", 
        "originalPrice": 66, 
        "discountedPrice": 57,
        "image": "MamyPoko Pants Extra Absorb Medium (M) 4pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Extra Absorb Extra Large (XL) 4pc", 
        "originalPrice": 90, 
        "discountedPrice": 84,
        "image": "MamyPoko Pants Extra Absorb Extra Large (XL) 4pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons Baby Baby Oil 50ml (with Vitamin E)", 
        "originalPrice": 70, 
        "discountedPrice": 66,
        "image": "Johnsons Baby Baby Oil 50ml (with Vitamin E).jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons Baby Baby Oil 100ml (with Vitamin E)", 
        "originalPrice": 140, 
        "discountedPrice": 135,
        "image": "Johnsons Baby Baby Oil 100ml (with Vitamin E).jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Himalaya Baby Lotion 100ml", 
        "originalPrice": 110, 
        "discountedPrice": 98,
        "image": "Himalaya Baby Lotion 100ml.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Himalaya Baby Massage Oil 50ml", 
        "originalPrice": 65, 
        "discountedPrice": 60,
        "image": "Himalaya Baby Massage Oil 50ml.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Himalaya Baby Hair Oil 50ml", 
        "originalPrice": 80, 
        "discountedPrice": 74,
        "image": "Himalaya Baby Hair Oil 50ml.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons Baby No More Tears Baby Shampoo 100ml", 
        "originalPrice": 115, 
        "discountedPrice": 109,
        "image": "Johnsons Baby No More Tears Baby Shampoo 100ml.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons Baby Powder Natural 100g", 
        "originalPrice": 125, 
        "discountedPrice": 115,
        "image": "Johnsons Baby Powder Natural 100g.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons baby Powder Natural 200g", 
        "originalPrice": 230, 
        "discountedPrice": 219,
        "image": "Johnsons baby Powder Natural 200g.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Colgate Kids 0-2 Years Ultra Soft Toothbrush, 1 Piece", 
        "originalPrice": 30, 
        "discountedPrice": 25,
        "image": "Colgate Kids 0-2 Years Ultra Soft Toothbrush, 1 Piece.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Himalaya Gentle Baby Shampoo 100ml", 
        "originalPrice": 115, 
        "discountedPrice": 95,
        "image": "Himalaya Gentle Baby Shampoo 100ml.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons Baby Soap 75g", 
        "originalPrice": 68, 
        "discountedPrice": 65,
        "image": "Johnsons Baby Soap 75g.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Vicks BabyRub 10ml", 
        "originalPrice": 55, 
        "discountedPrice": 49,
        "image": "Vicks BabyRub 10ml.jpg", 
        "category": "Baby Care" 
      },
       
    ];

    const productGrid = document.getElementById("all-products");
    const searchResultsGrid = document.getElementById("search-results");
    const searchQueryDisplay = document.getElementById("search-query");
    const priceFilter = document.getElementById("price-filter");

    // Function to render products dynamically
    function renderProducts(products, gridElement) {
        gridElement.innerHTML = ''; // Clear previous content
        if (products.length === 0) {
            gridElement.innerHTML = '<p>No products found.</p>';
            return;
        }
        products.forEach((product) => {
            const discountPercent = ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100; // Calculate discount percentage for display
            const productHTML = `
                <div class="product-card">
            <div class="section">
                <div class="image" style="position: relative;"> 
                    <div class="discount-badge">${discountPercent.toFixed(0)}% OFF</div>
                    <a href="${product.title}.html">
                        <img src="${product.image}" alt="${product.title}">
                    </a>
                </div>
            </div>
                    <h3>${product.title}</h3>
                    <p class="price">
                        <span id="mrp">₹${product.originalPrice}</span>
                        <span id="discounted-price">₹${product.discountedPrice.toFixed(2)}</span>
                        
                    </p>
                    <a href="${product.title}.html" class="btn-prime">BUY NOW</a>
                </div>
            `;
            gridElement.innerHTML += productHTML;
        });
    }

    window.searchProducts = () => {
        const searchBox = document.getElementById("search-box");
        const query = searchBox.value.trim();

        if (!query) {
            alert("Please enter a search query.");
            return;
        }

        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    };

    if (window.location.pathname.endsWith("index.html")) {
        if (productGrid) {
            renderProducts(allProducts, productGrid);
        }
    }

    if (window.location.pathname.endsWith("search.html")) {
        const params = new URLSearchParams(window.location.search);
        const query = params.get("query")?.toLowerCase();

        if (query && searchQueryDisplay) {
            searchQueryDisplay.textContent = query;
        }

        let searchResults = allProducts.filter(product =>
            product.title.toLowerCase().includes(query)
        );

        if (searchResultsGrid) {
            renderProducts(searchResults, searchResultsGrid);
        }
        priceFilter.addEventListener("change", (event) => {
            const filterValue = event.target.value;

            if (filterValue === "low-to-high") {
                searchResults = searchResults.sort((a, b) => a.discountedPrice - b.discountedPrice);
            } else if (filterValue === "high-to-low") {
                searchResults = searchResults.sort((a, b) => b.discountedPrice - a.discountedPrice);
            }

            renderProducts(searchResults, searchResultsGrid);
        });
    }

    const searchBox = document.getElementById("search-box");
    const suggestionsBox = document.getElementById("suggestions");

    window.showSuggestions = () => {
        const query = searchBox.value.trim().toLowerCase();
        suggestionsBox.innerHTML = "";

        if (!query) {
            suggestionsBox.style.display = "none";
            return;
        }

        const filteredProducts = allProducts.filter(product =>
            product.title.toLowerCase().includes(query)
        );

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const suggestion = document.createElement("div");
                suggestion.className = "suggestion-item";
                suggestion.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" class="suggestion-image">
                    <span class="suggestion-text">${product.title}</span>
                `;

                suggestion.onclick = () => {
                    searchBox.value = product.title;
                    suggestionsBox.style.display = "none";
                };

                suggestionsBox.appendChild(suggestion);
            });

            suggestionsBox.style.display = "block";
        } else {
            const noResult = document.createElement("div");
            noResult.textContent = "No results found";
            noResult.className = "no-result";
            suggestionsBox.appendChild(noResult);
            suggestionsBox.style.display = "block";
        }
    };

    document.addEventListener("click", (event) => {
        if (!event.target.closest("#search-box") && !event.target.closest("#suggestions")) {
            suggestionsBox.style.display = "none";
        }
    });

    renderProducts(allProducts, productGrid);

    function applyFilters() {
        const selectedCategory = document.getElementById("category-select").value;
        const filterValue = document.getElementById("price-filter").value;

        let filteredProducts = [...allProducts];

        // Apply category filter
        if (selectedCategory !== "all") {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }

        // Apply price filter
        if (filterValue === "low-to-high") {
            filteredProducts = filteredProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
        } else if (filterValue === "high-to-low") {
            filteredProducts = filteredProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
        }

        // Render filtered and sorted products
        renderProducts(filteredProducts, productGrid);
    }

    // Event listeners for filters
    document.getElementById("category-select").addEventListener("change", applyFilters);
    document.getElementById("price-filter").addEventListener("change", applyFilters);

    window.viewProduct = (productTitle) => {
        alert(`Viewing details for ${productTitle}`);
    };

    document.querySelectorAll('.fixed-icons .icon').forEach((icon) => {
        icon.addEventListener('click', () => {
            console.log(`${icon.title} icon clicked.`);
        });
    });

});
// Get references to elements
const hamburgerBtn = document.getElementById('hamburger-btn');
const sideMenu = document.getElementById('side-menu');
let isMenuOpen = false;

// Function to toggle the side menu
function toggleMenu() {
    if (isMenuOpen) {
        sideMenu.style.right = '-250px'; // Close menu
    } else {
        sideMenu.style.right = '0'; // Open menu
    }
    isMenuOpen = !isMenuOpen;
}

// Close menu on clicking outside
function closeMenu(event) {
    if (isMenuOpen && !sideMenu.contains(event.target) && event.target !== hamburgerBtn) {
        sideMenu.style.right = '-250px';
        isMenuOpen = false;
    }
}

// Add swipe detection for closing menu
let startX = 0;
sideMenu.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sideMenu.addEventListener('touchmove', (e) => {
    const touchX = e.touches[0].clientX;
    if (startX - touchX > 50) { // Detect swipe left
        sideMenu.style.right = '-250px';
        isMenuOpen = false;
    }
    
});

// Event listeners
hamburgerBtn.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenu);