const express = require("express");
const app = express();
const port = 3000; // You can use any port you prefer

// Dummy data array of restaurant objects without images
const restaurants = [
  {
    id: 1,
    name: "The Spice Lounge",
    address: "123 Flavor St, Food City",
    cuisine: "Indian",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: "Pasta Paradise",
    address: "456 Gourmet Ave, Meal Town",
    cuisine: "Italian",
    rating: 4.7,
    reviews: 95,
  },
  {
    id: 3,
    name: "Sushi Sensation",
    address: "789 Fish Blvd, Sushi City",
    cuisine: "Japanese",
    rating: 4.8,
    reviews: 140,
  },
  {
    id: 4,
    name: "Taco Town",
    address: "101 Fiesta Rd, Taco Land",
    cuisine: "Mexican",
    rating: 4.3,
    reviews: 80,
  },
  {
    id: 5,
    name: "Burger Bonanza",
    address: "202 Grill Ln, Burger City",
    cuisine: "American",
    rating: 4.2,
    reviews: 150,
  },
];

app.get("/api", (req, res) => {
  res.json(restaurants);
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
