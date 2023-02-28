import Link from "next/link"

import styles from './Header.module.css'
const links = [
  {
    label:"Home",
    route:'/'   
  },
  {
      label:'About',
      route:'/about'
  },
  {
    label:'Posts',
    route:'/posts'
}
]
export default function Header() {
  return (
    <header className={styles.header}>
    <nav>
      <ul>
        {
          links.map(({label,route}) => (
            <li key={route}>
              <Link href={route} className={styles.link}>{label}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
  )
}
