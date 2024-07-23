/**
 * Creates an API object for fetching product data.
 * @returns {Object} An object with methods for fetching products and categories.
 */
export function createProductApi() {
  return {
    /**
     * Fetches all products from the API.
     * @async
     * @returns {Promise<Array>} A promise that resolves to an array of product objects.
     * @throws {Error} If the data fetching fails.
     */
    async fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(
            "Data fetching failed. Please check your network connection and reload."
          );
        }
        return await response.json();
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    /**
     * Fetches all product categories from the API.
     * @async
     * @returns {Promise<Array>} A promise that resolves to an array of category strings.
     * @throws {Error} If the data fetching fails.
     */
    async fetchCategories() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error(
            "Data fetching failed, please check your network connection"
          );
        }
        const data = await response.json();
        this.categories = data;
        return data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
  };
}
