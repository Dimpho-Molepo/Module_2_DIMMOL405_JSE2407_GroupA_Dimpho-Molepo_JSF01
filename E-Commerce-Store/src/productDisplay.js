import {createProductApi} from "./data/api"


/**
 * Creates the main product display functionality.
 * @returns {Object} An object containing all the methods and properties for product display.
 */
export function productDisplay() {
  return {
    products: [],
    filteredProducts: [],
    categories: [],
    productApi: createProductApi(),
    isOpen: false,
    filterItem: "All categories",
    searchTerm: "",
    sorting: "default",
    isModalOpen: false,
    selectedProduct: null,
    isLoading: true,
    modalLoading: false,

    /**
     * Initializes the product display by fetching products and categories.
     * @async
     */
    async init() {
      this.isLoading = true;
      this.products = await this.productApi.fetchProducts();
      this.filteredProducts = [...this.products];
      this.categories = await this.productApi.fetchCategories();
      this.isLoading = false;
    },

    /**
     * Toggles the dropdown for category selection.
     */
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },

    /**
     * Sets the filter category and applies the filter.
     * @param {string} category - The category to filter by.
     */
    setFilter(category) {
      this.filterItem = category;
      this.isOpen = false;
      this.applyFilter();
    },

    /**
     * Opens the modal with details of the selected product.
     * @async
     * @param {Object} product - The product to display in the modal.
     */
    async openModal(product) {
      this.modalLoading = true;
      this.isModalOpen = true;
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${product.id}`
        );
        this.selectedProduct = await response.json();
      } catch (error) {
        console.error("Error fetching product details:", error);
        this.selectedProduct = product;
      } finally {
        this.modalLoading = false;
      }
    },

    /**
     * Closes the product detail modal.
     */
    closeModal() {
      this.isModalOpen = false;
    },

    resetFiltersAndSorting() {
      this.filterItem = "All categories";
      this.sorting = "default";
      this.searchTerm = "";
      this.applyFilter();
    },

    /**
     * Applies the current filter and search term to the product list.
     */
    applyFilter() {
      this.filteredProducts = this.products.filter((product) => {
        const matchesCategory =
          this.filterItem === "All categories" ||
          product.category === this.filterItem;
        const matchesSearch = product.title
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      });
      this.applySorting();
    },

    /**
     * Applies the current sorting option to the filtered products.
     */
    applySorting() {
      switch (this.sorting) {
        case "low":
          this.filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case "high":
          this.filteredProducts.sort((a, b) => b.price - a.price);
          break;
        default:
          this.filteredProducts.sort((a, b) => a.id - b.id);
      }
    },
  };
}
