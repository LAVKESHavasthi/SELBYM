document.addEventListener("DOMContentLoaded", () => {
  
    const allProducts = [
        { title: "IND1A3RJ053C2" },
        { title: "IND1A3RJ053C3"},
        { title: "IND1A3RJ053C4"},
        { title: "IND1A3RJ053C5"},
        { title: "IND1A3RJ053C6" },
    
    ];

    const productGrid = document.getElementById("all-products");
    const searchResultsGrid = document.getElementById("search-results");
    const searchQueryDisplay = document.getElementById("search-query");
    const priceFilter = document.getElementById("price-filter");

    function renderProducts(products, gridElement) {
        gridElement.innerHTML = ''; // Clear previous content
        if (products.length === 0) {
            gridElement.innerHTML = '<p>No products found.</p>';
            return;
        }
        products.forEach((product) => {
            const finalPrice = product.originalPrice - (product.originalPrice * product.discountPercent) / 100;
            const productHTML = `
                
                    
                    
                    
                    
                    <a href="${product.title}.html" class="btn-primary" style="color: white;"><h2>${product.title}</h2></a>
                
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

        window.location.href = `searchorderhistory.html?query=${encodeURIComponent(query)}`;
    };

    if (window.location.pathname.endsWith("index.html")) {
        if (productGrid) {
            renderProducts(allProducts, productGrid);
        }
    }

    if (window.location.pathname.endsWith("searchorderhistory.html")) {
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
                searchResults = searchResults.sort((a, b) => {
                    const priceA = a.originalPrice - (a.originalPrice * a.discountPercent) / 100;
                    const priceB = b.originalPrice - (b.originalPrice * b.discountPercent) / 100;
                    return priceA - priceB;
                });
            } else if (filterValue === "high-to-low") {
                searchResults = searchResults.sort((a, b) => {
                    const priceA = a.originalPrice - (a.originalPrice * a.discountPercent) / 100;
                    const priceB = b.originalPrice - (b.originalPrice * b.discountPercent) / 100;
                    return priceB - priceA;
                });
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

    function filterByCategory() {
        const selectedCategory = document.getElementById("category-select").value;
        const filteredProducts = selectedCategory === "all"
            ? allProducts
            : allProducts.filter(product => product.category === selectedCategory);
        renderProducts(filteredProducts, productGrid);
    }

    document.getElementById("category-select").addEventListener("change", filterByCategory);

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