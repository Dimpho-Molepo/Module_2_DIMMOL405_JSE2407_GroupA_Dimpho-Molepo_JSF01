import "./style.css";
import Alpine from "alpinejs";
import { productDisplay } from "./productDisplay.js";

/**
 * Assign Alpine to the global window object for global access.
 * 
 */
window.Alpine = Alpine;

/**
 * Register the productDisplay function as an Alpine.js data component.
 * This makes the productDisplay functionality available to use with
 * x-data directive in HTML.
 *
 * @function
 * @name Alpine.data
 * @param {string} 'productDisplay' - The name to register the component under
 * @param {Function} productDisplay - The function that returns the component's data and methods
 */
Alpine.data("productDisplay", productDisplay);

/**
 * Initialize Alpine.js.
 * This starts Alpine.js, allowing it to scan the DOM and initialize
 * all Alpine.js directives.
 *
 * @function
 * @name Alpine.start
 */
Alpine.start();
