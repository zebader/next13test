import styles from "../../../page.module.css";
import postsStyles from "../posts.module.css";
interface Params {
  params: {
    id: number;
  };
}
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchSinglePost = async (id: number): Promise<Post> => {
  return fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    cache: "no-store",
  }).then((res) => res.json());
};
export default async function SinglePost({ params }: Params) {
  const { id } = params;
  const post = await fetchSinglePost(id);
  return (
    <main className={styles.main + " " + postsStyles.main}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </main>
  );
}
