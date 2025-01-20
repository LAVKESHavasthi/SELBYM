const products = [
    {
        id: "Laxmi_Bhog_Atta_10Kg",
        name: "Laxmi Bhog Atta 10Kg",
        mrp: 240,
        price: 209,
        image: "Laxmi Bhog Atta 10Kg.jpg",
        verified: true
    },
    {
        id: "Vicks_BabyRub_10ml",
        name: "Vicks BabyRub 10ml",
        mrp: 55,
        price: 40,
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
      { 
        "title": "Pampers Baby Pants With Aloe Vera Large (L) 9-14kg 6+1 Free Pants", 
        "originalPrice": 55, 
        "discountedPrice": 49,
        "image": "Pampers Baby Pants With Aloe Vera Large (L) 9-14kg 6 1 Free Pants.jpg", 
        "category": "Baby Care" 
      },
      
      
      
      { 
        "title": "Linc Pentonic Multi Ink Colour Pen (Pack of 12, Multicolor)", 
        "originalPrice": 150, 
        "discountedPrice": 139,
        "image": "Linc Pentonic Multi Ink Colour Pen (Pack of 12, Multicolor).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Doms 14 Shades Erasable Plastic Crayons Round Tin Box", 
        "originalPrice": 60, 
        "discountedPrice": 57,
        "image": "Doms 14 Shades Erasable Plastic Crayons Round Tin Box.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "NATARAJ 621 BOLD HB WRITING PENCILS (Pack of 10)", 
        "originalPrice": 56, 
        "discountedPrice": 49,
        "image": "NATARAJ 621 BOLD HB WRITING PENCILS (Pack of 10).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Fevicol MR Squeeze Bottle 42g", 
        "originalPrice": 25, 
        "discountedPrice": 25,
        "image": "Fevicol MR Squeeze Bottle 42g.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Kangaro Stapler HD-10D", 
        "originalPrice": 125, 
        "discountedPrice": 115,
        "image": "Kangaro Stapler HD-10D.jpg", 
        "category": "Books & Stationery" 
      },
       { 
        "title": "Fevistik Super Glue Stick 15g", 
        "originalPrice": 40, 
        "discountedPrice": 40,
        "image": "Fevistik Super Glue Stick 15g.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Linc Pentonic Blister Pack Ball Pen (Pack of 10, Multicolor)", 
        "originalPrice": 120, 
        "discountedPrice": 115,
        "image": "Linc Pentonic Blister Pack Ball Pen (Pack of 10, Multicolor).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Linc Pentonic Blue Pen - Low Viscosity Ink (Pack of 10)", 
        "originalPrice": 100, 
        "discountedPrice": 95,
        "image": "Linc Pentonic Blue Pen - Low Viscosity Ink (Pack of 10).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Kangaro Staple Pins No.10 - 1M", 
        "originalPrice": 12, 
        "discountedPrice": 12,
        "image": "Kangaro Staple Pins No.10 - 1M.jpg", 
        "category": "Books & Stationery" 
      },
       { 
        "title": "Linc Pentonic Ball Pen - Black Ink (Pack of 10)", 
        "originalPrice": 100, 
        "discountedPrice": 95,
        "image": "Linc Pentonic Ball Pen - Black Ink (Pack of 10).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Casio MJ-120D 150 Steps Check and Correct Desktop Calculator with Tax Keys", 
        "originalPrice": 555, 
        "discountedPrice": 499,
        "image": "Casio MJ-120D 150 Steps Check and Correct Desktop Calculator with Tax Keys.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Vaseline Original Skin Protecting Jelly 40g", 
        "originalPrice": 90, 
        "discountedPrice": 85,
        "image": "Vaseline Original Skin Protecting Jelly 40g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Vaseline Original Skin Protecting Jelly 20g", 
        "originalPrice": 50, 
        "discountedPrice": 47,
        "image": "Vaseline Original Skin Protecting Jelly 20g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Vaseline Lip Care Total Moisture Lip Balm 10g", 
        "originalPrice": 49, 
        "discountedPrice": 46,
        "image": "Vaseline Lip Care Total Moisture Lip Balm 10g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Glow & Lovely Advanced Multivitamin Face Cream 25g", 
        "originalPrice": 65, 
        "discountedPrice": 64,
        "image": "Glow & Lovely Advanced Multivitamin Face Cream 25g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Glow & Lovely Advanced Multivitamin Face Cream 50g", 
        "originalPrice": 125, 
        "discountedPrice": 120,
        "image": "Glow & Lovely Advanced Multivitamin Face Cream 50g.jpg", 
        "category": "Beauty & Grooming" 
      },
       { 
        "title": "Joy Skin Fruits Moisturizing Skin Cream 100ml", 
        "originalPrice": 130, 
        "discountedPrice": 115,
        "image": "Joy Skin Fruits Moisturizing Skin Cream 100ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Glow & Handsome Men Instant Brightness Cream 2X Sun Protection 50g", 
        "originalPrice": 175, 
        "discountedPrice": 165,
        "image": "Glow & Handsome Men Instant Brightness Cream 2X Sun Protection 50g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Vaseline Deep Moisture Body Lotion 90ml", 
        "originalPrice": 90, 
        "discountedPrice": 89,
        "image": "Vaseline Deep Moisture Body Lotion 90ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Veet Pure Hair Removal Cream 30g", 
        "originalPrice": 99, 
        "discountedPrice": 95,
        "image": "Veet Pure Hair Removal Cream 30g.jpg", 
        "category": "Beauty & Grooming" 
      },
       { 
        "title": "VEET Pure Hair Removal Cream-30g", 
        "originalPrice": 99, 
        "discountedPrice": 95,
        "image": "VEET Pure Hair Removal Cream-30g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Ponds Magic Freshness Talc Powder 100g", 
        "originalPrice": 135, 
        "discountedPrice": 129,
        "image": "Ponds Magic Freshness Talc Powder 100g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Ponds Dreamflower Talcum Powder 100g", 
        "originalPrice": 120, 
        "discountedPrice": 109,
        "image": "Ponds Dreamflower Talcum Powder 100g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Vaseline Deep Moisture Body Lotion 400ml", 
        "originalPrice": 435, 
        "discountedPrice": 217,
        "image": "Vaseline Deep Moisture Body Lotion 400ml.jpg", 
        "category": "Beauty & Grooming" 
      },
       { 
        "title": "Fair And Handsome Fairness Cream For Men 30g", 
        "originalPrice": 90, 
        "discountedPrice": 86,
        "image": "Fair And Handsome Fairness Cream For Men 30g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Godrej Expert Rich Creme Black Brown 3.00 Hair Colour (20g +20ml)", 
        "originalPrice": 39, 
        "discountedPrice": 37,
        "image": "Godrej Expert Rich Creme Black Brown 3.00 Hair Colour (20g 20ml).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Godrej Expert Natural Black 1.0 Creme Hair Colour (20g + 20ml)", 
        "originalPrice": 40, 
        "discountedPrice": 37,
        "image": "Godrej Expert Natural Black 1.0 Creme Hair Colour (20g 20ml).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Garnier Black Naturals Hair Color 1.0 Deep Black 20ml+20g", 
        "originalPrice": 45, 
        "discountedPrice": 43,
        "image": "Garnier Black Naturals Hair Color 1.0 Deep Black 20ml 20g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Garnier Black Naturals Hair Color 2.0 Original Black 20ml +20g", 
        "originalPrice": 45, 
        "discountedPrice": 43,
        "image": "Garnier Black Naturals Hair Color 2.0 Original Black 20ml 20g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Garnier Black Naturals Hair Color 3.0 Brown Black 20ml+20g", 
        "originalPrice": 45, 
        "discountedPrice": 43,
        "image": "Garnier Black Naturals Hair Color 3.0 Brown Black 20ml 20g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Garnier Hair Colour - Brown Naturals, 20ml+20g", 
        "originalPrice": 45, 
        "discountedPrice": 43,
        "image": "Garnier Hair Colour - Brown Naturals, 20ml 20g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Godrej Expert Natural Brown 4.0 Creme Hair Colour (20g +20ml)", 
        "originalPrice": 40, 
        "discountedPrice": 37,
        "image": "Godrej Expert Natural Brown 4.0 Creme Hair Colour (20g 20ml).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Godrej Expert Rich Creme Dark Brown 4.06 Hair Colour (20g + 20ml)", 
        "originalPrice": 39, 
        "discountedPrice": 37,
        "image": "Godrej Expert Rich Creme Dark Brown 4.06 Hair Colour (20g 20ml).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Fogg Napoleon Perfume Body Spray For Men 120 ml", 
        "originalPrice": 225, 
        "discountedPrice": 149,
        "image": "Fogg Napoleon Perfume Body Spray For Men 120 ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "DENVER Pride Deodorant (Body Spray For Men) 165ml", 
        "originalPrice": 229, 
        "discountedPrice": 149,
        "image": "DENVER Pride Deodorant (Body Spray For Men) 165ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "DENVER Black Code Deo (Bodyspray for Men) 150ML", 
        "originalPrice": 230, 
        "discountedPrice": 149,
        "image": "DENVER Black Code Deo (Bodyspray for Men) 150ML.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "DENVER Hamilton Deodorant (Body Spray For Men) 165 ml", 
        "originalPrice": 230, 
        "discountedPrice": 149,
        "image": "DENVER Hamilton Deodorant (Body Spray For Men) 165 ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "DENVER Imperial Deodorant (Body Spray For Men) 165ml", 
        "originalPrice": 230, 
        "discountedPrice": 149,
        "image": "DENVER Imperial Deodorant (Body Spray For Men) 165ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Fogg Dynamic Deodrant 150ml (No Gas Perfume Body Spray For Men)", 
        "originalPrice": 299, 
        "discountedPrice": 169,
        "image": "Fogg Dynamic Deodrant 150ml (No Gas Perfume Body Spray For Men).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Fogg Fragrance Body Spray Royal For Men 120ml", 
        "originalPrice": 225, 
        "discountedPrice": 149,
        "image": "Fogg Fragrance Body Spray Royal For Men 120ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      
      { 
        "title": "Tide Double Power Lemon & Mint Detergent Powder 4Kg+1Kg FREE", 
        "originalPrice": 800, 
        "discountedPrice": 599,
        "image": "Tide Double Power Lemon & Mint Detergent Powder 4Kg 1Kg FREE.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide White Detergent Bar 200g Value Pack (4+1 FREE)", 
        "originalPrice": 140, 
        "discountedPrice": 115,
        "image": "Tide White Detergent Bar 200g Value Pack (4 1 FREE).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide Blue Detergent Bar 100g Combo (3+1 FREE)", 
        "originalPrice": 30, 
        "discountedPrice": 28,
        "image": "Tide Blue Detergent Bar 100g Combo (3 1 FREE).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide Double Power Jasmine & Rose Detergent Powder 1Kg + 100g FREE", 
        "originalPrice": 180, 
        "discountedPrice": 129,
        "image": "Tide Double Power Jasmine & Rose Detergent Powder 1Kg 100g FREE.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide Double Power Jasmine & Rose Detergent Powder 1Kg", 
        "originalPrice": 180, 
        "discountedPrice": 123,
        "image": "Tide Double Power Jasmine & Rose Detergent Powder 1Kg.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Rin Detergent Powder 1Kg", 
        "originalPrice": 100, 
        "discountedPrice": 95,
        "image": "Rin Detergent Powder 1Kg.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Surf Excel Matic Front Load Liquid Detergent 1L", 
        "originalPrice": 230, 
        "discountedPrice": 223,
        "image": "Surf Excel Matic Front Load Liquid Detergent 1L.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Ariel Perfect Wash Detergent Powder 500g", 
        "originalPrice": 120, 
        "discountedPrice": 65,
        "image": "Ariel Perfect Wash Detergent Powder 500g.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Surf Excel Quick Wash Detergent Powder 500g", 
        "originalPrice": 115, 
        "discountedPrice": 115,
        "image": "Surf Excel Quick Wash Detergent Powder 500g.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Rin Bar 250g (Pack of 4)", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Rin Bar 250g (Pack of 4).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Godrej Ezee Liquid Detergent 1L", 
        "originalPrice": 225, 
        "discountedPrice": 215,
        "image": "Godrej Ezee Liquid Detergent 1L.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide Detergent Bar 120g (80g+40g Free)", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "Tide Detergent Bar 120g (80g 40g Free).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Wheel Active 2 in 1 Detergent Powder 1Kg", 
        "originalPrice": 73, 
        "discountedPrice": 71,
        "image": "Wheel Active 2 in 1 Detergent Powder 1Kg.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Tide Detergent Bar 250g", 
        "originalPrice": 35, 
        "discountedPrice": 29,
        "image": "Tide Detergent Bar 250g.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Surf Excel Easy Wash Detergent Powder 80g (Pack of 3)", 
        "originalPrice": 30, 
        "discountedPrice": 30,
        "image": "Surf Excel Easy Wash Detergent Powder 80g (Pack of 3).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vanish All in 1 Detergent Powder 200g", 
        "originalPrice": 130, 
        "discountedPrice": 125,
        "image": "Vanish All in 1 Detergent Powder 200g.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Comfort Fabric Conditioner Lily Fresh 860ml", 
        "originalPrice": 235, 
        "discountedPrice": 215,
        "image": "Comfort Fabric Conditioner Lily Fresh 860ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Ujala Supreme 250ml", 
        "originalPrice": 79, 
        "discountedPrice": 79,
        "image": "Ujala Supreme 250ml.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Comfort Fabric Conditioner Morning Fresh 860ml", 
        "originalPrice": 235, 
        "discountedPrice": 215,
        "image": "Comfort Fabric Conditioner Morning Fresh 860ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Harpic Power Plus Disinfectant Toilet Cleaner 500ml", 
        "originalPrice": 105, 
        "discountedPrice": 99,
        "image": "Harpic Power Plus Disinfectant Toilet Cleaner 500ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Dettol Antiseptic Liquid 60ml", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Dettol Antiseptic Liquid 60ml.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Harpic Power Plus Disinfectant Toilet Cleaner 900ml", 
        "originalPrice": 188, 
        "discountedPrice": 175,
        "image": "Harpic Power Plus Disinfectant Toilet Cleaner 900ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Harpic Bathroom Cleaner Floral Bloom 500ml", 
        "originalPrice": 110, 
        "discountedPrice": 105,
        "image": "Harpic Bathroom Cleaner Floral Bloom 500ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Lizol Citrus Disinfectant Surface Cleaner 500ml", 
        "originalPrice": 116, 
        "discountedPrice": 105,
        "image": "Lizol Citrus Disinfectant Surface Cleaner 500ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Harpic Bathroom Cleaner Lemon Fresh 500ml", 
        "originalPrice": 110, 
        "discountedPrice": 105,
        "image": "Harpic Bathroom Cleaner Lemon Fresh 500ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Bar 90g (Pack of 4) - Combo Pack", 
        "originalPrice": 30, 
        "discountedPrice": 28,
        "image": "Vim Bar 90g (Pack of 4) - Combo Pack.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Bar with Power of Lemons 300g", 
        "originalPrice": 30, 
        "discountedPrice": 28,
        "image": "Vim Bar with Power of Lemons 300g.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Dishwash Liquid Gel Lemon 750ml", 
        "originalPrice": 199, 
        "discountedPrice": 169,
        "image": "Vim Dishwash Liquid Gel Lemon 750ml.jpg", 
        "category": "Household Essentials" 
      },
        { 
        "title": "Vim Dishwash Maha Tub 500g + FREE Scrubber (worth Rs 10)", 
        "originalPrice": 59, 
        "discountedPrice": 59,
        "image": "Vim Dishwash Maha Tub 500g FREE Scrubber (worth Rs 10).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Bar 200g (Pack of 4) - Combo Pack", 
        "originalPrice": 86, 
        "discountedPrice": 82,
        "image": "Vim Bar 200g (Pack of 4) - Combo Pack.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Bar 200g (Pack of 3) Combo Pack", 
        "originalPrice": 65, 
        "discountedPrice": 63,
        "image": "Vim Bar 200g (Pack of 3) Combo Pack.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Bar 90g (Pack of 6) - Combo Pack", 
        "originalPrice": 43, 
        "discountedPrice": 43,
        "image": "Vim Bar 90g (Pack of 6) - Combo Pack.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Veet Pure Hair Removal Cream 30g", 
        "originalPrice": 99, 
        "discountedPrice": 95,
        "image": "Veet Pure Hair Removal Cream 30g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "VEET Pure Hair Removal Cream-30g", 
        "originalPrice": 99, 
        "discountedPrice": 95,
        "image": "VEET Pure Hair Removal Cream-30g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Choice XL (18 Pads)", 
        "originalPrice": 126, 
        "discountedPrice": 109,
        "image": "Whisper Choice XL (18 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Stayfree Secure Cottony Soft Regular (6 Pads) Sanitary Pads", 
        "originalPrice": 34, 
        "discountedPrice": 34,
        "image": "Stayfree Secure Cottony Soft Regular (6 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Veet Professional Ready To Use Half Body Wax Strips 8 Wax Strips & 2 Perfect Finishin Wipes", 
        "originalPrice": 115, 
        "discountedPrice": 109,
        "image": "Veet Professional Ready To Use Half Body Wax Strips 8 Wax Strips & 2 Perfect Finishin Wipes.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Stayfree Secure Cottony Comfort XL (40 Pads) Sanitary Pads", 
        "originalPrice": 275, 
        "discountedPrice": 247,
        "image": "Stayfree Secure Cottony Comfort XL (40 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Stayfree Secure Nights Cottony Comfort XXL (6 Pads) Sanitary Pads", 
        "originalPrice": 50, 
        "discountedPrice": 48,
        "image": "Stayfree Secure Nights Cottony Comfort XXL (6 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Stayfree Secure Cottony Comfort XL (18 Pads) Sanitary Pads", 
        "originalPrice": 124, 
        "discountedPrice": 115,
        "image": "Stayfree Secure Cottony Comfort XL (18 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Stayfree Secure Cottony Comfort XL (6 Pads) Sanitary Pads", 
        "originalPrice": 42, 
        "discountedPrice": 40,
        "image": "Stayfree Secure Cottony Comfort XL (6 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Whisper Choice Ultra XL+ Sanitary Pads (20 Pads)", 
        "originalPrice": 160, 
        "discountedPrice": 149,
        "image": "Whisper Choice Ultra XL Sanitary Pads (20 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Bindazzz Nights XL+ (7 Pads) Sanitary Pads", 
        "originalPrice": 110, 
        "discountedPrice": 104,
        "image": "Whisper Ultra Bindazzz Nights XL (7 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Hygiene + Comfort XL+ (15 Pads) Sanitary Pads", 
        "originalPrice": 240, 
        "discountedPrice": 179,
        "image": "Whisper Ultra Hygiene Comfort XL Sanitary Pads Buy 2 Get 1 FREE (30 15 Free = 45 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Hygiene + Comfort XL+ (7 Pads) Sanitary Pads", 
        "originalPrice": 90, 
        "discountedPrice": 85,
        "image": "Whisper Ultra Hygiene Comfort XL (7 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Whisper Ultra Bindazzz Nights XL+ (15 Pads) Sanitary Pads", 
        "originalPrice": 240, 
        "discountedPrice": 189,
        "image": "Whisper Ultra Bindazzz Nights XL (15 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Heavy Flow Protection No Gap No Leaks Sanitary Pads,XL 30pcs", 
        "originalPrice": 350, 
        "discountedPrice": 299,
        "image": "Whisper Ultra Heavy Flow Protection No Gap No Leaks Sanitary Pads,XL 30pcs.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Choice Regular Wings (20 Pads)", 
        "originalPrice": 120, 
        "discountedPrice": 106,
        "image": "Whisper Choice Regular Wings (20 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Stayfree Secure Cottony Soft Regular (18 Pads) Sanitary Pads", 
        "originalPrice": 99, 
        "discountedPrice": 95,
        "image": "Stayfree Secure Cottony Soft Regular (18 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Hygiene + Comfort XL+ Sanitary Pads (30 Pads)", 
        "originalPrice": 480, 
        "discountedPrice": 339,
        "image": "Whisper Ultra Hygiene Comfort XL Sanitary Pads (30 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Hygiene and Comfort Sanitary Pad (XL- 30 Pads)", 
        "originalPrice": 330, 
        "discountedPrice": 285,
        "image": "Whisper Ultra Hygiene and Comfort Sanitary Pad (XL- 30 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Soft Sanitary Pads (45 Pads) Buy 2 Get 1 Free", 
        "originalPrice": 480, 
        "discountedPrice": 449,
        "image": "Whisper Ultra Soft Sanitary Pads (45 Pads) Buy 2 Get 1 Free.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Hygiene + Comfort XL+ Sanitary Pads (50 Pads)", 
        "originalPrice": 659, 
        "discountedPrice": 495,
        "image": "Whisper Ultra Hygiene Comfort XL Sanitary Pads (50 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Zig Zag Charcoal Medium Toothbrush 1pc", 
        "originalPrice": 40, 
        "discountedPrice": 38,
        "image": "Colgate Zig Zag Charcoal Medium Toothbrush 1pc.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Patanjali Dant Kanti Natural Toothpaste 100g", 
        "originalPrice": 60, 
        "discountedPrice": 59,
        "image": "Patanjali Dant Kanti Natural Toothpaste 100g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dabur Herbal Tulsi Toothpaste 200g (Anti-Bacterial)", 
        "originalPrice": 130, 
        "discountedPrice": 75,
        "image": "Dabur Herbal Tulsi Toothpaste 200g (Anti-Bacterial).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Sensodyne Rapid & Relief Toothpaste 40g", 
        "originalPrice": 110, 
        "discountedPrice": 95,
        "image": "Sensodyne Rapid & Relief Toothpaste 40g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Closeup Everfresh ++ Red Hot 40G", 
        "originalPrice": 20, 
        "discountedPrice": 18,
        "image": "Closeup Everfresh Red Hot 40G.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Close Up Red Hot Toothpaste 150g", 
        "originalPrice": 130, 
        "discountedPrice": 99,
        "image": "Close Up Red Hot Toothpaste 150g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Pepsodent Germicheck Toothpaste 200g", 
        "originalPrice": 140, 
        "discountedPrice": 119,
        "image": "Pepsodent Germicheck Toothpaste 200g.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Oral-B Criss Cross Charcoal Sensitive Toothbrush, Extra Soft, 1pc", 
        "originalPrice": 95, 
        "discountedPrice": 79,
        "image": "Oral-B Criss Cross Charcoal Sensitive Toothbrush, Extra Soft, 1pc.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Oral-B Crisscross Soft ToothBrush 1pc", 
        "originalPrice": 95, 
        "discountedPrice": 79,
        "image": "Oral-B Crisscross Soft ToothBrush 1pc.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Gentle Sensitive Ultra Soft 1pc", 
        "originalPrice": 65, 
        "discountedPrice": 39,
        "image": "Colgate Gentle Sensitive Ultra Soft 1pc.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Super Flexi ToothBrush Soft 1pc", 
        "originalPrice": 20, 
        "discountedPrice": 15,
        "image": "Colgate Super Flexi ToothBrush Soft 1pc.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Max Fresh Charcoal Toothpaste-130g (With Cooling Crystals)", 
        "originalPrice": 136, 
        "discountedPrice": 125,
        "image": "Colgate Max Fresh Charcoal Toothpaste-130g (With Cooling Crystals).jpg", 
        
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Strong Teeth Toothpaste 100g + 15g Extra", 
        "originalPrice": 70, 
        "discountedPrice": 49,
        "image": "Colgate Strong Teeth Toothpaste 100g 15g Extra.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Patanjali Dant Kanti Natural Toothpaste 200g", 
        "originalPrice": 115, 
        "discountedPrice": 109,
        "image": "Patanjali Dant Kanti Natural Toothpaste 200g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Navratna Ayurvedic Cool Oil 90ml", 
        "originalPrice": 85, 
        "discountedPrice": 81,
        "image": "Navratna Ayurvedic Cool Oil 90ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Parachute Advanced Hot Oil 90ml", 
        "originalPrice": 55, 
        "discountedPrice": 55,
        "image": "Parachute Advanced Hot Oil 90ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Parachute 100% Pure Coconut Oil Jar 175ml", 
        "originalPrice": 82, 
        "discountedPrice": 75,
        "image": "Parachute 100 Pure Coconut Oil Jar 175ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Parachute 100% Pure Coconut Oil 100ml Jar", 
        "originalPrice": 48, 
        "discountedPrice": 45,
        "image": "Parachute 100 Pure Coconut Oil 100ml Jar.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Parachute 100% Pure Coconut Oil 100ml", 
        "originalPrice": 48, 
        "discountedPrice": 40,
        "image": "Parachute 100 Pure Coconut Oil 100ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Nihar Shanti Amla Badam Hair Oil 68ml", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Nihar Shanti Amla Badam Hair Oil 68ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dabur Amla Hair OIl 65ml", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Dabur Amla Hair OIl 65ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Hair & Care Hair Oil Triple Blend Aloe Vera Olive Oil & Green Tea 200ml", 
        "originalPrice": 120, 
        "discountedPrice": 109,
        "image": "Hair & Care Hair Oil Triple Blend Aloe Vera Olive Oil & Green Tea 200ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Bajaj Almond Drops Hair Oil 45ml", 
        "originalPrice": 35, 
        "discountedPrice": 33,
        "image": "Bajaj Almond Drops Hair Oil 45ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Kesh King Ayurvedic Scalp and Hair Oil 300ml(200ml+100ml Extra)", 
        "originalPrice": 375, 
        "discountedPrice": 339,
        "image": "Kesh King Ayurvedic Scalp and Hair Oil 300ml(200ml100ml Extra).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Bajaj Almond Drops 6X Vitamin E Hair Oil 114ml", 
        "originalPrice": 72, 
        "discountedPrice": 69,
        "image": "Bajaj Almond Drops 6X Vitamin E Hair Oil 114ml.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Dabur Amla Hair Oil 275ml", 
        "originalPrice": 147, 
        "discountedPrice": 132,
        "image": "Dabur Amla Hair Oil 275ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Parachute 100% Pure Coconut Oil 500ml", 
        "originalPrice": 226, 
        "discountedPrice": 199,
        "image": "Parachute 100 Pure Coconut Oil 500ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dabur Amla Hair Oil 550ml - Super Saver Offer", 
        "originalPrice": 340, 
        "discountedPrice": 225,
        "image": "Dabur Amla Hair Oil 550ml - Super Saver Offer.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Head & Shoulders Silky Black Anti Dandruff Shampoo 340ml", 
        "originalPrice": 410, 
        "discountedPrice": 299,
        "image": "Head & Shoulders Silky Black Anti Dandruff Shampoo 340ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 180ml", 
        "originalPrice": 205, 
        "discountedPrice": 190,
        "image": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 180ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 340ml", 
        "originalPrice": 499, 
        "discountedPrice": 309,
        "image": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 340ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Head & Shoulders Silky Black Anti Dandruff Shampoo 180ml", 
        "originalPrice": 205, 
        "discountedPrice": 185,
        "image": "Head & Shoulders Silky Black Anti Dandruff Shampoo 180ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Clinic Plus Strong & Long Shampoo 355ml", 
        "originalPrice": 285, 
        "discountedPrice": 265,
        "image": "Clinic Plus Strong & Long Shampoo 355ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dove Intense Repair Shampoo 340ml", 
        "originalPrice": 355, 
        "discountedPrice": 285,
        "image": "Dove Intense Repair Shampoo 340ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 650ml", 
        "originalPrice": 930, 
        "discountedPrice": 549,
        "image": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 650ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dove Intense Repair Shampoo 650ml", 
        "originalPrice": 899, 
        "discountedPrice": 450,
        "image": "Dove Intense Repair Shampoo 650ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dove Hair Fall Rescue Bio protein Care Shampoo 180ml", 
        "originalPrice": 185, 
        "discountedPrice": 175,
        "image": "Dove Hair Fall Rescue Bio protein Care Shampoo 180ml.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Chik Hairfall prevent shampoo 6ml (Pack of 16)", 
        "originalPrice": 16, 
        "discountedPrice": 15,
        "image": "Chik Hairfall prevent shampoo 6ml (Pack of 16).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Head & Shoulders Daily Clean Anti Dandruff Shampoo 5ml ( Pack Of 16 )", 
        "originalPrice": 32, 
        "discountedPrice": 27,
        "image": "Head & Shoulders Daily Clean Anti Dandruff Shampoo 5ml ( Pack Of 16 ).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Godrej No.1 Sandal Turmeric Soap Bar 100g - BUY 4 GET 1 FREE", 
        "originalPrice": 170, 
        "discountedPrice": 125,
        "image": "Godrej No.1 Sandal Turmeric Soap Bar 100g - BUY 4 GET 1 FREE.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Jo Lime Soap 100g (Pack Of 5)", 
        "originalPrice": 120, 
        "discountedPrice": 99,
        "image": "Jo Lime Soap 100g (Pack Of 5).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Patanjali Haldi Chandan Kanti Soap Bar 150g (Pack of 3)", 
        "originalPrice": 130, 
        "discountedPrice": 125,
        "image": "Patanjali Haldi Chandan Kanti Soap Bar 150g (Pack of 3).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Himalaya Purifying Neem Face Wash 100ml", 
        "originalPrice": 165, 
        "discountedPrice": 139,
        "image": "Himalaya Purifying Neem Face Wash 100ml.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Dove Cream Beauty Bathing Soap Bar 125g (Pack Of 3)", 
        "originalPrice": 260, 
        "discountedPrice": 219,
        "image": "Dove Cream Beauty Bathing Soap Bar 125g (Pack Of 3).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Godrej No.1 Jasmine & Milk Cream Bathing Soap 100g (Buy 4 Get 1 FREE)", 
        "originalPrice": 170, 
        "discountedPrice": 125,
        "image": "Godrej No.1 Jasmine & Milk Cream Bathing Soap 100g (Buy 4 Get 1 FREE).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Pears Pure & Gentle Soap Bar 125g (Pack Of 3)", 
        "originalPrice": 235, 
        "discountedPrice": 199,
        "image": "Pears Pure & Gentle Soap Bar 125g (Pack Of 3).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Patanjali Saundarya Aloe Vera Gel 60ml", 
        "originalPrice": 50, 
        "discountedPrice": 47,
        "image": "Patanjali Saundarya Aloe Vera Gel 60ml.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Jo Almond & Cream Soap 100g (Pack Of 5)", 
        "originalPrice": 120, 
        "discountedPrice": 99,
        "image": "Jo Almond & Cream Soap 100g (Pack Of 5).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Lifebuoy Lemon Fresh Soap Bar 125g - (Pack Of 7) - Mega Value Pack", 
        "originalPrice": 370, 
        "discountedPrice": 199,
        "image": "Lifebuoy Lemon Fresh Soap Bar 125g - (Pack Of 7) - Mega Value Pack.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Lux Radiant Glow Soap Bar 100g ( Buy 4 + 1 Free )", 
        "originalPrice": 155, 
        "discountedPrice": 145,
        "image": "Lux Radiant Glow Soap Bar 100g ( Buy 4 + 1 Free ).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Dettol Original Soap 100g (Pack Of 5)", 
        "originalPrice": 260, 
        "discountedPrice": 169,
        "image": "Dettol Original Soap 100g (Pack Of 5).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Pears Pure & Gentle Soap Bar 100g", 
        "originalPrice": 54, 
        "discountedPrice": 52,
        "image": "Pears Pure & Gentle Soap Bar 100g.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Pears Oil Clear & Glow Soap Bar 75g", 
        "originalPrice": 65, 
        "discountedPrice": 61,
        "image": "Pears Oil Clear & Glow Soap Bar 75g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Pears Soft & Fresh Soap Bar 100g", 
        "originalPrice": 60, 
        "discountedPrice": 59,
        "image": "Pears Soft & Fresh Soap Bar 100g.jpg", 
        "category": "Personal Care" 
      },
    { 
        "title": "Dettol Cologne Fresh Soap Bar 100g (Pack Of 4)", 
        "originalPrice": 208, 
        "discountedPrice": 139,
        "image": "Dettol Cologne Fresh Soap Bar 100g (Pack Of 4).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Lifebuoy Total Soap Bar 125g - BUY 4 GET 1 FREE", 
        "originalPrice": 155, 
        "discountedPrice": 146,
        "image": "Lifebuoy Total Soap Bar 125g - BUY 4 GET 1 FREE.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Lux Flawless Glow Jasmine Soap Bar 150g (Pack of 3)", 
        "originalPrice": 198, 
        "discountedPrice": 133,
        "image": "Lux Flawless Glow Jasmine Soap Bar 150g (Pack of 3).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Lifebuoy Lemon Fresh Soap 100g (4 +1)", 
        "originalPrice": 120, 
        "discountedPrice": 111,
        "image": "Lifebuoy Lemon Fresh Soap 100g (4 +1).jpg", 
        "category": "Personal Care" 
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


document.addEventListener("DOMContentLoaded", () => {
    // Set the contact email
    const emailElement = document.getElementById("contact-email");
    const email = "selbyme@gmail.com";
    emailElement.textContent = email;
    emailElement.href = `mailto:${email}`;

    // Set the copyright text
    const copyrightElement = document.getElementById("copyright");
    const year = new Date().getFullYear();
    copyrightElement.innerHTML = `<strong>&copy; ${year}</strong> SELBYME. All rights reserved.`;
});
