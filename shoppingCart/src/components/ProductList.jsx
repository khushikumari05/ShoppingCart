// import ProductCard from "./ProductCard";

// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
// ];

// const ProductList = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Products</h1>
//       <div className="grid grid-cols-2 gap-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 599 },
  { id: 3, name: "Headphones", price: 199 },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
