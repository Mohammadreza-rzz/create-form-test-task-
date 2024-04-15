import Image from "next/image";
import { ProductPage } from "@/components";
import { Product, rowDataType } from "@/types";
import { ProductFormater } from "@/utils/formater";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  return await res.json();
};

export default async function Home() {
  let data: rowDataType[] | null;
  let formatedData;
  try {
    data = await getData();
    formatedData = !!data && ProductFormater(data);
  } catch (err: any) {
    data = null;
    formatedData = null;
  }
  return (
    <>
      <ProductPage data={formatedData} />
    </>
  );
}
