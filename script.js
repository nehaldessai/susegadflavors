// Recipe Data - 36 Authentic Goan Recipes
const recipes = [
  // Seafood Recipes (9)
  {
    id: 1,
    name: "Goan Fish Curry (Xitt Kodi)",
    category: "seafood",
    image:
      "https://2.bp.blogspot.com/-J68cf6zilnk/UB3xbSjoMnI/AAAAAAAAAwM/AxXEW8Nwtwo/s1600/fc+1.jpg",
    description:
      "A tangy and spicy coconut-based fish curry that's a staple in Goan households.",
    time: "30 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "500g Kingfish or Mackerel, cut into pieces",
      "1 cup grated coconut",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "6-7 dried red chilies",
      "1 tsp turmeric powder",
      "1 tsp coriander seeds",
      "1 tsp cumin seeds",
      "4 garlic cloves",
      "1-inch ginger, grated",
      "1 tamarind ball (or 5 kokum petals)",
      "2 tbsp coconut oil",
      "Salt to taste",
      "Fresh coriander leaves for garnish"
    ],
    instructions: [
      "Wash the fish pieces and marinate with a pinch of turmeric and salt. Set aside for 15 minutes.",
      "In a blender, grind coconut, red chilies, turmeric, coriander seeds, cumin seeds, garlic, ginger, and tamarind to a smooth paste using a little water.",
      "Heat oil in a pan. Add chopped onions and sauté until translucent.",
      "Add chopped tomatoes and cook until they turn soft and mushy.",
      "Add the ground paste and fry for 2-3 minutes until the raw smell disappears.",
      "Add 2 cups of water and salt. Bring to a boil.",
      "Gently add the fish pieces and simmer for 10-12 minutes on low heat. Do not stir vigorously to avoid breaking the fish.",
      "Garnish with fresh coriander leaves and serve hot with steamed rice."
    ],
    videoId: "-QEfeKjpzpw",
    tips: [
      "For authentic flavor, use fresh coconut instead of packaged coconut milk.",
      "Kokum gives a tangy flavor, but if unavailable, tamarind is a good substitute.",
      "Do not overcook the fish as it can become rubbery."
    ]
  },
  {
    id: 2,
    name: "Goan Crab Curry",
    category: "seafood",
    image: "https://www.ndtv.com/cooks/images/goan.crab.curry.jpg",
    description: "A spicy and aromatic crab curry cooked in coconut gravy.",
    time: "40 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "4 medium-sized crabs, cleaned and cut",
      "1 cup grated coconut",
      "2 onions, finely chopped",
      "2 tomatoes, chopped",
      "8 dried red chilies",
      "1 tsp turmeric powder",
      "1 tsp coriander seeds",
      "1 tsp cumin seeds",
      "4 garlic cloves",
      "1-inch ginger",
      "2 tbsp coconut oil",
      "Salt to taste",
      "Fresh coriander leaves for garnish"
    ],
    instructions: [
      "Grind coconut, red chilies, turmeric, coriander seeds, cumin seeds, garlic, and ginger to a smooth paste.",
      "Heat oil in a pan. Add chopped onions and sauté until golden.",
      "Add chopped tomatoes and cook until soft.",
      "Add the ground paste and fry for 3 minutes until fragrant.",
      "Add 2 cups water and salt. Bring to a boil.",
      "Add the crab pieces and cook covered for 20 minutes on medium heat.",
      "Garnish with fresh coriander and serve hot with rice."
    ],
    videoId: "_qo0GZKdS28",
    tips: [
      "Clean the crabs thoroughly before cooking.",
      "You can add a teaspoon of tamarind paste for tanginess.",
      "Serve with neer dosa or steamed rice for a complete meal."
    ]
  },
  {
    id: 3,
    name: "Prawn Balchão",
    category: "seafood",
    image:
      "https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/1671166439873-B4VPXCUQH3CGHJUJ1WGB/1871-Goan-Prawn-Balchao-Curry-With-Basmati-Rice.jpeg?format=1500w",
    description: "A spicy and tangy prawn pickle that can be stored for weeks.",
    time: "30 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g prawns, cleaned and deveined",
      "2 onions, finely chopped",
      "2 tomatoes, chopped",
      "10 dried red chilies",
      "1 tsp mustard seeds",
      "1 tsp cumin seeds",
      "4 garlic cloves",
      "1-inch ginger",
      "½ cup vinegar",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Grind red chilies, mustard seeds, cumin seeds, garlic, ginger, and vinegar to a paste.",
      "Heat oil in a pan. Add onions and sauté until golden.",
      "Add tomatoes and cook until soft.",
      "Add the ground paste and fry until oil separates.",
      "Add prawns and a little water. Cook for 10 minutes.",
      "Store in an airtight jar once cooled."
    ],
    videoId: "-5zWDWe1jTg",
    tips: [
      "Balchão tastes better after a couple of days as flavors develop.",
      "You can use this same recipe for fish or meat.",
      "Store in a cool, dry place for up to a month."
    ]
  },
  {
    id: 4,
    name: "Goan Prawn Curry",
    category: "seafood",
    image:
      "https://www.awesomecuisine.com/wp-content/uploads/2009/10/Goan-Prawn-Curry-500x375.jpg",
    description: "A classic Goan prawn curry with coconut and spices.",
    time: "30 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "500g prawns, cleaned and deveined",
      "1 cup grated coconut",
      "1 onion, finely chopped",
      "2 tomatoes, chopped",
      "6-8 dried red chilies",
      "1 tsp turmeric powder",
      "1 tsp coriander seeds",
      "1 tsp cumin seeds",
      "4 garlic cloves",
      "1-inch ginger",
      "1 tamarind ball",
      "2 tbsp coconut oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Grind coconut, red chilies, turmeric, coriander, cumin, garlic, ginger, and tamarind to a paste.",
      "Heat oil in a pan. Sauté onions until golden.",
      "Add tomatoes and cook until soft.",
      "Add the ground paste and fry for 2-3 minutes.",
      "Add 2 cups water and salt. Bring to a boil.",
      "Add prawns and cook for 8-10 minutes.",
      "Garnish with coriander and serve with rice."
    ],
    videoId: "E-vKzY3UwZc",
    tips: [
      "Do not overcook prawns as they can become rubbery.",
      "Adjust the number of chilies according to your preference.",
      "Use fresh coconut for authentic flavor."
    ]
  },
  {
    id: 5,
    name: "Mackerel Recheado",
    category: "seafood",
    image:
      "https://theyummydelights.com/wp-content/uploads/2024/12/goan-recheado-fish-fry.jpg",
    description: "Mackerel stuffed with a spicy red masala and pan-fried.",
    time: "40 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "4 mackerels, cleaned and slit from the back",
      "10-12 dried red chilies",
      "1 tsp cumin seeds",
      "1 tsp turmeric powder",
      "1-inch ginger",
      "6 garlic cloves",
      "2 tbsp vinegar",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Grind red chilies, cumin, turmeric, ginger, garlic, and vinegar to a paste.",
      "Stuff the mackerels with this masala.",
      "Heat oil in a pan. Pan-fry the stuffed mackerels until golden on both sides.",
      "Serve hot with rice or bread."
    ],
    videoId: "Azd3MBl1kgE",
    tips: [
      "Make deep slits in the fish for the masala to penetrate.",
      "You can also bake the fish for a healthier option.",
      "Serve with a side of onion salad."
    ]
  },
  {
    id: 6,
    name: "Goan Squid Curry",
    category: "seafood",
    image:
      "https://deliciousmemorieswithalves.wordpress.com/wp-content/uploads/2020/11/goan-ambot-tik.png",
    description: "A tender squid curry cooked in coconut gravy.",
    time: "30 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g squid, cleaned and cut into rings",
      "1 cup grated coconut",
      "1 onion, finely chopped",
      "2 tomatoes, chopped",
      "6-8 dried red chilies",
      "1 tsp turmeric powder",
      "1 tsp coriander seeds",
      "1 tsp cumin seeds",
      "4 garlic cloves",
      "1-inch ginger",
      "1 tamarind ball",
      "2 tbsp coconut oil",
      "Salt to taste"
    ],
    instructions: [
      "Grind coconut, red chilies, turmeric, coriander, cumin, garlic, ginger, and tamarind to a paste.",
      "Heat oil in a pan. Sauté onions until golden.",
      "Add tomatoes and cook until soft.",
      "Add the ground paste and fry for 2-3 minutes.",
      "Add 2 cups water and salt. Bring to a boil.",
      "Add squid and cook for 8-10 minutes (do not overcook).",
      "Serve hot with rice."
    ],
    videoId: "oYJzulpUcLM",
    tips: [
      "Squid cooks quickly - overcooking makes it rubbery.",
      "You can add vegetables like potatoes to the curry.",
      "Fresh coconut gives the best flavor."
    ]
  },
  {
    id: 7,
    name: "Goan Oyster Sukka",
    category: "seafood",
    image:
      "https://i.ytimg.com/vi/sTO22Qqno7Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCaq0omxYIPZaqmmUWxgcsTuvLVdQ",
    description: "A dry preparation of oysters with coconut and spices.",
    time: "25 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g oysters, cleaned",
      "1 cup grated coconut",
      "2 onions, finely chopped",
      "4-5 green chilies, slit",
      "1 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tbsp ginger-garlic paste",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Heat oil in a pan. Sauté onions until golden.",
      "Add green chilies and ginger-garlic paste. Fry for 2 minutes.",
      "Add turmeric, red chili powder, and salt. Mix well.",
      "Add oysters and cook for 5-7 minutes.",
      "Add grated coconut and cook for another 5 minutes.",
      "Garnish with coriander and serve hot."
    ],
    videoId: "xXBK2mQDDzE",
    tips: [
      "Do not overcook the oysters as they can become tough.",
      "You can use this same recipe for clams or mussels.",
      "Serve as a side dish or with drinks."
    ]
  },
  {
    id: 8,
    name: "Goan Stuffed Pomfret",
    category: "seafood",
    image:
      "https://bongong.com/images/recipes/Stuffed_Pomfret/IMG_1224_1129784283_center.jpg",
    description: "Pomfret stuffed with a spicy masala and pan-fried.",
    time: "30 mins",
    servings: 2,
    difficulty: "Medium",
    ingredients: [
      "2 pomfrets, cleaned and slitted",
      "1 cup grated coconut",
      "2 onions, finely chopped",
      "4-5 green chilies",
      "1 tsp turmeric powder",
      "1 tbsp ginger-garlic paste",
      "2 tbsp oil",
      "Salt to taste",
      "Lemon wedges for serving"
    ],
    instructions: [
      "Grind coconut, green chilies, turmeric, and ginger-garlic paste to a coarse paste.",
      "Mix with chopped onions and salt to make the stuffing.",
      "Stuff the pomfrets with this mixture.",
      "Heat oil in a pan. Pan-fry the stuffed pomfrets until golden on both sides.",
      "Serve hot with lemon wedges."
    ],
    videoId: "AsSyFzJPCX4",
    tips: [
      "Make deep slits in the fish for the stuffing to penetrate.",
      "You can also bake the fish for a healthier option.",
      "Serve with a side of salad or rice."
    ]
  },
  {
    id: 9,
    name: "Goan Prawn Pulav",
    category: "seafood",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7_q2oat7NW_Vs6OSecKcp8Z_iMCtswBp6w&s",
    description: "A fragrant rice dish with prawns and spices.",
    time: "40 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g prawns, cleaned and deveined",
      "2 cups basmati rice, washed and soaked",
      "2 onions, sliced",
      "1 tomato, chopped",
      "4-5 green chilies, slit",
      "1 tsp turmeric powder",
      "1 tsp garam masala",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Heat oil in a pan. Sauté prawns until pink. Remove and set aside.",
      "In the same pan, sauté onions until golden.",
      "Add tomatoes and green chilies. Cook until tomatoes are soft.",
      "Add rice, turmeric, garam masala, and salt. Stir for 2 minutes.",
      "Add 4 cups water and bring to a boil.",
      "Add prawns, cover and cook on low heat until rice is done.",
      "Garnish with coriander and serve hot."
    ],
    videoId: "AC5sNQf-13A",
    tips: [
      "Do not overcook the prawns as they can become rubbery.",
      "You can add vegetables like peas and carrots.",
      "Serve with raita or pickle."
    ]
  },
  // Meat Dishes (8)
  {
    id: 10,
    name: "Chicken Xacuti",
    category: "meat",
    image:
      "https://i0.wp.com/delishbite.in/wp-content/uploads/2022/03/final_logo-1.jpg?resize=1000%2C1000&ssl=1",
    description:
      "A rich and flavorful chicken curry with a complex spice blend.",
    time: "45 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g chicken, cut into pieces",
      "1 cup grated coconut",
      "3 onions, finely chopped",
      "2 tomatoes, chopped",
      "6 dried red chilies",
      "1 tbsp coriander seeds",
      "1 tsp poppy seeds",
      "1 tsp fennel seeds",
      "6 peppercorns",
      "2 cloves",
      "1-inch cinnamon stick",
      "4 garlic cloves",
      "1-inch ginger",
      "2 tbsp coconut oil",
      "Salt to taste",
      "Fresh coriander leaves for garnish"
    ],
    instructions: [
      "Dry roast grated coconut until golden brown. Set aside to cool.",
      "In the same pan, dry roast red chilies, coriander seeds, poppy seeds, fennel seeds, peppercorns, cloves, and cinnamon until fragrant.",
      "Grind the roasted coconut and spices along with garlic and ginger to a fine paste using a little water.",
      "Heat oil in a pan. Add chopped onions and sauté until golden brown.",
      "Add chopped tomatoes and cook until soft.",
      "Add the ground paste and sauté for 3-4 minutes until oil separates from the masala.",
      "Add chicken pieces and mix well to coat with the masala.",
      "Add 1 cup water and salt. Cover and cook for 25-30 minutes until chicken is tender.",
      "Garnish with fresh coriander leaves and serve hot with rice or sannas."
    ],
    videoId: "ALjKR8eawG0",
    tips: [
      "Roasting the coconut and spices enhances the flavor of the dish.",
      "Adjust the number of red chilies according to your spice preference.",
      "For a thicker gravy, reduce the amount of water added."
    ]
  },
  {
    id: 11,
    name: "Pork Vindaloo",
    category: "meat",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpP4mjPbH7wUfAMe1iR7vMqtHoa5hZymShA&s",
    description: "A fiery and tangy pork dish with Portuguese origins.",
    time: "24 hours (including marination)",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g pork, cut into cubes",
      "3 onions, sliced",
      "4 tomatoes, chopped",
      "8-10 dried red chilies",
      "2 tbsp vinegar",
      "1 tsp turmeric powder",
      "1 tsp cumin seeds",
      "1 tsp coriander seeds",
      "6 garlic cloves",
      "1-inch ginger",
      "2 tbsp oil",
      "Salt to taste",
      "1 tsp sugar (optional)"
    ],
    instructions: [
      "Grind red chilies, turmeric, cumin seeds, coriander seeds, garlic, ginger, and vinegar to a smooth paste.",
      "Marinate the pork with this paste, cover, and refrigerate overnight.",
      "Heat oil in a pressure cooker or heavy-bottomed pan. Add sliced onions and sauté until golden brown.",
      "Add chopped tomatoes and cook until soft and mushy.",
      "Add the marinated pork along with the marinade. Cook for 5 minutes on medium heat.",
      "Add 1 cup water and salt. Pressure cook for 3-4 whistles or simmer covered for 45-60 minutes until pork is tender.",
      "If the gravy is too thin, simmer uncovered to thicken it.",
      "Adjust seasoning and add sugar if needed to balance the tanginess.",
      "Serve hot with rice or poee (Goan bread)."
    ],
    videoId: "itEv7Y96Dok",
    tips: [
      "Marinating the pork overnight enhances the flavor and tenderizes the meat.",
      "For authentic vindaloo, use Kashmiri red chilies for color and moderate heat.",
      "Vindaloo tastes even better the next day as flavors develop further."
    ]
  },
  {
    id: 12,
    name: "Sorpotel",
    category: "meat",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    description:
      "A spicy pork dish with liver, traditionally served at Goan feasts.",
    time: "2 hours",
    servings: 6,
    difficulty: "Hard",
    ingredients: [
      "500g pork (with some liver)",
      "4 onions, finely chopped",
      "3 tomatoes, chopped",
      "10-12 dried red chilies",
      "1 tbsp vinegar",
      "1 tsp turmeric powder",
      "1 tsp cumin seeds",
      "1 tsp coriander seeds",
      "6 garlic cloves",
      "1-inch ginger",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Boil pork and liver until tender. Drain and dice into small cubes.",
      "Grind red chilies, cumin, turmeric, ginger, garlic, and vinegar to a paste.",
      "Heat oil in a pan. Add onions and sauté until golden.",
      "Add tomatoes and cook until soft.",
      "Add the masala paste and fry for 5 minutes.",
      "Add the diced pork and liver. Mix well.",
      "Add 1 cup water and simmer for 45 minutes until gravy thickens.",
      "Sorpotel tastes better the next day as flavors meld together."
    ],
    videoId: "attl622xEzM",
    tips: [
      "Sorpotel tastes best when prepared a day in advance.",
      "The inclusion of liver is traditional but optional.",
      "Serve with sannas or pav (bread rolls) for  an authentic experience."
    ]
  },
  {
    id: 13,
    name: "Chicken Cafreal",
    category: "meat",
    image:
      "https://www.indiansupperclub.com/wp-content/uploads/2023/08/Chicken-Cafreal.jpg",
    description:
      "A green masala marinated chicken dish with Portuguese influence.",
    time: "45 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g chicken, cut into pieces",
      "1 cup coriander leaves",
      "1 cup mint leaves",
      "4-5 green chilies",
      "1-inch ginger",
      "6 garlic cloves",
      "1 tsp cumin seeds",
      "1 tsp peppercorns",
      "2 tbsp vinegar",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Grind coriander, mint, green chilies, ginger, garlic, cumin, peppercorns, and vinegar to a paste.",
      "Marinate chicken with this paste for at least 2 hours.",
      "Heat oil in a pan. Add the marinated chicken and cook on medium heat.",
      "Cover and cook for 25-30 minutes, stirring occasionally.",
      "Serve hot with bread or rice."
    ],
    videoId: "EzlVTL6OJ_8",
    tips: [
      "Marinate the chicken overnight for deeper flavor.",
      "You can grill the chicken instead of pan-frying.",
      "Serve with a squeeze of lime for extra tang."
    ]
  },
  {
    id: 14,
    name: "Goan Pork Assado",
    category: "meat",
    image:
      "https://i0.wp.com/debzdelicious.com/wp-content/uploads/goan-pork-roast-recipe-1.jpg?fit=760%2C1140&ssl=1",
    description: "A slow-cooked pork dish with a sweet and spicy glaze.",
    time: "2 hours",
    servings: 6,
    difficulty: "Hard",
    ingredients: [
      "1kg pork shoulder, with fat",
      "4 onions, sliced",
      "10-12 garlic cloves, crushed",
      "2-inch ginger, julienned",
      "10 dried red chilies",
      "1 cup vinegar",
      "½ cup jaggery, grated",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Marinate pork with crushed garlic, ginger, salt, and half the vinegar for 2 hours.",
      "Heat oil in a heavy-bottomed pan. Sear the pork on all sides.",
      "Add onions and sauté until golden.",
      "Add remaining vinegar, jaggery, and red chilies.",
      "Add 1 cup water, cover and simmer for 1.5-2 hours until pork is tender.",
      "Uncover and cook until the gravy thickens and glazes the pork.",
      "Serve hot with sannas or bread."
    ],
    videoId: "phzZVPQEJv4",
    tips: [
      "Use pork with some fat for more flavor and tenderness.",
      "The jaggery adds a unique sweetness that balances the spice.",
      "This dish tastes even better the next day."
    ]
  },
  {
    id: 15,
    name: "Goan Sausage Pulao",
    category: "meat",
    image: "https://itsgoa.com/wp-content/uploads/2022/03/20220328_070414.jpg",
    description: "A flavorful rice dish with Goan sausages and spices.",
    time: "45 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "250g Goan sausages, sliced",
      "2 cups basmati rice, washed and soaked",
      "2 onions, sliced",
      "1 tomato, chopped",
      "4-5 green chilies, slit",
      "1 tsp turmeric powder",
      "1 tsp garam masala",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Heat oil in a pan. Sauté sausages until browned. Remove and set aside.",
      "In the same pan, sauté onions until golden.",
      "Add tomatoes and green chilies. Cook until tomatoes are soft.",
      "Add rice, turmeric, garam masala, and salt. Stir for 2 minutes.",
      "Add 4 cups water and bring to a boil.",
      "Add sausages, cover and cook on low heat until rice is done.",
      "Garnish with coriander and serve hot."
    ],
    videoId: "eKaMw6KQy0Y",
    tips: [
      "You can add vegetables like peas and carrots to the pulao.",
      "Soaking rice for 30 minutes ensures even cooking.",
      "Serve with raita or pickle."
    ]
  },
  {
    id: 16,
    name: "Goan Chicken Roast",
    category: "meat",
    image:
      "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/06/GoanRoastChicken-768x960-1.jpg",
    description: "A spicy and tangy roasted chicken dish.",
    time: "1 hour",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "1 whole chicken, cut into pieces",
      "2 onions, sliced",
      "2 tomatoes, chopped",
      "10-12 dried red chilies",
      "1 tbsp vinegar",
      "1 tsp turmeric powder",
      "1 tsp cumin seeds",
      "1 tsp coriander seeds",
      "6 garlic cloves",
      "1-inch ginger",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Grind red chilies, turmeric, cumin, coriander, garlic, ginger, and vinegar to a paste.",
      "Marinate chicken with this paste for at least 2 hours.",
      "Heat oil in a pan. Sauté onions until golden.",
      "Add tomatoes and cook until soft.",
      "Add marinated chicken and cook on medium heat for 30-40 minutes.",
      "Serve hot with rice or bread."
    ],
    videoId: "osWdRmYD1Jc",
    tips: [
      "You can roast the chicken in the oven for a different texture.",
      "Marinate overnight for best results.",
      "Adjust the number of chilies according to your spice preference."
    ]
  },
  {
    id: 17,
    name: "Goan Chourico Pulao",
    category: "meat",
    image:
      "https://www.bigfattummy.com/wp-content/uploads/2018/01/Goan-Chorizo-Pulao-10-1200x900.jpg",
    description: "A flavorful rice dish with Goan chourico sausages.",
    time: "40 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "250g Goan chourico, sliced",
      "2 cups basmati rice, washed and soaked",
      "2 onions, sliced",
      "1 tomato, chopped",
      "4-5 green chilies, slit",
      "1 tsp turmeric powder",
      "1 tsp garam masala",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Heat oil in a pan. Sauté chourico until browned. Remove and set aside.",
      "In the same pan, sauté onions until golden.",
      "Add tomatoes and green chilies. Cook until tomatoes are soft.",
      "Add rice, turmeric, garam masala, and salt. Stir for 2 minutes.",
      "Add 4 cups water and bring to a boil.",
      "Add chourico, cover and cook on low heat until rice is done.",
      "Garnish with coriander and serve hot."
    ],
    videoId: "eKaMw6KQy0Y",
    tips: [
      "Chourico is a spicy Goan sausage - adjust according to your taste.",
      "You can add vegetables like peas and carrots.",
      "Serve with a side of raita or salad."
    ]
  },
  // Vegetarian (6)
  {
    id: 18,
    name: "Goan Vegetable Caldine",
    category: "vegetarian",
    image:
      "https://madscookhouse.com/wp-content/uploads/2024/05/Vegetable-Caldin-in-Mild-Coconut-Gravy-500x375.jpg",
    description: "A mild and creamy coconut-based vegetable curry.",
    time: "30 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "2 cups mixed vegetables (potatoes, carrots, beans, peas)",
      "1 cup grated coconut",
      "1 onion, finely chopped",
      "1 tomato, chopped",
      "4 green chilies, slit",
      "1 tsp turmeric powder",
      "1 tsp coriander seeds",
      "1 tsp cumin seeds",
      "4 garlic cloves",
      "1-inch ginger",
      "1 small tamarind ball",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Grind coconut, turmeric, coriander, cumin, garlic, ginger, and tamarind to a paste.",
      "Heat oil in a pan. Add onion and sauté until translucent.",
      "Add tomato and cook until soft.",
      "Add the ground masala and fry for 2 minutes.",
      "Add 2 cups water, green chilies, and salt. Bring to a boil.",
      "Add vegetables and cook until tender.",
      "Serve hot with rice or chapatis."
    ],
    videoId: "Xro68sgAQuE",
    tips: [
      "You can use any seasonal vegetables of your choice.",
      "For a non-vegetarian version, add prawns or fish.",
      "Adjust the number of green chilies according to your spice preference."
    ]
  },
  {
    id: 19,
    name: "Alsande Tonak",
    category: "vegetarian",
    image:
      "https://i0.wp.com/delishbite.in/wp-content/uploads/2022/11/blog_4-4.jpg?resize=1000%2C800&ssl=1",
    description: "A spicy black-eyed peas curry with coconut.",
    time: "1 hour",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "1 cup black-eyed peas, soaked overnight",
      "1 cup grated coconut",
      "2 onions, finely chopped",
      "1 tomato, chopped",
      "6 dried red chilies",
      "1 tsp coriander seeds",
      "1 tsp cumin seeds",
      "4 garlic cloves",
      "1-inch ginger",
      "1 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Boil black-eyed peas until soft but not mushy.",
      "Grind coconut, red chilies, coriander, cumin, garlic, and ginger to a paste.",
      "Heat oil, sauté onions until golden.",
      "Add tomato and cook until soft.",
      "Add the ground paste and fry for 3-4 minutes.",
      "Add boiled peas and simmer for 10 minutes.",
      "Serve hot with rice or bread."
    ],
    videoId: "zBXsbHOvS78",
    tips: [
      "Soaking peas overnight reduces cooking time.",
      "You can use canned black-eyed peas for convenience.",
      "This curry tastes even better the next day."
    ]
  },
  {
    id: 20,
    name: "Goan Khatkhate",
    category: "vegetarian",
    image:
      "https://i0.wp.com/deliciousmemorieswithalves.wordpress.com/wp-content/uploads/2016/05/goan-khatkhate.jpg?fit=1200%2C918&ssl=1",
    description: "A flavorful mixed vegetable stew with coconut and spices.",
    time: "40 mins",
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      "2 cups mixed vegetables (pumpkin, drumsticks, potatoes, carrots)",
      "½ cup black-eyed peas, soaked",
      "1 cup grated coconut",
      "6 dried red chilies",
      "1 tsp turmeric powder",
      "1 tsp coriander seeds",
      "1 tsp cumin seeds",
      "½ tsp asafoetida (hing)",
      "5 kokum petals",
      "Salt to taste"
    ],
    instructions: [
      "Grind coconut, red chilies, turmeric, coriander, and cumin to a paste.",
      "Boil vegetables and black-eyed peas until tender.",
      "Add the ground paste, hing, and salt. Simmer for 15 minutes.",
      "Add kokum and cook for 5 more minutes.",
      "Serve hot with rice or chapatis."
    ],
    videoId: "439JSqXZzrw",
    tips: [
      "You can use any seasonal vegetables of your choice.",
      "Kokum gives a tangy flavor - adjust according to taste.",
      "This stew is often prepared during festivals."
    ]
  },
  {
    id: 21,
    name: "Goan Mushroom Xacuti",
    category: "vegetarian",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    description: "A vegetarian version of the classic Xacuti with mushrooms.",
    time: "30 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g mushrooms, sliced",
      "1 cup grated coconut",
      "2 onions, finely chopped",
      "2 tomatoes, chopped",
      "6 dried red chilies",
      "1 tbsp coriander seeds",
      "1 tsp poppy seeds",
      "1 tsp fennel seeds",
      "6 peppercorns",
      "2 cloves",
      "1 cinnamon stick",
      "4 garlic cloves",
      "1-inch ginger",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Dry roast coconut until golden. Set aside to cool.",
      "Dry roast red chilies, coriander, poppy seeds, fennel, peppercorns, cloves, and cinnamon until fragrant.",
      "Grind the roasted coconut and spices with garlic and ginger to a fine paste.",
      "Heat oil in a pan. Add onions and sauté until golden.",
      "Add tomatoes and cook until soft.",
      "Add the ground paste and sauté for 3-4 minutes.",
      "Add mushrooms and 1 cup water. Cook for 10-12 minutes.",
      "Serve hot with rice or bread."
    ],
    videoId: "UvTnMaQk1hE",
    tips: [
      "You can use other vegetables like potatoes or cauliflower.",
      "Adjust the spice level according to your preference.",
      "The roasted coconut gives a unique flavor to the dish."
    ]
  },
  {
    id: 22,
    name: "Goan Kokum Curry",
    category: "vegetarian",
    image: "https://i.ytimg.com/vi/yUWGLgym9bw/maxresdefault.jpg",
    description: "A tangy and refreshing curry made with kokum.",
    time: "25 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "10-12 kokum petals, soaked in water",
      "1 cup grated coconut",
      "2 green chilies, slit",
      "1 tsp mustard seeds",
      "2 dried red chilies",
      "1 tsp turmeric powder",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Grind coconut with turmeric and a little water to a smooth paste.",
      "Heat oil in a pan. Splutter mustard seeds and red chilies.",
      "Add green chilies and sauté for a minute.",
      "Add the coconut paste and cook for 2-3 minutes.",
      "Add kokum with its water and salt. Simmer for 5 minutes.",
      "Serve hot with rice."
    ],
    videoId: "lARipcIPMh4",
    tips: [
      "Kokum gives a unique tangy flavor to the curry.",
      "You can add vegetables like okra or drumsticks.",
      "This curry is very refreshing in hot weather."
    ]
  },
  {
    id: 23,
    name: "Goan Mushroom Fry",
    category: "vegetarian",
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2013/06/mushroom-chilli-fry-recipe-22.jpg",
    description: "A spicy and dry mushroom preparation.",
    time: "20 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "500g mushrooms, sliced",
      "2 onions, finely chopped",
      "4-5 green chilies, slit",
      "1 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tbsp ginger-garlic paste",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Heat oil in a pan. Sauté onions until golden.",
      "Add green chilies and ginger-garlic paste. Fry for 2 minutes.",
      "Add turmeric, red chili powder, and salt. Mix well.",
      "Add mushrooms and cook on high heat for 5-7 minutes.",
      "Garnish with coriander and serve hot."
    ],
    videoId: "lpaltpydHuI",
    tips: [
      "Do not add water as mushrooms release their own moisture.",
      "Cook on high heat to prevent mushrooms from becoming soggy.",
      "Serve as a side dish or with drinks."
    ]
  },
  // Desserts (8)
  {
    id: 24,
    name: "Bebinca",
    category: "dessert",
    image:
      "https://www.nestleprofessional.in/sites/default/files/2025-02/Bebinca-756x471.jpg",
    description:
      "A traditional Goan layered dessert often served during festivals.",
    time: "2 hours",
    servings: 8,
    difficulty: "Hard",
    ingredients: [
      "2 cups coconut milk",
      "1½ cups sugar",
      "1½ cups all-purpose flour",
      "12 egg yolks",
      "½ tsp nutmeg powder",
      "2 tbsp ghee (clarified butter)",
      "½ cup water",
      "Pinch of salt"
    ],
    instructions: [
      "Preheat oven to 180°C (350°F). Grease a baking pan with ghee.",
      "In a bowl, beat egg yolks and sugar until pale and creamy.",
      "Gradually add coconut milk while continuously whisking.",
      "Sift in flour and nutmeg powder. Mix until smooth batter forms.",
      "Add a pinch of salt and mix well.",
      "Pour a thin layer of batter into the greased pan (about ¼ cup).",
      "Bake for 10-12 minutes until golden brown.",
      "Remove from oven, brush with ghee, and add another layer of batter.",
      "Repeat the process until all batter is used, creating 8-12 layers.",
      "After the final layer, bake for additional 5 minutes.",
      "Cool completely before slicing into diamond-shaped pieces."
    ],
    videoId: "87ZtFqUWooo",
    tips: [
      "Ensure each layer is fully cooked before adding the next one.",
      "Brushing ghee between layers adds richness and prevents sticking.",
      "Bebinca can be stored for up to a week in an airtight container."
    ]
  },
  {
    id: 25,
    name: "Doce de Grao",
    category: "dessert",
    image: "https://aromaticessence.co/wp-content/uploads/2015/12/IMG_3439.jpg",
    description: "A sweet chickpea and coconut dessert.",
    time: "1 hour",
    servings: 8,
    difficulty: "Medium",
    ingredients: [
      "2 cups chana dal (split chickpeas)",
      "2 cups grated coconut",
      "2 cups sugar",
      "½ cup ghee",
      "½ tsp cardamom powder",
      "Chopped nuts for garnish"
    ],
    instructions: [
      "Boil chana dal until very soft. Drain and mash well.",
      "In a heavy-bottomed pan, cook dal, coconut, and sugar in ghee.",
      "Stir continuously until the mixture thickens and leaves the sides.",
      "Add cardamom powder and mix well.",
      "Spread on a greased plate, cool, and cut into pieces.",
      "Garnish with chopped nuts."
    ],
    videoId: "aHY5w85fGBM",
    tips: [
      "Stir continuously to prevent burning.",
      "The consistency should be thick but spreadable.",
      "Store in an airtight container for up to a week."
    ]
  },
  {
    id: 26,
    name: "Kulkuls",
    category: "dessert",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-7Xpl_KiAsRCoJzcKLxAHMbT_Illmo03sA&s",
    description: "Crispy, curl-shaped Christmas sweets.",
    time: "1.5 hours",
    servings: 8,
    difficulty: "Medium",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tbsp butter",
      "2 tbsp sugar",
      "½ cup coconut milk",
      "1 egg",
      "Oil for frying",
      "Sugar syrup for coating (optional)"
    ],
    instructions: [
      "Mix flour, butter, sugar, coconut milk, and egg to form a dough.",
      "Take small portions and shape into curls using a fork or special tool.",
      "Deep fry in hot oil until golden brown.",
      "Optional: Coat in sugar syrup while warm.",
      "Cool completely and store in airtight container."
    ],
    videoId: "ndkpUO6plKM",
    tips: [
      "The dough should be firm but pliable.",
      "Fry on medium heat to ensure even cooking.",
      "Traditional Christmas treat in Goan households."
    ]
  },
  {
    id: 27,
    name: "Dodol",
    category: "dessert",
    image:
      "https://www.celebrationinmykitchen.com/uploads/4/8/6/2/48622077/ragi-dodol1_orig.jpg",
    description: "A dense, fudge-like coconut and jaggery sweet.",
    time: "2 hours",
    servings: 10,
    difficulty: "Hard",
    ingredients: [
      "2 cups coconut milk",
      "1½ cups rice flour",
      "2 cups jaggery, grated",
      "½ tsp nutmeg powder",
      "2 tbsp ghee"
    ],
    instructions: [
      "Mix coconut milk, rice flour, and jaggery in a heavy-bottomed pan.",
      "Cook on low heat, stirring continuously to prevent lumps.",
      "Add ghee gradually as the mixture thickens.",
      "Continue cooking until very thick and glossy.",
      "Add nutmeg powder and mix well.",
      "Pour into greased tray, cool, and cut into pieces."
    ],
    videoId: "XnQJbkZFaTE",
    tips: [
      "Constant stirring is essential to prevent burning.",
      "The cooking process requires patience - don't rush.",
      "Traditional festival sweet, especially for Christmas."
    ]
  },
  {
    id: 28,
    name: "Alle Belle",
    category: "dessert",
    image:
      "https://xantilicious.com/wp-content/uploads/2016/06/IMG_1978123.jpg",
    description: "A traditional Goan coconut and jaggery pancake.",
    time: "30 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "1 cup all-purpose flour",
      "1 cup grated coconut",
      "1 cup jaggery, grated",
      "2 eggs",
      "1 cup milk",
      "½ tsp cardamom powder",
      "2 tbsp ghee",
      "Pinch of salt"
    ],
    instructions: [
      "Mix flour, eggs, milk, and salt to make a smooth batter.",
      "In a separate bowl, mix coconut, jaggery, and cardamom.",
      "Heat a non-stick pan. Pour a ladle of batter and spread evenly.",
      "Cook on one side, then flip and cook the other side.",
      "Place a spoonful of coconut-jaggery mixture on one half and fold.",
      "Serve warm."
    ],
    videoId: "S4TtmA-g-gI",
    tips: [
      "Make sure the pancake is thin and evenly cooked.",
      "You can adjust the sweetness by varying the jaggery amount.",
      "Serve as a snack or dessert."
    ]
  },
  {
    id: 29,
    name: "Patoleo",
    category: "dessert",
    image:
      "https://images.livemint.com/img/2023/08/22/1200x900/patoleo_recipe_Goan_sweet_1692675132886_1692675138458.png",
    description: "Sweet coconut and jaggery stuffed turmeric leaf parcels.",
    time: "1 hour",
    servings: 6,
    difficulty: "Hard",
    ingredients: [
      "2 cups rice flour",
      "1 cup grated coconut",
      "1 cup jaggery, grated",
      "½ tsp cardamom powder",
      "Turmeric leaves for wrapping",
      "Water as needed",
      "Pinch of salt"
    ],
    instructions: [
      "Mix rice flour with water and salt to make a smooth dough.",
      "In a separate bowl, mix coconut, jaggery, and cardamom for the filling.",
      "Take a turmeric leaf, apply a little oil.",
      "Spread a portion of dough on the leaf.",
      "Place a spoonful of filling in the center.",
      "Fold the leaf and steam for 20-25 minutes.",
      "Serve warm or at room temperature."
    ],
    videoId: "V87eP4uLfas",
    tips: [
      "If turmeric leaves are unavailable, you can use banana leaves.",
      "The leaf imparts a unique flavor to the dish.",
      "These are traditionally made during festivals."
    ]
  },
  {
    id: 30,
    name: "Goan Banana Halwa",
    category: "dessert",
    image:
      "https://www.shutterstock.com/image-photo/banana-halwa-kelyacho-halwo-traditional-260nw-547418353.jpg",
    description: "A sweet and rich halwa made with ripe bananas.",
    time: "30 mins",
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      "6 ripe bananas, mashed",
      "1 cup sugar",
      "½ cup ghee",
      "½ cup milk",
      "½ tsp cardamom powder",
      "2 tbsp chopped nuts for garnish"
    ],
    instructions: [
      "Heat ghee in a heavy-bottomed pan.",
      "Add mashed bananas and cook on low heat for 10 minutes.",
      "Add sugar and milk. Continue cooking, stirring frequently.",
      "Cook until the mixture thickens and starts leaving the sides of the pan.",
      "Add cardamom powder and mix well.",
      "Garnish with chopped nuts and serve warm or cold."
    ],
    videoId: "IBPnosbFDW0",
    tips: [
      "Use ripe bananas for the best flavor.",
      "Stir continuously to prevent burning.",
      "You can add a tablespoon of semolina for a different texture."
    ]
  },
  {
    id: 31,
    name: "Goan Coconut Ladoo",
    category: "dessert",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLq5TewDm-KD5kx_5TAvidgc0zZgaDeTDpUQ&s",
    description: "Sweet coconut balls made with jaggery.",
    time: "20 mins",
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      "2 cups grated coconut",
      "1 cup jaggery, grated",
      "½ tsp cardamom powder",
      "2 tbsp ghee",
      "2 tbsp milk"
    ],
    instructions: [
      "Heat ghee in a pan. Add grated coconut and roast for 2-3 minutes.",
      "Add jaggery and milk. Cook on low heat, stirring continuously.",
      "Cook until the mixture thickens and starts leaving the sides of the pan.",
      "Add cardamom powder and mix well.",
      "Let it cool slightly, then shape into small balls.",
      "Serve at room temperature."
    ],
    videoId: "XxAn5p3AN2U",
    tips: [
      "Use fresh coconut for the best flavor.",
      "You can add chopped nuts to the mixture.",
      "These ladoos can be stored in an airtight container for a week."
    ]
  },
  // Snacks (5)
  {
    id: 32,
    name: "Rissois de Camarão",
    category: "snacks",
    image:
      "https://leitesculinaria.com/wp-content/uploads/2020/10/portuguese-shrimp-turnovers-rissois-camarao.jpg",
    description: "Portuguese-inspired shrimp turnovers, a Goan favorite.",
    time: "1 hour",
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      "250g prawns, cleaned and chopped",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "1 tbsp butter",
      "1 tbsp flour",
      "½ cup milk",
      "½ tsp pepper",
      "Salt to taste",
      "For coating: flour, water, 2 eggs, breadcrumbs, oil"
    ],
    instructions: [
      "Cook onion, garlic, and prawns until prawns are done.",
      "Add flour and milk, cook until thickened. Cool the filling.",
      "Make dough, roll into circles, and stuff with filling.",
      "Dip in egg, coat with breadcrumbs, and deep fry until golden.",
      "Serve hot with sauce or chutney."
    ],
    videoId: "gRxiblIZ2Os",
    tips: [
      "You can make these in advance and freeze before frying.",
      "Serve as appetizers or snacks.",
      "Perfect for parties and gatherings."
    ]
  },
  {
    id: 33,
    name: "Goan Chorizo Pao",
    category: "snacks",
    image:
      "https://www.culinaryculture.co/wp-content/uploads/2022/02/Frame-41.png",
    description: "Spicy Goan sausages served in bread rolls.",
    time: "20 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "250g Goan chorizo",
      "2 onions, sliced",
      "2 green chilies, chopped",
      "1 tbsp oil",
      "Pao bread or rolls",
      "Lemon wedges for serving"
    ],
    instructions: [
      "Remove casing from chorizo and crumble the meat.",
      "Heat oil in a pan, sauté onions until golden.",
      "Add green chilies and chorizo, cook until oil separates.",
      "Stuff into pao bread or serve alongside.",
      "Serve hot with lemon wedges."
    ],
    videoId: "mmpoZw2BWB0",
    tips: [
      "Goan chorizo is quite spicy - adjust according to taste.",
      "Serve with a cold beer for the perfect snack.",
      "You can add tomatoes for a different flavor."
    ]
  },
  {
    id: 34,
    name: "Fish Cutlets",
    category: "snacks",
    image:
      "https://foodfoodonlyfood.wordpress.com/wp-content/uploads/2017/11/28.jpg?w=730",
    description: "Crispy fried fish patties perfect as snacks or appetizers.",
    time: "40 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "250g fish fillets (any white fish)",
      "2 potatoes, boiled and mashed",
      "1 onion, finely chopped",
      "2 green chilies, finely chopped",
      "2 tbsp coriander leaves, chopped",
      "1 tsp garam masala",
      "1 tsp turmeric powder",
      "2 eggs, beaten",
      "Breadcrumbs for coating",
      "Oil for frying",
      "Salt to taste"
    ],
    instructions: [
      "Steam or boil the fish until cooked. Flake it and remove any bones.",
      "In a bowl, mix flaked fish, mashed potatoes, onion, green chilies, coriander, garam masala, turmeric, and salt.",
      "Shape the mixture into cutlets or patties.",
      "Dip each cutlet in beaten egg, then coat with breadcrumbs.",
      "Heat oil in a pan and shallow fry the cutlets until golden brown on both sides.",
      "Serve hot with ketchup or chutney."
    ],
    videoId: "HKnxMrK7fSM",
    tips: [
      "You can prepare the cutlet mixture in advance and refrigerate.",
      "For a healthier option, bake the cutlets at 180°C for 20-25 minutes.",
      "Serve as a snack or in burger buns for a fish burger."
    ]
  },
  {
    id: 35,
    name: "Sannas",
    category: "snacks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0P0MbfWE8lYVWE-C7x1FyHpGamX32N43TA&s",
    description: "Soft and fluffy Goan rice cakes, perfect with curries.",
    time: "6-8 hours (including fermentation)",
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      "2 cups parboiled rice",
      "½ cup grated coconut",
      "1 tsp yeast",
      "2 tbsp sugar",
      "Salt to taste",
      "Water as needed"
    ],
    instructions: [
      "Soak rice for 4-5 hours. Grind with coconut to a smooth batter.",
      "Dissolve yeast and sugar in warm water. Add to the batter.",
      "Ferment the batter for 4-6 hours in a warm place.",
      "Pour batter into greased molds and steam for 20 minutes.",
      "Serve warm with curry or sorpotel."
    ],
    videoId: "xk5NGgSr3pk",
    tips: [
      "Ensure the batter is fermented well for fluffy sannas.",
      "You can use idli molds for perfect shape.",
      "Serve immediately for the best texture."
    ]
  },
  {
    id: 36,
    name: "Goan Coconut Pancakes",
    category: "snacks",
    image:
      "https://cdn.grofers.com/assets/search/usecase/banner/alle_belle__goan_coconut_pancake__01.png",
    description: "Soft and fluffy pancakes with coconut.",
    time: "25 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "1 cup all-purpose flour",
      "½ cup grated coconut",
      "2 eggs",
      "1 cup milk",
      "2 tbsp sugar",
      "1 tsp baking powder",
      "2 tbsp ghee",
      "Pinch of salt"
    ],
    instructions: [
      "Mix flour, baking powder, and salt in a bowl.",
      "In another bowl, beat eggs with sugar until fluffy.",
      "Add milk and grated coconut to the egg mixture.",
      "Combine wet and dry ingredients to make a smooth batter.",
      "Heat a non-stick pan. Pour a ladle of batter and cook until bubbles appear.",
      "Flip and cook the other side until golden.",
      "Serve hot with honey or syrup."
    ],
    videoId: "VnHsYEZwn0w",
    tips: [
      "Make sure the pan is not too hot to avoid burning.",
      "You can add cardamom powder for extra flavor.",
      "Serve as breakfast or snack."
    ]
  }
];

// Blog Data
const blogPosts = [
  {
    id: 1,
    title: "History of Goan Vindaloo",
    excerpt:
      "Discover the fascinating journey of Vindaloo from Portugal to Goa and how it became a global sensation.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "June 15, 2023"
  },
  {
    id: 2,
    title: "Top 10 Goan Street Foods You Must Try",
    excerpt:
      "From crispy fish cutlets to sweet bebinca, explore the vibrant street food culture of Goa.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "May 28, 2023"
  },
  {
    id: 3,
    title: "How Portuguese Influenced Goan Sweets",
    excerpt:
      "Learn how Portuguese colonization introduced new ingredients and techniques to Goan dessert-making.",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "April 12, 2023"
  },
  {
    id: 4,
    title: "Christmas Special: Traditional Goan Feast",
    excerpt:
      "Explore the elaborate Christmas meals that bring Goan families together during the festive season.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "December 5, 2023"
  }
];

// Gallery Data
const galleryImages = [
  {
    id: 1,
    src:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "meat"
  },
  {
    id: 2,
    src:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "meat"
  },
  {
    id: 3,
    src:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "dessert"
  },
  {
    id: 4,
    src:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "meat"
  },
  {
    id: 5,
    src:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "vegetarian"
  },
  {
    id: 6,
    src:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "snacks"
  },
  {
    id: 7,
    src:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "seafood"
  },
  {
    id: 8,
    src:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "snacks"
  },
  {
    id: 9,
    src:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "dessert"
  },
  {
    id: 10,
    src:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "vegetarian"
  }
];

// DOM Elements
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-links");
const featuredRecipesContainer = document.getElementById("featured-recipes");
const allRecipesContainer = document.getElementById("all-recipes");
const recipeDetailContainer = document.getElementById("recipe-detail-content");
const blogContainer = document.getElementById("blog-posts");
const galleryContainer = document.getElementById("gallery-images");
const filterButtons = document.querySelectorAll(".filter-btn");
const contactForm = document.getElementById("contactForm");
const loader = document.querySelector(".loader");

// Initialize the website
function init() {
  // Hide loader after page loads
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1500);
  });

  populateFeaturedRecipes();
  populateAllRecipes();
  populateBlogPosts();
  populateGallery();
  setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
  // Navigation
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pageId = link.getAttribute("data-page");
      showPage(pageId);

      // Update active nav link
      navLinks.forEach((nav) => nav.classList.remove("active"));
      link.classList.add("active");

      // Close mobile menu if open
      mobileNav.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active filter button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      filterRecipes(filter);
    });
  });

  // Filter links in footer
  document.querySelectorAll(".filter-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = link.getAttribute("data-filter");
      showPage("recipes");

      // Update active nav link
      navLinks.forEach((nav) => nav.classList.remove("active"));
      document.querySelector('[data-page="recipes"]').classList.add("active");

      // Update active filter button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      document
        .querySelector(`[data-filter="${filter}"]`)
        .classList.add("active");

      filterRecipes(filter);
    });
  });

  // Hamburger menu
  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Contact form validation
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateContactForm();
  });
}

// Show specific page
function showPage(pageId) {
  pages.forEach((page) => {
    page.classList.remove("active");
    if (page.id === pageId) {
      page.classList.add("active");
    }
  });

  // Scroll to top when changing pages
  window.scrollTo(0, 0);
}

// Populate featured recipes on homepage
function populateFeaturedRecipes() {
  // Show only first 6 recipes as featured
  const featuredRecipes = recipes.slice(0, 6);

  featuredRecipesContainer.innerHTML = featuredRecipes
    .map(
      (recipe) => `
        <div class="recipe-card" style="animation-delay: ${recipe.id * 0.1}s">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
            <div class="recipe-content">
                <span class="recipe-category">${
                  recipe.category.charAt(0).toUpperCase() +
                  recipe.category.slice(1)
                }</span>
                <h3 class="recipe-title">${recipe.name}</h3>
                <p>${recipe.description}</p>
                <button class="btn view-recipe-btn" data-id="${
                  recipe.id
                }">View Recipe</button>
            </div>
        </div>
    `
    )
    .join("");

  // Add event listeners to view recipe buttons
  document.querySelectorAll(".view-recipe-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const recipeId = parseInt(e.target.getAttribute("data-id"));
      showRecipeDetail(recipeId);
    });
  });
}

// Populate all recipes on recipes page
function populateAllRecipes() {
  allRecipesContainer.innerHTML = recipes
    .map(
      (recipe, index) => `
        <div class="recipe-card" data-category="${
          recipe.category
        }" style="animation-delay: ${index * 0.05}s">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
            <div class="recipe-content">
                <span class="recipe-category">${
                  recipe.category.charAt(0).toUpperCase() +
                  recipe.category.slice(1)
                }</span>
                <h3 class="recipe-title">${recipe.name}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span><i class="far fa-clock"></i> ${recipe.time}</span>
                    <span><i class="fas fa-users"></i> ${
                      recipe.servings
                    } servings</span>
                </div>
                <button class="btn view-recipe-btn" data-id="${
                  recipe.id
                }">View Recipe</button>
            </div>
        </div>
    `
    )
    .join("");

  // Add event listeners to view recipe buttons
  document.querySelectorAll(".view-recipe-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const recipeId = parseInt(e.target.getAttribute("data-id"));
      showRecipeDetail(recipeId);
    });
  });
}

// Filter recipes by category
function filterRecipes(category) {
  const recipeCards = document.querySelectorAll(".recipe-card");

  recipeCards.forEach((card) => {
    if (category === "all" || card.getAttribute("data-category") === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Show recipe detail page
function showRecipeDetail(recipeId) {
  const recipe = recipes.find((r) => r.id === recipeId);
  if (!recipe) return;

  recipeDetailContainer.innerHTML = `
        <div class="recipe-header">
            <img src="${recipe.image}" alt="${
    recipe.name
  }" class="recipe-image">
            <h1>${recipe.name}</h1>
            <div class="recipe-meta">
                <div class="meta-item">
                    <i class="far fa-clock"></i>
                    <span>Prep time: ${recipe.time}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-users"></i>
                    <span>Servings: ${recipe.servings}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-signal"></i>
                    <span>Difficulty: ${recipe.difficulty}</span>
                </div>
            </div>
            <p>${recipe.description}</p>
        </div>
        
        <div class="video-container">
            <h3>Cooking Tutorial</h3>
            <div class="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${
                  recipe.videoId
                }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        
        <div class="ingredients-list">
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
            </ul>
        </div>
        
        <div class="instructions-list">
            <h3a>Instructions</h3a>
            <ol>
                ${recipe.instructions
                  .map((instruction) => `<li>${instruction}</li>`)
                  .join("")}
            </ol>
        </div>
        
        <div class="tips-section">
            <h3>Chef's Tips</h3>
            <ul>
                ${recipe.tips.map((tip) => `<li>${tip}</li>`).join("")}
            </ul>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
            <button class="btn" onclick="showPage('recipes')">Back to Recipes</button>
        </div>
    `;

  showPage("recipe-detail");
}

// Populate blog posts
function populateBlogPosts() {
  blogContainer.innerHTML = blogPosts
    .map(
      (post, index) => `
        <div class="blog-card" style="animation-delay: ${index * 0.2}s">
            <img src="${post.image}" alt="${post.title}" class="blog-img">
            <div class="blog-content">
                <span class="blog-date">${post.date}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="btn">Read More</a>
            </div>
        </div>
    `
    )
    .join("");
}

// Populate gallery
function populateGallery() {
  galleryContainer.innerHTML = galleryImages
    .map(
      (image, index) => `
        <div class="gallery-item" style="animation-delay: ${index * 0.1}s">
            <img src="${image.src}" alt="Goan Food">
        </div>
    `
    )
    .join("");
}

// Contact form validation
function validateContactForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let isValid = true;

  // Name validation
  if (name.value.trim() === "") {
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("nameError").style.display = "none";
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  // Message validation
  if (message.value.trim() === "") {
    document.getElementById("messageError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("messageError").style.display = "none";
  }

  if (isValid) {
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  }
}

// Initialize the website when DOM is loaded
document.addEventListener("DOMContentLoaded", init);

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (!loader) return;

  // Hide loader
  setTimeout(() => {
    loader.classList.add("hidden");

    // 🚀 REMOVE will-change after animation completes
    setTimeout(() => {
      loader.style.willChange = "auto";
    }, 300); // match your fade-out duration
  }, 500);
});

const INITIAL_LOAD = 9;
renderRecipes(recipes.slice(0, INITIAL_LOAD));