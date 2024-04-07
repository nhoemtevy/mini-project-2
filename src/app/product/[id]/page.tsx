
import LoadingComponent from "@/app/loading";
import DetailCardComponent from "@/components/cards/CardDetail";
import React, { Suspense } from "react";
export type ParamProps = {
  params: {
    id: number;
  };
};

async function getDetail(id: number) {
  const productDetail = await fetch(`https://store.istad.co/api/products/${id}`);
  return productDetail.json();
}
export async function generateMetadata({ params }: any) {
  const id = params.id;
  const product = await getDetail(id);
  return {
    name: product?.name,
    describe: product.desc,
    openGraph: {
      images: product.image,
    },
  };
}

export default async function page({ params }: ParamProps) {
  const id = params.id;
  const res = await getDetail(id);
  return (
    <Suspense fallback={<LoadingComponent/>} >
    <DetailCardComponent
      desc={res.desc}
      image={res.image}
      price={res.price}
      name={res.name}
    />
    </Suspense>
  );
}