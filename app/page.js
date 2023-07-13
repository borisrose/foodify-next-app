import Image from 'next/image'
import styles from './home.module.scss'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Link from 'next/link';
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

export default function Home() {
  return (
    <main className={styles.container}>
        <ul>
          <li><Link className={styles.link} href={'/recipes'}> Les Recettes </Link></li>
        </ul>
    </main>
  )
}
