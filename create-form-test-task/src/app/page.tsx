import Image from "next/image";
import { ProductPage } from "@/components";
import { Product } from "@/types";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  return await res.json();
};

export default async function Home() {
  let data: any;
  try {
    data = await getData();
    console.log(data);
  } catch (err: any) {
    data = null;
  }
  return (
    <>
      <ProductPage data={data} />
    </>
  );
}
