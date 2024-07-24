# JSF01 - Refactor the e-commerce store in Alpine.js

## Project Overview
This project is a refactor of the e-commerce store from the React project. The goal is to use Alpine 
to create a similar e-commerce store. The project is a single-page application that allows users to
add items to their cart and checkout. The project uses Alpine to create a dynamic shopping cart and
checkout page. The project also uses Tailwind CSS for styling. The project is a good example of
how Alpine can be used to create a dynamic and interactive user interface.
![Screenshot 2024-07-23 193709](https://github.com/user-attachments/assets/3df354a7-6be4-4b9b-bfa2-69ecdea927f8)


## Features

- **Product Filtering**: Easily filter products by category or search term.
- **Sorting Options**: Sort products by price (low to high or high to low) or default ordering.
- **Detailed Product View**: Click on any product to view more details in a modal.
- **Category Navigation**: Browse products by category using the dropdown menu.

## Technologies Used

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (Alpine.js)

## Getting Started

To get started with the project, follow these steps:
1. `git clone https://github.com/Dimpho-Molepo/Module_2_DIMMOL405_JSE2407_GroupA_Dimpho-Molepo_JSF01.git`
2. `npm install`
3. `npm install alpinejs --save`
4. `npm install tailwindcss --save-dev`
5. `npm install -D tailwindcss postcss autoprefixer`
6. Inside the `main.js` file add the following code
```import './style.css'
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()
```
7. Inside the `style.css` file add the following code
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
8. Inside the `tailwind.config.js` file add the following code
```
/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{html,js}"
],
theme: {
extend: {},
},
plugins: [],
}
```
9. At the project root directory create a `postcss.config.js` file and add the following code to
it
```
export default {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
}

```
## Discussion and Reflection
### Project Analysis
The project was a success. I was able to complete the project in the time allocated. I was able to learn further about the Tailwind CSS framework and use Tailwind CSS to style my project. Importantly, I learned about `Alpine.js`, which was weird because of the unfamiliraty of its syntax. I converted the given `React.js` code into `Alpine.js`

### Project Challenges
The project was challenging because I had to learn about `Alpine.js` and how to use it. Another challenge was adding the modal window for when the user clicks on a single product for more information. I also had a minor issue when a product is selected the whole page refreshes. I overcame this challenges to submit a complete project with most if not all the user stories accomplished.

## Author
Dimpho Molepo