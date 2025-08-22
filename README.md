# Next.js Product App

A simple product management application built with **Next.js 15** and **NextAuth.js**. This app demonstrates public and protected pages, user authentication, and CRUD operations for products.

---

## Live Demo
[Production Site](https://my-product-p3yuo9yu9-tanjipsuraitmahdin-gmailcoms-projects.vercel.app)

---

## Features

### Public Pages
- **Landing Page (`/`)**: Hero section, product highlights, navbar, footer.  
- **Product List (`/products`)**: View a list of products with name, description, price, and details.  
- **Product Details (`/products/[id]`)**: View full details of a single product.  

### Authentication
- **Login (`/login`)**: Login with Google or credentials using NextAuth.js.  
- **Redirects**: After login, users are redirected to `/products`.  

### Protected Pages
- **Add Product (`/dashboard/add-product`)**: Only accessible when logged in.  
- **Form Submission**: Add a new product and save to database.  
- **Unauthorized Users**: Redirected to `/login`.  


---

## Technologies Used
- [Next.js 15](https://nextjs.org/) (App Router)  
- [NextAuth.js](https://next-auth.js.org/) (Authentication)  
- [MongoDB](https://www.mongodb.com/) for storing product data  
- Tailwind CSS for styling  

---

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/MaHdIn2020/product-app.git
cd product-app
