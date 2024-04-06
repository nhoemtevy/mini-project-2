
import DetailCardComponent from "@/components/cards/CardDetail";
import getProductId from "@/data/getById/GetProductId";
import React from "react";
export type Params = {
  params: {
    id: string | number;
  };
};
export async function generateMetadata({ params }: any) {
  const id = params.id;
  const product = await getProductId(id);
  return {
    title: product?.name,
    describe: product.desc,
    openGraph: {
      images: product.image,
    },
  };
}

export default async function page({ params }: Params) {
  const id = params.id;
  const res = await getProductId(id);
  return (
    <DetailCardComponent
      desc={res.desc}
      image={res.image}
      price={res.price}
      name={res.name}
    />
  );
}