document.addEventListener("DOMContentLoaded", () => {
  
    const allProducts = [
        
{ title: "Tea (Chai)", originalPrice: 0, discountPercent: 0, image: "tea.jpg", category: "groceries" },

{ title: "Carrot (Gajar)", originalPrice: 0, discountPercent: 0, image: "carrot.jpg", category: "groceries" },
{ title: "Apple (Seb)", originalPrice: 0, discountPercent: 0, image: "apple.jpg", category: "groceries" },
{ title: "Banana (Kela)", originalPrice: 0, discountPercent: 0, image: "banana.jpg", category: "groceries" },
{ title: "Orange (Santra)", originalPrice: 0, discountPercent: 0, image: "orange.jpg", category: "groceries" },
{ title: "Mango (Aam)", originalPrice: 0, discountPercent: 0, image: "mango.jpg", category: "groceries" },
{ title: "Pineapple (Ananas)", originalPrice: 0, discountPercent: 0, image: "pineapple.jpg", category: "groceries" },
{ title: "Watermelon (Tarbuj)", originalPrice: 0, discountPercent: 0, image: "watermelon.jpg", category: "groceries" },
{ title: "Soap", originalPrice: 0, discountPercent: 0, image: "soap.jpg", category: "general store" },

{ title: "Dish Soap", originalPrice: 0, discountPercent: 0, image: "dish_soap.jpg", category: "general store" },

{ title: "Coriander Powder (Dhaniya)", originalPrice: 0, discountPercent: 0, image: "coriander_powder.jpg", category: "groceries" },

{ title: "Garlic (Lahsun)", originalPrice: 0, discountPercent: 0, image: "garlic.jpg", category: "groceries" },

{ title: "Corn (Makka)", originalPrice: 0, discountPercent: 0, image: "corn.jpg", category: "groceries" },
{ title: "Peas (Matar)", originalPrice: 0, discountPercent: 0, image: "peas.jpg", category: "groceries" },

{ title: "Cauliflower (Gobi)", originalPrice: 0, discountPercent: 0, image: "cauliflower.jpg", category: "groceries" },
{ title: "Capsicum (Shimla Mirch)", originalPrice: 0, discountPercent: 0, image: "capsicum.jpg", category: "groceries" },

{ title: "Yogurt (Flavored)", originalPrice: 0, discountPercent: 0, image: "flavored_yogurt.jpg", category: "groceries" },
{ title: "Lentils (Dal)", originalPrice: 0, discountPercent: 0, image: "lentils.jpg", category: "groceries" },

{ title: "Spaghetti", originalPrice: 0, discountPercent: 0, image: "spaghetti.jpg", category: "groceries" },
{ title: "Macaroni", originalPrice: 0, discountPercent: 0, image: "macaroni.jpg", category: "groceries" },
{ title: "Brown Bread", originalPrice: 0, discountPercent: 0, image: "brown_bread.jpg", category: "general store" },
{ title: "White Bread", originalPrice: 0, discountPercent: 0, image: "white_bread.jpg", category: "general store" },

{ title: "Cinnamon (Dalchini)", originalPrice: 0, discountPercent: 0, image: "cinnamon.jpg", category: "groceries" },

{ title: "Peanut Butter", originalPrice: 0, discountPercent: 0, image: "peanut_butter.jpg", category: "groceries" },
{ title: "Ketchup", originalPrice: 0, discountPercent: 0, image: "ketchup.jpg", category: "groceries" },
{ title: "Soy Sauce", originalPrice: 0, discountPercent: 0, image: "soy_sauce.jpg", category: "groceries" },
{ title: "Vinegar", originalPrice: 0, discountPercent: 0, image: "vinegar.jpg", category: "groceries" },
{ title: "Papaya (Papita)", originalPrice: 0, discountPercent: 0, image: "papaya.jpg", category: "groceries" },
{ title: "Guava (Amrood)", originalPrice: 0, discountPercent: 0, image: "guava.jpg", category: "groceries" },
{ title: "Pomegranate (Anar)", originalPrice: 0, discountPercent: 0, image: "pomegranate.jpg", category: "groceries" },
{ title: "Strawberry", originalPrice: 0, discountPercent: 0, image: "strawberry.jpg", category: "groceries" },
{ title: "Blueberry", originalPrice: 0, discountPercent: 0, image: "blueberry.jpg", category: "groceries" },
{ title: "Raspberry", originalPrice: 0, discountPercent: 0, image: "raspberry.jpg", category: "groceries" },

{ title: "Bitter Gourd (Karela)", originalPrice: 0, discountPercent: 0, image: "bitter_gourd.jpg", category: "groceries" },
{ title: "Ladyfinger (Bhindi)", originalPrice: 0, discountPercent: 0, image: "ladyfinger.jpg", category: "groceries" },
{ title: "Brinjal (Baingan)", originalPrice: 0, discountPercent: 0, image: "brinjal.jpg", category: "groceries" },

{ title: "Mint Leaves (Pudina)", originalPrice: 0, discountPercent: 0, image: "mint_leaves.jpg", category: "groceries" },
{ title: "Coriander Leaves (Dhaniya)", originalPrice: 0, discountPercent: 0, image: "coriander_leaves.jpg", category: "groceries" },
{ title: "Parsley", originalPrice: 0, discountPercent: 0, image: "parsley.jpg", category: "groceries" },
{ title: "Basil Leaves", originalPrice: 0, discountPercent: 0, image: "basil_leaves.jpg", category: "groceries" },

{ title: "Coconut (Nariyal)", originalPrice: 0, discountPercent: 0, image: "coconut.jpg", category: "groceries" },
{ title: "Dates (Khajoor)", originalPrice: 0, discountPercent: 0, image: "dates.jpg", category: "groceries" },
{ title: "Jaggery (Gur)", originalPrice: 0, discountPercent: 0, image: "jaggery.jpg", category: "groceries" },

{ title: "Soda", originalPrice: 0, discountPercent: 0, image: "soda.jpg", category: "general store" },
{ title: "Lassi", originalPrice: 0, discountPercent: 0, image: "lassi.jpg", category: "general store" },

{ title: "Mozzarella", originalPrice: 0, discountPercent: 0, image: "mozzarella.jpg", category: "groceries" },
{ title: "Breadsticks", originalPrice: 0, discountPercent: 0, image: "breadsticks.jpg", category: "general store" },
{ title: "Cookies", originalPrice: 0, discountPercent: 0, image: "cookies.jpg", category: "general store" },
{ title: "Muffins", originalPrice: 0, discountPercent: 0, image: "muffins.jpg", category: "general store" },
{ title: "Cakes", originalPrice: 0, discountPercent: 0, image: "cakes.jpg", category: "general store" },
{ title: "Flavored Water", originalPrice: 0, discountPercent: 0, image: "flavored_water.jpg", category: "general store" },
{ title: "Sparkling Water", originalPrice: 0, discountPercent: 0, image: "sparkling_water.jpg", category: "general store" },

{ title: "Cereal", originalPrice: 0, discountPercent: 0, image: "cereal.jpg", category: "groceries" },

{ title: "Granola", originalPrice: 0, discountPercent: 0, image: "granola.jpg", category: "groceries" },
{ title: "Pasta", originalPrice: 0, discountPercent: 0, image: "pasta.jpg", category: "groceries" },
{ title: "Popcorn", originalPrice: 0, discountPercent: 0, image: "popcorn.jpg", category: "general store" },

{ title: "Cocoa Powder", originalPrice: 0, discountPercent: 0, image: "cocoa_powder.jpg", category: "groceries" },
{ title: "Baking Powder", originalPrice: 0, discountPercent: 0, image: "baking_powder.jpg", category: "groceries" },

{ title: "Vanilla Extract", originalPrice: 0, discountPercent: 0, image: "vanilla_extract.jpg", category: "groceries" },
{ title: "Chia Seeds", originalPrice: 0, discountPercent: 0, image: "chia_seeds.jpg", category: "groceries" },
{ title: "Flax Seeds", originalPrice: 0, discountPercent: 0, image: "flax_seeds.jpg", category: "groceries" },
{ title: "Sunflower Seeds", originalPrice: 0, discountPercent: 0, image: "sunflower_seeds.jpg", category: "groceries" },
{ title: "Pumpkin Seeds", originalPrice: 0, discountPercent: 0, image: "pumpkin_seeds.jpg", category: "groceries" },

{ title: "Walnuts", originalPrice: 0, discountPercent: 0, image: "walnuts.jpg", category: "groceries" },
{ title: "Hazelnuts", originalPrice: 0, discountPercent: 0, image: "hazelnuts.jpg", category: "groceries" },
{ title: "Brazil Nuts", originalPrice: 0, discountPercent: 0, image: "brazil_nuts.jpg", category: "groceries" },
{ title: "Pistachios", originalPrice: 0, discountPercent: 0, image: "pistachios.jpg", category: "groceries" },
{ title: "Chestnuts", originalPrice: 0, discountPercent: 0, image: "chestnuts.jpg", category: "groceries" },
{ title: "Tamarind (Imli)", originalPrice: 0, discountPercent: 0, image: "tamarind.jpg", category: "groceries" },
{ title: "Ginger Powder (Adrak Powder)", originalPrice: 0, discountPercent: 0, image: "ginger_powder.jpg", category: "groceries" },
{ title: "Garlic Powder (Lahsun Powder)", originalPrice: 0, discountPercent: 0, image: "garlic_powder.jpg", category: "groceries" },
{ title: "Chili Flakes", originalPrice: 0, discountPercent: 0, image: "chili_flakes.jpg", category: "groceries" },
{ title: "Mixed Herbs", originalPrice: 0, discountPercent: 0, image: "mixed_herbs.jpg", category: "groceries" },
{ title: "Curry Powder", originalPrice: 0, discountPercent: 0, image: "curry_powder.jpg", category: "groceries" },
{ title: "Cajun Seasoning", originalPrice: 0, discountPercent: 0, image: "cajun_seasoning.jpg", category: "groceries" },
{ title: "Oregano", originalPrice: 0, discountPercent: 0, image: "oregano.jpg", category: "groceries" },
{ title: "Basil", originalPrice: 0, discountPercent: 0, image: "basil.jpg", category: "groceries" },
{ title: "Rosemary", originalPrice: 0, discountPercent: 0, image: "rosemary.jpg", category: "groceries" },
{ title: "Thyme", originalPrice: 0, discountPercent: 0, image: "thyme.jpg", category: "groceries" },
{ title: "Lavender", originalPrice: 0, discountPercent: 0, image: "lavender.jpg", category: "groceries" },
{ title: "Cilantro", originalPrice: 0, discountPercent: 0, image: "cilantro.jpg", category: "groceries" },
{ title: "Chives", originalPrice: 0, discountPercent: 0, image: "chives.jpg", category: "groceries" },
{ title: "Saffron", originalPrice: 0, discountPercent: 0, image: "saffron.jpg", category: "groceries" },
{ title: "Curry Leaves", originalPrice: 0, discountPercent: 0, image: "curry_leaves.jpg", category: "groceries" },
{ title: "Poppy Seeds", originalPrice: 0, discountPercent: 0, image: "poppy_seeds.jpg", category: "groceries" },
{ title: "Sesame Seeds", originalPrice: 0, discountPercent: 0, image: "sesame_seeds.jpg", category: "groceries" },
{ title: "Mustard Oil", originalPrice: 0, discountPercent: 0, image: "mustard_oil.jpg", category: "groceries" },
{ title: "Ghee", originalPrice: 0, discountPercent: 0, image: "ghee.jpg", category: "groceries" },
{ title: "Coconut Oil", originalPrice: 0, discountPercent: 0, image: "coconut_oil.jpg", category: "groceries" },
{ title: "Olive Oil", originalPrice: 0, discountPercent: 0, image: "olive_oil.jpg", category: "groceries" },
{ title: "Sunflower Oil", originalPrice: 0, discountPercent: 0, image: "sunflower_oil.jpg", category: "groceries" },
{ title: "Soy Oil", originalPrice: 0, discountPercent: 0, image: "soy_oil.jpg", category: "groceries" },
{ title: "Rice Bran Oil", originalPrice: 0, discountPercent: 0, image: "rice_bran_oil.jpg", category: "groceries" },
{ title: "Corn Oil", originalPrice: 0, discountPercent: 0, image: "corn_oil.jpg", category: "groceries" },
{ title: "Avocado Oil", originalPrice: 0, discountPercent: 0, image: "avocado_oil.jpg", category: "groceries" },
{ title: "Mango (Aam)", originalPrice: 0, discountPercent: 0, image: "mango.jpg", category: "groceries" },
{ title: "Apple", originalPrice: 0, discountPercent: 0, image: "apple.jpg", category: "groceries" },
{ title: "Banana", originalPrice: 0, discountPercent: 0, image: "banana.jpg", category: "groceries" },
{ title: "Orange", originalPrice: 0, discountPercent: 0, image: "orange.jpg", category: "groceries" },
{ title: "Grapes", originalPrice: 0, discountPercent: 0, image: "grapes.jpg", category: "groceries" },
{ title: "Paprika", originalPrice: 0, discountPercent: 0, image: "paprika.jpg", category: "groceries" },
{ title: "Chili Powder", originalPrice: 0, discountPercent: 0, image: "chili_powder.jpg", category: "groceries" },
{ title: "Turmeric Powder (Haldi)", originalPrice: 0, discountPercent: 0, image: "turmeric_powder.jpg", category: "groceries" },
{ title: "Black Salt", originalPrice: 0, discountPercent: 0, image: "black_salt.jpg", category: "groceries" },
{ title: "Sea Salt", originalPrice: 0, discountPercent: 0, image: "sea_salt.jpg", category: "groceries" },
{ title: "Chili Sauce", originalPrice: 0, discountPercent: 0, image: "chili_sauce.jpg", category: "groceries" },
{ title: "Tamarind Sauce", originalPrice: 0, discountPercent: 0, image: "tamarind_sauce.jpg", category: "groceries" },
{ title: "Mango Pickle", originalPrice: 0, discountPercent: 0, image: "mango_pickle.jpg", category: "groceries" },
{ title: "Mixed Pickle", originalPrice: 0, discountPercent: 0, image: "mixed_pickle.jpg", category: "groceries" },
{ title: "Lemon Pickle", originalPrice: 0, discountPercent: 0, image: "lemon_pickle.jpg", category: "groceries" },
{ title: "Green Chili Pickle", originalPrice: 0, discountPercent: 0, image: "green_chili_pickle.jpg", category: "groceries" },
{ title: "Red Chili Pickle", originalPrice: 0, discountPercent: 0, image: "red_chili_pickle.jpg", category: "groceries" },
{ title: "Tomato Sauce", originalPrice: 0, discountPercent: 0, image: "tomato_sauce.jpg", category: "groceries" },
{ title: "Salsa", originalPrice: 0, discountPercent: 0, image: "salsa.jpg", category: "groceries" },
{ title: "Taco Sauce", originalPrice: 0, discountPercent: 0, image: "taco_sauce.jpg", category: "groceries" },
{ title: "Mayonnaise", originalPrice: 0, discountPercent: 0, image: "mayonnaise.jpg", category: "groceries" },
{ title: "Mustard", originalPrice: 0, discountPercent: 0, image: "mustard.jpg", category: "groceries" },
{ title: "Salad Dressing", originalPrice: 0, discountPercent: 0, image: "salad_dressing.jpg", category: "groceries" },
{ title: "Soybean", originalPrice: 0, discountPercent: 0, image: "soybean.jpg", category: "groceries" },
{ title: "Tofu", originalPrice: 0, discountPercent: 0, image: "tofu.jpg", category: "groceries" },
{ title: "Tempeh", originalPrice: 0, discountPercent: 0, image: "tempeh.jpg", category: "groceries" },
{ title: "Almond Milk", originalPrice: 0, discountPercent: 0, image: "almond_milk.jpg", category: "groceries" },
{ title: "Soy Milk", originalPrice: 0, discountPercent: 0, image: "soy_milk.jpg", category: "groceries" },
{ title: "Coconut Milk", originalPrice: 0, discountPercent: 0, image: "coconut_milk.jpg", category: "groceries" },
{ title: "Rice Milk", originalPrice: 0, discountPercent: 0, image: "rice_milk.jpg", category: "groceries" },
{ title: "Oat Milk", originalPrice: 0, discountPercent: 0, image: "oat_milk.jpg", category: "groceries" },
{ title: "Flaxseed Oil", originalPrice: 0, discountPercent: 0, image: "flaxseed_oil.jpg", category: "groceries" },
{ title: "Avocado", originalPrice: 0, discountPercent: 0, image: "avocado.jpg", category: "groceries" },
{ title: "Carrot", originalPrice: 0, discountPercent: 0, image: "carrot.jpg", category: "groceries" },
{ title: "Cauliflower", originalPrice: 0, discountPercent: 0, image: "cauliflower.jpg", category: "groceries" },
{ title: "Cabbage", originalPrice: 0, discountPercent: 0, image: "cabbage.jpg", category: "groceries" },
{ title: "Spinach (Palak)", originalPrice: 0, discountPercent: 0, image: "spinach.jpg", category: "groceries" },
{ title: "Lettuce", originalPrice: 0, discountPercent: 0, image: "lettuce.jpg", category: "groceries" },
{ title: "Radish (Mooli)", originalPrice: 0, discountPercent: 0, image: "radish.jpg", category: "groceries" },
{ title: "Onion", originalPrice: 0, discountPercent: 0, image: "onion.jpg", category: "groceries" },
{ title: "Tomato", originalPrice: 0, discountPercent: 0, image: "tomato.jpg", category: "groceries" },
{ title: "Garlic", originalPrice: 0, discountPercent: 0, image: "garlic.jpg", category: "groceries" },
{ title: "Ginger", originalPrice: 0, discountPercent: 0, image: "ginger.jpg", category: "groceries" },
{ title: "Mushrooms", originalPrice: 0, discountPercent: 0, image: "mushrooms.jpg", category: "groceries" },
{ title: "Sweet Potato", originalPrice: 0, discountPercent: 0, image: "sweet_potato.jpg", category: "groceries" },
{ title: "Zucchini", originalPrice: 0, discountPercent: 0, image: "zucchini.jpg", category: "groceries" },
{ title: "Green Beans", originalPrice: 0, discountPercent: 0, image: "green_beans.jpg", category: "groceries" },
{ title: "Asparagus", originalPrice: 0, discountPercent: 0, image: "asparagus.jpg", category: "groceries" },
{ title: "Peas", originalPrice: 0, discountPercent: 0, image: "peas.jpg", category: "groceries" },
{ title: "Bamboo Shoots", originalPrice: 0, discountPercent: 0, image: "bamboo_shoots.jpg", category: "groceries" },
{ title: "Eggplant (Baingan)", originalPrice: 0, discountPercent: 0, image: "eggplant.jpg", category: "groceries" },
{ title: "Bell Pepper (Shimla Mirch)", originalPrice: 0, discountPercent: 0, image: "bell_pepper.jpg", category: "groceries" },
{ title: "Pumpkin (Kaddu)", originalPrice: 0, discountPercent: 0, image: "pumpkin.jpg", category: "groceries" },
{ title: "Chili (Green)", originalPrice: 0, discountPercent: 0, image: "green_chili.jpg", category: "groceries" },
{ title: "Chili (Red)", originalPrice: 0, discountPercent: 0, image: "red_chili.jpg", category: "groceries" },
{ title: "Cucumber", originalPrice: 0, discountPercent: 0, image: "cucumber.jpg", category: "groceries" },
{ title: "Aubergine", originalPrice: 0, discountPercent: 0, image: "aubergine.jpg", category: "groceries" },
{ title: "Kale", originalPrice: 0, discountPercent: 0, image: "kale.jpg", category: "groceries" },
{ title: "Broccoli", originalPrice: 0, discountPercent: 0, image: "broccoli.jpg", category: "groceries" },
{ title: "Leeks", originalPrice: 0, discountPercent: 0, image: "leeks.jpg", category: "groceries" },
{ title: "Brussels Sprouts", originalPrice: 0, discountPercent: 0, image: "brussels_sprouts.jpg", category: "groceries" },
{ title: "Sweet Corn", originalPrice: 0, discountPercent: 0, image: "sweet_corn.jpg", category: "groceries" },
{ title: "Artichoke", originalPrice: 0, discountPercent: 0, image: "artichoke.jpg", category: "groceries" },
{ title: "Celery", originalPrice: 0, discountPercent: 0, image: "celery.jpg", category: "groceries" },
{ title: "Spring Onion", originalPrice: 0, discountPercent: 0, image: "spring_onion.jpg", category: "groceries" },
{ title: "Parsley", originalPrice: 0, discountPercent: 0, image: "parsley.jpg", category: "groceries" },
{ title: "Mint", originalPrice: 0, discountPercent: 0, image: "mint.jpg", category: "groceries" },
{ title: "Coriander", originalPrice: 0, discountPercent: 0, image: "coriander.jpg", category: "groceries" },
{ title: "Chives", originalPrice: 0, discountPercent: 0, image: "chives.jpg", category: "groceries" },
{ title: "Turmeric Root", originalPrice: 0, discountPercent: 0, image: "turmeric_root.jpg", category: "groceries" },
{ title: "Taro Root", originalPrice: 0, discountPercent: 0, image: "taro_root.jpg", category: "groceries" },
{ title: "Sweet Lime", originalPrice: 0, discountPercent: 0, image: "sweet_lime.jpg", category: "groceries" },
{ title: "Pineapple", originalPrice: 0, discountPercent: 0, image: "pineapple.jpg", category: "groceries" },
{ title: "Strawberry", originalPrice: 0, discountPercent: 0, image: "strawberry.jpg", category: "groceries" },
{ title: "Blueberry", originalPrice: 0, discountPercent: 0, image: "blueberry.jpg", category: "groceries" },
{ title: "Blackberry", originalPrice: 0, discountPercent: 0, image: "blackberry.jpg", category: "groceries" },
{ title: "Raspberry", originalPrice: 0, discountPercent: 0, image: "raspberry.jpg", category: "groceries" },
{ title: "Peach", originalPrice: 0, discountPercent: 0, image: "peach.jpg", category: "groceries" },
{ title: "Plum", originalPrice: 0, discountPercent: 0, image: "plum.jpg", category: "groceries" },
{ title: "Pear", originalPrice: 0, discountPercent: 0, image: "pear.jpg", category: "groceries" },
{ title: "Lemon", originalPrice: 0, discountPercent: 0, image: "lemon.jpg", category: "groceries" },
{ title: "Lime", originalPrice: 0, discountPercent: 0, image: "lime.jpg", category: "groceries" },
{ title: "Grapefruit", originalPrice: 0, discountPercent: 0, image: "grapefruit.jpg", category: "groceries" },
{ title: "Kiwi", originalPrice: 0, discountPercent: 0, image: "kiwi.jpg", category: "groceries" },
{ title: "Dragon Fruit", originalPrice: 0, discountPercent: 0, image: "dragon_fruit.jpg", category: "groceries" },
{ title: "Guava", originalPrice: 0, discountPercent: 0, image: "guava.jpg", category: "groceries" },
{ title: "Jackfruit", originalPrice: 0, discountPercent: 0, image: "jackfruit.jpg", category: "groceries" },
{ title: "Coconut", originalPrice: 0, discountPercent: 0, image: "coconut.jpg", category: "groceries" },
{ title: "Lychee", originalPrice: 0, discountPercent: 0, image: "lychee.jpg", category: "groceries" },
{ title: "Tangerine", originalPrice: 0, discountPercent: 0, image: "tangerine.jpg", category: "groceries" },
{ title: "Pomegranate", originalPrice: 0, discountPercent: 0, image: "pomegranate.jpg", category: "groceries" },
{ title: "Fig", originalPrice: 0, discountPercent: 0, image: "fig.jpg", category: "groceries" },
{ title: "Apricot", originalPrice: 0, discountPercent: 0, image: "apricot.jpg", category: "groceries" },
{ title: "Cherry", originalPrice: 0, discountPercent: 0, image: "cherry.jpg", category: "groceries" },
{ title: "Mulberry", originalPrice: 0, discountPercent: 0, image: "mulberry.jpg", category: "groceries" },
{ title: "Cantaloupe", originalPrice: 0, discountPercent: 0, image: "cantaloupe.jpg", category: "groceries" },
{ title: "Honeydew Melon", originalPrice: 0, discountPercent: 0, image: "honeydew_melon.jpg", category: "groceries" },
{ title: "Watermelon", originalPrice: 0, discountPercent: 0, image: "watermelon.jpg", category: "groceries" },
{ title: "Cabbage (Red)", originalPrice: 0, discountPercent: 0, image: "red_cabbage.jpg", category: "groceries" },
{ title: "Turnip", originalPrice: 0, discountPercent: 0, image: "turnip.jpg", category: "groceries" },
{ title: "Fennel", originalPrice: 0, discountPercent: 0, image: "fennel.jpg", category: "groceries" },
{ title: "Chayote", originalPrice: 0, discountPercent: 0, image: "chayote.jpg", category: "groceries" },
{ title: "Butternut Squash", originalPrice: 0, discountPercent: 0, image: "butternut_squash.jpg", category: "groceries" },
{ title: "Beets", originalPrice: 0, discountPercent: 0, image: "beets.jpg", category: "groceries" },
{ title: "Okra (Ladyfinger)", originalPrice: 0, discountPercent: 0, image: "okra.jpg", category: "groceries" },
{ title: "Artichoke Hearts", originalPrice: 0, discountPercent: 0, image: "artichoke_hearts.jpg", category: "groceries" },
{ title: "Kohlrabi", originalPrice: 0, discountPercent: 0, image: "kohlrabi.jpg", category: "groceries" },
{ title: "Chickpeas (Kabuli Chana)", originalPrice: 0, discountPercent: 0, image: "chickpeas.jpg", category: "groceries" },
{ title: "Lentils (Masoor Dal)", originalPrice: 0, discountPercent: 0, image: "lentils.jpg", category: "groceries" },
{ title: "Yellow Moong Dal", originalPrice: 0, discountPercent: 0, image: "yellow_moong_dal.jpg", category: "groceries" },
{ title: "Toor Dal", originalPrice: 0, discountPercent: 0, image: "toor_dal.jpg", category: "groceries" },
{ title: "Urad Dal", originalPrice: 0, discountPercent: 0, image: "urad_dal.jpg", category: "groceries" },
{ title: "Rajma (Kidney Beans)", originalPrice: 0, discountPercent: 0, image: "rajma.jpg", category: "groceries" },
{ title: "Black Beans", originalPrice: 0, discountPercent: 0, image: "black_beans.jpg", category: "groceries" },
{ title: "Green Gram", originalPrice: 0, discountPercent: 0, image: "green_gram.jpg", category: "groceries" },
{ title: "Soya Chunks", originalPrice: 0, discountPercent: 0, image: "soya_chunks.jpg", category: "groceries" },
{ title: "Bajra (Pearl Millet)", originalPrice: 0, discountPercent: 0, image: "bajra.jpg", category: "groceries" },
{ title: "Jowar (Sorghum)", originalPrice: 0, discountPercent: 0, image: "jowar.jpg", category: "groceries" },
{ title: "Ragi (Finger Millet)", originalPrice: 0, discountPercent: 0, image: "ragi.jpg", category: "groceries" },
{ title: "Wheat Flour (Atta)", originalPrice: 0, discountPercent: 0, image: "wheat_flour.jpg", category: "groceries" },
{ title: "Rice Flour", originalPrice: 0, discountPercent: 0, image: "rice_flour.jpg", category: "groceries" },
{ title: "Corn Flour", originalPrice: 0, discountPercent: 0, image: "corn_flour.jpg", category: "groceries" },
{ title: "Gram Flour (Besan)", originalPrice: 0, discountPercent: 0, image: "gram_flour.jpg", category: "groceries" },
{ title: "Oats", originalPrice: 0, discountPercent: 0, image: "oats.jpg", category: "groceries" },
{ title: "Barley", originalPrice: 0, discountPercent: 0, image: "barley.jpg", category: "groceries" },
{ title: "Maize (Makki)", originalPrice: 0, discountPercent: 0, image: "maize.jpg", category: "groceries" },
{ title: "Jaggery (Gur)", originalPrice: 0, discountPercent: 0, image: "jaggery.jpg", category: "groceries" },
{ title: "Honey", originalPrice: 0, discountPercent: 0, image: "honey.jpg", category: "groceries" },
{ title: "Maple Syrup", originalPrice: 0, discountPercent: 0, image: "maple_syrup.jpg", category: "groceries" },
{ title: "Palm Sugar", originalPrice: 0, discountPercent: 0, image: "palm_sugar.jpg", category: "groceries" },
{ title: "Coconut Sugar", originalPrice: 0, discountPercent: 0, image: "coconut_sugar.jpg", category: "groceries" },
{ title: "Vanilla Extract", originalPrice: 0, discountPercent: 0, image: "vanilla_extract.jpg", category: "groceries" },
{ title: "Cocoa Powder", originalPrice: 0, discountPercent: 0, image: "cocoa_powder.jpg", category: "groceries" },
{ title: "Coffee Powder", originalPrice: 0, discountPercent: 0, image: "coffee_powder.jpg", category: "groceries" },
{ title: "Black Pepper", originalPrice: 0, discountPercent: 0, image: "black_pepper.jpg", category: "groceries" },
{ title: "Cinnamon", originalPrice: 0, discountPercent: 0, image: "cinnamon.jpg", category: "groceries" },
{ title: "Cloves", originalPrice: 0, discountPercent: 0, image: "cloves.jpg", category: "groceries" },
{ title: "Cardamom", originalPrice: 0, discountPercent: 0, image: "cardamom.jpg", category: "groceries" },
{ title: "Nutmeg", originalPrice: 0, discountPercent: 0, image: "nutmeg.jpg", category: "groceries" },
{ title: "Bay Leaves", originalPrice: 0, discountPercent: 0, image: "bay_leaves.jpg", category: "groceries" },
{ title: "Turmeric Powder", originalPrice: 0, discountPercent: 0, image: "turmeric_powder.jpg", category: "groceries" },
{ title: "Ginger Powder", originalPrice: 0, discountPercent: 0, image: "ginger_powder.jpg", category: "groceries" },
{ title: "Garlic Powder", originalPrice: 0, discountPercent: 0, image: "garlic_powder.jpg", category: "groceries" },
{ title: "Mustard Seeds", originalPrice: 0, discountPercent: 0, image: "mustard_seeds.jpg", category: "groceries" },
{ title: "Cumin Seeds", originalPrice: 0, discountPercent: 0, image: "cumin_seeds.jpg", category: "groceries" },
{ title: "Caraway Seeds", originalPrice: 0, discountPercent: 0, image: "caraway_seeds.jpg", category: "groceries" },
{ title: "Fennel Seeds", originalPrice: 0, discountPercent: 0, image: "fennel_seeds.jpg", category: "groceries" },
{ title: "Saffron", originalPrice: 0, discountPercent: 0, image: "saffron.jpg", category: "groceries" },
{ title: "Dried Rose Petals", originalPrice: 0, discountPercent: 0, image: "dried_rose_petals.jpg", category: "groceries" },
{ title: "Methi Seeds (Fenugreek)", originalPrice: 0, discountPercent: 0, image: "methi_seeds.jpg", category: "groceries" },
{ title: "Coriander Powder", originalPrice: 0, discountPercent: 0, image: "coriander_powder.jpg", category: "groceries" },
{ title: "Chili Powder", originalPrice: 0, discountPercent: 0, image: "chili_powder.jpg", category: "groceries" },
{ title: "Paprika", originalPrice: 0, discountPercent: 0, image: "paprika.jpg", category: "groceries" },
{ title: "Garam Masala", originalPrice: 0, discountPercent: 0, image: "garam_masala.jpg", category: "groceries" },
{ title: "Kitchen King Masala", originalPrice: 0, discountPercent: 0, image: "kitchen_king_masala.jpg", category: "groceries" },
{ title: "Chaat Masala", originalPrice: 0, discountPercent: 0, image: "chaat_masala.jpg", category: "groceries" },
{ title: "Tamarind Paste", originalPrice: 0, discountPercent: 0, image: "tamarind_paste.jpg", category: "groceries" },
{ title: "Coconut Milk", originalPrice: 0, discountPercent: 0, image: "coconut_milk.jpg", category: "groceries" },
{ title: "Ghee", originalPrice: 0, discountPercent: 0, image: "ghee.jpg", category: "groceries" },
{ title: "Butter", originalPrice: 0, discountPercent: 0, image: "butter.jpg", category: "groceries" },
{ title: "Olive Oil", originalPrice: 0, discountPercent: 0, image: "olive_oil.jpg", category: "groceries" },
{ title: "Sunflower Oil", originalPrice: 0, discountPercent: 0, image: "sunflower_oil.jpg", category: "groceries" },
{ title: "Vegetable Oil", originalPrice: 0, discountPercent: 0, image: "vegetable_oil.jpg", category: "groceries" },
{ title: "Canola Oil", originalPrice: 0, discountPercent: 0, image: "canola_oil.jpg", category: "groceries" },
{ title: "Rice Bran Oil", originalPrice: 0, discountPercent: 0, image: "rice_bran_oil.jpg", category: "groceries" },
{ title: "Coconut Oil", originalPrice: 0, discountPercent: 0, image: "coconut_oil.jpg", category: "groceries" },
{ title: "Sesame Oil", originalPrice: 0, discountPercent: 0, image: "sesame_oil.jpg", category: "groceries" },
{ title: "Peanut Butter", originalPrice: 0, discountPercent: 0, image: "peanut_butter.jpg", category: "groceries" },
{ title: "Almond Butter", originalPrice: 0, discountPercent: 0, image: "almond_butter.jpg", category: "groceries" },
{ title: "Cashew Butter", originalPrice: 0, discountPercent: 0, image: "cashew_butter.jpg", category: "groceries" },
{ title: "Pistachio Butter", originalPrice: 0, discountPercent: 0, image: "pistachio_butter.jpg", category: "groceries" },
{ title: "Tahini", originalPrice: 0, discountPercent: 0, image: "tahini.jpg", category: "groceries" },
{ title: "Chia Seeds", originalPrice: 0, discountPercent: 0, image: "chia_seeds.jpg", category: "groceries" },
{ title: "Flax Seeds", originalPrice: 0, discountPercent: 0, image: "flax_seeds.jpg", category: "groceries" },
{ title: "Hemp Seeds", originalPrice: 0, discountPercent: 0, image: "hemp_seeds.jpg", category: "groceries" },
{ title: "Pumpkin Seeds", originalPrice: 0, discountPercent: 0, image: "pumpkin_seeds.jpg", category: "groceries" },
{ title: "Sunflower Seeds", originalPrice: 0, discountPercent: 0, image: "sunflower_seeds.jpg", category: "groceries" },
{ title: "Sesame Seeds", originalPrice: 0, discountPercent: 0, image: "sesame_seeds.jpg", category: "groceries" },
{ title: "Almonds", originalPrice: 0, discountPercent: 0, image: "almonds.jpg", category: "groceries" },
{ title: "Cashews", originalPrice: 0, discountPercent: 0, image: "cashews.jpg", category: "groceries" },
{ title: "Pistachios", originalPrice: 0, discountPercent: 0, image: "pistachios.jpg", category: "groceries" },
{ title: "Walnuts", originalPrice: 0, discountPercent: 0, image: "walnuts.jpg", category: "groceries" },
{ title: "Peanuts", originalPrice: 0, discountPercent: 0, image: "peanuts.jpg", category: "groceries" },
{ title: "Brazil Nuts", originalPrice: 0, discountPercent: 0, image: "brazil_nuts.jpg", category: "groceries" },
{ title: "Macadamia Nuts", originalPrice: 0, discountPercent: 0, image: "macadamia_nuts.jpg", category: "groceries" },
{ title: "Hazelnuts", originalPrice: 0, discountPercent: 0, image: "hazelnuts.jpg", category: "groceries" },
{ title: "Pine Nuts", originalPrice: 0, discountPercent: 0, image: "pine_nuts.jpg", category: "groceries" },
{ title: "Coconut", originalPrice: 0, discountPercent: 0, image: "coconut.jpg", category: "groceries" },
{ title: "Dried Mango", originalPrice: 0, discountPercent: 0, image: "dried_mango.jpg", category: "groceries" },
{ title: "Dried Papaya", originalPrice: 0, discountPercent: 0, image: "dried_papaya.jpg", category: "groceries" },
{ title: "Dried Apricots", originalPrice: 0, discountPercent: 0, image: "dried_apricots.jpg", category: "groceries" },
{ title: "Dried Figs", originalPrice: 0, discountPercent: 0, image: "dried_figs.jpg", category: "groceries" },
{ title: "Dried Dates", originalPrice: 0, discountPercent: 0, image: "dried_dates.jpg", category: "groceries" },
{ title: "Dried Cranberries", originalPrice: 0, discountPercent: 0, image: "dried_cranberries.jpg", category: "groceries" },
{ title: "Cranberry Sauce", originalPrice: 0, discountPercent: 0, image: "cranberry_sauce.jpg", category: "groceries" },
{ title: "Apricot Jam", originalPrice: 0, discountPercent: 0, image: "apricot_jam.jpg", category: "groceries" },
{ title: "Strawberry Jam", originalPrice: 0, discountPercent: 0, image: "strawberry_jam.jpg", category: "groceries" },
{ title: "Peach Jam", originalPrice: 0, discountPercent: 0, image: "peach_jam.jpg", category: "groceries" },
{ title: "Mango Jam", originalPrice: 0, discountPercent: 0, image: "mango_jam.jpg", category: "groceries" },
{ title: "Grape Jam", originalPrice: 0, discountPercent: 0, image: "grape_jam.jpg", category: "groceries" },
{ title: "Raspberry Jam", originalPrice: 0, discountPercent: 0, image: "raspberry_jam.jpg", category: "groceries" },
{ title: "Tomato Sauce", originalPrice: 0, discountPercent: 0, image: "tomato_sauce.jpg", category: "groceries" },
{ title: "Barbecue Sauce", originalPrice: 0, discountPercent: 0, image: "barbecue_sauce.jpg", category: "groceries" },
{ title: "Soy Sauce", originalPrice: 0, discountPercent: 0, image: "soy_sauce.jpg", category: "groceries" },
{ title: "Worcestershire Sauce", originalPrice: 0, discountPercent: 0, image: "worcestershire_sauce.jpg", category: "groceries" },
{ title: "Hot Sauce", originalPrice: 0, discountPercent: 0, image: "hot_sauce.jpg", category: "groceries" },
{ title: "Chili Sauce", originalPrice: 0, discountPercent: 0, image: "chili_sauce.jpg", category: "groceries" },
{ title: "Tamarind Sauce", originalPrice: 0, discountPercent: 0, image: "tamarind_sauce.jpg", category: "groceries" },
{ title: "Mustard Sauce", originalPrice: 0, discountPercent: 0, image: "mustard_sauce.jpg", category: "groceries" },
{ title: "Ketchup", originalPrice: 0, discountPercent: 0, image: "ketchup.jpg", category: "groceries" },
{ title: "Mayonnaise", originalPrice: 0, discountPercent: 0, image: "mayonnaise.jpg", category: "groceries" },
{ title: "Salad Dressing", originalPrice: 0, discountPercent: 0, image: "salad_dressing.jpg", category: "groceries" },
{ title: "Vinegar", originalPrice: 0, discountPercent: 0, image: "vinegar.jpg", category: "groceries" },
{ title: "Rice Vinegar", originalPrice: 0, discountPercent: 0, image: "rice_vinegar.jpg", category: "groceries" },
{ title: "Apple Cider Vinegar", originalPrice: 0, discountPercent: 0, image: "apple_cider_vinegar.jpg", category: "groceries" },
{ title: "Balsamic Vinegar", originalPrice: 0, discountPercent: 0, image: "balsamic_vinegar.jpg", category: "groceries" },
{ title: "White Vinegar", originalPrice: 0, discountPercent: 0, image: "white_vinegar.jpg", category: "groceries" },
{ title: "Coconut Vinegar", originalPrice: 0, discountPercent: 0, image: "coconut_vinegar.jpg", category: "groceries" },
{ title: "Sesame Oil", originalPrice: 0, discountPercent: 0, image: "sesame_oil.jpg", category: "groceries" },
{ title: "Almond Oil", originalPrice: 0, discountPercent: 0, image: "almond_oil.jpg", category: "groceries" },
{ title: "Avocado Oil", originalPrice: 0, discountPercent: 0, image: "avocado_oil.jpg", category: "groceries" },
{ title: "Grapeseed Oil", originalPrice: 0, discountPercent: 0, image: "grapeseed_oil.jpg", category: "groceries" },
{ title: "Macadamia Oil", originalPrice: 0, discountPercent: 0, image: "macadamia_oil.jpg", category: "groceries" },
{ title: "Peanut Oil", originalPrice: 0, discountPercent: 0, image: "peanut_oil.jpg", category: "groceries" },
{ title: "Vegetable Oil (Blended)", originalPrice: 0, discountPercent: 0, image: "vegetable_oil_blended.jpg", category: "groceries" },
{ title: "Corn Oil", originalPrice: 0, discountPercent: 0, image: "corn_oil.jpg", category: "groceries" },
{ title: "Olive Oil (Extra Virgin)", originalPrice: 0, discountPercent: 0, image: "olive_oil_extra_virgin.jpg", category: "groceries" },
{ title: "Coconut Milk Powder", originalPrice: 0, discountPercent: 0, image: "coconut_milk_powder.jpg", category: "groceries" },
{ title: "Almond Milk", originalPrice: 0, discountPercent: 0, image: "almond_milk.jpg", category: "groceries" },
{ title: "Soy Milk", originalPrice: 0, discountPercent: 0, image: "soy_milk.jpg", category: "groceries" },
{ title: "Oat Milk", originalPrice: 0, discountPercent: 0, image: "oat_milk.jpg", category: "groceries" },
{ title: "Coconut Water", originalPrice: 0, discountPercent: 0, image: "coconut_water.jpg", category: "groceries" },
{ title: "Almond Flour", originalPrice: 0, discountPercent: 0, image: "almond_flour.jpg", category: "groceries" },
{ title: "Coconut Flour", originalPrice: 0, discountPercent: 0, image: "coconut_flour.jpg", category: "groceries" },
{ title: "Rice Flour", originalPrice: 0, discountPercent: 0, image: "rice_flour.jpg", category: "groceries" },
{ title: "Wheat Flour", originalPrice: 0, discountPercent: 0, image: "wheat_flour.jpg", category: "groceries" },
{ title: "Oat Flour", originalPrice: 0, discountPercent: 0, image: "oat_flour.jpg", category: "groceries" },
{ title: "Chickpea Flour", originalPrice: 0, discountPercent: 0, image: "chickpea_flour.jpg", category: "groceries" },
{ title: "Maize Flour", originalPrice: 0, discountPercent: 0, image: "maize_flour.jpg", category: "groceries" },
{ title: "Tapioca Flour", originalPrice: 0, discountPercent: 0, image: "tapioca_flour.jpg", category: "groceries" },
{ title: "Potato Starch", originalPrice: 0, discountPercent: 0, image: "potato_starch.jpg", category: "groceries" },
{ title: "Corn Starch", originalPrice: 0, discountPercent: 0, image: "corn_starch.jpg", category: "groceries" },
{ title: "Arrowroot Powder", originalPrice: 0, discountPercent: 0, image: "arrowroot_powder.jpg", category: "groceries" },
{ title: "Xanthan Gum", originalPrice: 0, discountPercent: 0, image: "xanthan_gum.jpg", category: "groceries" },
{ title: "Guar Gum", originalPrice: 0, discountPercent: 0, image: "guar_gum.jpg", category: "groceries" },
{ title: "Tapioca Starch", originalPrice: 0, discountPercent: 0, image: "tapioca_starch.jpg", category: "groceries" },
{ title: "Gelatin", originalPrice: 0, discountPercent: 0, image: "gelatin.jpg", category: "groceries" },
{ title: "Agar-Agar", originalPrice: 0, discountPercent: 0, image: "agar_agar.jpg", category: "groceries" },
{ title: "Cocoa Powder", originalPrice: 0, discountPercent: 0, image: "cocoa_powder.jpg", category: "groceries" },
{ title: "Baking Powder", originalPrice: 0, discountPercent: 0, image: "baking_powder.jpg", category: "groceries" },
{ title: "Baking Soda", originalPrice: 0, discountPercent: 0, image: "baking_soda.jpg", category: "groceries" },
{ title: "Cream of Tartar", originalPrice: 0, discountPercent: 0, image: "cream_of_tartar.jpg", category: "groceries" },
{ title: "Vanilla Extract", originalPrice: 0, discountPercent: 0, image: "vanilla_extract.jpg", category: "groceries" },
{ title: "Chocolate Chips", originalPrice: 0, discountPercent: 0, image: "chocolate_chips.jpg", category: "groceries" },
{ title: "White Chocolate Chips", originalPrice: 0, discountPercent: 0, image: "white_chocolate_chips.jpg", category: "groceries" },
{ title: "Caramel Chips", originalPrice: 0, discountPercent: 0, image: "caramel_chips.jpg", category: "groceries" },
{ title: "Toffee Chips", originalPrice: 0, discountPercent: 0, image: "toffee_chips.jpg", category: "groceries" },
{ title: "Marshmallows", originalPrice: 0, discountPercent: 0, image: "marshmallows.jpg", category: "groceries" },
{ title: "Candied Ginger", originalPrice: 0, discountPercent: 0, image: "candied_ginger.jpg", category: "groceries" },
{ title: "Candied Orange Peel", originalPrice: 0, discountPercent: 0, image: "candied_orange_peel.jpg", category: "groceries" },
{ title: "Fruit Cocktail", originalPrice: 0, discountPercent: 0, image: "fruit_cocktail.jpg", category: "groceries" },

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