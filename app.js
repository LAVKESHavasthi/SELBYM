document.addEventListener("DOMContentLoaded", () => {
  
    const allProducts = [
        { title: "Smartphone", originalPrice: 0999, discountPercent: 20, image: "phone.jpg", category: "electronics" },
        { title: "Laptop", originalPrice: 52999, discountPercent: 0, image: "laptop.jpg", category: "electronics" },
        { title: "Dress", originalPrice: 2999, discountPercent: 20, image: "dress.jpg", category: "fashion" },
        { title: "Sofa", originalPrice: 24999, discountPercent: 10, image: "sofa.jpg", category: "furniture" },
         { title: "Rice (Chawal)", originalPrice: 87, discountPercent: 0, image: "rice.jpg", category: "groceries" },
    { title: "Sugar (Cheenee)", originalPrice: 0, discountPercent: 0, image: "sugar.jpg", category: "groceries" },
    { title: "Salt (Namak)", originalPrice: 0, discountPercent: 0, image: "salt.jpg", category: "groceries" },
    { title: "Flour (Aata)", originalPrice: 0, discountPercent: 0, image: "flour.jpg", category: "groceries" },
    { title: "Cooking Oil (Tel)", originalPrice: 0, discountPercent: 0, image: "cooking-oil.jpg", category: "groceries" },
    { title: "Bathing Soap", originalPrice: 0, discountPercent: 0, image: "bathing-soap.jpg", category: "groceries" },
    { title: "Detergent Powder", originalPrice: 0, discountPercent: 0, image: "detergent-powder.jpg", category: "groceries" },
    { title: "Dishwash Bar", originalPrice: 0, discountPercent: 0, image: "dishwash-bar.jpg", category: "groceries" },
    { title: "Toothpaste", originalPrice: 0, discountPercent: 0, image: "toothpaste.jpg", category: "groceries" },
    { title: "Shampoo", originalPrice: 6, discountPercent: 0, image: "shampoo.jpg", category: "groceries" },
    { title: "Conditioner", originalPrice: 0, discountPercent: 0, image: "conditioner.jpg", category: "groceries" },
    { title: "Hair Oil", originalPrice: 0, discountPercent: 0, image: "hair-oil.jpg", category: "groceries" },
    { title: "Face Wash", originalPrice: 0, discountPercent: 0, image: "face-wash.jpg", category: "groceries" },
    { title: "Body Lotion", originalPrice: 0, discountPercent: 0, image: "body-lotion.jpg", category: "groceries" },
    { title: "Green Tea", originalPrice: 0, discountPercent: 0, image: "green-tea.jpg", category: "groceries" },
    { title: "Black Tea", originalPrice: 0, discountPercent: 0, image: "black-tea.jpg", category: "groceries" },
    { title: "Coffee", originalPrice: 0, discountPercent: 0, image: "coffee.jpg", category: "groceries" },
    { title: "Biscuits", originalPrice: 0, discountPercent: 0, image: "biscuits.jpg", category: "groceries" },
    { title: "Chips", originalPrice: 0, discountPercent: 0, image: "chips.jpg", category: "groceries" },
    { title: "Instant Noodles", originalPrice: 0, discountPercent: 0, image: "instant-noodles.jpg", category: "groceries" },
    { title: "Cornflakes", originalPrice: 0, discountPercent: 0, image: "cornflakes.jpg", category: "groceries" },
    { title: "Oats", originalPrice: 0, discountPercent: 0, image: "oats.jpg", category: "groceries" },
    { title: "Pulses (Dal)", originalPrice: 0, discountPercent: 0, image: "pulses.jpg", category: "groceries" },
    { title: "Spices (Masala)", originalPrice: 0, discountPercent: 0, image: "spices.jpg", category: "groceries" },
    { title: "Pickles (Achar)", originalPrice: 0, discountPercent: 0, image: "pickles.jpg", category: "groceries" },
    { title: "Jam", originalPrice: 0, discountPercent: 0, image: "jam.jpg", category: "groceries" },
    { title: "Honey", originalPrice: 0, discountPercent: 0, image: "honey.jpg", category: "groceries" },
    { title: "Milk Powder", originalPrice: 0, discountPercent: 0, image: "milk-powder.jpg", category: "groceries" },
    { title: "Curd (Dahi)", originalPrice: 0, discountPercent: 0, image: "curd.jpg", category: "groceries" },
    { title: "Paneer", originalPrice: 0, discountPercent: 0, image: "paneer.jpg", category: "groceries" },
    { title: "Butter", originalPrice: 0, discountPercent: 0, image: "butter.jpg", category: "groceries" },
    { title: "Cheese", originalPrice: 0, discountPercent: 0, image: "cheese.jpg", category: "groceries" },
    { title: "Eggs", originalPrice: 0, discountPercent: 0, image: "eggs.jpg", category: "groceries" },
    { title: "Chicken", originalPrice: 0, discountPercent: 0, image: "chicken.jpg", category: "groceries" },
    { title: "Fish", originalPrice: 0, discountPercent: 0, image: "fish.jpg", category: "groceries" },
    { title: "Mutton", originalPrice: 0, discountPercent: 0, image: "mutton.jpg", category: "groceries" },
    { title: "Vegetables", originalPrice: 0, discountPercent: 0, image: "vegetables.jpg", category: "groceries" },
    { title: "Fruits", originalPrice: 0, discountPercent: 0, image: "fruits.jpg", category: "groceries" },
    { title: "Dry Fruits", originalPrice: 0, discountPercent: 0, image: "dry-fruits.jpg", category: "groceries" },
    { title: "Soft Drinks", originalPrice: 0, discountPercent: 0, image: "soft-drinks.jpg", category: "groceries" },
    { title: "Juices", originalPrice: 0, discountPercent: 0, image: "juices.jpg", category: "groceries" },
    { title: "Ketchup", originalPrice: 0, discountPercent: 0, image: "ketchup.jpg", category: "groceries" },
    { title: "Mayonnaise", originalPrice: 0, discountPercent: 0, image: "mayonnaise.jpg", category: "groceries" },
    { title: "Baking Powder", originalPrice: 0, discountPercent: 0, image: "baking-powder.jpg", category: "groceries" },
    { title: "Yeast", originalPrice: 0, discountPercent: 0, image: "yeast.jpg", category: "groceries" },
    { title: "Ice Cream", originalPrice: 0, discountPercent: 0, image: "ice-cream.jpg", category: "groceries" },
    { title: "Frozen Peas", originalPrice: 0, discountPercent: 0, image: "frozen-peas.jpg", category: "groceries" },
    { title: "Frozen Paratha", originalPrice: 0, discountPercent: 0, image: "frozen-paratha.jpg", category: "groceries" },
    { title: "Papad", originalPrice: 0, discountPercent: 0, image: "papad.jpg", category: "groceries" },
    { title: "Pickle (Achar)", originalPrice: 0, discountPercent: 0, image: "pickle.jpg", category: "groceries" },
    { title: "Ghee", originalPrice: 0, discountPercent: 0, image: "ghee.jpg", category: "groceries" },
    { title: "Jaggery (Gur)", originalPrice: 0, discountPercent: 0, image: "jaggery.jpg", category: "groceries" },
    { title: "Vinegar", originalPrice: 0, discountPercent: 0, image: "vinegar.jpg", category: "groceries" },
    { title: "Chocolates", originalPrice: 0, discountPercent: 0, image: "chocolates.jpg", category: "groceries" },
    { title: "Toilet Cleaner", originalPrice: 0, discountPercent: 0, image: "toilet-cleaner.jpg", category: "groceries" },
    { title: "Floor Cleaner", originalPrice: 0, discountPercent: 0, image: "floor-cleaner.jpg", category: "groceries" },
    { title: "Glass Cleaner", originalPrice: 0, discountPercent: 0, image: "glass-cleaner.jpg", category: "groceries" },
    { title: "Sanitary Pads", originalPrice: 0, discountPercent: 0, image: "sanitary-pads.jpg", category: "groceries" },
    { title: "Toilet Paper", originalPrice: 0, discountPercent: 0, image: "toilet-paper.jpg", category: "groceries" },
    { title: "Handwash", originalPrice: 0, discountPercent: 0, image: "handwash.jpg", category: "groceries" },
    { title: "Mop", originalPrice: 0, discountPercent: 0, image: "mop.jpg", category: "groceries" },
    { title: "Cleaning Brush", originalPrice: 0, discountPercent: 0, image: "cleaning-brush.jpg", category: "groceries" },
     { title: "Onion (Pyaaz)", originalPrice: 0, discountPercent: 0, image: "onion.jpg", category: "groceries" },
    { title: "Potato (Aloo)", originalPrice: 0, discountPercent: 0, image: "potato.jpg", category: "groceries" },
    { title: "Tomato (Tamatar)", originalPrice: 0, discountPercent: 0, image: "tomato.jpg", category: "groceries" },
    { title: "Garlic (Lahsun)", originalPrice: 0, discountPercent: 0, image: "garlic.jpg", category: "groceries" },
    { title: "Ginger (Adrak)", originalPrice: 0, discountPercent: 0, image: "ginger.jpg", category: "groceries" },
    { title: "Green Chili (Hari Mirch)", originalPrice: 0, discountPercent: 0, image: "green-chili.jpg", category: "groceries" },
    { title: "Lemon (Nimbu)", originalPrice: 0, discountPercent: 0, image: "lemon.jpg", category: "groceries" },
    { title: "Coriander (Dhaniya)", originalPrice: 0, discountPercent: 0, image: "coriander.jpg", category: "groceries" },
    { title: "Cucumber (Kheera)", originalPrice: 0, discountPercent: 0, image: "cucumber.jpg", category: "groceries" },
    { title: "Brinjal (Baingan)", originalPrice: 0, discountPercent: 0, image: "brinjal.jpg", category: "groceries" },
    { title: "Cauliflower (Gobi)", originalPrice: 0, discountPercent: 0, image: "cauliflower.jpg", category: "groceries" },
    { title: "Cabbage (Patta Gobi)", originalPrice: 0, discountPercent: 0, image: "cabbage.jpg", category: "groceries" },
    { title: "Spinach (Palak)", originalPrice: 0, discountPercent: 0, image: "spinach.jpg", category: "groceries" },
    { title: "Bottle Gourd (Lauki)", originalPrice: 0, discountPercent: 0, image: "bottle-gourd.jpg", category: "groceries" },
    { title: "Pumpkin (Kaddu)", originalPrice: 0, discountPercent: 0, image: "pumpkin.jpg", category: "groceries" },
    { title: "Mustard Oil (Sarson Ka Tel)", originalPrice: 0, discountPercent: 0, image: "mustard-oil.jpg", category: "groceries" },
    { title: "Soybean Oil", originalPrice: 0, discountPercent: 0, image: "soybean-oil.jpg", category: "groceries" },
    { title: "Sunflower Oil", originalPrice: 0, discountPercent: 0, image: "sunflower-oil.jpg", category: "groceries" },
    { title: "Coconut Oil", originalPrice: 0, discountPercent: 0, image: "coconut-oil.jpg", category: "groceries" },
    { title: "Almonds (Badam)", originalPrice: 0, discountPercent: 0, image: "almonds.jpg", category: "groceries" },
    { title: "Cashews (Kaju)", originalPrice: 0, discountPercent: 0, image: "cashews.jpg", category: "groceries" },
    { title: "Raisins (Kishmish)", originalPrice: 0, discountPercent: 0, image: "raisins.jpg", category: "groceries" },
    { title: "Walnuts (Akhrot)", originalPrice: 0, discountPercent: 0, image: "walnuts.jpg", category: "groceries" },
    { title: "Dates (Khajoor)", originalPrice: 0, discountPercent: 0, image: "dates.jpg", category: "groceries" },
    { title: "Cumin Seeds (Jeera)", originalPrice: 0, discountPercent: 0, image: "cumin-seeds.jpg", category: "groceries" },
    { title: "Turmeric Powder (Haldi)", originalPrice: 0, discountPercent: 0, image: "turmeric-powder.jpg", category: "groceries" },
    { title: "Red Chili Powder (Lal Mirch)", originalPrice: 0, discountPercent: 0, image: "red-chili-powder.jpg", category: "groceries" },
    { title: "Black Pepper (Kali Mirch)", originalPrice: 0, discountPercent: 0, image: "black-pepper.jpg", category: "groceries" },
    { title: "Cardamom (Elaichi)", originalPrice: 0, discountPercent: 0, image: "cardamom.jpg", category: "groceries" },
    { title: "Cloves (Laung)", originalPrice: 0, discountPercent: 0, image: "cloves.jpg", category: "groceries" },
    { title: "Bay Leaves (Tej Patta)", originalPrice: 0, discountPercent: 0, image: "bay-leaves.jpg", category: "groceries" },
    { title: "Fenugreek Seeds (Methi)", originalPrice: 0, discountPercent: 0, image: "fenugreek-seeds.jpg", category: "groceries" },
    { title: "Mustard Seeds (Rai)", originalPrice: 0, discountPercent: 0, image: "mustard-seeds.jpg", category: "groceries" },
    { title: "Fenugreek Leaves (Kasuri Methi)", originalPrice: 0, discountPercent: 0, image: "kasuri-methi.jpg", category: "groceries" },
    { title: "Ice Cubes", originalPrice: 0, discountPercent: 0, image: "ice-cubes.jpg", category: "groceries" },
    { title: "Sugar Candy (Mishri)", originalPrice: 0, discountPercent: 0, image: "sugar-candy.jpg", category: "groceries" },
    { title: "Soya Chunks", originalPrice: 0, discountPercent: 0, image: "soya-chunks.jpg", category: "groceries" },
    { title: "Pickle Spices (Achar Masala)", originalPrice: 0, discountPercent: 0, image: "pickle-spices.jpg", category: "groceries" },
    { title: "Baking Soda", originalPrice: 0, discountPercent: 0, image: "baking-soda.jpg", category: "groceries" },
    { title: "Garam Masala", originalPrice: 0, discountPercent: 0, image: "garam-masala.jpg", category: "groceries" },
    { title: "Chaat Masala", originalPrice: 0, discountPercent: 0, image: "chaat-masala.jpg", category: "groceries" },
    { title: "Vermicelli (Sevai)", originalPrice: 0, discountPercent: 0, image: "vermicelli.jpg", category: "groceries" },
    { title: "Instant Mix (Dhokla/Bhatura)", originalPrice: 0, discountPercent: 0, image: "instant-mix.jpg", category: "groceries" },
    { title: "Toothbrush", originalPrice: 0, discountPercent: 0, image: "toothbrush.jpg", category: "groceries" },
    { title: "Detergent Bar", originalPrice: 0, discountPercent: 0, image: "detergent-bar.jpg", category: "groceries" },
    { title: "Scouring Pad", originalPrice: 0, discountPercent: 0, image: "scouring-pad.jpg", category: "groceries" },
        { title: "Parle Biscuits", originalPrice: 0, discountPercent: 0, image: "parle biscuits.jpg", category: "groceries" },
        { title: "Britannia Biscuits", originalPrice: 0, discountPercent: 0, image: "britannia biscuits.jpg", category: "groceries" },
        { title: "Sunfeast Biscuits", originalPrice: 0, discountPercent: 0, image: "sunfeast biscuits.jpg", category: "groceries" },
        { title: "Oreo Biscuits", originalPrice: 0, discountPercent: 0, image: "oreo biscuits.jpg", category: "groceries" },
        { title: "Priyagold Biscuits", originalPrice: 0, discountPercent: 0, image: "priyagold biscuits.jpg", category: "groceries" },
        { title: "Parle Parle G Biscuits", originalPrice: 0, discountPercent: 0, image: "parle parle g biscuits.jpg", category: "groceries" },
        { title: "Parle G Biscuits Pack Of 1", originalPrice: 0, discountPercent: 0, image: "parle g biscuits pack of 1.jpg", category: "groceries" },
        { title: "Fortune Oil", originalPrice: 0, discountPercent: 0, image: "fortune oil.jpg", category: "groceries" },
        { title: "Dhara Oil", originalPrice: 0, discountPercent: 0, image: "dhara oil.jpg", category: "groceries" },
        { title: "Patanjali Oil", originalPrice: 0, discountPercent: 0, image: "patanjali oil.jpg", category: "groceries" },
        { title: "Saffola Oil", originalPrice: 0, discountPercent: 0, image: "saffola oil.jpg", category: "groceries" },
        { title: "Tata Oil", originalPrice: 0, discountPercent: 0, image: "tata oil.jpg", category: "groceries" },
        { title: "Basmati Rice", originalPrice: 0, discountPercent: 0, image: "basmati rice.jpg", category: "groceries" },
        { title: "Nonbasmati Rice", originalPrice: 0, discountPercent: 0, image: "nonbasmati rice.jpg", category: "groceries" },
        { title: "Fortune Basmati Rice", originalPrice: 0, discountPercent: 0, image: "fortune basmati rice.jpg", category: "groceries" },
        { title: "Fortune Nonbasmati Rice", originalPrice: 0, discountPercent: 0, image: "fotune nonbasmati rice.jpg", category: "groceries" },
        { title: "Tata Basmati Rice", originalPrice: 0, discountPercent: 0, image: "tata basmati rice.jpg", category: "groceries" },
        { title: "Tata Nonbasmati Rice", originalPrice: 0, discountPercent: 0, image: "tata nonbasmati rice.jpg", category: "groceries" },
        { title: "Daawat Basmati Rice", originalPrice: 0, discountPercent: 0, image: "daawat basmati rice.jpg", category: "groceries" },
        { title: "Daawat Nonbasmati Rice", originalPrice: 0, discountPercent: 0, image: "daawat nonbasmati rice.jpg", category: "groceries" },
        { title: "Lal Qilla Basmati Rice", originalPrice: 0, discountPercent: 0, image: "lal qilla basmati rice.jpg", category: "groceries" },
        { title: "Lal Qilla Nonbasmati Rice", originalPrice: 0, discountPercent: 0, image: "lal qilla nonbasmati rice.jpg", category: "groceries" },
        { title: "Selbyme Basmati Rice", originalPrice: 0, discountPercent: 0, image: "selbyme basmati rice.jpg", category: "groceries" },
        { title: "Selbyme Nonbasmati Rice", originalPrice: 0, discountPercent: 0, image: "selbyme nonbasmati rice.jpg", category: "groceries" },
        { title: "Tata Salt", originalPrice: 0, discountPercent: 0, image: "tata salt.jpg", category: "groceries" },
        { title: "Aashirwaad Salt", originalPrice: 0, discountPercent: 0, image: "aashirwaad salt.jpg", category: "groceries" },
        { title: "Nandini Salt", originalPrice: 0, discountPercent: 0, image: "nandini salt.jpg", category: "groceries" },
        { title: "Catch Salt", originalPrice: 0, discountPercent: 0, image: "catch salt.jpg", category: "groceries" },
        { title: "Patanjali Salt", originalPrice: 0, discountPercent: 0, image: "patanjali salt.jpg", category: "groceries" },
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
                <div class="product-card">
                <div class="section">
                <div class="image">
                    <a href="${product.title}.html">
                        <img src="${product.image}" alt="${product.title}">
                    </a>
                    </div>
        </div>
                    <h3>${product.title}</h3>
                    <p class="price">
                        <span id="cut-price">₹${product.originalPrice}</span>
                        <span id="discounted-price">₹${finalPrice.toFixed(2)}</span>
                        <span>(${product.discountPercent}% OFF)</span>
                    </p>
                    <a href="${product.title}.html" class="btn-primary" style="color: red;">View Details</a>
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
        filteredProducts = filteredProducts.sort((a, b) => {
            const priceA = a.originalPrice - (a.originalPrice * a.discountPercent) / 100;
            const priceB = b.originalPrice - (b.originalPrice * a.discountPercent) / 100;
            return priceA - priceB;
        });
    } else if (filterValue === "high-to-low") {
        filteredProducts = filteredProducts.sort((a, b) => {
            const priceA = a.originalPrice - (a.originalPrice * a.discountPercent) / 100;
            const priceB = b.originalPrice - (b.originalPrice * b.discountPercent) / 100;
            return priceB - priceA;
        });
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
