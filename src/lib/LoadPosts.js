import { axios } from "axios";
export async function LoadPosts(url) {
 try{ 
  const res = await axios.get(url);
  const data = await res.data;

  return data;
}
  catch(error){
    console.error(error);
  }
}
