import { useMemo, memo, useCallback, useState } from "react";
export const Parent = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 },
    { id: 6, name: "Monitor", price: 15000 },
  ]);

  const expensiveProducts = useMemo(() => {
    return products.filter((product) => product.price > 1000);
  }, [products]);

  const handleDelete = useCallback((id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>

      <ProductList products={expensiveProducts} onDelete={handleDelete} />
    </>
  );
};

export const ProductList = memo(({ products, onDelete }) => {
  return (
    <div>
      {products.map((product) => (
        <button key={product.id} onClick={() => onDelete(product.id)}>
          {product.name}
        </button>
      ))}
    </div>
  );
});
