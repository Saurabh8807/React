const express = require("express");
const app = express();
const port = 3000; // You can use any port you prefer

// Dummy data array of restaurant objects without images
const restaurants = [
  {
    id: 1,
    name: "The Spice Lounge",
    address: "123 Flavor St, Food City",
    promoted:true,
    cuisine: "Indian",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: "Pasta Paradise",
    address: "456 Gourmet Ave, Meal Town",
    cuisine: "Italian",
    promoted:false,
    rating: 4.7,
    reviews: 95,
  },
  {
    id: 3,
    name: "Sushi Sensation",
    address: "789 Fish Blvd, Sushi City",
    cuisine: "Japanese",
    promoted:true,
    rating: 4.8,
    reviews: 140,
  },
  {
    id: 4,
    name: "Taco Town",
    address: "101 Fiesta Rd, Taco Land",
    cuisine: "Mexican",
    promoted:false,
    rating: 4.3,
    reviews: 80,
  },
  {
    id: 5,
    name: "Burger Bonanza",
    address: "202 Grill Ln, Burger City",
    cuisine: "American",
    promoted:true,
    rating: 4.2,
    reviews: 150,
  },
];

const categories = [
  {
    title: "Recommended",
    type: "CATEGORY_TYPE_RECOMMENDED",
    restaurants: [
      {
        id: 1,
        name: "The Spice Lounge",
        address: "123 Flavor St, Food City",
        promoted: true,
        cuisine: "Indian",
        rating: 4.5,
        reviews: 120,
      },
      {
        id: 2,
        name: "Pasta Paradise",
        address: "456 Gourmet Ave, Meal Town",
        promoted: false,
        cuisine: "Italian",
        rating: 4.7,
        reviews: 95,
      },
      {
        id: 9,
        name: "Grill House",
        address: "321 Sizzle St, BBQ City",
        promoted: true,
        cuisine: "Barbecue",
        rating: 4.6,
        reviews: 200,
      },
      {
        id: 10,
        name: "Seafood Shack",
        address: "987 Ocean Ln, Harbor Town",
        promoted: false,
        cuisine: "Seafood",
        rating: 4.4,
        reviews: 180,
      },
    ],
  },
  {
    title: "Newly Added",
    type: "CATEGORY_TYPE_NEWLY_ADDED",
    restaurants: [
      {
        id: 3,
        name: "Sushi Sensation",
        address: "789 Fish Blvd, Sushi City",
        promoted: true,
        cuisine: "Japanese",
        rating: 4.8,
        reviews: 140,
      },
      {
        id: 4,
        name: "Taco Town",
        address: "101 Fiesta Rd, Taco Land",
        promoted: false,
        cuisine: "Mexican",
        rating: 4.3,
        reviews: 80,
      },
      {
        id: 11,
        name: "Vegan Vibes",
        address: "654 Plant St, Green City",
        promoted: true,
        cuisine: "Vegan",
        rating: 4.6,
        reviews: 90,
      },
      {
        id: 12,
        name: "Falafel Frenzy",
        address: "123 Mediterranean Ave, Hummus City",
        promoted: false,
        cuisine: "Middle Eastern",
        rating: 4.5,
        reviews: 105,
      },
    ],
  },
  {
    title: "Top Rated",
    type: "CATEGORY_TYPE_TOP_RATED",
    restaurants: [
      {
        id: 5,
        name: "Burger Bonanza",
        address: "202 Grill Ln, Burger City",
        promoted: true,
        cuisine: "American",
        rating: 4.9,
        reviews: 150,
      },
      {
        id: 6,
        name: "Curry Corner",
        address: "345 Spice Rd, Curry Town",
        promoted: false,
        cuisine: "Indian",
        rating: 4.6,
        reviews: 200,
      },
      {
        id: 13,
        name: "Steak Station",
        address: "456 Prime Ave, Steak City",
        promoted: true,
        cuisine: "Steakhouse",
        rating: 4.9,
        reviews: 220,
      },
      {
        id: 14,
        name: "The Salad Spot",
        address: "789 Fresh Blvd, Health City",
        promoted: false,
        cuisine: "Healthy",
        rating: 4.7,
        reviews: 125,
      },
    ],
  },
  {
    title: "Best Offers",
    type: "CATEGORY_TYPE_BEST_OFFERS",
    restaurants: [
      {
        id: 7,
        name: "Pizza Palace",
        address: "678 Dough St, Pizza City",
        promoted: true,
        cuisine: "Italian",
        rating: 4.4,
        reviews: 100,
      },
      {
        id: 8,
        name: "Noodle Nook",
        address: "910 Ramen Ave, Noodle Town",
        promoted: false,
        cuisine: "Chinese",
        rating: 4.3,
        reviews: 85,
      },
      {
        id: 15,
        name: "Burger Blitz",
        address: "159 Beef St, Grill Town",
        promoted: true,
        cuisine: "American",
        rating: 4.8,
        reviews: 210,
      },
      {
        id: 16,
        name: "Dim Sum Delight",
        address: "753 Steam Rd, Dumpling City",
        promoted: false,
        cuisine: "Chinese",
        rating: 4.6,
        reviews: 190,
      },
    ],
  },
];


app.get("/api", (req, res) => {
  res.json(restaurants);
});

app.get("/api/cat", (req, res) => {
  res.json(categories);
});

app.get("/api/:id", (req, res) => {
  const id = req.params.id;

  const resto = restaurants.find((obj) => obj.id == id); 

  if (resto) {
    res.json(resto);
  } else {
    res.status(404).json({ message: "Restaurant not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
