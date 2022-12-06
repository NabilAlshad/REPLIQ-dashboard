import { axios } from "axios";
export async function LoadPosts(url) {
  const res = await axios.get(url);
  const data = await res.data;

  return data;
}
