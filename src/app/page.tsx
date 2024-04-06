
import { Suspense } from "react";
import LoadingComponent from "./loading";
import CatecoriesComponent from "@/components/cards/CatecoriesComponent";
import ProductComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/products";
import Link from "next/link";
import { UserType } from "@/types/UserTpye";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "This is Product Page Shop",
  keywords: ["shop", "ecommerce", "sell"],
};

async function fetchProducts() {
  const products = await fetch("https://store.istad.co/api/products/", {
    cache: "no-store"
  });
  const res = await products.json()
  return res.results;
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <>
      <div>
        <Suspense fallback={<LoadingComponent/>} >
          <CatecoriesComponent/>
          <div>
          <h1 className="font-bold text-2xl text-orange-600 ml-8">Our Product</h1>
            <div className="mt-10 text-center grid grid-cols-4 justify-center gap-5 p-8">
              {products?.map((product: ProductType) => (
                <Link href={`${product.id}`} key={product.id}>
                <ProductComponent
                  name={product.name}
                  image={product.image}
                  desc={product.desc}
                  price={product.price}
                />
                </Link>
              ))}
            </div>
          </div>
        </Suspense>
      </div>
    </>
  );
}
