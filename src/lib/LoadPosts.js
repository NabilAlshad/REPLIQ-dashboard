import { axios } from "axios";
export async function LoadPosts(url) {
  try {
    // const res = await axios.get(url);
    // const data = res.data;
    const data = fetch(url).then((res) => res.json());
    return data;
  } catch (error) {
    console.error(error);
  }
}
