import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../utils/api';

const ProductService = {
  getProducts: async () => {
    return await getProducts();
  },
  createProduct: async newProduct => {
    return await createProduct(newProduct);
  },
  updateProduct: async (id, updatedProduct) => {
    return await updateProduct(id, updatedProduct);
  },
  deleteProduct: async id => {
    return await deleteProduct(id);
  },
};

export default ProductService;
