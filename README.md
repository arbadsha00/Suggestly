# Suggestly

A Product Recommendation platform

## Live Website Link

[https://suggestly-498d8.web.app](https://suggestly-498d8.web.app)

---

## Project Overview

**Suggestly** is a Product Recommendation platform where users can:

- Add, update, and delete their queries about products.
- View other users' queries and their details.
- Add recommendations for specific products.
- Delete their own recommendations and comments.

---

## Key Features

- **Dynamic Navbar:** Conditional rendering for logged-in and non-logged-in users.

  - Non-logged-in users: `Home`, `Queries`, `Log-in`
  - Logged-in users: `Home`, `Queries`, `Recommendations For Me`, `My Queries`, `My Recommendations`, `Logout`

- **Home Page:**

  - Slider showcasing the website’s purpose with visually engaging images.
  - 6 most recently added queries.
  - Pricing section.
  - User review section

- **Add Query Page (Private):**  
  Users can add new product queries, providing:

  - Product Name, Brand, Image URL
  - Query Title and Boycotting Reason Details
  - Stored with user email, name, profile image, timestamp, and default recommendation count.

- **My Queries Page (Private):**

  - View all personal queries in a card layout (sorted by timestamp).
  - Options to view details, update, or delete a query.
  - Add Query button for quick navigation.

- **Queries Page:**

  - View all queries in a toggleable 1/2/3-column grid layout.
  - Recommendation count and a Recommend button for each query.

- **Query Details Page:**

  - Display detailed query information, including the creator’s details.
  - Form to add recommendations for the query.
  - List all recommendations as comments with images and timestamps.

- **My Recommendations Page (Private):**

  - View all recommendations made by the user in a table layout.
  - Delete recommendations with confirmation.

- **Recommendations For Me Page (Private):**

  - View recommendations made by others on the user’s queries in a tabular format.

- **Search Functionality:**
  - Search queries by product name on the Queries page.

### Authentication & Authorization

- **Login System:**

  - Email/Password-based login.
  - Google Sign-in.
  - Redirect to Registration page option.

- **Registration System:**

  - Name, Email, Password, Photo URL.
  - Error handling for invalid inputs.

- **JWT Authentication:**
  - Generate and store JWT tokens for secure user sessions.
  - Authenticate private routes using JWT tokens.

## Technologies Used

- **React**: A JavaScript library for building dynamic user interfaces.
- **Vite**: A fast and optimized build tool that works seamlessly with React.
- **Tailwind CSS**: A utility-first CSS framework to create modern and responsive layouts.
- **DaisyUI**: A plugin for Tailwind CSS providing pre-styled UI components.
- **React Router**: For dynamic routing and navigation throughout the website.
- **Firebase**: Used for authentication, hosting, and real-time database management.
- **MongoDB**: For storing and managing product data.
- **React Toastify**: For displaying toast notifications to users.
- **Swiper**: A modern touch slider for creating responsive carousels and banners.
- **React Helmet**: Used for managing the document head, including dynamic titles and meta tags.
- **React Icons**: Provides a set of customizable icons for React components.
- **SweetAlert2**: A library for beautiful and customizable alert dialogs, used for displaying notifications and error messages in a user-friendly manner.
- **Axios**: A promise-based HTTP client for making API requests, offering features like interceptors, automatic JSON parsing, and error handling.
- **React Tooltip**: A library for adding tooltips to elements for displaying additional information when hovered.
- **Date-fns**: A lightweight JavaScript library for working with dates, providing a simple and consistent API for parsing, formatting, manipulating, and comparing dates

---
