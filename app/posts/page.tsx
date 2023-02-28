import Link from "next/link"
import styles from '../page.module.css'

const post = 
  {
   label:"Post 1",
   route:'/posts/1'   
  }


export default function Posts() {
  const {label, route} = post
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      Posts:
      <Link href={route}>{label}</Link>
      </div>
    </main>
  )
}