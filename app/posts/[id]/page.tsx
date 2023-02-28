import styles from '../../page.module.css'
interface Params {
  params: {
    id:number
  }
}
export default function Post({params}:Params) {
  const {id} = params
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        This post is {id}
      </div>
    </main>
  )
}