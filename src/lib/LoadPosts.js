
export async function LoadPosts(url) {
  try {
    const data = fetch(url).then((res) => res.json());
    return data;
  } catch (error) {
    console.error(error);
  }
}
