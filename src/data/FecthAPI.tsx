import { base_url } from "./url/URL";

export default async function fetchData() {
  const response = await fetch(`${base_url}`);
  const resBody = await response.json();
  return resBody.results;
}
