"use client";
import React, { useState } from "react";
import { Product } from "@/types";

interface IProps {
  data: any;
}

const ProductPage: React.FC<IProps> = ({ data }) => {
  const [products, setProducts] = useState<Product[]>(data);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  const add = () => {
    if (!!inputValue) {
      setProducts((preData: Product[]) => [
        ...preData,
        {
          id: +preData[preData.length - 1]?.id + 1,
          archived: false,
          title: inputValue,
        },
      ]);
    }
    setInputValue("");
  };

  const toggle = (id: number) => {
    setProducts(
      products.map((el: Product) => {
        if (el.id === id) {
          return {
            id: el.id,
            title: el.title,
            archived: !el.archived,
          };
        }
        return el;
      })
    );
  };

  const remove = (id: number) => {
    setProducts(products.filter((el: Product) => el.id !== id));
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
          <div
            onClick={add}
            className="bg-green-500 px-10 py-3 mr-10 cursor-pointer active:scale-[95%] font-semibold text-white"
          >
            Add
          </div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="archived">Archived</option>
            <option value="active">Active</option>
          </select>
        </div>
      </div>

      <ul className=" mt-10 px-5 flex flex-col space-y-4 ">
        {!!products &&
          filteredProducts()?.map((el: Product, index: number) => (
            <li
              key={el.id}
              className="inline-flex items-center justify-between px-2 py-2 bg-red-400 "
            >
              <p className="text-white">{el.title}</p>
              <div className="space-x-3">
                <span className="inline-block px-5 py-3 cursor-pointer active:scale-[95%] font-semibold text-white bg-blue-700 w-28 text-center">
                  {!!el.archived ? "Archived" : "Active"}
                </span>
                <span
                  onClick={toggle.bind(this, el?.id)}
                  className="inline-block px-5 py-3 cursor-pointer active:scale-[95%] font-semibold text-white bg-yellow-400"
                >
                  Toggle
                </span>
                <span
                  onClick={remove.bind(this, el?.id)}
                  className="inline-block px-5 py-3 cursor-pointer active:scale-[95%] font-semibold text-white bg-red-700"
                >
                  Remove
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductPage;
