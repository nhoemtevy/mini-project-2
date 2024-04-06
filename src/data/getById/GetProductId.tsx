const base_url = `https://store.istad.co/api/products/`;

export default async function getProductId(id: string | number) {
  const res = await fetch(`${base_url}${id}`);
  const bodyRes = res.json();
  return bodyRes;
}
