import { Suspense } from "react";
import LoadingComponent from "../loading";
import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import Link from "next/link";
import { Metadata } from "next";
import ProductComponent from "@/components/cards/CardComponent";



export const metadata: Metadata = {
  title: "Product",
  description: "This is Product page shop",
  keywords: ['shop', 'ecommerce', 'sell']
};
async function fetchProducts() {
    const products = await fetch("https://store.istad.co/api/products/", {
      cache: "no-store"
    });
    const res = await products.json()
    return res.results;
  }
export default async function HomeProduct() {
  const products = await fetchProducts()

  return (
    <>
        <Suspense fallback={<LoadingComponent/>}>
            <div>
            <h1 className="font-bold text-2xl text-orange-600 ml-8 mt-10">Our Product</h1>
              <div className=" text-center grid lg:grid-cols-4 md:grid-cols-3 justify-center gap-5 p-8">
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
    </>
  );
}
