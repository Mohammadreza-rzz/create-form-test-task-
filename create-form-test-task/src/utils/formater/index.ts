import { rowDataType } from "@/types";
export const ProductFormater = (rowdata: rowDataType[]) => {
  return rowdata.map((el: rowDataType, index: number) => {
    return {
      id: el.id,
      title: el.title,
      archived: +el.id % 3 ? true : false,
    };
  });
};
