// For an interview/project-ready `useMemo` example, a very common real-world case is **filtering a large product list based on search text**.

import { useMemo, useState } from "react";
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Keyboard", price: 1500 },
  { id: 5, name: "Mouse", price: 800 },
  { id: 6, name: "Monitor", price: 15000 },
  { id: 7, name: "Smart Watch", price: 5000 },
  { id: 8, name: "Tablet", price: 25000 },
  { id: 9, name: "Speaker", price: 4000 },
  { id: 10, name: "Power Bank", price: 2000 },
];
const ProductList = () => {
  const [searchText, setSearchText] = useState("");

  // Recalculates only when products or searchText changes
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [products, searchText]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
/*
```

### Why `useMemo` here?

Without `useMemo`:

```js
const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchText.toLowerCase())
);
```

The filtering runs **every time the component re-renders**, even if the re-render was caused by some unrelated state.

With `useMemo`:

```js
const filteredProducts = useMemo(() => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
}, [products, searchText]);
```

React remembers the previously calculated result and recalculates it only when `products` or `searchText` changes.

### Interview-ready definition

> **`useMemo` is a React hook used to memoize the result of an expensive calculation. It recalculates the value only when one of its dependencies changes, which can help avoid unnecessary computations during re-renders.**

Syntax:

```js
const memoizedValue = useMemo(() => {
  return expensiveCalculation();
}, [dependencies]);
```

One important point: don't use `useMemo` for every calculation. It's mainly useful when the calculation is sufficiently expensive or when preserving reference identity helps an optimization.
*/
