import Link from "next/link";
import styles from "../page.module.css";
import postsStyles from "./posts.module.css";
import LikePostButton from "./components/LikePostButton";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  }).then((res) => res.json());
};

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <main className={styles.main + " " + postsStyles.main}>
      <div className={styles.description}>Posts:</div>
      <div className={postsStyles["post-link"]}>
        {posts.map((post) => (
          <span key={post.id} className={postsStyles["post-link__container"]}>
            <Link href="/posts/[id]" as={"/posts/" + post.id}>
              {post.title}
            </Link>
            <LikePostButton />
          </span>
        ))}
      </div>
    </main>
  );
}
