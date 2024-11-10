const products = [
  { productId: 1, name: "Smartphone", price: 30000, category: "Electronics", stock: 50 },
  { productId: 2, name: "Laptop", price: 75000, category: "Electronics", stock: 20 },
  { productId: 3, name: "Headphones", price: 2500, category: "Electronics", stock: 150 },
  { productId: 4, name: "Smartwatch", price: 10000, category: "Electronics", stock: 30 },
  { productId: 5, name: "Bluetooth Speaker", price: 3000, category: "Electronics", stock: 100 },
  { productId: 6, name: "T-shirt", price: 500, category: "Clothing", stock: 200 },
  { productId: 7, name: "Jeans", price: 1500, category: "Clothing", stock: 100 },
  { productId: 8, name: "Jacket", price: 4000, category: "Clothing", stock: 50 },
  { productId: 9, name: "Sneakers", price: 2500, category: "Clothing", stock: 80 },
  { productId: 10, name: "Socks", price: 200, category: "Clothing", stock: 300 },
  { productId: 11, name: "Cooking Pan", price: 1200, category: "Home & Kitchen", stock: 75 },
  { productId: 12, name: "Blender", price: 3500, category: "Home & Kitchen", stock: 40 },
  { productId: 13, name: "Microwave Oven", price: 8000, category: "Home & Kitchen", stock: 20 },
  { productId: 14, name: "Cutlery Set", price: 600, category: "Home & Kitchen", stock: 150 },
  { productId: 15, name: "Dining Table", price: 12000, category: "Home & Kitchen", stock: 10 },
  { productId: 16, name: "Fiction Novel", price: 350, category: "Books", stock: 150 },
  { productId: 17, name: "Science Fiction Book", price: 500, category: "Books", stock: 100 },
  { productId: 18, name: "Business Book", price: 700, category: "Books", stock: 120 },
  { productId: 19, name: "History Book", price: 600, category: "Books", stock: 80 },
  { productId: 20, name: "Children’s Book", price: 300, category: "Books", stock: 200 },
  { productId: 21, name: "Washing Machine", price: 20000, category: "Home Appliances", stock: 15 },
  { productId: 22, name: "Refrigerator", price: 30000, category: "Home Appliances", stock: 10 },
  { productId: 23, name: "Air Conditioner", price: 35000, category: "Home Appliances", stock: 12 },
  { productId: 24, name: "Vacuum Cleaner", price: 5000, category: "Home Appliances", stock: 50 },
  { productId: 25, name: "Water Purifier", price: 12000, category: "Home Appliances", stock: 25 },
  { productId: 26, name: "Fitness Band", price: 2500, category: "Fitness", stock: 150 },
  { productId: 27, name: "Yoga Mat", price: 1000, category: "Fitness", stock: 200 },
  { productId: 28, name: "Dumbbells", price: 1500, category: "Fitness", stock: 100 },
  { productId: 29, name: "Treadmill", price: 40000, category: "Fitness", stock: 10 },
  { productId: 30, name: "Exercise Bike", price: 20000, category: "Fitness", stock: 20 }
];

// Function to filter products based on category and stock availability


let container = document.querySelector("#container")


    products.forEach((data) => {
        data.preventDefault;
        let card = document.createElement("div")
        card.setAttribute("id", "card")
        let name = document.createElement("h2")
        name.innerText = `Name : ${data.name}`;
        name.setAttribute("id", "name")
        let price = document.createElement("h3")
        price.innerText = `Price : ${data.price}`;
        let category = document.createElement("h3")
        category.innerText=`Category : ${data.category}`
        let stock = document.createElement("h3")
        stock.innerText = `Stock : ${data.stock}`;
        let button = document.createElement("button");
        button.setAttribute("id","button")
        button.innerText = "Add to Cart";


        card.append(name, price, category, stock,button)
        container.appendChild(card)
    })
let isDarkMode = true; // Track the current mode

let toogle = document.querySelector(".fa-toggle-on");
toogle.addEventListener("click", toogleClick);

function toogleClick() {
  let body = document.querySelector("body");
  let cards = document.querySelectorAll("#card");
  let names = document.querySelectorAll("#name");
  let carts = document.querySelector(".fa-opencart");
  let toggles = document.querySelector(".fa-toggle-on");
  let pros = document.querySelector("#pro");

  if (isDarkMode) {
    // Switch to Light Mode
    body.style.backgroundColor = "white"; // Light background color for body
    cards.forEach((card) => {
      card.style.backgroundColor = "#ffffff"; // Light color for card background
    });
    names.forEach((name) => {
      name.style.color = "#000000"; // Dark color for text
    });
    carts.style.color = "#000000"; // Set icon color to black
    toggles.style.color = "black";
    pros.style.color = "#000000";
    isDarkMode = false;
  } else {
    // Switch to Dark Mode
    body.style.backgroundColor = "#4a6487"; // Dark background color for body
    cards.forEach((card) => {
      card.style.backgroundColor = "#bcccdc"; // Dark color for card background
    });
    names.forEach((name) => {
      name.style.color = "#223d5b"; // Light color for text
    });
    carts.style.color = "#0a1c32"; // Set icon color to dark blue
    toggles.style.color = "white";
    pros.style.color = "#0a1c32";
    isDarkMode = true;
  }
}



