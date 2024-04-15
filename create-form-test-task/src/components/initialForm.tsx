"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/types";

interface IProps {
  data: any;
}

const ProductPage: React.FC<IProps> = ({ data }) => {
  const [products, setProducts] = useState<Product[]>(data);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  //   useEffect(() => {
  //     fetchProducts();
  //   }, []);

  //   const fetchProducts = async () => {
  //     const response = await fetch("https://example.com/products");
  //     const data = await response.json();
  //     setProducts(data);
  //   };

  const add = () => {
    products.push({ id: Date.now(), title: inputValue, archived: false });
    setProducts(products);
    setInputValue("");
  };

  const toggle = (id: number) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products[i] = {
          id: products[i].id,
          title: products[i].title,
          archived: products[i].archived ? false : true,
        };
        break;
      }
    }
    setProducts(products);
  };

  const remove = (id: number) => {
    let newProducts = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].id !== id) {
        newProducts.push(products[i]);
      }
    }
    setProducts(newProducts);
  };

  const filteredProducts = () => {
    if (filter === "all") {
      return products;
    }
    if (filter === "archived") {
      return products.filter((product) => product.archived);
    }
    if (filter === "active") {
      return products.filter((product) => !product.archived);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="bg-slate-500 px-10 py-12 rounded-sm">
        <div className="flex ">
          <input
            className="flex-1 px-6 border"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="bg-green-500 px-10 py-3 mr-10 cursor-pointer active:scale-[95%] font-semibold text-white">
            Add
          </div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="archived">Archived</option>
            <option value="active">Active</option>
          </select>
        </div>
      </div>

      <ul className="bg-red-400 mt-10 px-5 flex flex-col ">
        <li className="inline-flex items-center justify-between py-2 ">
          <p className="text-white">{"dasdhsaghdcghsa"}</p>
          <div className="space-x-3">
            <span className="inline-block px-5 py-3 cursor-pointer active:scale-[95%] font-semibold text-white bg-blue-700">
              Archived
            </span>
            <span className="inline-block px-5 py-3 cursor-pointer active:scale-[95%] font-semibold text-white bg-yellow-400">
              Toggle
            </span>
            <span className="inline-block px-5 py-3 cursor-pointer active:scale-[95%] font-semibold text-white bg-red-700">
              Remove
            </span>
          </div>
        </li>
      </ul>

      {/* {filteredProducts().map((product) => (
          <li>
            {product.title}
            <button onClick={() => remove(product.id)}>Delete</button>
            <button onClick={() => toggle(product.id)}>
              {product.archived ? "Unarchive" : "Archive"}
            </button>
          </li>
        ))} */}
    </div>
  );
};

export default ProductPage;
