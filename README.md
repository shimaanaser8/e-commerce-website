# E-commerce — Frontend 

A modern and responsive e-commerce platform prototype built using HTML, CSS, and JavaScript.
The platform allows users to browse products, view product details, add items to a cart, and simulate a checkout flow — all on the client side.

##  Overview
The platform allows users to:
- Browse products on a catalog page  
- View detailed product information  
- Add and remove items from a shopping cart  
- Fill out a checkout form and receive an order confirmation  
- Use mock login and signup forms (frontend-only)

The project focuses on UI/UX design, responsiveness, and interactivity without backend integration.

###  Features
   - Home Page (index.html) — Highlights featured products and categories.
   - Product Listing (all_products.html) — Displays all available products in a grid layout with images, names, and prices.
   - Product Details (product_details.html) — Shows detailed information for a selected product with an Add to Cart option.
   - Cart & Checkout (checkout.html) — Allows users to view selected items and simulate a purchase process.
   - Login / Signup (login.html, signup_page.html) — Frontend-only authentication UI.
   - Order Confirmation (thank.html) — Simple thank-you page after completing checkout.
   - Navigation Menu : Fixed navbar with quick links
   - Search Simulation and filter : Structured to support product browsing
   - Responsive Design : Works on desktop and mobile

 
### How It Works
   -Products are displayed using HTML/CSS grid layouts.
   -JavaScript handles:
      Adding/removing items from the cart
      Cart total calculations
      Basic checkout simulation
   -Cart data is stored temporarily using localStorage for persistence.

##  Technologies Used
- **HTML5** : Structure and content of all pages
- **CSS3 (Flexbox/Grid)** : Layout and responsive design
- **Vanilla JavaScript** :Cart logic, UI behavior, navigation

##  Testing and Validation
-  HTML & CSS validated using **W3C Validator**  
-  Checked in multiple browsers: Chrome, Firefox, Edge  
-  Basic accessibility review using **Lighthouse**
   ```bash
   git clone https://github.com/shimaanaser8/e-commerce-website.git
